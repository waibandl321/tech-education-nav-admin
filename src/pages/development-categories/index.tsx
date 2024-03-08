import Layout from "@/app/layout";
import Head from "next/head";
import DevelopmentCategoryPane from "@/components/pages/development-categories/DevelopmentCategoryPane";
import { fetchDevelopmentCategories } from "@/hooks/server/fetchData";
import { GetServerSideProps } from "next";
import { DevelopmentCategory } from "@/API";

export default function JobTypePage({
  developmentCategories,
}: {
  developmentCategories: Array<DevelopmentCategory>;
}) {
  return (
    <>
      <Head>
        <title>【管理】開発領域</title>
      </Head>
      <Layout>
        <DevelopmentCategoryPane
          developmentCategories={developmentCategories}
        />
      </Layout>
    </>
  );
}
// サーバーサイドでスクールとコース情報を取得し、クライアントにpropsとして渡す
export const getServerSideProps: GetServerSideProps = async () => {
  const result = await fetchDevelopmentCategories();
  return {
    props: {
      developmentCategories: result.developmentCategories,
    },
  };
};
