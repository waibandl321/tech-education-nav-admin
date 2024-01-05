import Layout from "@/app/layout";
import LoginPane from "@/components/pages/auth/Login/pane/LoginPane";
import Head from "next/head";

export default function Login() {
  return (
    <>
      <Head>
        <title>【管理】ログイン </title>
        <meta name="description" content="ページの説明" />
        {/* その他のメタタグ */}
      </Head>
      <Layout>
        <LoginPane />
      </Layout>
    </>
  );
}
