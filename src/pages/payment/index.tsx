import Layout from "@/app/layout";
import Head from "next/head";
import IndexPane from "@/components/pages/payment/IndexPane";
import { fetchPaymentPageData } from "@/hooks/server/fetchData";
import { GetServerSideProps } from "next";
import { CreditCard, PaymentMethod } from "@/API";

export default function PaymentPage({
  paymentMethods,
  creditCards,
}: {
  paymentMethods: Array<PaymentMethod>;
  creditCards: Array<CreditCard>;
}) {
  return (
    <>
      <Head>
        <title>【管理】支払い</title>
      </Head>
      <Layout>
        <IndexPane paymentMethods={paymentMethods} creditCards={creditCards} />
      </Layout>
    </>
  );
}
// サーバーサイドでスクールとコース情報を取得し、クライアントにpropsとして渡す
export const getServerSideProps: GetServerSideProps = async () => {
  const result = await fetchPaymentPageData();
  return {
    props: {
      paymentMethods: result.paymentMethods,
      creditCards: result.creditCards,
    },
  };
};
