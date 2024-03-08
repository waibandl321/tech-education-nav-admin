import Layout from "@/app/layout";
import Head from "next/head";
import IndexPane from "@/components/pages/languages-frameworks/IndexPane";
import { fetchLanguagesAndFrameworks } from "@/hooks/server/fetchData";
import { GetServerSideProps } from "next";
import { Framework, ProgrammingLanguage } from "@/API";

export default function LanguagesFrameworksPage({
  languages,
  frameworks,
}: {
  languages: Array<ProgrammingLanguage>;
  frameworks: Array<Framework>;
}) {
  return (
    <>
      <Head>
        <title>【管理】言語・フレームワーク</title>
      </Head>
      <Layout>
        <IndexPane languages={languages} frameworks={frameworks} />
      </Layout>
    </>
  );
}
// サーバーサイドでスクールとコース情報を取得し、クライアントにpropsとして渡す
export const getServerSideProps: GetServerSideProps = async () => {
  const result = await fetchLanguagesAndFrameworks();
  return {
    props: {
      languages: result.languages,
      frameworks: result.frameworks,
    },
  };
};
