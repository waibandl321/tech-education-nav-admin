import Layout from "@/app/layout";
import Head from "next/head";
import LearningCenterEditPane from "@/components/pages/learning-center/LearningCenterEditPane";

export default function LearningCenterEdit() {
  return (
    <>
      <Head>
        <title>【編集】スクール情報</title>
        <meta name="description" content="ページの説明" />
        {/* その他のメタタグ */}
      </Head>
      <Layout>
        <LearningCenterEditPane />
      </Layout>
    </>
  );
}
