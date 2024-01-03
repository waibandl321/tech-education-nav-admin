"use client";
import Layout from "@/app/layout";
import Head from "next/head";
import { Container, Grid } from "@mui/material";
import Sidebar from "@/components/common/section/Sidebar";

export default function Home() {
  return (
    <>
      <Head>
        <title>【管理サイト】テック教育ナビ</title>
        <meta name="description" content="ページの説明" />
        {/* その他のメタタグ */}
      </Head>
      <Layout>
        <Grid container>
          <Grid item width={200}>
            <Sidebar />
          </Grid>
          <Grid item width={"calc(100% - 200px)"}>
            <Container sx={{ p: 4 }}>ホーム</Container>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
}
