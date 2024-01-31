import dayjs from "dayjs";
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
import useCSV from "@/hooks/utils/useCSV";

const initCreateLearningCenter: CreateLearningCenterInput = {
  name: "",
  memo: "",
  operatingCompany: "",
  headquartersLocation: "",
  websiteURL: "",
  logoImageURL: undefined,
  establishmentYear: 2000,
  representative: "",
  paymentOptions: null,
  creditCards: null,
  cancelPolicy: "",
  isDeleted: false,
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
  const { getImportedCSV, convertStringToCSV, download } = useCSV();
  const {
    apiUpdateLearningCenter,
    apiGetLearningCenterById,
    apiGetLearningCenters,
    apiCreateLearningCenter,
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

  const headers = [
    { key: "admin", name: "管理" },
    { key: "logoImageURL", name: "ロゴ" },
    { key: "name", name: "スクール名" },
    { key: "memo", name: "スクール詳細情報" },
    { key: "operatingCompany", name: "運営会社" },
    { key: "headquartersLocation", name: "本社所在地" },
    { key: "websiteURL", name: "ホームページURL" },
    { key: "establishmentYear", name: "設立年" },
    { key: "representative", name: "代表者" },
  ];

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
      if (!event.target.files) {
        alert("ファイルを選択してください。");
        return;
      }
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

  // インポート登録
  const importLearningCenterCSV = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!event.target.files) {
      alert("ファイルを選択してください。");
      return;
    }
    setLoading(true);
    try {
      const file = event.target.files[0];
      const data = await getImportedCSV<CreateLearningCenterInput>(file);

      for await (const item of data) {
        // idがあれば更新、idがなければ新規登録
        if (item.id) {
          const req: UpdateLearningCenterInput = {
            ...item,
            id: item.id,
          };
          await apiUpdateLearningCenter(req);
        } else {
          const req: CreateLearningCenterInput = {
            ...item,
          };
          delete req.id;
          await apiCreateLearningCenter(req);
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      await fetchLearningCenters();
      setLoading(false);
    }
  };

  // エクスポート
  const exportCSV = async () => {
    // 'admin' キーを持つ要素を除去し、'id' キーを先頭に追加
    const nonAdminHeaders = headers.filter((header) => header.key !== "admin");
    const csvHeaders = [{ key: "id", name: "ID" }, ...nonAdminHeaders];

    // CSVのフィールドキーを準備
    const csvFieldKeys = csvHeaders.map((header) => header.key);

    // LearningCenter型のデータをCSV用に変換
    const csvData = learningCenters.map((item) =>
      csvFieldKeys.reduce((obj, key) => {
        obj[key] = item[key as keyof LearningCenter] ?? "";
        return obj;
      }, {} as Record<string, unknown>)
    );

    // CSV文字列に変換
    const csv = convertStringToCSV(csvFieldKeys, csvData);
    const fileName = `learning-center-list-${dayjs().valueOf()}.csv`;
    download(csv, fileName);
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

  return {
    initCreateLearningCenter,
    headers,
    learningCenters,
    fetchLearningCenters,
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
    uploadImageAndGetURL,
    importLearningCenterCSV,
    exportCSV,
  };
}
