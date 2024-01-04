import Layout from "@/app/layout";
import Head from "next/head";
import { Grid } from "@mui/material";
import Sidebar from "@/components/common/section/Sidebar";
import { GetServerSideProps } from "next";
import { fetchReviewList, fetchSchoolData } from "@/hooks/server/fetchData";
import { CourseReview, LearningCenter, LearningCenterCourse } from "@/API";
import ReviewPane from "@/components/pages/reviews/ReviewPane";

export default function LearningCoursesIndex({
  reviews,
  centers,
  courses,
}: {
  reviews: Array<CourseReview>;
  centers: Array<LearningCenter>;
  courses: Array<LearningCenterCourse>;
}) {
  return (
    <>
      <Head>
        <title>レビュー情報</title>
      </Head>
      <Layout>
        <Grid container>
          <Grid item width={200}>
            <Sidebar />
          </Grid>
          <Grid item width={"calc(100% - 200px)"} paddingBottom={10}>
            <ReviewPane reviews={reviews} centers={centers} courses={courses} />
          </Grid>
        </Grid>
      </Layout>
    </>
  );
}
// サーバーサイドでスクールとコース情報を取得し、クライアントにpropsとして渡す
export const getServerSideProps: GetServerSideProps = async () => {
  const reviews = await fetchReviewList();
  const relativeSchoolData = await fetchSchoolData();
  return { props: { ...reviews, ...relativeSchoolData } };
};
