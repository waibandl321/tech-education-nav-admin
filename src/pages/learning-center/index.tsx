import Layout from "@/app/layout";
import Head from "next/head";
import LearningCenterListPane from "@/components/pages/learning-center/LearningCenterListPane";
import { GetServerSideProps } from "next";
import { fetchLearningCenterPageData } from "@/hooks/server/fetchData";
import { CreditCard, LearningCenter, PaymentMethod } from "@/API";

export default function LearningCenterIndex({
  paymentMethods,
  creditCards,
  centers,
}: {
  paymentMethods: Array<PaymentMethod>;
  creditCards: Array<CreditCard>;
  centers: Array<LearningCenter>;
}) {
  return (
    <>
      <Head>
        <title>【管理】スクール情報</title>
      </Head>
      <Layout>
        <LearningCenterListPane
          centers={centers}
          paymentMethods={paymentMethods}
          creditCards={creditCards}
        />
      </Layout>
    </>
  );
}

// サーバーサイドでスクールとコース情報を取得し、クライアントにpropsとして渡す
export const getServerSideProps: GetServerSideProps = async () => {
  const result = await fetchLearningCenterPageData();
  return {
    props: {
      centers: result.centers,
      paymentMethods: result.paymentMethods,
      creditCards: result.creditCards,
    },
  };
};
