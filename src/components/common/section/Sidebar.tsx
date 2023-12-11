"use client";
import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import { useRouter } from "next/router";

export default function Sidebar() {
  const router = useRouter();
  const menus = [
    { name: "TOP", path: "/" },
    { name: "スクール情報", path: "/learning-center" },
    // { name: "コース情報", path: "/learning-course" },
  ];

  return (
    <List>
      {menus.map((menu) => (
        <ListItemButton key={menu.path} onClick={() => router.push(menu.path)}>
          {menu.name}
        </ListItemButton>
      ))}
    </List>
  );
}
