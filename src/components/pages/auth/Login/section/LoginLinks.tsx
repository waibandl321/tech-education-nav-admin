import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

export default function LoginLinks() {
  const router = useRouter();

  return (
    <Box sx={{ mt: 2 }}>
      <Typography>
        <Button
          onClick={() => router.push("/auth/reset-password")}
          variant="text"
        >
          パスワード再設定
        </Button>
      </Typography>
    </Box>
  );
}
