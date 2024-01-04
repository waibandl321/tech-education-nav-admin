import { generateClient } from "aws-amplify/api";
import {
  listCourseReviews,
  listLearningCenterCourses,
  listLearningCenters,
} from "@/graphql/queries";

const client = generateClient();

// スクールとコースの一覧をサーバーサイドで取得する
export const fetchSchoolData = async () => {
  try {
    const [learningCentersResult, learningCenterCoursesResult] =
      await Promise.all([
        client.graphql({
          query: listLearningCenters,
          authMode: "apiKey",
        }),
        client.graphql({
          query: listLearningCenterCourses,
          authMode: "apiKey",
        }),
      ]);
    return {
      centers: learningCentersResult.data.listLearningCenters.items,
      courses: learningCenterCoursesResult.data.listLearningCenterCourses.items,
    };
  } catch (error) {
    console.error("Error fetching listLearningCenters:", error);
    // エラーハンドリングをここに追加
    return {
      centers: [],
      courses: [],
    };
  }
};

export const fetchReviewList = async () => {
  try {
    const getReviewListResult = await client.graphql({
      query: listCourseReviews,
      authMode: "apiKey",
    });
    return {
      reviews: getReviewListResult.data.listCourseReviews.items,
    };
  } catch (error) {
    console.error("Error fetchReviewList:", error);
    return {
      reviews: [],
    };
  }
};
