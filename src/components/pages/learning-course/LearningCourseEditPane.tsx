import {
  LearningCenterCourse,
  Purpose,
  CreateLearningCenterCourseInput,
  UpdateLearningCenterCourseInput,
  LearningCenter,
  ProgrammingLanguage,
  Framework,
  DevelopmentTool,
  JobType,
  AttendanceType,
} from "@/API";
import TextareaComponent from "@/components/common/parts/TextareaComponent";
import {
  AttendanceTypeLabels,
  EspeciallyAudienceLabels,
  PaymentOptionLabels,
  PurposeLabels,
} from "@/const";
import { useLoading } from "@/contexts/LoadingContext";
import { useMessageAlert } from "@/contexts/MessageAlertContext";
import useLearningCourse from "@/hooks/api/useLearningCourse";
import useAPIRequest from "@/hooks/utils/useAPIRequest";
import { useFormOptions } from "@/hooks/utils/useFormOptions";
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
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function LearningCourseEditPane({
  editItem: initialEditItem,
  onClose,
  selectedLearningCenter,
  languages,
  frameworks,
  developmentTools,
  jobTypes,
}: {
  editItem: LearningCenterCourse | null;
  onClose: () => void;
  selectedLearningCenter: LearningCenter;
  languages: Array<ProgrammingLanguage>;
  frameworks: Array<Framework>;
  developmentTools: Array<DevelopmentTool>;
  jobTypes: Array<JobType>;
}) {
  // hooks
  const router = useRouter();
  const { setLoading } = useLoading();
  const { setAlertMessage } = useMessageAlert();
  const { apiCreateLearningCourse, apiUpdateLearningCourse } =
    useLearningCourse();
  const { getUpdateRequest } = useAPIRequest();
  const { prefectures } = useFormOptions();
  const [editItem, setEditItem] = useState<LearningCenterCourse | null>(
    initialEditItem
  );

  // Formの更新
  const handlerFormChange = (
    event:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<
          | (Purpose | null)[]
          | (string | null)[]
          | (AttendanceType | null)
          | string
        >
  ) => {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement;
    const { name, value } = target;
    setEditItem((prevEditItem) => {
      if (!prevEditItem) return null; // 既存のeditItemがない場合はnullを返す
      return { ...prevEditItem, [name]: value };
    });
  };

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
      setAlertMessage({
        type: "success",
        message: "データを保存しました。",
      });
    } catch (error) {
      console.error(error);
      setAlertMessage({
        type: "error",
        message: "データの作成に失敗しました。",
      });
    } finally {
      router.reload();
      setLoading(false);
    }
  };

  // 更新
  const updateLearningCourse = async (data: LearningCenterCourse) => {
    setLoading(true);
    try {
      const request: UpdateLearningCenterCourseInput = getUpdateRequest({
        ...data,
      });
      const result = await apiUpdateLearningCourse(request);
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
    } catch (error) {
      console.error(error);
      setAlertMessage({
        type: "error",
        message: "データの更新に失敗しました。",
      });
    } finally {
      router.reload();
      setLoading(false);
    }
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
        top: 64,
        bottom: 16,
        right: 24,
        left: "30%",
        overflow: "auto",
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
            placeholder="コース詳細"
          />
          <Box sx={{ my: 2 }}>
            <TextField
              label="受講期間"
              type="number"
              name="duration"
              size="small"
              value={editItem?.duration || ""}
              onChange={(event) => handlerFormChange(event)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">ヶ月</InputAdornment>
                ),
              }}
            />
          </Box>
          <Box sx={{ my: 2 }}>
            <TextField
              label="料金"
              type="number"
              name="price"
              size="small"
              value={editItem?.price || ""}
              onChange={(event) => handlerFormChange(event)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">円</InputAdornment>
                ),
              }}
            />
          </Box>
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
          <Box sx={{ my: 2 }}>
            <FormControl>
              <InputLabel id="select-purposes-label">受講目的</InputLabel>
              <Select
                labelId="select-purposes-label"
                id="select-purposes"
                name="purposes"
                value={editItem?.purposes ?? []}
                onChange={(event) => handlerFormChange(event)}
                input={<OutlinedInput sx={{ width: 300 }} label="受講目的" />}
                multiple
              >
                {Object.entries(PurposeLabels).map(([key, purpose]) => (
                  <MenuItem key={key} value={purpose.value}>
                    {purpose.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ my: 2 }}>
            <FormControl>
              <InputLabel id="select-job-types-label">目指す職種</InputLabel>
              <Select
                labelId="select-job-types-label"
                id="select-job-types"
                name="jobTypes"
                value={editItem?.jobTypes ?? []}
                onChange={(event) => handlerFormChange(event)}
                input={<OutlinedInput sx={{ width: 300 }} label="目指す職種" />}
                multiple
              >
                {jobTypes.map((job) => (
                  <MenuItem key={job.id} value={job.id}>
                    {job.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ my: 2 }}>
            <FormControl>
              <InputLabel id="select-languages">
                学べるプログラミング言語
              </InputLabel>
              <Select
                labelId="select-languages"
                id="select-languages"
                name="programmingLanguages"
                value={editItem?.programmingLanguages ?? []}
                onChange={(event) => handlerFormChange(event)}
                input={
                  <OutlinedInput
                    sx={{ width: 300 }}
                    label="学べるプログラミング言語"
                  />
                }
                multiple
              >
                {languages.map((language) => (
                  <MenuItem key={language.id} value={language.id}>
                    {language.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ my: 2 }}>
            <FormControl>
              <InputLabel id="select-frameworks">
                学べるフレームワーク
              </InputLabel>
              <Select
                labelId="select-frameworks"
                id="select-frameworks"
                name="frameworks"
                value={editItem?.frameworks ?? []}
                onChange={(event) => handlerFormChange(event)}
                input={
                  <OutlinedInput
                    sx={{ width: 300 }}
                    label="学べるフレームワーク"
                  />
                }
                multiple
              >
                {frameworks.map((framework) => (
                  <MenuItem key={framework.id} value={framework.id}>
                    {framework.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ my: 2 }}>
            <FormControl>
              <InputLabel id="select-development-tools">開発ツール</InputLabel>
              <Select
                labelId="select-development-tools"
                id="select-development-tools"
                name="developmentTools"
                value={editItem?.developmentTools ?? []}
                onChange={(event) => handlerFormChange(event)}
                input={<OutlinedInput sx={{ width: 300 }} label="開発ツール" />}
                multiple
              >
                {developmentTools.map((framework) => (
                  <MenuItem key={framework.id} value={framework.id}>
                    {framework.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ my: 2 }}>
            <FormControl>
              <InputLabel id="select-payment-options">支払い方法</InputLabel>
              <Select
                labelId="select-payment-options"
                id="select-payment-options"
                name="paymentOptions"
                value={editItem?.paymentOptions ?? []}
                onChange={(event) => handlerFormChange(event)}
                input={<OutlinedInput sx={{ width: 300 }} label="支払い方法" />}
                multiple
              >
                {Object.entries(PaymentOptionLabels).map(([key, option]) => (
                  <MenuItem key={key} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ my: 2 }}>
            <FormControl>
              <InputLabel id="select-attendance-type">受講スタイル</InputLabel>
              <Select
                labelId="select-attendance-type"
                id="select-attendance-type"
                name="attendanceType"
                value={editItem?.attendanceType ?? []}
                onChange={(event) => handlerFormChange(event)}
                input={
                  <OutlinedInput sx={{ width: 300 }} label="受講スタイル" />
                }
              >
                {Object.entries(AttendanceTypeLabels).map(([key, option]) => (
                  <MenuItem key={key} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ my: 2 }}>
            <FormControl>
              <InputLabel id="select-location-pref">
                場所（県、エリア検索用）
              </InputLabel>
              <Select
                labelId="select-location-pref"
                id="select-location-pref"
                name="locationPref"
                value={editItem?.locationPref ?? ""}
                onChange={(event) => handlerFormChange(event)}
                input={
                  <OutlinedInput
                    sx={{ width: 300 }}
                    label="場所（県、エリア検索用）"
                  />
                }
              >
                {prefectures.map((p) => (
                  <MenuItem key={p.key} value={p.key}>
                    {p.value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel id="select-location-city">
                場所（市区町村、エリア検索用）
              </InputLabel>
              <Select
                labelId="select-location-city"
                id="select-location-city"
                name="locationCity"
                value={editItem?.locationCity ?? ""}
                onChange={(event) => handlerFormChange(event)}
                input={
                  <OutlinedInput
                    sx={{ width: 300 }}
                    label="場所（市区町村、エリア検索用）"
                  />
                }
              >
                {/* TODO: 都道府県に一致する市町村区を取得して表示させる */}
                {/* {[].map((p) => (
                  <MenuItem key={p.key} value={p.key}>
                    {p.value}
                  </MenuItem>
                ))} */}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ my: 2 }}>
            <FormControl>
              <InputLabel id="select-especially-audiences">
                特別な受講対象者
              </InputLabel>
              <Select
                labelId="select-especially-audiences"
                id="select-especially-audiences"
                name="especiallyAudiences"
                value={editItem?.especiallyAudiences ?? []}
                onChange={(event) => handlerFormChange(event)}
                input={
                  <OutlinedInput sx={{ width: 300 }} label="特別な受講対象者" />
                }
              >
                {Object.entries(EspeciallyAudienceLabels).map(([key, item]) => (
                  <MenuItem key={key} value={item.value}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
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
