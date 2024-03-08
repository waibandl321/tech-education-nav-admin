import Layout from "@/app/layout";
import Head from "next/head";
import JobTypePane from "@/components/pages/job-type/JobTypePane";
import { fetchJobTypes } from "@/hooks/server/fetchData";
import { GetServerSideProps } from "next";
import { JobType } from "@/API";

export default function JobTypePage({
  jobTypes,
}: {
  jobTypes: Array<JobType>;
}) {
  return (
    <>
      <Head>
        <title>【管理】職種</title>
      </Head>
      <Layout>
        <JobTypePane jobTypes={jobTypes} />
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
