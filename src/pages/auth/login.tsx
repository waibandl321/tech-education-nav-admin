import Layout from "@/app/layout";
import LoginPane from "@/components/pages/auth/Login/pane/LoginPane";
import Head from "next/head";

export default function Login() {
  return (
    <>
      <Head>
        <title>ログイン | テック教育ナビ</title>
        <meta name="description" content="ページの説明" />
        {/* その他のメタタグ */}
      </Head>
      <Layout>
        <LoginPane />
      </Layout>
    </>
  );
}
