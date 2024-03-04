// src/hooks/useSignOut.ts
import { useMessageAlert } from "@/contexts/MessageAlertContext";
import { signOut } from "aws-amplify/auth";

const useSignOut = () => {
  const { setAlertMessage } = useMessageAlert();

  const handleSignOut = async () => {
    try {
      await signOut({ global: true });
      window.location.replace("/auth/login");
    } catch (error) {
      console.error(error);
      setAlertMessage({
        type: "error",
        message: "ログアウトに失敗しました。",
      });
    }
  };

  return handleSignOut;
};

export default useSignOut;
