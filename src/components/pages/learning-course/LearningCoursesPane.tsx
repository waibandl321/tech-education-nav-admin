import { LearningCenter, LearningCenterCourse } from "@/API";
import useLearningCourseLogic from "@/hooks/components/learning-course/useLearningCourseLogic";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  TextField,
  Autocomplete,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  ListItemButton,
  Divider,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import LearningCourseEditPane from "./LearningCourseEditPane";

export default function LearningCoursesPane() {
  // hooks
  const {
    headers,
    selectedLearningCenter,
    setSelectedLearningCenter,
    computedItems,
    learningCenters,
    fetchData,
    deleteLearningCourse,
    habdlerBulkDelete,
    importCourseListCSV,
    exportCSV,
  } = useLearningCourseLogic();
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [editItem, setEditItem] = useState<LearningCenterCourse | null>(null);
  // input fileのテンプレート参照
  const fileInputRef = useRef<HTMLInputElement>(null);

  // コース新規作成
  const handleAddCourse = () => {
    setEditItem({
      __typename: "LearningCenterCourse",
      id: "",
      learningCenterId: selectedLearningCenter?.id ?? "",
      courseName: "",
      courseURL: "",
      couseDetail: "",
      createdAt: "",
      updatedAt: "",
    });
    setIsOpenEdit(true);
  };

  // インポート登録
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    await importCourseListCSV(event);
    // input要素の値をクリアする
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // 編集
  const handleEditItem = (item: LearningCenterCourse) => {
    setEditItem(item);
    setIsOpenEdit(true);
  };

  useEffect(() => {
    // データ取得
    fetchData();
  }, []);

  return (
    <Container maxWidth="xl" sx={{ py: 2 }}>
      <Box>
        <Autocomplete
          id="learningCenterSelect"
          size="small"
          value={selectedLearningCenter}
          options={learningCenters}
          noOptionsText="データがありません"
          getOptionLabel={(option) => option.name ?? ""}
          getOptionKey={(option) => option.id}
          onChange={(event: any, newValue: LearningCenter | null) => {
            setSelectedLearningCenter(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="スクールを選択してください"
              InputProps={{
                ...params.InputProps,
              }}
            />
          )}
          fullWidth
          sx={{ backgroundColor: "#fff", borderRadius: 1 }}
        />
      </Box>
      {selectedLearningCenter && (
        <Box sx={{ mt: 3 }} position="relative">
          <Grid container justifyContent="space-between" alignItems="center">
            <Typography>コース一覧</Typography>
            <Box>
              <input
                type="file"
                onChange={handleFileChange}
                ref={fileInputRef}
              />
              <Button onClick={handleAddCourse}>新規作成</Button>
              <Button onClick={exportCSV}>エクスポート</Button>
              <Button onClick={habdlerBulkDelete} color="error">
                一括削除
              </Button>
            </Box>
          </Grid>
          <List>
            <Divider />
            {computedItems.map((item) => (
              <div key={item.id}>
                <ListItem dense sx={{ p: 0 }}>
                  <ListItemButton onClick={() => handleEditItem(item)}>
                    <ListItemText primary={`${item.courseName}: `} />
                    <ListItemSecondaryAction>
                      <Button
                        color="error"
                        onClick={() => deleteLearningCourse(item)}
                      >
                        削除
                      </Button>
                    </ListItemSecondaryAction>
                  </ListItemButton>
                </ListItem>
                <Divider />
              </div>
            ))}
          </List>
          {/* 編集用ダイアログ */}
          {isOpenEdit && (
            <LearningCourseEditPane
              onClose={() => setIsOpenEdit(false)}
              editItem={editItem}
              key={editItem?.id}
            />
          )}
        </Box>
      )}
    </Container>
  );
}
