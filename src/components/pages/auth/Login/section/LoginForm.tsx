import useValidation from "@/hooks/utils/useValidation";
import { AuthLoginFormType } from "@/types/FormType";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { SubmitHandler, useForm } from "react-hook-form";

export default function LoginForm({
  onSubmit,
}: {
  onSubmit: SubmitHandler<AuthLoginFormType>;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthLoginFormType>();
  const { EmailRegex, useGetEmailInputError, useGetPasswordInputError } =
    useValidation();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        margin="normal"
        fullWidth
        id="email"
        label="ログインID（メールアドレス）"
        autoComplete="email"
        autoFocus
        {...register("email", {
          required: true,
          pattern: EmailRegex,
        })}
        error={!!errors.email}
        helperText={useGetEmailInputError(errors.email?.type)}
      />
      <TextField
        sx={{ mt: 4 }}
        margin="normal"
        fullWidth
        label="パスワード"
        type="password"
        id="password"
        autoComplete="password"
        {...register("password", { required: true, minLength: 8 })}
        error={!!errors.password}
        helperText={useGetPasswordInputError(errors.password?.type)}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        size="large"
        sx={{ mt: 4, mb: 2, height: 48 }}
      >
        ログイン
      </Button>
    </form>
  );
}
