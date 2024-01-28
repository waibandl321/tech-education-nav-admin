import Layout from "@/app/layout";
import Head from "next/head";
import IndexPane from "@/components/pages/job-type/IndexPane";
import { fetchJobTypes } from "@/hooks/server/fetchData";
import { GetServerSideProps } from "next";
import { JobType } from "@/API";

export default function LanguagesFrameworksPage({
  jobTypes,
}: {
  jobTypes: Array<JobType>;
}) {
  return (
    <>
      <Head>
        <title>【管理】言語・フレームワーク</title>
      </Head>
      <Layout>
        <IndexPane jobTypes={jobTypes} />
      </Layout>
    </>
  );
}
// サーバーサイドでスクールとコース情報を取得し、クライアントにpropsとして渡す
export const getServerSideProps: GetServerSideProps = async () => {
  const result = await fetchJobTypes();
  return {
    props: {
      jobTypes: result.jobTypes,
    },
  };
};
