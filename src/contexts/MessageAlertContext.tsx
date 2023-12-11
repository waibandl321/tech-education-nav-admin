import React, { createContext, useContext, useState, ReactNode } from "react";

// アラートメッセージの型定義
interface AlertMessageType {
  message: string;
  type: "success" | "error";
}

// コンテキストで使用されるプロパティの型定義
interface MessageAlertContextPropsType {
  alertMessage: AlertMessageType | null;
  setAlertMessage: (message: AlertMessageType | null) => void;
}

// コンテキストの作成。初期値はundefined
const MessageAlertContext = createContext<
  MessageAlertContextPropsType | undefined
>(undefined);

// プロバイダーのプロパティの型定義（子コンポーネントを受け取る）
interface MessageAlertProviderProps {
  children: ReactNode;
}

// メッセージアラート用のプロバイダーコンポーネント
export const MessageAlertProvider: React.FC<MessageAlertProviderProps> = ({
  children,
}) => {
  const [alertMessage, setAlertMessage] = useState<AlertMessageType | null>(
    null
  );

  return (
    <MessageAlertContext.Provider value={{ alertMessage, setAlertMessage }}>
      {children}
    </MessageAlertContext.Provider>
  );
};

// カスタムフック：コンテキストを使用してメッセージアラートの状態にアクセス
export const useMessageAlert = (): MessageAlertContextPropsType => {
  const context = useContext(MessageAlertContext);
  // コンテキストがMessageAlertProvider内で使用されていない場合はエラーをスロー
  if (!context) {
    throw new Error(
      "useMessageAlert must be used within a MessageAlertProvider"
    );
  }
  // コンテキストの値を返す
  return context;
};
