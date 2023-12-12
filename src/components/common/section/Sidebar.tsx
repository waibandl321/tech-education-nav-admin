"use client";
import * as React from "react";
import { useRouter } from "next/router";
import { MenuItem, MenuList } from "@mui/material";

export default function Sidebar() {
  const router = useRouter();
  const menus = [
    { name: "TOP", path: "/" },
    { name: "スクール情報", path: "/learning-center" },
    // { name: "コース情報", path: "/learning-course" },
  ];

  return (
    <MenuList>
      {menus.map((menu) => (
        <MenuItem key={menu.path} onClick={() => router.push(menu.path)}>
          {menu.name}
        </MenuItem>
      ))}
    </MenuList>
  );
}
