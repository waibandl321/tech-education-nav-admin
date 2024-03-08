import Layout from "@/app/layout";
import Head from "next/head";
import DevelopmentProductPane from "@/components/pages/development-products/DevelopmentProductPane";
import { fetchDevelopmentProducts } from "@/hooks/server/fetchData";
import { GetServerSideProps } from "next";
import { DevelopmentProduct } from "@/API";

export default function JobTypePage({
  developmentProducts,
}: {
  developmentProducts: Array<DevelopmentProduct>;
}) {
  return (
    <>
      <Head>
        <title>【管理】開発プロダクト</title>
      </Head>
      <Layout>
        <DevelopmentProductPane developmentProducts={developmentProducts} />
      </Layout>
    </>
  );
}
// サーバーサイドでスクールとコース情報を取得し、クライアントにpropsとして渡す
export const getServerSideProps: GetServerSideProps = async () => {
  const result = await fetchDevelopmentProducts();
  return {
    props: {
      developmentProducts: result.developmentProducts,
    },
  };
};
