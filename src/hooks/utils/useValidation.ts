import { LiteralUnion, RegisterOptions } from "react-hook-form";

/**
 * フォームのバリデーションhook
 */
export default function useValidation() {
  /**
   * Email形式 正規表現
   */
  const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  /**
   * 電話番号 正規表現
   * 0から始まり、残りの数字9桁または10桁の半角数字
   */
  const PhoneRegexp = /^0\d{9,10}$/;

  /**
   * Emailのバリデーションエラーメッセージを取得する
   * @param errorType エラーのタイプ
   * @returns エラーメッセージ
   */
  const useGetEmailInputError = (
    errorType: LiteralUnion<keyof RegisterOptions, string> | undefined
  ) => {
    switch (errorType) {
      case "required":
        return "メールアドレスの入力は必須です";
      case "pattern":
        return "メールアドレスの形式で入力してください";
      default:
        break;
    }
  };

  /**
   * Passwordのバリデーションエラーメッセージを取得する
   * @param errorType エラーのタイプ
   * @returns エラーメッセージ
   */
  const useGetPasswordInputError = (
    errorType: LiteralUnion<keyof RegisterOptions, string> | undefined
  ) => {
    switch (errorType) {
      case "required":
        return "パスワードの入力は必須です。";
      case "minLength":
        return "パスワードは8文字以上で入力してください。";
      case "pattern":
        return "パスワードの形式で入力してください。";
      default:
        break;
    }
  };
  /**
   * 電話番号のバリデーションエラーメッセージを取得する
   * @param errorType エラーのタイプ
   * @returns エラーメッセージ
   */
  const useGetPhoneNumberInputError = (
    errorType: LiteralUnion<keyof RegisterOptions, string> | undefined
  ) => {
    switch (errorType) {
      case "required":
        return "電話番号の入力は必須です。";
      case "pattern":
        return "電話番号の形式で入力してください。";
      default:
        break;
    }
  };

  return {
    EmailRegex,
    PhoneRegexp,
    useGetEmailInputError,
    useGetPasswordInputError,
    useGetPhoneNumberInputError,
  };
}
