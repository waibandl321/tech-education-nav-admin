import { useLoading } from "@/contexts/LoadingContext";
import { useMessageAlert } from "@/contexts/MessageAlertContext";
import { useUserContext } from "@/contexts/UserContext";
import useAuth from "@/hooks/api/useAuth";
import { AuthLoginFormType } from "@/types/FormType";
import { useRouter } from "next/router";
import { SubmitHandler } from "react-hook-form";

/**
 * サインイン画面のビジネスロジックを定義するカスタムフック
 */
const useLogin = () => {
  const { setAlertMessage } = useMessageAlert();
  const router = useRouter();
  const { setLoading } = useLoading();
  const { setAccountInfomation } = useUserContext();
  const { apiSignin, resendSignUpAuthCode, currentAuthenticatedUser } =
    useAuth();

  // サインイン完了後の処理
  const handleAfterSignIn = async () => {
    const { userId, signInDetails } = await currentAuthenticatedUser();
    if (!userId) return;

    setAccountInfomation({
      userId,
      email: signInDetails?.loginId,
    });
    await router.replace("/");
    setAlertMessage({
      type: "success",
      message: "認証に成功しました。",
    });
  };

  /**
   * 認証コード未確認時の処理
   * @param email メールアドレス
   */
  const handleUnconfirmedSignUp = async (email: string) => {
    await resendSignUpAuthCode(email);
    setAccountInfomation({
      email: email,
    });
    router.replace("/auth/register-confirm");
    setAlertMessage({
      type: "error",
      message:
        "お客様は、認証コードの確認が未完了です。メールアドレスに送信された認証コードを入力してください。",
    });
  };

  /**
   * サインイン 送信処理
   * @param data AuthLoginFormType
   */
  const login: SubmitHandler<AuthLoginFormType> = async (data) => {
    setLoading(true);
    try {
      // 管理者アカウントのみ認証可能にする
      if (data.email !== process.env.NEXT_PUBLIC_HOST_USER_NAME)
        throw new Error("Authentication information is invalid");

      const { isSignedIn, nextStep } = await apiSignin(data);

      // 認証コードの未確認
      if (nextStep.signInStep === "CONFIRM_SIGN_UP") {
        await handleUnconfirmedSignUp(data.email);
        return;
      }

      // サインイン完了
      if (isSignedIn) {
        await handleAfterSignIn();
      }
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

  return {
    login,
    handleAfterSignIn,
    handleUnconfirmedSignUp,
  };
};

export default useLogin;
