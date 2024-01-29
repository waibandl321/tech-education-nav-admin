"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Button } from "@mui/material";
import useSignOut from "@/hooks/components/auth/useSignOut";
import { useUserContext } from "@/contexts/UserContext";
import Link from "next/link";
/**
 * ヘッダー コンポーネント
 */
export default function Header() {
  const handleSignOut = useSignOut();
  const { isLoggedIn } = useUserContext();

  const menus = [
    { name: "スクール情報", path: "/learning-center" },
    { name: "コース情報", path: "/learning-courses" },
    { name: "レビュー情報", path: "/reviews" },
    {
      name: "言語/フレームワーク/ツール",
      path: "/languages-frameworks",
    },
    {
      name: "職種",
      path: "/job-type",
    },
    {
      name: "支払い方法",
      path: "/payment",
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{ backgroundColor: "#fff", color: "#666" }}>
        <Toolbar>
          {menus.map((menu) => (
            <Link key={menu.path} href={menu.path} style={{ marginRight: 16 }}>
              {menu.name}
            </Link>
          ))}
          <Box sx={{ flexGrow: 1 }} />
          {!isLoggedIn && (
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Link href="/auth/login">ログイン</Link>
            </Box>
          )}
          {isLoggedIn && (
            <Button
              variant="contained"
              color="primary"
              sx={{ m: "0 8px" }}
              onClick={handleSignOut}
            >
              ログアウト
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
