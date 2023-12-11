import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { SubmitHandler, useForm } from "react-hook-form";
import useValidation from "@/hooks/utils/useValidation";

export default function PasswordRequestForm({
  onSubmit,
}: {
  onSubmit: SubmitHandler<{
    email: string;
  }>;
}) {
  // hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    email: string;
  }>();
  const { EmailRegex, useGetEmailInputError } = useValidation();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        margin="normal"
        fullWidth
        id="email"
        label="メールアドレス"
        autoComplete="email"
        autoFocus
        {...register("email", {
          required: true,
          pattern: EmailRegex,
        })}
        error={!!errors.email}
        helperText={useGetEmailInputError(errors.email?.type)}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        size="large"
        sx={{ mt: 4, mb: 2, height: 48 }}
      >
        認証コードを送信する
      </Button>
    </form>
  );
}
