"use client";
import React from "react";
import { Alert, Snackbar } from "@mui/material";
import { useMessageAlert } from "@/contexts/MessageAlertContext";

// アラートメッセージ表示用のコンポーネント
export default function MesageAlert() {
  const { alertMessage, setAlertMessage } = useMessageAlert();

  return (
    <>
      {(alertMessage?.type === "success" || alertMessage?.type === "error") && (
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={!!alertMessage.message}
          autoHideDuration={6000}
          onClose={() => setAlertMessage(null)}
        >
          <Alert
            onClose={() => setAlertMessage(null)}
            severity={alertMessage.type}
          >
            {alertMessage.message}
          </Alert>
        </Snackbar>
      )}
    </>
  );
}
