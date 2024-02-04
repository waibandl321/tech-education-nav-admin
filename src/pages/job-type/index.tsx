import Layout from "@/app/layout";
import Head from "next/head";
import IndexPane from "@/components/pages/job-type/IndexPane";
import { fetchJobTypes } from "@/hooks/server/fetchData";
import { GetServerSideProps } from "next";
import {
  DevelopmentCategory,
  DevelopmentProduct,
  JobType,
  Qualification,
} from "@/API";

export default function JobTypePage({
  jobTypes,
  qualifications,
  developmentCategories,
  developmentProducts,
}: {
  jobTypes: Array<JobType>;
  qualifications: Array<Qualification>;
  developmentCategories: Array<DevelopmentCategory>;
  developmentProducts: Array<DevelopmentProduct>;
}) {
  return (
    <>
      <Head>
        <title>【管理】目的/職種/資格</title>
      </Head>
      <Layout>
        <IndexPane
          jobTypes={jobTypes}
          qualifications={qualifications}
          developmentCategories={developmentCategories}
          developmentProducts={developmentProducts}
        />
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
      qualifications: result.qualifications,
      developmentCategories: result.developmentCategories,
      developmentProducts: result.developmentProducts,
    },
  };
};
