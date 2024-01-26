import Layout from "@/app/layout";
import Head from "next/head";
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
        <title>【管理】レビュー情報</title>
      </Head>
      <Layout>
        <ReviewPane reviews={reviews} centers={centers} courses={courses} />
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
