import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import useValidation from "@/hooks/utils/useValidation";
import { SubmitHandler, useForm } from "react-hook-form";
import { AuthPasswordResetFormType } from "@/types/FormType";

export default function PasswordConfirmForm({
  onSubmit,
}: {
  onSubmit: SubmitHandler<AuthPasswordResetFormType>;
}) {
  // hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthPasswordResetFormType>();
  const { useGetPasswordInputError } = useValidation();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        fullWidth
        id="confirmationCode"
        label="認証コード"
        autoFocus
        {...register("confirmationCode", {
          required: {
            value: true,
            message: "入力が必須の項目です。",
          },
        })}
        error={!!errors.confirmationCode}
        helperText={errors.confirmationCode?.message}
      />
      <TextField
        sx={{ mt: 4 }}
        margin="normal"
        fullWidth
        label="新しいパスワード"
        type="password"
        id="newPassword"
        autoComplete="password"
        {...register("newPassword", { required: true, minLength: 8 })}
        error={!!errors.newPassword}
        helperText={useGetPasswordInputError(errors.newPassword?.type)}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        size="large"
        sx={{ mt: 4, mb: 2, height: 48 }}
      >
        パスワードを再設定する
      </Button>
    </form>
  );
}
