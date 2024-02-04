import useLearningCenterLogic from "@/hooks/components/learning-center/useLearningCenterLogic";
import { SelectChangeEvent, Paper } from "@mui/material";
import React, { useMemo, useState } from "react";
import LearningCenterForm from "@/components/pages/learning-center/section/LearningCenterForm";
import {
  PaymentMethod,
  CreditCard,
  UpdateLearningCenterInput,
  LearningCenter,
  CreateLearningCenterInput,
} from "@/API";
import { useLoading } from "@/contexts/LoadingContext";
import { useMessageAlert } from "@/contexts/MessageAlertContext";
import useLearningCenter from "@/hooks/api/useLearningCenter";
import useAPIRequest from "@/hooks/utils/useAPIRequest";

export default function LearningCenterEditPane({
  paymentMethods,
  creditCards,
  editItem,
  onClose,
}: {
  paymentMethods: Array<PaymentMethod>;
  creditCards: Array<CreditCard>;
  editItem: LearningCenter | CreateLearningCenterInput;
  onClose: () => void;
}) {
  const { setLoading } = useLoading();
  const { setAlertMessage } = useMessageAlert();
  const { getUpdateRequest } = useAPIRequest();
  const { apiCreateLearningCenter, apiUpdateLearningCenter } =
    useLearningCenter();
  const { uploadImageAndGetURL, handleDeleteExistImage } =
    useLearningCenterLogic();

  const isEdit = useMemo(() => !!editItem.id, [editItem]);
  const [editLearningCenter, setEditLearningCenter] = useState<
    LearningCenter | CreateLearningCenterInput
  >(editItem);

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
      setAlertMessage({
        type: "success",
        message: "データを保存しました。",
      });
      onClose();
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

      const request: UpdateLearningCenterInput = getUpdateRequest({
        ...data,
      });

      const result = await apiUpdateLearningCenter(request);
      if (!result.isSuccess || !result.data) {
        setAlertMessage({
          type: "error",
          message: "データの更新に失敗しました。",
        });
        return;
      }
      setAlertMessage({
        type: "success",
        message: "データを更新しました。",
      });
      onClose();
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

  return (
    <Paper
      sx={{
        position: "fixed",
        top: 64,
        bottom: 16,
        right: 24,
        left: "30%",
        overflow: "auto",
      }}
      elevation={3}
    >
      <LearningCenterForm
        onSubmitUpdate={updateLearningCenter}
        onSubmitCreate={createLearningCenter}
        handlerFormChange={handlerFormChange}
        handleDeleteExistImage={handleDeleteExistImage}
        formData={editLearningCenter}
        isEdit={isEdit}
        paymentMethods={paymentMethods}
        creditCards={creditCards}
        onClose={onClose}
      />
    </Paper>
  );
}
