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
  Qualification,
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
import useAPIRequest from "@/hooks/utils/useAPIRequest";

const initCreateLearningCourse: CreateLearningCenterCourseInput = {
  learningCenterId: "",
  courseName: "",
  courseURL: "",
  couseDetail: "",
  plans: [],
  isAvailableMoneyBack: false,
  moneyBackDetail: "",
  isAvailableSubsidy: false,
  subsidyMemo: "",
  isMadeToOrder: false,
  madeToOrderDetail: "",
  isJobIntroductionAvailable: false,
  jobIntroductionDetail: "",
  isJobHuntingSupport: false,
  jobHuntingSupportDetail: "",
  isJobHuntingGuarantee: false,
  jobHuntingGuaranteeDetail: "",
  purposes: [],
  jobTypes: [],
  programmingLanguages: [],
  frameworks: [],
  developmentTools: [],
  qualifications: [],
  attendanceType: null,
  locationPref: "",
  locationCity: "",
  benefitUsers: [],
  isDeleted: false,
};

export default function LearningCoursesPane({
  centers,
  courses,
  languages,
  frameworks,
  developmentTools,
  jobTypes,
  qualifications,
}: {
  centers: Array<LearningCenter>;
  courses: Array<LearningCenterCourse>;
  languages: Array<ProgrammingLanguage>;
  frameworks: Array<Framework>;
  developmentTools: Array<DevelopmentTool>;
  jobTypes: Array<JobType>;
  qualifications: Array<Qualification>;
}) {
  // state
  const [selectedLearningCenter, setSelectedLearningCenter] =
    useState<LearningCenter | null>(null);
  const [courseList, setCourseList] =
    useState<Array<LearningCenterCourse>>(courses);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [editItem, setEditItem] = useState<
    LearningCenterCourse | CreateLearningCenterCourseInput | null
  >(null);
  // hooks
  const router = useRouter();
  const { setLoading } = useLoading();
  const { setAlertMessage } = useMessageAlert();
  const { getDuplicateRequest } = useAPIRequest();
  const { getImportedCSV, convertStringToCSV, download } = useCSV();
  const {
    apiGetLearningCourses,
    apiGetLearningCourseById,
    apiCreateLearningCourse,
    apiUpdateLearningCourse,
    apiDeleteLearningCourse,
  } = useLearningCourse();
  const { headers } = useLearningCourseLogic();

  // input fileのテンプレート参照
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 選択中のLearningCenterIdにマッチするコース一覧を返す
  const computedItems: Array<LearningCenterCourse> = useMemo(() => {
    return courseList.filter(
      (v) => v.learningCenterId === selectedLearningCenter?.id
    );
  }, [selectedLearningCenter, courseList]);

  const getCourses = async () => {
    const result = await apiGetLearningCourses();
    setCourseList(result.data ?? []);
  };

  // 複製
  const duplicateLearningCourse = async (item: LearningCenterCourse) => {
    if (!selectedLearningCenter?.id)
      return setAlertMessage({
        type: "error",
        message: "スクールが選択されていません",
      });
    try {
      const req: CreateLearningCenterCourseInput = getDuplicateRequest({
        ...item,
        plans: [],
        courseName: `${item.courseName} Copy`,
        learningCenterId: selectedLearningCenter.id,
        isDeleted: false,
      });
      const result = await apiCreateLearningCourse(req);
      if (!result.isSuccess) {
        setAlertMessage({
          type: "error",
          message: "コースの複製に失敗しました。",
        });
        return;
      }
      setAlertMessage({
        type: "success",
        message: "データを複製しました。",
      });
      await getCourses();
    } catch (error) {
      setAlertMessage({
        type: "error",
        message: "コースの複製に失敗しました。",
      });
    }
  };

  // 削除
  const deleteLearningCourse = async (item: LearningCenterCourse) => {
    setLoading(true);
    try {
      await apiDeleteLearningCourse(item);
      await getCourses();
    } catch (error) {
      console.error(error);
      setAlertMessage({
        type: "error",
        message: "データの削除に失敗しました。",
      });
    } finally {
      setCourseList(() => courseList.filter((v) => v.id !== item.id));
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
    // const data = new CreateLearningCenterCourse({
    //   learningCenterId: selectedLearningCenter?.id ?? "",
    // });
    setEditItem(initCreateLearningCourse);
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
    setEditItem(null);
    setIsOpenEdit(false);
    setEditItem(item);
    setIsOpenEdit(true);
    // setEditItem(null);
    // setIsOpenEdit(false);
    // setLoading(true);
    // try {
    //   const result = await apiGetLearningCourseById(item.id);
    //   if (result.isSuccess && result.data) {
    //     setEditItem(result.data);
    //     setIsOpenEdit(true);
    //   }
    // } catch (error) {
    //   setAlertMessage({
    //     type: "error",
    //     message: "データの取得に失敗しました。",
    //   });
    // } finally {
    //   setLoading(false);
    // }
  };

  const handleClose = async () => {
    setIsOpenEdit(false);
    await getCourses();
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
                        color="success"
                        onClick={(e) => {
                          e.stopPropagation();
                          duplicateLearningCourse(item);
                        }}
                      >
                        複製
                      </Button>
                      <Button
                        color="error"
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteLearningCourse(item);
                        }}
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
          {editItem && isOpenEdit && (
            <LearningCourseEditPane
              onClose={handleClose}
              editItem={editItem}
              selectedLearningCenter={selectedLearningCenter}
              key={editItem?.id}
              languages={languages}
              frameworks={frameworks}
              developmentTools={developmentTools}
              jobTypes={jobTypes}
              qualifications={qualifications}
            />
          )}
        </Box>
      )}
    </Container>
  );
}
