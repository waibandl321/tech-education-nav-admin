import Layout from "@/app/layout";
import Head from "next/head";
import IndexPane from "@/components/pages/languages-frameworks/IndexPane";
import { fetchLanguagesAndFrameworks } from "@/hooks/server/fetchData";
import { GetServerSideProps } from "next";
import { DevelopmentTool, Framework, ProgrammingLanguage } from "@/API";

export default function LanguagesFrameworksPage({
  languages,
  frameworks,
  developmentTools,
}: {
  languages: Array<ProgrammingLanguage>;
  frameworks: Array<Framework>;
  developmentTools: Array<DevelopmentTool>;
}) {
  return (
    <>
      <Head>
        <title>【管理】言語・フレームワーク</title>
      </Head>
      <Layout>
        <IndexPane
          languages={languages}
          frameworks={frameworks}
          developmentTools={developmentTools}
        />
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
      developmentTools: result.developmentTools,
    },
  };
};
