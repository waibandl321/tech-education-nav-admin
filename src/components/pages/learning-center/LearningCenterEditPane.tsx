import useLearningCenterLogic from "@/hooks/components/learning-center/useLearningCenterLogic";
import { SelectChangeEvent, Container } from "@mui/material";
import React, { useEffect } from "react";
import LearningCenterForm from "@/components/pages/learning-center/section/LearningCenterForm";
import { useRouter } from "next/router";

export default function LearningCenterEditPane() {
  const router = useRouter();
  const {
    editLearningCenter,
    setEditLearningCenter,
    updateLearningCenter,
    getEditData,
    handleDeleteExistImage,
  } = useLearningCenterLogic();

  // Formの更新
  const handlerFormChange = (
    event: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent
  ) => {
    const target = event.target as HTMLInputElement | HTMLSelectElement;
    const { name, value } = target;
    setEditLearningCenter((prevLearningCenter) => ({
      ...prevLearningCenter,
      [name]: value,
    }));
  };

  useEffect(() => {
    // 編集対象のデータを取得
    getEditData();
  }, [router.query.id]);

  return (
    <Container sx={{ p: 4 }}>
      <LearningCenterForm
        onSubmitUpdate={updateLearningCenter}
        handlerFormChange={handlerFormChange}
        handleDeleteExistImage={handleDeleteExistImage}
        formData={editLearningCenter}
        isEdit={true}
      />
    </Container>
  );
}
