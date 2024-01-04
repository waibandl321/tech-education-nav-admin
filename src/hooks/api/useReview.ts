import * as queries from "@/graphql/queries";
import * as mutations from "@/graphql/mutations";
import { generateClient } from "aws-amplify/api";
import {
  CourseReview,
  DeleteCourseReviewInput,
  UpdateCourseReviewInput,
  UpdateCourseReviewMutation,
} from "@/API";
import useAPIResponse from "./useAPIResponse";
import { orderBy } from "lodash";

export default function useReview() {
  const { getErrorMessage } = useAPIResponse();
  const client = generateClient();
  // 一覧取得
  const apiGetReviews = async (): Promise<ApiResponse<Array<CourseReview>>> => {
    try {
      const result = await client.graphql({
        query: queries.listCourseReviews,
        authMode: "apiKey",
      });
      return {
        isSuccess: true,
        data: orderBy(result.data.listCourseReviews.items, "createdAt", "desc"),
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  const apiUpdateReview = async (
    learningCourse: UpdateCourseReviewInput
  ): Promise<ApiResponse<UpdateCourseReviewMutation["updateCourseReview"]>> => {
    try {
      const result = await client.graphql({
        query: mutations.updateCourseReview,
        variables: { input: learningCourse },
      });
      return {
        isSuccess: true,
        data: result.data.updateCourseReview,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  // 削除
  const apiDeleteReview = async (deleteItem: CourseReview) => {
    try {
      const request: DeleteCourseReviewInput = {
        id: deleteItem.id,
      };
      const deletedResult = await client.graphql({
        query: mutations.deleteCourseReview,
        variables: { input: request },
      });
      return {
        isSuccess: true,
        data: deletedResult.data.deleteCourseReview,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  return {
    apiGetReviews,
    apiDeleteReview,
    apiUpdateReview,
  };
}
