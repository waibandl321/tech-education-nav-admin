import React, { createContext, useContext, useState, ReactNode } from "react";
import Router from "next/router";
// nprogress
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// ページ遷移時のローディング表示
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

// コンテキストで使用されるプロパティの型定義
interface LoadingContextPropsType {
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
}

// コンテキストの作成。初期値はundefined
const LoadingContext = createContext<LoadingContextPropsType | undefined>(
  undefined
);

// プロバイダーのプロパティの型定義（子コンポーネントを受け取る）
interface LoadingProviderProps {
  children: ReactNode;
}

// ローディング用のプロバイダーコンポーネント
export const LoadingProvider: React.FC<LoadingProviderProps> = ({
  children,
}) => {
  const [isLoading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

// カスタムフック：コンテキストを使用してローディングの状態にアクセス
export const useLoading = (): LoadingContextPropsType => {
  const context = useContext(LoadingContext);
  // コンテキストがLoadingProvider内で使用されていない場合はエラーをスロー
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  // コンテキストの値を返す
  return context;
};
