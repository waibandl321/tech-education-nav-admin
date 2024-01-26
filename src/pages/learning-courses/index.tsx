import Layout from "@/app/layout";
import Head from "next/head";
import LearningCoursesPane from "@/components/pages/learning-course/LearningCoursesPane";

export default function LearningCoursesIndex() {
  return (
    <>
      <Head>
        <title>【管理】コース情報</title>
      </Head>
      <Layout>
        <LearningCoursesPane />
      </Layout>
    </>
  );
}
