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
import { useRouter } from "next/router";
import { useMemo, useState } from "react";

export default function useLearningCourseLogic() {
  // state
  const [learningCenters, setLearningCenters] = useState<Array<LearningCenter>>(
    []
  );
  const [selectedLearningCenter, setSelectedLearningCenter] = useState("");
  const [learningCourses, setLearningCourses] = useState<
    Array<LearningCenterCourse>
  >([]);
  // hook
  const { setLoading } = useLoading();
  const { setAlertMessage } = useMessageAlert();
  const router = useRouter();
  const { apiGetLearningCenters } = useLearningCenter();
  const {
    apiGetLearningCourses,
    apiCreateLearningCourse,
    apiUpdateLearningCourse,
  } = useLearningCourse();

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
      (v) => v.learningCenterId === selectedLearningCenter
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
      setSelectedLearningCenter(data.learningCenterId ?? "");
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
      setSelectedLearningCenter(data.learningCenterId ?? "");
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

  return {
    selectedLearningCenter,
    setSelectedLearningCenter,
    fetchData,
    learningCenters,
    computedItems,
    createLearningCourse,
    updateLearningCourse,
    learningCourses,
    setLearningCourses,
  };
}
