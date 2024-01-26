import { LearningCenter, LearningCenterCourse } from "@/API";
import TextareaComponent from "@/components/common/parts/TextareaComponent";
import useLearningCourseLogic from "@/hooks/components/learning-course/useLearningCourseLogic";
import {
  Box,
  Container,
  Paper,
  SelectChangeEvent,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Button,
  Grid,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  Autocomplete,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

export default function LearningCoursesPane() {
  // hooks
  const {
    headers,
    selectedLearningCenter,
    setSelectedLearningCenter,
    computedItems,
    learningCenters,
    fetchData,
    updateLearningCourse,
    deleteLearningCourse,
    habdlerBulkDelete,
    createLearningCourse,
    importCourseListCSV,
    exportCSV,
  } = useLearningCourseLogic();
  const [isOpenEditUserDialog, setIsOpenEditUserDialog] = useState(false);
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
    setIsOpenEditUserDialog(true);
  };

  // Formの更新
  const handlerFormChange = (
    event:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent
  ) => {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement;
    const { name, value } = target;
    // 現在のeditItemを基に新しいオブジェクトを作成し、特定のプロパティを更新
    setEditItem((prevEditItem) => {
      if (!prevEditItem) return null; // 既存のeditItemがない場合はnullを返す
      return { ...prevEditItem, [name]: value };
    });
  };

  // 保存
  const handleSaveItem = async () => {
    if (!editItem || !selectedLearningCenter) return;
    setIsOpenEditUserDialog(false);
    if (editItem?.id) {
      await updateLearningCourse(editItem);
      return;
    }
    // 新規作成
    const createRequest = {
      learningCenterId: selectedLearningCenter.id,
      courseName: editItem.courseName,
      courseURL: editItem.courseURL,
      couseDetail: editItem.couseDetail,
      isDeleted: false,
    };
    await createLearningCourse(createRequest);
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
    setIsOpenEditUserDialog(true);
  };

  const handleCloseEdit = () => {
    setIsOpenEditUserDialog(false);
    setEditItem(null);
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
        <Box sx={{ mt: 3 }}>
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
          <TableContainer component={Paper} sx={{ mt: 2 }} variant="outlined">
            <Table
              sx={{ overflow: "auto" }}
              aria-label="simple table"
              size="small"
            >
              <TableHead sx={{ backgroundColor: "#eee" }}>
                <TableRow>
                  {headers.map((item, index) => (
                    <TableCell key={index} sx={{ whiteSpace: "nowrap" }}>
                      {item.name}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {computedItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.courseName || ""}</TableCell>
                    <TableCell>{item.courseURL || ""}</TableCell>
                    <TableCell>{item.couseDetail}</TableCell>
                    <TableCell width={100}>
                      <Box display="flex" alignItems="center">
                        <Button
                          aria-label="save button"
                          color="primary"
                          onClick={() => handleEditItem(item)}
                        >
                          編集
                        </Button>
                        <Button
                          aria-label="delete button"
                          color="error"
                          onClick={() => deleteLearningCourse(item)}
                        >
                          削除
                        </Button>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
      <Dialog
        onClose={() => handleCloseEdit()}
        open={isOpenEditUserDialog}
        fullWidth
      >
        <DialogTitle display="flex" justifyContent="space-between">
          <Box flexGrow={1}></Box>
          <Box>
            <Button onClick={() => handleSaveItem()}>保存</Button>
            <Button onClick={() => handleCloseEdit()} color="inherit">
              キャンセル
            </Button>
          </Box>
        </DialogTitle>
        <DialogContent>
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
        </DialogContent>
      </Dialog>
    </Container>
  );
}
