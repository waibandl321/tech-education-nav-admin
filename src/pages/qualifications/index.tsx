import Layout from "@/app/layout";
import Head from "next/head";
import QualificationPane from "@/components/pages/qualification/QualificationPane";
import { fetchQualifications } from "@/hooks/server/fetchData";
import { GetServerSideProps } from "next";
import { Qualification } from "@/API";

export default function JobTypePage({
  qualifications,
}: {
  qualifications: Array<Qualification>;
}) {
  return (
    <>
      <Head>
        <title>【管理】資格</title>
      </Head>
      <Layout>
        <QualificationPane qualifications={qualifications} />
      </Layout>
    </>
  );
}
// サーバーサイドでスクールとコース情報を取得し、クライアントにpropsとして渡す
export const getServerSideProps: GetServerSideProps = async () => {
  const result = await fetchQualifications();
  return {
    props: {
      qualifications: result.qualifications,
    },
  };
};
