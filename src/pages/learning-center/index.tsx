import Layout from "@/app/layout";
import Head from "next/head";
import LearningCenterList from "@/components/pages/learning-center/LearningCenterList";

export default function LearningCenter() {
  return (
    <>
      <Head>
        <title>スクール情報</title>
        <meta name="description" content="ページの説明" />
        {/* その他のメタタグ */}
      </Head>
      <Layout>
        <LearningCenterList />
      </Layout>
    </>
  );
}
