import Layout from "@/app/layout";
import Head from "next/head";
import LearningCoursesPane from "@/components/pages/learning-course/LearningCoursesPane";
import { Grid } from "@mui/material";
import Sidebar from "@/components/common/section/Sidebar";

export default function LearningCoursesIndex() {
  return (
    <>
      <Head>
        <title>【管理】コース情報</title>
      </Head>
      <Layout>
        <Grid container>
          <Grid item width={200}>
            <Sidebar />
          </Grid>
          <Grid item width={"calc(100% - 200px)"} paddingBottom={10}>
            <LearningCoursesPane />
          </Grid>
        </Grid>
      </Layout>
    </>
  );
}
