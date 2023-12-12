import { useLoading } from "@/contexts/LoadingContext";
import { useMessageAlert } from "@/contexts/MessageAlertContext";
import useLearningCenter from "@/hooks/api/useLearningCenter";
import { useFormOptions } from "@/hooks/utils/useFormOptions";
import { LearningCenterInputType } from "@/types/FormType";
import {
  Box,
  FormHelperText,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
  useMediaQuery,
  Button,
  Container,
  TextField,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const initLearningCenter: LearningCenterInputType = {
  name: "",
  memo: "",
  operatingCompany: "",
  headquartersLocation: "",
  websiteURL: "",
  establishmentYear: 2000,
  representative: "",
};

function LearningCenterEditForm() {
  const { setLoading } = useLoading();
  const router = useRouter();
  const { years } = useFormOptions();
  const [learningCenter, setLearningCenter] = useState<LearningCenterInputType>(
    { ...initLearningCenter }
  );
  const { setAlertMessage } = useMessageAlert();
  const { apiCreateLearningCenter } = useLearningCenter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<LearningCenterInputType>({
    //初期値を useForm の defaultValues に設定する
    defaultValues: {
      ...initLearningCenter,
    },
  });
  // Formの更新
  const handlerFormChange = (
    event: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent
  ) => {
    const target = event.target as HTMLInputElement | HTMLSelectElement;
    const { name, value } = target;
    setLearningCenter((prevLearningCenter) => ({
      ...prevLearningCenter,
      [name]: value,
    }));
  };

  // 送信
  const onSubmit = async () => {
    setLoading(true);
    try {
      const result = await apiCreateLearningCenter(learningCenter);
      if (!result.isSuccess || !result.data) {
        throw new Error("");
      }
      setAlertMessage({
        type: "success",
        message: "データを保存しました。",
      });
    } catch (error) {
      console.log(error);
      setAlertMessage({
        type: "error",
        message: "データの保存に失敗しました。",
      });
      return;
    } finally {
      setLoading(false);
    }
  };
  const onCancel = () => {
    router.push("/learning-center");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <Typography>スクール名</Typography>
        <TextField
          value={learningCenter.name || ""}
          {...register("name", {
            required: {
              value: true,
              message: "氏名は入力必須の項目です。",
            },
            onChange: (event) => handlerFormChange(event),
          })}
          error={!!errors.name}
          helperText={errors.name?.message}
          fullWidth
          sx={{ mt: 1 }}
        />
      </Box>
      <Box sx={{ mt: 5 }}>
        <Typography>詳細</Typography>
        <TextField
          value={learningCenter.memo || ""}
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
          sx={{ mt: 1 }}
        />
      </Box>
      <Box sx={{ mt: 5 }}>
        <Typography>運営会社</Typography>
        <TextField
          value={learningCenter.operatingCompany || ""}
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
          sx={{ mt: 1 }}
        />
      </Box>
      <Box sx={{ mt: 5 }}>
        <Typography>本社所在地</Typography>
        <TextField
          value={learningCenter.headquartersLocation || ""}
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
          sx={{ mt: 1 }}
        />
      </Box>
      <Box sx={{ mt: 5 }}>
        <Typography>ホームページURL</Typography>
        <TextField
          value={learningCenter.websiteURL || ""}
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
          sx={{ mt: 1 }}
        />
      </Box>
      <Box sx={{ mt: 5 }}>
        <Typography>設立年</Typography>
        <Grid container sx={{ mt: 1 }}>
          <Grid item minWidth={200}>
            <Select
              value={learningCenter.establishmentYear || ""}
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
          </Grid>
        </Grid>
        {errors.establishmentYear?.message && (
          <FormHelperText error={!!errors.establishmentYear}>
            {errors.establishmentYear.message}
          </FormHelperText>
        )}
      </Box>
      <Box sx={{ mt: 5 }}>
        <Typography>代表者</Typography>
        <TextField
          value={learningCenter.representative || ""}
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
          sx={{ mt: 1 }}
        />
      </Box>
      <Box sx={{ mt: 5 }}>
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
          onClick={onCancel}
        >
          キャンセル
        </Button>
      </Box>
    </form>
  );
}

export default function LearningCenterEditPane() {
  return (
    <Container sx={{ p: 4 }}>
      <LearningCenterEditForm />
    </Container>
  );
}
