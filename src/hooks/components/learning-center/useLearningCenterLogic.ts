import {
  CreateLearningCenterInput,
  LearningCenter,
  UpdateLearningCenterInput,
} from "@/API";
import { useLoading } from "@/contexts/LoadingContext";
import { useMessageAlert } from "@/contexts/MessageAlertContext";
import useLearningCenter from "@/hooks/api/useLearningCenter";
import useStorage from "@/hooks/api/useStorage";
import { useRouter } from "next/router";
import { useState } from "react";
import useImageUpload from "../auth/useImageUpload";

const initCreateLearningCenter: CreateLearningCenterInput = {
  name: "",
  memo: "",
  operatingCompany: "",
  headquartersLocation: "",
  websiteURL: "",
  logoImageURL: undefined,
  establishmentYear: 2000,
  representative: "",
};

export default function useLearningCenterLogic() {
  const { setLoading } = useLoading();
  const { setAlertMessage } = useMessageAlert();
  const router = useRouter();
  // state
  // input file
  const [inputFile, setInputFile] = useState<File | null>(null);
  const [inputFilePreview, setInputFilePreview] = useState("");
  // 作成
  const [createData, setCreateData] = useState<CreateLearningCenterInput>({
    ...initCreateLearningCenter,
  });
  // 編集
  const [editLearningCenter, setEditLearningCenter] =
    useState<UpdateLearningCenterInput>({} as UpdateLearningCenterInput);
  // 一覧
  const [learningCenters, setLearningCenters] = useState<Array<LearningCenter>>(
    []
  );
  const { compressImage, extractFilename } = useImageUpload();
  const {
    apiUpdateLearningCenter,
    apiGetLearningCenterById,
    apiGetLearningCenters,
    apiCreateLearningCenter,
    apiDeleteLearningCenter,
  } = useLearningCenter();
  const { apiGetFileUrl, apiUploadFile, apiRemoveFile } = useStorage();

  // state初期化
  const initEditState = () => {
    setEditLearningCenter({} as UpdateLearningCenterInput);
    setInputFile(null);
    setInputFilePreview("");
  };

  // state初期化
  const initCreateState = () => {
    setCreateData({ ...initCreateLearningCenter });
    setInputFile(null);
    setInputFilePreview("");
  };

  // 画像ファイル形式のチェック
  const isImageFile = (selectedFile: File | null): boolean => {
    if (!selectedFile) return false;
    const imageTypes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/bmp",
      "image/svg+xml",
    ];
    return imageTypes.includes(selectedFile.type);
  };

  // 画像プレビューの作成
  const generateImagePreview = async (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setInputFilePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  // input fileのchangeイベントを検知し、画像を圧縮する
  const changeFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (!event.target.files) return;
      const targetFile = event.target.files[0];
      const compressedFile = await compressImage(targetFile, 400);
      if (!isImageFile(compressedFile)) {
        setAlertMessage({
          type: "error",
          message: "アップロードされたファイルが不適切です。",
        });
        return;
      }
      setInputFile(compressedFile);
      generateImagePreview(compressedFile);
    } catch (error) {
      setAlertMessage({
        type: "error",
        message: "エラーが発生しました。",
      });
    }
  };

  // 既存の画像を削除する
  const handleDeleteExistImage = async () => {
    setLoading(true);
    try {
      const fileName = extractFilename(editLearningCenter.logoImageURL ?? "");
      if (!fileName) return;
      const deleteResult = await apiRemoveFile(fileName);
      if (deleteResult.isSuccess && deleteResult.data) {
        // storageからデータを消去する
        setEditLearningCenter((prevLearningCenter) => ({
          ...prevLearningCenter,
          logoImageURL: "",
        }));
      }
    } catch (error) {
      console.log(error);
      setAlertMessage({
        type: "error",
        message: "画像の削除に失敗しました。",
      });
    } finally {
      setLoading(false);
    }
  };

  // 編集対象のデータを取得
  const getEditData = async () => {
    setLoading(true);
    try {
      if (router.query.id) {
        const result = await apiGetLearningCenterById(router.query.id);
        if (result.data) {
          setEditLearningCenter(result.data);
        }
      }
    } catch (error) {
      console.error(error);
      setAlertMessage({
        type: "error",
        message: "データの取得に失敗しました。",
      });
    } finally {
      setLoading(false);
    }
  };

  // 一覧取得
  const fetchLearningCenters = async () => {
    setLoading(true);
    try {
      const result = await apiGetLearningCenters();
      setLearningCenters(result.data ?? []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // データ削除
  const deleteLearningCenter = async (item: LearningCenter) => {
    setLoading(true);
    try {
      const result = await apiDeleteLearningCenter(item);
      if (result.isSuccess) {
        await fetchLearningCenters();
        setAlertMessage({
          type: "success",
          message: `${item.name}を削除しました。`,
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // 画像をS3にアップロードしてURLを取得する
  const uploadImageAndGetURL = async (file?: File | null) => {
    // アップロード
    if (!file) return null;
    const uploadResult = await apiUploadFile(file);
    if (
      !uploadResult.isSuccess ||
      !uploadResult.data ||
      !uploadResult.data.key
    ) {
      setAlertMessage({
        type: "error",
        message: "ファイルのアップロードに失敗しました。",
      });
      return null;
    }

    // アップロードURLを取得する
    const getURLResult = await apiGetFileUrl(uploadResult.data!.key);
    if (getURLResult.data && getURLResult.data.url) {
      return String(getURLResult.data.url);
    }
    return null;
  };

  // 新規作成
  const createLearningCenter = async (
    data: CreateLearningCenterInput,
    file?: File | null
  ) => {
    setLoading(true);
    try {
      // 画像アップロード
      const uploadImageURL = await uploadImageAndGetURL(file);
      data.logoImageURL = uploadImageURL;
      // データ作成
      const result = await apiCreateLearningCenter(data);
      if (!result.isSuccess || !result.data) {
        setAlertMessage({
          type: "error",
          message: "データの作成に失敗しました。",
        });
      }
      initCreateState();
      router.push("/learning-center");
      setAlertMessage({
        type: "success",
        message: "データを保存しました。",
      });
    } catch (error) {
      console.log(error);
      setAlertMessage({
        type: "error",
        message: "データの作成に失敗しました。",
      });
    } finally {
      setLoading(false);
    }
  };

  // 更新
  const updateLearningCenter = async (
    data: UpdateLearningCenterInput,
    file?: File | null
  ) => {
    setLoading(true);
    try {
      const uploadImageURL = await uploadImageAndGetURL(file);
      data.logoImageURL = uploadImageURL;

      const request: UpdateLearningCenterInput = {
        id: data.id,
        name: data.name,
        memo: data.memo,
        operatingCompany: data.operatingCompany,
        headquartersLocation: data.headquartersLocation,
        websiteURL: data.websiteURL,
        logoImageURL: data.logoImageURL,
        establishmentYear: data.establishmentYear,
        representative: data.representative,
      };

      const result = await apiUpdateLearningCenter(request);
      if (!result.isSuccess || !result.data) {
        setAlertMessage({
          type: "error",
          message: "データの更新に失敗しました。",
        });
        return;
      }
      initEditState();
      router.push("/learning-center");
      setAlertMessage({
        type: "success",
        message: "データを更新しました。",
      });
    } catch (error) {
      console.error(error);
      setAlertMessage({
        type: "error",
        message: "データの更新に失敗しました。",
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    initCreateLearningCenter,
    learningCenters,
    fetchLearningCenters,
    deleteLearningCenter,
    createLearningCenter,
    changeFile,
    inputFile,
    setInputFile,
    inputFilePreview,
    setInputFilePreview,
    handleDeleteExistImage,
    createData,
    setCreateData,
    editLearningCenter,
    setEditLearningCenter,
    getEditData,
    updateLearningCenter,
  };
}