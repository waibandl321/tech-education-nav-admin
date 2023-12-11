import { useLoading } from "@/contexts/LoadingContext";
import { useMessageAlert } from "@/contexts/MessageAlertContext";
import { useUserContext } from "@/contexts/UserContext";
import useAuth from "@/hooks/api/useAuth";
import { AuthPasswordResetFormType } from "@/types/FormType";
import { ResetPasswordOutput } from "aws-amplify/auth";
import { useRouter } from "next/router";
import { SubmitHandler } from "react-hook-form";

const usePasswordReset = () => {
  const { setAlertMessage } = useMessageAlert();
  const router = useRouter();
  const { apiResetPassword } = useAuth();
  const { setAccountInfomation } = useUserContext();
  const { setLoading } = useLoading();
  const { accountInfomation } = useUserContext();
  const { apiConfirmResetPassword } = useAuth();

  // パスワード変更リクエスト後にステータスに応じて画面を切り替える処理
  const handleResetPasswordNextSteps = (output: ResetPasswordOutput) => {
    const { nextStep } = output;
    switch (nextStep.resetPasswordStep) {
      case "CONFIRM_RESET_PASSWORD_WITH_CODE":
        router.replace("/auth/reset-password-confirm");
        setAlertMessage({
          type: "success",
          message:
            "メールアドレスに認証コードを送信しました。認証コードと新しいパスワードを入力してください。",
        });
        break;
      case "DONE":
        router.replace("/auth/login");
        setAlertMessage({
          type: "success",
          message: "パスワードを再設定しました。ログインしてください。",
        });
        break;
    }
  };

  /**
   * パスワードリセット: リクエスト
   * @param email 認証コードを送信するメールアドレス
   */
  const requestPasswordReset: SubmitHandler<{
    email: string;
  }> = async (data) => {
    setLoading(true);
    try {
      const output = await apiResetPassword(data.email);
      setAccountInfomation({
        email: data.email,
      });
      handleResetPasswordNextSteps(output);
    } catch (error) {
      console.error(error);
      setAlertMessage({
        type: "error",
        message: "認証に失敗しました。",
      });
    } finally {
      setLoading(false);
    }
  };

  /**
   * パスワードリセット 認証
   * @param data 認証コード&新しいパスワード
   */
  const confirmPasswordReset: SubmitHandler<AuthPasswordResetFormType> = async (
    data
  ) => {
    if (!accountInfomation.email) {
      setAlertMessage({
        type: "error",
        message:
          "アカウント情報のEmailが存在しません。\n「認証コードを再発行する」ボタンを押して、再度手続きをお願いいたします。",
      });
      return; // 処理をここで終了させる
    }

    try {
      await apiConfirmResetPassword({
        username: accountInfomation.email,
        confirmationCode: data.confirmationCode,
        newPassword: data.newPassword,
      });
      setAlertMessage({
        type: "success",
        message: "パスワードを再設定しました。\n再度ログインしてください。",
      });
      router.replace("/auth/login");
    } catch (error) {
      console.error(error);
      setAlertMessage({
        type: "error",
        message: "パスワードの再設定に失敗しました。",
      });
    }
  };

  return {
    requestPasswordReset,
    handleResetPasswordNextSteps,
    confirmPasswordReset,
  };
};

export default usePasswordReset;
