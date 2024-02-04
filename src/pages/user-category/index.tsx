import Layout from "@/app/layout";
import Head from "next/head";
import IndexPane from "@/components/pages/user-category/IndexPane";
import { fetchUserCategoryPageData } from "@/hooks/server/fetchData";
import { GetServerSideProps } from "next";
import { BenefitUserCategory } from "@/API";

export default function UserCategoryPage({
  benefitUserCategories,
}: {
  benefitUserCategories: Array<BenefitUserCategory>;
}) {
  return (
    <>
      <Head>
        <title>【管理】ユーザー種別</title>
      </Head>
      <Layout>
        <IndexPane benefitUserCategories={benefitUserCategories} />
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const result = await fetchUserCategoryPageData();
  return {
    props: {
      benefitUserCategories: result.benefitUserCategories,
    },
  };
};
