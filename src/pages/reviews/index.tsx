import Layout from "@/app/layout";
import Head from "next/head";
import {
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Box,
  Button,
  Checkbox,
} from "@mui/material";
import Sidebar from "@/components/common/section/Sidebar";
import { GetServerSideProps } from "next";
import { fetchReviewList, fetchSchoolData } from "@/hooks/server/fetchData";
import {
  CourseReview,
  LearningCenter,
  LearningCenterCourse,
  UpdateCourseReviewInput,
} from "@/API";
import useReview from "@/hooks/api/useReview";
import { useLoading } from "@/contexts/LoadingContext";
import { useEffect, useState } from "react";
import { useMessageAlert } from "@/contexts/MessageAlertContext";
import useAPIRequest from "@/hooks/utils/useAPIRequest";

const headers = [
  { key: "learningCenterId", name: "スクール名" },
  { key: "learningCenterCourseId", name: "コース名" },
  { key: "courseName", name: "title" },
  { key: "courseURL", name: "message" },
  { key: "couseDetail", name: "公開/非公開" },
  { key: "admin", name: "編集/削除" },
];

export default function LearningCoursesIndex({
  reviews,
  centers,
  courses,
}: {
  reviews: Array<CourseReview>;
  centers: Array<LearningCenter>;
  courses: Array<LearningCenterCourse>;
}) {
  const { apiDeleteReview, apiGetReviews, apiUpdateReview } = useReview();
  const { setLoading } = useLoading();
  const { setAlertMessage } = useMessageAlert();
  const [reviewList, setReviewList] = useState<Array<CourseReview>>([]);
  const { getUpdateRequest } = useAPIRequest();

  useEffect(() => {
    console.log(reviews);

    setReviewList(reviews);
  }, []);

  // レビュー更新
  const handleUpdateReview = async (item: CourseReview) => {
    setLoading(true);
    try {
      const request: UpdateCourseReviewInput = getUpdateRequest({
        ...item,
      });
      const updateResult = await apiUpdateReview(request);
      if (updateResult.isSuccess) {
        // 状態の更新
        setReviewList((prevItems) =>
          prevItems.map((r) => (r.id === item.id ? item : r))
        );
        setAlertMessage({
          type: "success",
          message: "更新しました。",
        });
      }
    } catch (error) {
      console.log(error);
      setAlertMessage({
        type: "error",
        message: "更新失敗",
      });
    } finally {
      setLoading(false);
    }
  };

  // レビュー削除
  const handleDeleteReview = async (item: CourseReview) => {
    setLoading(true);
    try {
      const isDeleteResult = await apiDeleteReview(item);
      if (isDeleteResult.isSuccess) {
        const getReviews = await apiGetReviews();
        setReviewList(getReviews.data ?? []);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // スクール名取得
  const getTargetCenterName = (learningCenterId: string) => {
    return centers.find((center) => center.id === learningCenterId)?.name ?? "";
  };

  // コース名取得
  const getTargetCourseName = (courseId: string) => {
    return courses.find((course) => course.id === courseId)?.courseName ?? "";
  };

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
            <TableContainer component={Paper} sx={{ mt: 2 }} variant="outlined">
              <Table
                sx={{ overflow: "auto" }}
                aria-label="simple table"
                size="small"
              >
                <TableHead sx={{ backgroundColor: "#eee" }}>
                  <TableRow>
                    {headers.map((item, index) => (
                      <TableCell key={index} sx={{ whiteSpace: "nowrap" }}>
                        {item.name}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {reviewList.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell sx={{ minWidth: 100 }}>
                        {getTargetCenterName(item.learningCenterId)}
                      </TableCell>
                      <TableCell sx={{ minWidth: 100 }}>
                        {getTargetCourseName(item.learningCenterCourseId)}
                      </TableCell>
                      <TableCell sx={{ minWidth: 200 }}>
                        {item.reviewTitle || ""}
                      </TableCell>
                      <TableCell sx={{ minWidth: 200 }}>
                        {item.reviewDetail || ""}
                      </TableCell>
                      <TableCell>
                        <Checkbox
                          checked={item.isPublished}
                          onChange={() =>
                            handleUpdateReview({
                              ...item,
                              isPublished: !item.isPublished,
                            })
                          }
                        />
                      </TableCell>
                      <TableCell width={100}>
                        <Box display="flex" alignItems="center">
                          <Button
                            aria-label="delete button"
                            color="error"
                            onClick={() => handleDeleteReview(item)}
                          >
                            削除
                          </Button>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
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
