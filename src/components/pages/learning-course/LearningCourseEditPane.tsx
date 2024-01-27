import { LearningCenterCourse } from "@/API";
import TextareaComponent from "@/components/common/parts/TextareaComponent";
import useLearningCourseLogic from "@/hooks/components/learning-course/useLearningCourseLogic";
import {
  Box,
  Button,
  TextField,
  Card,
  CardContent,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Paper,
} from "@mui/material";
import React, { useState } from "react";

export default function LearningCourseEditPane({
  editItem: initialEditItem,
  onClose,
}: {
  editItem: LearningCenterCourse | null;
  onClose: () => void;
}) {
  // hooks
  const { selectedLearningCenter, updateLearningCourse, createLearningCourse } =
    useLearningCourseLogic();
  // const [isOpenEditUserDialog, setIsOpenEditUserDialog] = useState(false);
  const [editItem, setEditItem] = useState<LearningCenterCourse | null>(
    initialEditItem
  );

  // Formの更新
  const handlerFormChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement;
    const { name, value } = target;
    setEditItem((prevEditItem) => {
      if (!prevEditItem) return null; // 既存のeditItemがない場合はnullを返す
      return { ...prevEditItem, [name]: value };
    });
  };

  // 保存
  const handleSaveItem = async () => {
    if (!editItem || !selectedLearningCenter) return;
    onClose();
    if (editItem?.id) {
      await updateLearningCourse(editItem);
      return;
    }
    // 新規作成
    const createRequest = {
      ...editItem,
      learningCenterId: selectedLearningCenter.id,
      isDeleted: false,
    };
    await createLearningCourse(createRequest);
  };

  const handleCloseEdit = () => {
    onClose();
    setEditItem(null); // 編集中のアイテムをクリア
  };

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 16,
        right: 24,
        overflow: "auto",
        top: "10%",
      }}
      elevation={3}
    >
      <Card sx={{ pb: 4 }}>
        <CardContent>
          <Box>
            <Button onClick={() => handleSaveItem()}>保存</Button>
            <Button onClick={() => handleCloseEdit()} color="inherit">
              キャンセル
            </Button>
          </Box>
          <TextField
            onChange={(event) => handlerFormChange(event)}
            value={editItem?.courseName || ""}
            name="courseName"
            label="コース名"
            size="small"
            fullWidth
            sx={{ mt: 2 }}
          />
          <TextField
            onChange={(event) => handlerFormChange(event)}
            value={editItem?.courseURL || ""}
            name="courseURL"
            size="small"
            label="URL"
            fullWidth
            sx={{ my: 2 }}
          />
          <TextareaComponent
            onInputChange={(event) => handlerFormChange(event)}
            inputValue={editItem?.couseDetail ?? ""}
            name="couseDetail"
            placeholder="詳細"
          />
          <TextField
            label="受講期間（単位: ヶ月）"
            type="number"
            name="duration"
            value={editItem?.duration || ""}
            onChange={(event) => handlerFormChange(event)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">ヶ月</InputAdornment>
              ),
            }}
            sx={{ my: 2 }}
          />
          <TextField
            label="料金"
            type="number"
            name="price"
            value={editItem?.price || ""}
            onChange={(event) => handlerFormChange(event)}
            InputProps={{
              endAdornment: <InputAdornment position="end">円</InputAdornment>,
            }}
            sx={{ my: 2 }}
          />
          <Box>
            <FormControlLabel
              control={
                <Checkbox
                  name="isAvailableMoneyBack"
                  value={editItem?.isAvailableMoneyBack || false}
                />
              }
              label="返金保証の有無"
            />
            <TextareaComponent
              onInputChange={(event) => handlerFormChange(event)}
              inputValue={editItem?.moneyBackDetail ?? ""}
              name="moneyBackDetail"
              placeholder="返金保証の有無 詳細"
            />
          </Box>
          <Box>
            <FormControlLabel
              control={
                <Checkbox
                  name="isAvailableSubsidy"
                  value={editItem?.isAvailableSubsidy || false}
                />
              }
              label="補助金の有無"
            />
            <TextareaComponent
              onInputChange={(event) => handlerFormChange(event)}
              inputValue={editItem?.subsidyMemo ?? ""}
              name="subsidyMemo"
              placeholder="補助金の有無 詳細"
            />
          </Box>
          <Box>
            <FormControlLabel
              control={
                <Checkbox name="onSale" value={editItem?.onSale || false} />
              }
              label="キャンペーン実施中（クーポン/セールなど）"
            />
            <TextareaComponent
              onInputChange={(event) => handlerFormChange(event)}
              inputValue={editItem?.saleMemo ?? ""}
              name="saleMemo"
              placeholder="キャンペーン詳細"
            />
          </Box>
          <Box>
            <FormControlLabel
              control={
                <Checkbox
                  name="isMadeToOrder"
                  value={editItem?.isMadeToOrder || false}
                />
              }
              label="オーダーメイドカリキュラムの有無"
            />
          </Box>
        </CardContent>
      </Card>
    </Paper>
  );
}
