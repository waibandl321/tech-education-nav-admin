"use client";
import Layout from "@/app/layout";
import PasswordResetRequest from "@/components/pages/auth/PasswordReset/pane/PasswordResetRequest";
import Head from "next/head";

export default function ResetPassword() {
  return (
    <>
      <Head>
        <title>【管理】パスワード変更</title>
        <meta name="description" content="ページの説明" />
        {/* その他のメタタグ */}
      </Head>
      <PasswordResetRequest />
    </>
  );
}
