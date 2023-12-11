"use client";
import Layout from "@/app/layout";
import PasswordResetConfirm from "@/components/pages/auth/PasswordReset/pane/PasswordResetConfirm";
import Head from "next/head";

export default function ResetPasswordConfirm() {
  return (
    <>
      <Head>
        <title>パスワード再設定 | テック教育ナビ</title>
        <meta name="description" content="ページの説明" />
        {/* その他のメタタグ */}
      </Head>
      <Layout>
        <PasswordResetConfirm />
      </Layout>
    </>
  );
}
