"use client";
import Layout from "@/app/layout";
import Head from "next/head";
import LearningCenterCreatePane from "@/components/pages/learning-center/LearningCenterCreatePane";

export default function LearningCenterEdit() {
  return (
    <>
      <Head>
        <title>【管理】スクール情報</title>
        <meta name="description" content="ページの説明" />
        {/* その他のメタタグ */}
      </Head>
      <Layout>
        <LearningCenterCreatePane />
      </Layout>
    </>
  );
}
