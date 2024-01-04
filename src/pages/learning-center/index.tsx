import Layout from "@/app/layout";
import Head from "next/head";
import LearningCenterListPane from "@/components/pages/learning-center/LearningCenterListPane";
import { Grid } from "@mui/material";
import Sidebar from "@/components/common/section/Sidebar";

export default function LearningCenterIndex() {
  return (
    <>
      <Head>
        <title>スクール情報</title>
      </Head>
      <Layout>
        <Grid container>
          <Grid item width={200}>
            <Sidebar />
          </Grid>
          <Grid item width={"calc(100% - 200px)"} paddingBottom={10}>
            <LearningCenterListPane />
          </Grid>
        </Grid>
      </Layout>
    </>
  );
}
