import Layout from "@/app/layout";
import Head from "next/head";
import LearningCoursesPane from "@/components/pages/learning-course/LearningCoursesPane";
import { GetServerSideProps } from "next";
import { fetchCoursePageData } from "@/hooks/server/fetchData";
import {
  CreditCard,
  DevelopmentTool,
  Framework,
  JobType,
  LearningCenter,
  LearningCenterCourse,
  PaymentMethod,
  ProgrammingLanguage,
} from "@/API";

export default function LearningCoursesIndex({
  centers,
  courses,
  languages,
  frameworks,
  developmentTools,
  jobTypes,
  paymentMethods,
  creditCards,
}: {
  centers: Array<LearningCenter>;
  courses: Array<LearningCenterCourse>;
  languages: Array<ProgrammingLanguage>;
  frameworks: Array<Framework>;
  developmentTools: Array<DevelopmentTool>;
  jobTypes: Array<JobType>;
  paymentMethods: Array<PaymentMethod>;
  creditCards: Array<CreditCard>;
}) {
  return (
    <>
      <Head>
        <title>【管理】コース情報</title>
      </Head>
      <Layout>
        <LearningCoursesPane
          centers={centers}
          courses={courses}
          languages={languages}
          frameworks={frameworks}
          developmentTools={developmentTools}
          jobTypes={jobTypes}
          paymentMethods={paymentMethods}
          creditCards={creditCards}
        />
      </Layout>
    </>
  );
}
// サーバーサイドでスクールとコース情報を取得し、クライアントにpropsとして渡す
export const getServerSideProps: GetServerSideProps = async () => {
  const result = await fetchCoursePageData();
  return {
    props: {
      centers: result.centers,
      courses: result.courses,
      languages: result.languages,
      frameworks: result.frameworks,
      developmentTools: result.developmentTools,
      jobTypes: result.jobTypes,
      paymentMethods: result.paymentMethods,
      creditCards: result.creditCards,
    },
  };
};
