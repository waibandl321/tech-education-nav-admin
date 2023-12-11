"use client";
import { useLoading } from "@/contexts/LoadingContext";
import { Backdrop, CircularProgress } from "@mui/material";

export default function LoadingOverlay() {
  const { isLoading } = useLoading();
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isLoading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
