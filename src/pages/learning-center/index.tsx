"use client";
import Layout from "@/app/layout";
import Head from "next/head";
import LearningCenterListPane from "@/components/pages/learning-center/LearningCenterListPane";

export default function LearningCenterIndex() {
  return (
    <>
      <Head>
        <title>スクール情報</title>
        <meta name="description" content="ページの説明" />
        {/* その他のメタタグ */}
      </Head>
      <Layout>
        <LearningCenterListPane />
      </Layout>
    </>
  );
}
