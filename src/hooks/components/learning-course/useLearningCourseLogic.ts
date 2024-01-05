import dayjs from "dayjs";
import {
  CreateLearningCenterCourseInput,
  LearningCenter,
  LearningCenterCourse,
  UpdateLearningCenterCourseInput,
} from "@/API";
import { useLoading } from "@/contexts/LoadingContext";
import { useMessageAlert } from "@/contexts/MessageAlertContext";
import useLearningCenter from "@/hooks/api/useLearningCenter";
import useLearningCourse from "@/hooks/api/useLearningCourse";
import useCSV from "@/hooks/utils/useCSV";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";

export default function useLearningCourseLogic() {
  // state
  const [learningCenters, setLearningCenters] = useState<Array<LearningCenter>>(
    []
  );
  const [selectedLearningCenter, setSelectedLearningCenter] =
    useState<LearningCenter | null>(null);
  const [learningCourses, setLearningCourses] = useState<
    Array<LearningCenterCourse>
  >([]);
  // hook
  const { setLoading } = useLoading();
  const { setAlertMessage } = useMessageAlert();
  const { getImportedCSV, convertStringToCSV, download } = useCSV();
  const router = useRouter();
  const { apiGetLearningCenters } = useLearningCenter();
  const {
    apiGetLearningCourses,
    apiCreateLearningCourse,
    apiUpdateLearningCourse,
    apiDeleteLearningCourse,
  } = useLearningCourse();

  const headers = [
    { key: "courseName", name: "コース名" },
    { key: "courseURL", name: "コースURL" },
    { key: "couseDetail", name: "コース詳細" },
    { key: "admin", name: "編集/削除" },
  ];

  // スクール一覧取得
  const fetchLearningCenters = async () => {
    try {
      const result = await apiGetLearningCenters();
      setLearningCenters(result.data ?? []);
    } catch (error) {
      console.error(error);
    }
  };

  // コース一覧取得
  const fetchLearningCouses = async () => {
    try {
      const result = await apiGetLearningCourses();
      setLearningCourses(result.data ?? []);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchData = async () => {
    try {
      await Promise.all([fetchLearningCenters(), fetchLearningCouses()]);
    } catch (error) {
      setLearningCenters([]);
      setLearningCourses([]);
    }
  };

  // 選択中のLearningCenterIdにマッチするコース一覧を返す
  const computedItems: Array<LearningCenterCourse> = useMemo(() => {
    return learningCourses.filter(
      (v) => v.learningCenterId === selectedLearningCenter?.id
    );
  }, [selectedLearningCenter, learningCourses]);

  // 新規作成
  const createLearningCourse = async (
    data: CreateLearningCenterCourseInput
  ) => {
    setLoading(true);
    try {
      const result = await apiCreateLearningCourse(data);
      if (!result.isSuccess) {
        setAlertMessage({
          type: "error",
          message: "データの作成に失敗しました。",
        });
        return;
      }
      router.push("/learning-courses");
      setAlertMessage({
        type: "success",
        message: "データを保存しました。",
      });
    } catch (error) {
      console.error(error);
      setAlertMessage({
        type: "error",
        message: "データの作成に失敗しました。",
      });
    } finally {
      await fetchData();
      setLoading(false);
    }
  };

  // 更新
  const updateLearningCourse = async (data: LearningCenterCourse) => {
    setLoading(true);
    try {
      const request: UpdateLearningCenterCourseInput = {
        id: data.id,
        learningCenterId: data.learningCenterId,
        courseName: data.courseName,
        courseURL: data.courseURL,
        couseDetail: data.couseDetail,
      };

      const result = await apiUpdateLearningCourse(request);
      console.log(result);

      if (!result.isSuccess || !result.data) {
        setAlertMessage({
          type: "error",
          message: "データの更新に失敗しました。",
        });
        return;
      }
      router.push("/learning-courses");
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
      await fetchData();
      setLoading(false);
    }
  };

  // 削除
  const deleteLearningCourse = async (item: LearningCenterCourse) => {
    setLoading(true);
    try {
      await apiDeleteLearningCourse(item);
    } catch (error) {
      console.error(error);
      setAlertMessage({
        type: "error",
        message: "データの削除に失敗しました。",
      });
    } finally {
      await fetchData();
      setLoading(false);
    }
  };

  // 一括削除
  const habdlerBulkDelete = async () => {
    setLoading(true);
    try {
      for await (const item of computedItems) {
        await apiDeleteLearningCourse(item);
      }
    } catch (error) {
      console.error(error);
    } finally {
      await fetchData();
      setLoading(false);
    }
  };

  // インポート
  const importCourseListCSV = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!event.target.files) {
      alert("ファイルを選択してください。");
      return;
    }
    if (!selectedLearningCenter) {
      alert("スクールを選択してください。");
      return;
    }
    setLoading(true);
    try {
      const file = event.target.files[0];
      const data = await getImportedCSV<CreateLearningCenterCourseInput>(file);
      for await (const item of data) {
        // idがあれば更新、idがなければ新規登録
        if (item.id) {
          const req: UpdateLearningCenterCourseInput = {
            ...item,
            id: item.id,
          };
          await apiUpdateLearningCourse(req);
        } else {
          const req: CreateLearningCenterCourseInput = {
            ...item,
            learningCenterId: selectedLearningCenter.id,
            isDeleted: false,
          };
          // NOTE: インポートの場合IDフィールドに空文字がセットされるため、削除する（idを削除しないとエラーになる）
          delete req.id;
          await apiCreateLearningCourse(req);
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      await fetchData();
      setLoading(false);
    }
  };

  // エクスポート
  const exportCSV = async () => {
    // 'admin' キーを持つ要素を除去し、'id' キーを先頭に追加
    const nonAdminHeaders = headers.filter((header) => header.key !== "admin");
    const csvHeaders = [
      { key: "id", name: "ID" },
      { key: "learningCenterId", name: "LearningCenterId" },
      ...nonAdminHeaders,
    ];
    // CSVのフィールドキーを準備
    const csvFieldKeys = csvHeaders.map((header) => header.key);
    // LearningCenter型のデータをCSV用に変換
    const csvData = computedItems.map((item) =>
      csvFieldKeys.reduce((obj, key) => {
        obj[key] = item[key as keyof LearningCenterCourse] ?? "";
        return obj;
      }, {} as Record<string, unknown>)
    );
    // CSV文字列に変換
    const csv = convertStringToCSV(csvFieldKeys, csvData);
    const fileName = `learning-course-list-${dayjs().valueOf()}.csv`;
    download(csv, fileName);
  };

  return {
    headers,
    learningCourses,
    setLearningCourses,
    selectedLearningCenter,
    setSelectedLearningCenter,
    fetchData,
    learningCenters,
    computedItems,
    createLearningCourse,
    updateLearningCourse,
    deleteLearningCourse,
    habdlerBulkDelete,
    importCourseListCSV,
    exportCSV,
  };
}
