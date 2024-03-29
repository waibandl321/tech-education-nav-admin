import { CreateLearningCenterInput, UpdateLearningCenterInput } from "@/API";
import useLearningCenterLogic from "@/hooks/components/learning-center/useLearningCenterLogic";
import { useFormOptions } from "@/hooks/utils/useFormOptions";
import {
  Box,
  FormHelperText,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

/**
 * プロパティの型
 */
type LearningCenterFormProps = {
  onSubmitCreate?: (
    data: CreateLearningCenterInput,
    file?: File | null
  ) => Promise<void>;
  onSubmitUpdate?: (
    data: UpdateLearningCenterInput,
    file?: File | null
  ) => Promise<void>;
  formData: CreateLearningCenterInput | UpdateLearningCenterInput;
  handlerFormChange: (
    event: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent
  ) => void;
  handleDeleteExistImage?: () => void;
  isEdit: boolean;
};

export default function LearningCenterForm({
  onSubmitCreate,
  onSubmitUpdate,
  formData,
  handlerFormChange,
  handleDeleteExistImage,
  isEdit,
}: LearningCenterFormProps) {
  const {
    setInputFile,
    setInputFilePreview,
    changeFile,
    initCreateLearningCenter,
    inputFile,
    inputFilePreview,
  } = useLearningCenterLogic();
  const router = useRouter();
  const { years } = useFormOptions();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<CreateLearningCenterInput>({
    //初期値を useForm の defaultValues に設定する
    defaultValues: {
      ...initCreateLearningCenter,
    },
  });

  // input fileのテンプレート参照
  const fileInputRef = useRef<HTMLInputElement>(null);

  // input file初期化
  const handleDeleteInputFile = () => {
    // input要素の値をクリアする
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setInputFile(null);
    setInputFilePreview("");
  };

  /**
   * 送信処理: 編集 or 作成に応じてコールバック関数を切り分ける
   * @param data form送信データ
   */
  const handlerSubmit = async (
    data: CreateLearningCenterInput | UpdateLearningCenterInput
  ) =>
    isEdit
      ? onSubmitUpdate?.(data as UpdateLearningCenterInput, inputFile)
      : onSubmitCreate?.(data as CreateLearningCenterInput, inputFile);

  // 型ガードチェック
  const isKeyOfLearningCenterEditInputType = (
    key: string
  ): key is keyof UpdateLearningCenterInput => {
    return key in formData;
  };

  useEffect(() => {
    // 編集モードの場合に初期値をセットする
    if (isEdit) {
      Object.keys(formData).forEach((key) => {
        if (isKeyOfLearningCenterEditInputType(key)) {
          setValue(key, formData![key]);
        }
      });
    }
  }, [formData, setValue]);

  return (
    <form onSubmit={handleSubmit(handlerSubmit)}>
      <Box>
        <Typography>ロゴ画像</Typography>
        <TextField
          size="small"
          type="file"
          fullWidth
          sx={{ mt: 1 }}
          onChange={changeFile}
          inputRef={fileInputRef}
        />
        {formData.logoImageURL && (
          <>
            <Image
              src={formData.logoImageURL}
              alt=""
              width={100}
              height={100}
            ></Image>
            <Button onClick={handleDeleteExistImage}>削除する</Button>
          </>
        )}
        {inputFilePreview && (
          <>
            <Image
              src={inputFilePreview}
              alt=""
              width={100}
              height={100}
            ></Image>
            <Button onClick={handleDeleteInputFile}>削除する</Button>
          </>
        )}
      </Box>
      <Box sx={{ mt: 3 }}>
        <TextField
          label="スクール名"
          size="small"
          value={formData.name || ""}
          {...register("name", {
            required: {
              value: true,
              message: "スクール名は入力必須の項目です。",
            },
            onChange: (event) => handlerFormChange(event),
          })}
          error={!!errors.name}
          helperText={errors.name?.message}
          fullWidth
        />
      </Box>
      <Box sx={{ mt: 3 }}>
        <TextField
          label="スクール詳細"
          rows={3}
          size="small"
          value={formData.memo || ""}
          {...register("memo", {
            required: {
              value: true,
              message: "詳細は入力必須の項目です。",
            },
            onChange: (event) => handlerFormChange(event),
          })}
          error={!!errors.memo}
          helperText={errors.memo?.message}
          fullWidth
          minRows={3}
        />
      </Box>
      <Box sx={{ mt: 3 }}>
        <TextField
          label="運営会社"
          size="small"
          value={formData.operatingCompany || ""}
          {...register("operatingCompany", {
            required: {
              value: true,
              message: "運営会社は入力必須の項目です。",
            },
            onChange: (event) => handlerFormChange(event),
          })}
          error={!!errors.operatingCompany}
          helperText={errors.operatingCompany?.message}
          fullWidth
        />
      </Box>
      <Box sx={{ mt: 3 }}>
        <TextField
          label="本社所在地"
          size="small"
          value={formData.headquartersLocation || ""}
          {...register("headquartersLocation", {
            required: {
              value: true,
              message: "本社所在地は入力必須の項目です。",
            },
            onChange: (event) => handlerFormChange(event),
          })}
          error={!!errors.headquartersLocation}
          helperText={errors.headquartersLocation?.message}
          fullWidth
        />
      </Box>
      <Box sx={{ mt: 3 }}>
        <TextField
          label="ホームページURL"
          size="small"
          value={formData.websiteURL || ""}
          {...register("websiteURL", {
            required: {
              value: true,
              message: "ホームページURLは入力必須の項目です。",
            },
            onChange: (event) => handlerFormChange(event),
          })}
          error={!!errors.websiteURL}
          helperText={errors.websiteURL?.message}
          fullWidth
        />
      </Box>
      <Box sx={{ mt: 3 }}>
        <Select
          label="設立年"
          size="small"
          value={formData.establishmentYear || ""}
          {...register("establishmentYear", {
            required: {
              value: true,
              message: "設立年は選択必須の項目です。",
            },
            onChange: (event) => handlerFormChange(event),
          })}
          error={!!errors.establishmentYear}
          id="establishmentYear"
          sx={{ mt: 1 }}
          fullWidth
        >
          {years.map((p) => (
            <MenuItem key={p} value={p}>
              {p}
            </MenuItem>
          ))}
        </Select>
        {errors.establishmentYear?.message && (
          <FormHelperText error={!!errors.establishmentYear}>
            {errors.establishmentYear.message}
          </FormHelperText>
        )}
      </Box>
      <Box sx={{ mt: 3 }}>
        <TextField
          label="代表者"
          size="small"
          value={formData.representative || ""}
          {...register("representative", {
            required: {
              value: true,
              message: "代表者は入力必須の項目です。",
            },
            onChange: (event) => handlerFormChange(event),
          })}
          error={!!errors.representative}
          helperText={errors.representative?.message}
          fullWidth
        />
      </Box>
      <Box sx={{ mt: 3 }}>
        <Button
          variant="contained"
          size="large"
          sx={{
            width: "100%",
          }}
          type="submit"
        >
          保存
        </Button>
        <Button
          variant="outlined"
          color="inherit"
          size="large"
          sx={{
            mt: 2,
            width: "100%",
          }}
          onClick={() => router.push("/learning-center")}
        >
          キャンセル
        </Button>
      </Box>
    </form>
  );
}
