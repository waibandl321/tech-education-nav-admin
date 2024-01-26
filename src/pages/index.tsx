"use client";
import Layout from "@/app/layout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>【管理サイト】テック教育ナビ</title>
        <meta name="description" content="ページの説明" />
        {/* その他のメタタグ */}
      </Head>
      <Layout>ホーム</Layout>
    </>
  );
}
