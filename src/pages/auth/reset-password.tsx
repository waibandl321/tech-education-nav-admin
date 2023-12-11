"use client";
import Layout from "@/app/layout";
import PasswordResetRequest from "@/components/pages/auth/PasswordReset/pane/PasswordResetRequest";
import Head from "next/head";

export default function ResetPassword() {
  return (
    <>
      <Head>
        <title>パスワード変更 | テック教育ナビ</title>
        <meta name="description" content="ページの説明" />
        {/* その他のメタタグ */}
      </Head>
      <Layout>
        <PasswordResetRequest />
      </Layout>
    </>
  );
}
