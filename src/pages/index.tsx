import { Container } from "@mui/material";
import React from "react";
import Layout from "@/app/layout";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>【管理サイト】テック教育ナビ</title>
        {/* その他のメタタグ */}
      </Head>
      <Layout>
        <Container sx={{ p: 4 }}>ホーム</Container>
      </Layout>
    </>
  );
}
