import { CreateLearningCenterInput } from "@/API";
import useLearningCenterLogic from "@/hooks/components/learning-center/useLearningCenterLogic";
import { SelectChangeEvent, Container } from "@mui/material";
import React from "react";
import LearningCenterForm from "@/components/pages/learning-center/section/LearningCenterForm";

export default function LearningCenterEditPane() {
  const { createLearningCenter, createData, setCreateData } =
    useLearningCenterLogic();

  // Formの更新
  const handlerFormChange = (
    event: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent
  ) => {
    const target = event.target as HTMLInputElement | HTMLSelectElement;
    const { name, value } = target;
    setCreateData((prevLearningCenter) => ({
      ...prevLearningCenter,
      [name]: value,
    }));
  };

  // 作成
  const handlerCreate = async (
    data: CreateLearningCenterInput,
    file?: File | null
  ) => createLearningCenter(data, file);

  return (
    <Container sx={{ p: 4 }}>
      <LearningCenterForm
        onSubmitCreate={handlerCreate}
        handlerFormChange={handlerFormChange}
        formData={createData}
        isEdit={false}
      />
    </Container>
  );
}
