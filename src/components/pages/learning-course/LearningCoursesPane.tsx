import dayjs from "dayjs";
import { CreateLearningCenterCourseInput, LearningCenterCourse } from "@/API";
import TextareaComponent from "@/components/common/parts/TextareaComponent";
import useLearningCourseLogic from "@/hooks/components/learning-course/useLearningCourseLogic";
import {
  Box,
  Container,
  MenuItem,
  Paper,
  Select,
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
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import useLearningCourse from "@/hooks/api/useLearningCourse";
import { useLoading } from "@/contexts/LoadingContext";
import useCSV from "@/hooks/utils/useCSV";

const headers = [
  { key: "courseName", name: "コース名" },
  { key: "courseURL", name: "コースURL" },
  { key: "couseDetail", name: "コース詳細" },
  { key: "admin", name: "編集/削除" },
];

export default function LearningCoursesPane() {
  // hooks
  const {
    selectedLearningCenter,
    setSelectedLearningCenter,
    computedItems,
    learningCenters,
    fetchData,
    updateLearningCourse,
    createLearningCourse,
  } = useLearningCourseLogic();
  const { apiCreateLearningCourse, apiDeleteLearningCourse } =
    useLearningCourse();
  const { setLoading } = useLoading();
  const { getImportedCSV, convertStringToCSV, download } = useCSV();
  const [isOpenEditUserDialog, setIsOpenEditUserDialog] = useState(false);
  const [editItem, setEditItem] = useState<LearningCenterCourse | null>(null);
  // input fileのテンプレート参照
  const fileInputRef = useRef<HTMLInputElement>(null);

  // スクールの選択状態の変更
  const handleChangeLearningCenter = async (
    event: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent
  ) => {
    const target = event.target as HTMLSelectElement;
    const { value } = target;
    setSelectedLearningCenter(value);
  };

  // コース新規作成
  const handleAddCourse = () => {
    setEditItem({
      __typename: "LearningCenterCourse",
      id: "",
      learningCenterId: selectedLearningCenter,
      courseName: "",
      courseURL: "",
      couseDetail: "",
      createdAt: "",
      updatedAt: "",
    });
    setIsOpenEditUserDialog(true);
  };

  // エクスポート
  const exportCSV = async () => {
    // 'admin' キーを持つ要素を除去し、'id' キーを先頭に追加
    const nonAdminHeaders = headers.filter((header) => header.key !== "admin");
    const csvHeaders = [{ key: "id", name: "ID" }, ...nonAdminHeaders];
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
    if (!editItem) return;
    setIsOpenEditUserDialog(false);
    if (editItem?.id) {
      await updateLearningCourse(editItem);
      return;
    }
    // 新規作成
    const createRequest = {
      learningCenterId: selectedLearningCenter,
      courseName: editItem.courseName,
      courseURL: editItem.courseURL,
      couseDetail: editItem.couseDetail,
    };
    await createLearningCourse(createRequest);
  };

  // インポート登録
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!event.target.files) return;
    setLoading(true);
    try {
      const file = event.target.files[0];
      const data = await getImportedCSV<CreateLearningCenterCourseInput>(file);
      for await (const item of data) {
        const req: CreateLearningCenterCourseInput = {
          learningCenterId: selectedLearningCenter,
          courseName: item.courseName,
          courseURL: item.courseURL,
        };
        await apiCreateLearningCourse(req);
      }
    } catch (error) {
      console.error(error);
    } finally {
      await fetchData();
      // input要素の値をクリアする
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      setLoading(false);
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

  // 削除
  const handleDeleteCourse = async (item: LearningCenterCourse) => {
    setLoading(true);
    try {
      await apiDeleteLearningCourse(item);
    } catch (error) {
      console.error(error);
    } finally {
      await fetchData();
      setLoading(false);
    }
  };

  useEffect(() => {
    // データ取得
    fetchData();
  }, []);

  return (
    <Container sx={{ px: 4, pt: 2 }}>
      <Box>
        <Select
          value={selectedLearningCenter || ""}
          onChange={handleChangeLearningCenter}
          id="establishmentYear"
          sx={{ mt: 1 }}
          fullWidth
          size="small"
        >
          {learningCenters.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
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
                          onClick={() => handleDeleteCourse(item)}
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
