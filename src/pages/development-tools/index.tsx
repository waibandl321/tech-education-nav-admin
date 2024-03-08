import Layout from "@/app/layout";
import Head from "next/head";
import DevelopmentToolPane from "@/components/pages/development-tools/DevelopmentToolPane";
import { fetchDevelopmentTools } from "@/hooks/server/fetchData";
import { GetServerSideProps } from "next";
import { DevelopmentTool } from "@/API";

export default function LanguagesFrameworksPage({
  developmentTools,
}: {
  developmentTools: Array<DevelopmentTool>;
}) {
  return (
    <>
      <Head>
        <title>【管理】開発ツール</title>
      </Head>
      <Layout>
        <DevelopmentToolPane developmentTools={developmentTools} />
      </Layout>
    </>
  );
}
// サーバーサイドでスクールとコース情報を取得し、クライアントにpropsとして渡す
export const getServerSideProps: GetServerSideProps = async () => {
  const result = await fetchDevelopmentTools();
  return {
    props: {
      developmentTools: result.developmentTools,
    },
  };
};
