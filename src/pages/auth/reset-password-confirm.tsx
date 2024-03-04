"use client";
import Layout from "@/app/layout";
import PasswordResetConfirm from "@/components/pages/auth/PasswordReset/pane/PasswordResetConfirm";
import Head from "next/head";

export default function ResetPasswordConfirm() {
  return (
    <>
      <Head>
        <title>【管理】パスワード再設定</title>
        <meta name="description" content="ページの説明" />
        {/* その他のメタタグ */}
      </Head>
      <PasswordResetConfirm />
    </>
  );
}
