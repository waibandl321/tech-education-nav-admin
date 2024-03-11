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
  CoursePlanInput,
  CoursePlan,
  Qualification,
  DevelopmentProduct,
  BenefitUserCategory,
  DevelopmentCategory,
} from "@/API";
import { v4 as uuidv4 } from "uuid";
import TextareaComponent from "@/components/common/parts/TextareaComponent";
import { AttendanceTypeLabels, PurposeLabels } from "@/const";
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
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Grid,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import DeleteOutline from "@mui/icons-material/DeleteOutline";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { sortBy } from "lodash";

const initPlan: CoursePlanInput = {
  // __typename: "CoursePlan",
  id: "",
  planName: "",
  planMemo: "",
  duration: 0,
  price: 0,
  splitPrice: 0,
};

export default function LearningCourseEditPane({
  editItem: initialEditItem,
  onClose,
  selectedLearningCenter,
  languages,
  frameworks,
  developmentTools,
  jobTypes,
  qualifications,
  developmentProducts,
  developmentCategories,
  benefitUserCategories,
}: {
  editItem: LearningCenterCourse | CreateLearningCenterCourseInput | null;
  onClose: () => void;
  selectedLearningCenter: LearningCenter;
  languages: Array<ProgrammingLanguage>;
  frameworks: Array<Framework>;
  developmentTools: Array<DevelopmentTool>;
  jobTypes: Array<JobType>;
  qualifications: Array<Qualification>;
  developmentProducts: Array<DevelopmentProduct>;
  developmentCategories: Array<DevelopmentCategory>;
  benefitUserCategories: Array<BenefitUserCategory>;
}) {
  // hooks
  const { setLoading } = useLoading();
  const { setAlertMessage } = useMessageAlert();
  const { apiCreateLearningCourse, apiUpdateLearningCourse } =
    useLearningCourse();
  const { getUpdateRequest } = useAPIRequest();
  const { prefectures } = useFormOptions();
  const [editItem, setEditItem] = useState<
    LearningCenterCourse | CreateLearningCenterCourseInput | null
  >(initialEditItem);
  // plansは別にstateを定義して管理し、保存時にマージする
  const [plans, setPlans] = useState<(CoursePlanInput | null)[]>([]);
  const [municipalityList, setMunicipalityList] = useState<
    Array<{ id: string; name: string }>
  >([]);

  /**
   * 市区町村の一覧取得
   * 土地総合情報システム - 国土交通省
   * @see https://www.land.mlit.go.jp/webland/api.html
   */
  const fetchMunicipalities = async () => {
    if (!editItem?.locationPref) return;
    try {
      const response = await fetch(
        `https://www.land.mlit.go.jp/webland/api/CitySearch?area=${editItem?.locationPref}`
      );
      if (!response.ok) {
        throw new Error(
          "ネットワーク応答が異常です 土地総合情報システム - 国土交通省"
        );
      }
      const result = await response.json();
      setMunicipalityList(result.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchMunicipalities();
  }, [editItem?.locationPref]);

  useEffect(() => {
    if (initialEditItem?.plans) {
      setPlans(initialEditItem?.plans);
    }
  }, []);

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
    const target = event.target;
    let value: any;
    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      // checkboxの考慮
      value = target.checked;
    } else {
      value = target.value;
    }
    const name = target.name;
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
      delete data.id;
      const result = await apiCreateLearningCourse({ ...data, plans: plans });
      if (!result.isSuccess) {
        setAlertMessage({
          type: "error",
          message: "データの作成に失敗しました。",
        });
        return;
      }
      setPlans([]);
      onClose();
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
      // router.reload();
      setLoading(false);
    }
  };

  // 更新
  const updateLearningCourse = async (data: LearningCenterCourse) => {
    setLoading(true);
    try {
      const request: UpdateLearningCenterCourseInput = getUpdateRequest({
        ...data,
        plans: plans.map((plan) => {
          // __typenameを削除する
          const { __typename, ...rest } = plan as CoursePlan;
          return rest;
        }),
      });
      console.log(request);

      const result = await apiUpdateLearningCourse(request);
      if (!result.isSuccess || !result.data) {
        setAlertMessage({
          type: "error",
          message: "データの更新に失敗しました。",
        });
        return;
      }
      setPlans([]);
      onClose();
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
      // router.reload();
      setLoading(false);
    }
  };

  // 保存
  const handleSaveItem = async () => {
    if (!editItem || !selectedLearningCenter) return;
    if (editItem?.id) {
      await updateLearningCourse(editItem as LearningCenterCourse);
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

  // プラン新規作成
  const handleCreatePlan = () => {
    setPlans((prevValue) => [
      ...prevValue,
      {
        ...initPlan,
        // DB保存前は擬似的に識別子（ID）を付与する
        id: uuidv4(),
      },
    ]);
  };

  // プラン入力変更ハンドラ
  const handlerPlansChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    item: CoursePlanInput | null
  ) => {
    if (!item) return;
    const target = event.target as HTMLInputElement | HTMLTextAreaElement;
    const { name, value } = target;
    setPlans((prevValue) => {
      // 更新されるべきプランの id が現在処理中のプランの id と一致するかどうかをチェック
      return prevValue.map((plan) =>
        plan?.id === item.id ? { ...plan, [name]: value } : plan
      );
    });
  };

  // プラン削除
  const handlerPlanDelete = (item: CoursePlanInput | null) => {
    setPlans((prevValue) => {
      // 更新されるべきプランの id が現在処理中のプランの id と一致するかどうかをチェック
      return prevValue.filter((plan) => plan?.id !== item?.id);
    });
  };

  const handleCloseEdit = () => {
    onClose();
    setEditItem(null); // 編集中のアイテムをクリア
  };

  const getSplitPrice = (price: number | undefined | null) => {
    return price ? Math.floor(price / 24) : 0;
  };

  return (
    <Paper
      sx={{
        position: "fixed",
        top: 0,
        bottom: 0,
        right: 0,
        left: "30%",
        overflow: "auto",
      }}
      elevation={3}
    >
      <Card>
        <CardContent>
          <Box display="flex" justifyContent="flex-end">
            <Button onClick={() => handleSaveItem()}>保存</Button>
            <Button onClick={() => handleCloseEdit()} color="inherit">
              キャンセル
            </Button>
          </Box>

          <Box sx={{ my: 2 }}>
            <TextField
              onChange={(event) => handlerFormChange(event)}
              value={editItem?.courseName || ""}
              name="courseName"
              label="コース名"
              size="small"
              fullWidth
              sx={{ mt: 2 }}
            />
          </Box>

          <Box sx={{ my: 2 }}>
            {editItem && editItem.courseURL && (
              <Link target="_blank" href={editItem.courseURL}>
                <OpenInNewIcon></OpenInNewIcon>
              </Link>
            )}
            <TextField
              onChange={(event) => handlerFormChange(event)}
              value={editItem?.courseURL || ""}
              name="courseURL"
              size="small"
              label="URL"
              fullWidth
              sx={{ my: 2 }}
            />
          </Box>
          <Box sx={{ my: 2 }}>
            <Typography>コース詳細</Typography>
            <TextareaComponent
              onInputChange={(event) => handlerFormChange(event)}
              inputValue={editItem?.couseDetail ?? ""}
              name="couseDetail"
              placeholder="コース詳細"
            />
          </Box>
          <Box sx={{ my: 2 }}>
            <Typography>料金プラン</Typography>
            <TableContainer component={Paper} variant="outlined">
              <Table size="small" stickyHeader sx={{ overflow: "auto" }}>
                <TableHead sx={{ whiteSpace: "nowrap" }}>
                  <TableRow>
                    {plans.length > 0 && (
                      <TableCell align="left">---</TableCell>
                    )}
                    <TableCell sx={{ minWidth: 150 }} align="left">
                      プラン名
                    </TableCell>
                    <TableCell sx={{ minWidth: 150 }} align="left">
                      受講期間（単位: ヶ月）
                    </TableCell>
                    <TableCell sx={{ minWidth: 150 }} align="left">
                      料金
                    </TableCell>
                    <TableCell sx={{ minWidth: 150 }} align="left">
                      24分割払い（月額）
                    </TableCell>
                    <TableCell sx={{ minWidth: 300 }} align="left">
                      プラン備考
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left" colSpan={6}>
                      <Button size="small" onClick={handleCreatePlan}>
                        + 新規追加
                      </Button>
                    </TableCell>
                  </TableRow>
                  {plans.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      {plans.length > 0 && (
                        <TableCell align="left">
                          <IconButton
                            color="error"
                            onClick={() => handlerPlanDelete(row)}
                          >
                            <DeleteOutline></DeleteOutline>
                          </IconButton>
                        </TableCell>
                      )}
                      <TableCell align="left">
                        <TextField
                          value={row?.planName || ""}
                          name="planName"
                          placeholder="プラン名"
                          size="small"
                          fullWidth
                          onChange={(e) => handlerPlansChange(e, row)}
                        />
                      </TableCell>
                      <TableCell align="left">
                        <TextField
                          label="受講期間"
                          type="number"
                          name="duration"
                          size="small"
                          value={row?.duration || ""}
                          onChange={(e) => handlerPlansChange(e, row)}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                ヶ月
                              </InputAdornment>
                            ),
                          }}
                        />
                      </TableCell>
                      <TableCell align="left">
                        <TextField
                          label="料金"
                          type="number"
                          name="price"
                          size="small"
                          value={row?.price || ""}
                          onChange={(e) => handlerPlansChange(e, row)}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">円</InputAdornment>
                            ),
                          }}
                        />
                      </TableCell>
                      <TableCell align="left">
                        <TextField
                          label="月額"
                          type="number"
                          name="splitPrice"
                          size="small"
                          value={row?.splitPrice}
                          helperText={getSplitPrice(row?.price)}
                          onChange={(e) => handlerPlansChange(e, row)}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">円</InputAdornment>
                            ),
                          }}
                        />
                      </TableCell>
                      <TableCell align="left">
                        <TextareaComponent
                          onInputChange={(e) => handlerPlansChange(e, row)}
                          inputValue={row?.planMemo ?? ""}
                          name="planMemo"
                          placeholder="備考"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Box sx={{ my: 2 }}>
            <FormControlLabel
              control={
                <Checkbox
                  name="isAvailableMoneyBack"
                  checked={editItem?.isAvailableMoneyBack || false}
                  onChange={handlerFormChange}
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
          <Box sx={{ my: 2 }}>
            <FormControlLabel
              control={
                <Checkbox
                  name="isAvailableSubsidy"
                  checked={editItem?.isAvailableSubsidy ?? false}
                  onChange={handlerFormChange}
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
          <Box sx={{ my: 2 }}>
            <FormControlLabel
              control={
                <Checkbox
                  name="isMadeToOrder"
                  checked={editItem?.isMadeToOrder ?? false}
                  onChange={handlerFormChange}
                />
              }
              label="オーダーメイドカリキュラムの有無"
            />
            <TextareaComponent
              onInputChange={(event) => handlerFormChange(event)}
              inputValue={editItem?.madeToOrderDetail ?? ""}
              name="madeToOrderDetail"
              placeholder="オーダーメイドカリキュラムの詳細"
            />
          </Box>
          <Box sx={{ my: 2 }}>
            <FormControlLabel
              control={
                <Checkbox
                  name="isJobIntroductionAvailable"
                  checked={editItem?.isJobIntroductionAvailable ?? false}
                  onChange={handlerFormChange}
                />
              }
              label="案件紹介の有無"
            />
            <TextareaComponent
              onInputChange={(event) => handlerFormChange(event)}
              inputValue={editItem?.jobIntroductionDetail ?? ""}
              name="jobIntroductionDetail"
              placeholder="案件紹介の詳細"
            />
          </Box>
          <Box sx={{ my: 2 }}>
            <FormControlLabel
              control={
                <Checkbox
                  name="isJobHuntingSupport"
                  checked={editItem?.isJobHuntingSupport ?? false}
                  onChange={handlerFormChange}
                />
              }
              label="転職サポートの有無"
            />
            <TextareaComponent
              onInputChange={(event) => handlerFormChange(event)}
              inputValue={editItem?.jobHuntingSupportDetail ?? ""}
              name="jobHuntingSupportDetail"
              placeholder="転職サポートの詳細"
            />
          </Box>
          <Box sx={{ my: 2 }}>
            <FormControlLabel
              control={
                <Checkbox
                  name="isJobHuntingGuarantee"
                  checked={editItem?.isJobHuntingGuarantee ?? false}
                  onChange={handlerFormChange}
                />
              }
              label="転職保証の有無"
            />
            <TextareaComponent
              onInputChange={(event) => handlerFormChange(event)}
              inputValue={editItem?.jobHuntingGuaranteeDetail ?? ""}
              name="jobHuntingGuaranteeDetail"
              placeholder="転職保証の詳細"
            />
          </Box>
          <Grid container sx={{ my: 2 }} spacing={2}>
            <Grid item md={6}>
              <FormControl fullWidth>
                <InputLabel id="select-purposes-label">受講目的</InputLabel>
                <Select
                  labelId="select-purposes-label"
                  id="select-purposes"
                  name="purposes"
                  value={editItem?.purposes ?? []}
                  onChange={(event) => handlerFormChange(event)}
                  input={<OutlinedInput fullWidth label="受講目的" />}
                  multiple
                >
                  {Object.entries(PurposeLabels).map(([key, purpose]) => (
                    <MenuItem key={key} value={purpose.value}>
                      {purpose.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={6}>
              <FormControl fullWidth>
                <InputLabel id="select-job-types-label">目指す職種</InputLabel>
                <Select
                  labelId="select-job-types-label"
                  id="select-job-types"
                  name="jobTypes"
                  value={editItem?.jobTypes ?? []}
                  onChange={(event) => handlerFormChange(event)}
                  input={<OutlinedInput fullWidth label="目指す職種" />}
                  multiple
                >
                  {jobTypes.map((job) => (
                    <MenuItem key={job.id} value={job.id}>
                      {job.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={6}>
              <FormControl fullWidth>
                <InputLabel id="select-development-product-label">
                  開発できるプロダクト
                </InputLabel>
                <Select
                  labelId="select-development-product-label"
                  id="select-development-product"
                  name="developmentProducts"
                  value={editItem?.developmentProducts ?? []}
                  onChange={(event) => handlerFormChange(event)}
                  input={
                    <OutlinedInput fullWidth label="開発できるプロダクト" />
                  }
                  multiple
                >
                  {developmentProducts.map((p) => (
                    <MenuItem key={p.id} value={p.id}>
                      {p.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={6}>
              <FormControl fullWidth>
                <InputLabel id="select-development-category-label">
                  開発領域
                </InputLabel>
                <Select
                  labelId="select-development-category-label"
                  id="select-development-category"
                  name="developmentCategories"
                  value={editItem?.developmentCategories ?? []}
                  onChange={(event) => handlerFormChange(event)}
                  input={<OutlinedInput fullWidth label="開発領域" />}
                  multiple
                >
                  {developmentCategories.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container sx={{ my: 2 }} spacing={2}>
            <Grid item md={6}>
              <FormControl fullWidth>
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
                    <OutlinedInput fullWidth label="学べるプログラミング言語" />
                  }
                  multiple
                >
                  {sortBy(languages, ["name"]).map((language) => (
                    <MenuItem key={language.id} value={language.id}>
                      {language.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={6}>
              <FormControl fullWidth>
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
                    <OutlinedInput fullWidth label="学べるフレームワーク" />
                  }
                  multiple
                >
                  {sortBy(frameworks, ["name"]).map((framework) => (
                    <MenuItem key={framework.id} value={framework.id}>
                      {framework.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={6}>
              <FormControl fullWidth>
                <InputLabel id="select-development-tools">
                  開発ツール
                </InputLabel>
                <Select
                  labelId="select-development-tools"
                  id="select-development-tools"
                  name="developmentTools"
                  value={editItem?.developmentTools ?? []}
                  onChange={(event) => handlerFormChange(event)}
                  input={<OutlinedInput fullWidth label="開発ツール" />}
                  multiple
                >
                  {sortBy(developmentTools, ["name"]).map((framework) => (
                    <MenuItem key={framework.id} value={framework.id}>
                      {framework.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={6}>
              <FormControl fullWidth>
                <InputLabel id="select-qualifications">資格</InputLabel>
                <Select
                  labelId="select-qualifications"
                  id="select-qualifications"
                  name="qualifications"
                  value={editItem?.qualifications ?? []}
                  onChange={(event) => handlerFormChange(event)}
                  input={<OutlinedInput fullWidth label="資格" />}
                  multiple
                >
                  {sortBy(qualifications, ["name"]).map((q) => (
                    <MenuItem key={q.id} value={q.id}>
                      {q.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container sx={{ my: 2 }} spacing={2}>
            <Grid item md={6}>
              <FormControl fullWidth>
                <InputLabel id="select-attendance-type">
                  受講スタイル
                </InputLabel>
                <Select
                  labelId="select-attendance-type"
                  id="select-attendance-type"
                  name="attendanceType"
                  value={editItem?.attendanceType ?? []}
                  onChange={(event) => handlerFormChange(event)}
                  input={<OutlinedInput fullWidth label="受講スタイル" />}
                >
                  {Object.entries(AttendanceTypeLabels).map(([key, option]) => (
                    <MenuItem key={key} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={6}>
              <FormControl fullWidth>
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
                    <OutlinedInput fullWidth label="場所（県、エリア検索用）" />
                  }
                >
                  {prefectures.map((p) => (
                    <MenuItem key={p.key} value={p.key}>
                      {p.value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={6}>
              <FormControl fullWidth>
                <InputLabel id="select-location-city">
                  場所（市区町村、エリア検索用）
                </InputLabel>
                <Select
                  labelId="select-location-city"
                  id="select-location-city"
                  name="locationCity"
                  value={editItem?.locationCity ?? ""}
                  onChange={(event) => handlerFormChange(event)}
                  disabled={municipalityList.length === 0}
                  input={
                    <OutlinedInput
                      fullWidth
                      label="場所（市区町村、エリア検索用）"
                    />
                  }
                >
                  {/* TODO: 都道府県に一致する市町村区を取得して表示させる */}
                  {municipalityList.map((p) => (
                    <MenuItem key={p.id} value={p.id}>
                      {p.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container sx={{ my: 2 }} spacing={2}>
            <Grid item md={6}>
              <FormControl fullWidth>
                <InputLabel id="select-especially-audiences">
                  優待ユーザー
                </InputLabel>
                <Select
                  labelId="select-especially-audiences"
                  id="select-especially-audiences"
                  name="benefitUsers"
                  value={editItem?.benefitUsers ?? []}
                  onChange={(event) => handlerFormChange(event)}
                  input={<OutlinedInput fullWidth label="優待ユーザー" />}
                >
                  {benefitUserCategories.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Box display="flex" justifyContent="flex-end">
            <Button onClick={() => handleSaveItem()}>保存</Button>
            <Button onClick={() => handleCloseEdit()} color="inherit">
              キャンセル
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Paper>
  );
}
