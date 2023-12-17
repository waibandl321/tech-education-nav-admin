import { LearningCenter } from "@/API";

// 会員登録画面の入力型
export interface AuthRegisterFormType {
  email: string;
  password: string;
}

// ログイン画面の入力型
export interface AuthLoginFormType {
  email: string;
  password: string;
}

// パスワード再設定画面の入力型
export interface AuthPasswordResetFormType {
  confirmationCode: string;
  newPassword: string;
}

// プロフィール編集画面の入力型
export interface UserProfileInputType {
  name: string;
  gender: string;
  birthYear: number;
  birthMonth: number;
  birthDate: number;
  prefecture: string;
  previousJob: string;
}

export type LearningCenterEditInputType = Omit<
  LearningCenter,
  "owner" | "learningCenterCourses"
>;
