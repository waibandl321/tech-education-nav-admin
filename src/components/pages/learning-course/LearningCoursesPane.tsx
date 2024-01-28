import dayjs from "dayjs";
import {
  CreateLearningCenterCourseInput,
  UpdateLearningCenterCourseInput,
  DevelopmentTool,
  Framework,
  JobType,
  LearningCenter,
  LearningCenterCourse,
  ProgrammingLanguage,
} from "@/API";
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
import React, { useMemo, useRef, useState } from "react";
import LearningCourseEditPane from "./LearningCourseEditPane";
import { useLoading } from "@/contexts/LoadingContext";
import { useMessageAlert } from "@/contexts/MessageAlertContext";
import useCSV from "@/hooks/utils/useCSV";
import useLearningCourse from "@/hooks/api/useLearningCourse";
import { useRouter } from "next/router";

export default function LearningCoursesPane({
  centers,
  courses,
  languages,
  frameworks,
  developmentTools,
  jobTypes,
}: {
  centers: Array<LearningCenter>;
  courses: Array<LearningCenterCourse>;
  languages: Array<ProgrammingLanguage>;
  frameworks: Array<Framework>;
  developmentTools: Array<DevelopmentTool>;
  jobTypes: Array<JobType>;
}) {
  // state
  const [selectedLearningCenter, setSelectedLearningCenter] =
    useState<LearningCenter | null>(null);
  // hooks
  const router = useRouter();
  const { setLoading } = useLoading();
  const { setAlertMessage } = useMessageAlert();
  const { getImportedCSV, convertStringToCSV, download } = useCSV();
  const {
    apiGetLearningCourseById,
    apiCreateLearningCourse,
    apiUpdateLearningCourse,
    apiDeleteLearningCourse,
  } = useLearningCourse();
  const { headers } = useLearningCourseLogic();
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [editItem, setEditItem] = useState<LearningCenterCourse | null>(null);
  // input fileのテンプレート参照
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 選択中のLearningCenterIdにマッチするコース一覧を返す
  const computedItems: Array<LearningCenterCourse> = useMemo(() => {
    return courses.filter(
      (v) => v.learningCenterId === selectedLearningCenter?.id
    );
  }, [selectedLearningCenter, courses]);

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
      router.reload();
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
      router.reload();
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
      router.reload();
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

  // コース新規作成
  const handleAddCourse = () => {
    setEditItem({
      __typename: "LearningCenterCourse",
      id: "",
      learningCenterId: selectedLearningCenter?.id ?? "",
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

  // 編集: 詳細データを取得する
  const handleEditItem = async (item: LearningCenterCourse) => {
    setIsOpenEdit(false);
    setLoading(true);
    try {
      const result = await apiGetLearningCourseById(item.id);
      if (result.isSuccess && result.data) {
        setEditItem(result.data);
        setIsOpenEdit(true);
      }
    } catch (error) {
      setAlertMessage({
        type: "error",
        message: "データの取得に失敗しました。",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="xl" sx={{ py: 2 }}>
      <Box>
        <Autocomplete
          id="learningCenterSelect"
          size="small"
          value={selectedLearningCenter}
          options={centers}
          noOptionsText="データがありません"
          getOptionLabel={(option) => option.name ?? ""}
          getOptionKey={(option) => option.id}
          onChange={(event: any, newValue: LearningCenter | null) => {
            setSelectedLearningCenter(newValue);
          }}
          isOptionEqualToValue={(option, value) => option.id === value.id}
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
              selectedLearningCenter={selectedLearningCenter}
              key={editItem?.id}
              languages={languages}
              frameworks={frameworks}
              developmentTools={developmentTools}
              jobTypes={jobTypes}
            />
          )}
        </Box>
      )}
    </Container>
  );
}
