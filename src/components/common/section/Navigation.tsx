"use client";
import * as React from "react";
import useSignOut from "@/hooks/components/auth/useSignOut";
import { useUserContext } from "@/contexts/UserContext";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
/**
 * ヘッダー コンポーネント
 */
export default function Navigation() {
  const handleSignOut = useSignOut();
  const { isLoggedIn } = useUserContext();

  const menus = [
    { name: "スクール情報", path: "/learning-center" },
    { name: "コース情報", path: "/learning-courses" },
    { name: "レビュー情報", path: "/reviews" },
    { name: "言語・フレームワーク", path: "/languages-frameworks" },
    { name: "開発ツール", path: "/development-tools" },
    { name: "職種", path: "/job-type" },
    { name: "開発領域", path: "/development-categories" },
    { name: "開発プロダクト", path: "/development-products" },
    { name: "資格", path: "/qualifications" },
    { name: "支払い・クレジットカード", path: "/payment" },
    { name: "優待ユーザー種別", path: "/user-category" },
  ];

  return (
    <>
      <Toolbar />
      <Divider />
      <List>
        {menus.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemText>
                <Link href={item.path}>{item.name}</Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
        {isLoggedIn && (
          <ListItem disablePadding onClick={handleSignOut}>
            <ListItemButton>
              <ListItemText primary="ログアウト" />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </>
  );
}
