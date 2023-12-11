import { AuthLoginFormType, AuthRegisterFormType } from "@/types/FormType";
import {
  ConfirmSignUpInput,
  confirmSignUp,
  getCurrentUser,
  signIn,
  signUp,
  resendSignUpCode,
  resetPassword,
  ConfirmResetPasswordInput,
  confirmResetPassword,
  updateUserAttributes,
} from "aws-amplify/auth";

export default function useAuth() {
  /**
   * 会員登録
   * @param formData 入力データ
   */
  const apiSignUp = async (formData: AuthRegisterFormType) =>
    signUp({
      username: formData.email,
      password: formData.password,
      options: {
        userAttributes: {
          email: formData.email,
          // phone_number: "+81" + formData.phoneNumber, // E.164 number convention
        },
        // optional
        // autoSignIn: true, // or SignInOptions e.g { authFlowType: "USER_SRP_AUTH" }
      },
    });

  /**
   * サインアップ: 認証コード再送信
   */
  const resendSignUpAuthCode = async (username: string) =>
    resendSignUpCode({
      username,
    });

  /**
   * 認証コード確認
   * @param username ユーザー名（メールアドレス）
   * @param confirmationCode 認証コード
   */
  const apiConfirmSignUp = async ({
    username,
    confirmationCode,
  }: ConfirmSignUpInput) =>
    confirmSignUp({
      username,
      confirmationCode,
    });

  /**
   * ユーザーがサインインしているかどうかを確認する
   */
  const currentAuthenticatedUser = async () => getCurrentUser();

  /**
   * ログイン
   * @param formData ログイン画面の入力データ
   */
  const apiSignin = async (formData: AuthLoginFormType) =>
    signIn({
      username: formData.email,
      password: formData.password,
    });

  /**
   * パスワード再設定: 認証コード送信
   * @param username ユーザー名（メールアドレス）
   */
  const apiResetPassword = async (username: string) =>
    resetPassword({ username });

  /**
   * パスワード再設定: パスワード再設定実行
   * @param username ユーザー名（メールアドレス）
   * @param confirmationCode 認証コード
   * @param newPassword 新しいパスワード
   */
  const apiConfirmResetPassword = async ({
    username,
    confirmationCode,
    newPassword,
  }: ConfirmResetPasswordInput) =>
    confirmResetPassword({ username, confirmationCode, newPassword });

  /**
   * Update email
   */
  const apiUpdateUserAttr = async (updatedEmail: string) =>
    updateUserAttributes({
      userAttributes: {
        email: updatedEmail,
        name: updatedEmail,
      },
    });

  return {
    currentAuthenticatedUser,
    apiConfirmSignUp,
    resendSignUpAuthCode,
    apiSignUp,
    apiSignin,
    apiResetPassword,
    apiConfirmResetPassword,
    apiUpdateUserAttr,
  };
}
