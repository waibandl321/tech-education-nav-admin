import Layout from "@/app/layout";
import Head from "next/head";
import LearningCenterListPane from "@/components/pages/learning-center/LearningCenterListPane";

export default function LearningCenterIndex() {
  return (
    <>
      <Head>
        <title>【管理】スクール情報</title>
      </Head>
      <Layout>
        <LearningCenterListPane />
      </Layout>
    </>
  );
}
