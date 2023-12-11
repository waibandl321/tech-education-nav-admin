"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Button, Container } from "@mui/material";
import { useRouter } from "next/navigation";
import useSignOut from "@/hooks/components/auth/useSignOut";
import { useUserContext } from "@/contexts/UserContext";
/**
 * ヘッダー コンポーネント
 */
export default function Header() {
  const router = useRouter();
  const handleSignOut = useSignOut();
  const { isLoggedIn } = useUserContext();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#222" }}>
        <Container>
          <Toolbar>
            <Button
              variant="text"
              sx={{
                display: { xs: "none", sm: "block" },
                m: "0 24px 0 0",
                color: "white",
                fontSize: 20,
              }}
              onClick={() => router.push("/")}
            >
              【管理】テック教育ナビ
            </Button>
            <Box sx={{ flexGrow: 1 }} />
            {!isLoggedIn && (
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ m: "0 8px" }}
                  href="/auth/login"
                >
                  ログイン
                </Button>
              </Box>
            )}
            {isLoggedIn && (
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Button
                  onClick={handleSignOut}
                  variant="contained"
                  sx={{ mr: 2 }}
                >
                  ログアウト
                </Button>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
