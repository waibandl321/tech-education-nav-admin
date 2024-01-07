import {
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
  Container,
  IconButton,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
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
import ReviewUserModal from "@/components/pages/reviews/ReviewUserModal";

const headers = [
  { key: "learningCenterId", name: "スクール名" },
  { key: "learningCenterCourseId", name: "コース名" },
  { key: "courseName", name: "タイトル" },
  { key: "courseURL", name: "詳細" },
  { key: "postUser", name: "投稿ユーザー" },
  { key: "couseDetail", name: "公開/非公開" },
  { key: "admin", name: "編集/削除" },
];

export default function ReviewPane({
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
  const [viewedReview, setViewedReview] = useState<CourseReview | null>(null); //モーダルで閲覧する対象のデータ
  const [isOpenUserModal, setIsOpenUserModal] = useState(false);
  const { getUpdateRequest } = useAPIRequest();

  useEffect(() => {
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

  const fetchData = async () => {
    const getReviews = await apiGetReviews();
    setReviewList(getReviews.data ?? []);
  };

  // レビュー削除
  const handleDeleteReview = async (item: CourseReview) => {
    setLoading(true);
    try {
      const isDeleteResult = await apiDeleteReview(item);
      if (isDeleteResult.isSuccess) {
        fetchData();
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

  const handleOpenDialog = (item: CourseReview) => {
    setViewedReview(item);
    setIsOpenUserModal(true);
  };

  const handleCloseDialog = () => {
    setViewedReview(null);
    setIsOpenUserModal(false);
  };

  return (
    <Container>
      <Box sx={{ mt: 2 }} display="flex" justifyContent="flex-end">
        <IconButton color="primary" onClick={fetchData}>
          <RefreshIcon></RefreshIcon>
        </IconButton>
      </Box>
      <TableContainer component={Paper} sx={{ mt: 2 }} variant="outlined">
        <Table sx={{ overflow: "auto" }} aria-label="simple table" size="small">
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
                <TableCell sx={{ minWidth: 140 }}>
                  <Button onClick={() => handleOpenDialog(item)}>
                    投稿したユーザー
                  </Button>
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
      <ReviewUserModal
        isOpen={isOpenUserModal}
        closeModal={handleCloseDialog}
        targetReview={viewedReview}
      />
    </Container>
  );
}
