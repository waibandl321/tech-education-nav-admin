import * as queries from "@/graphql/queries";
import * as mutations from "@/graphql/mutations";
import { generateClient } from "aws-amplify/api";
import {
  CreateLearningCenterCourseInput,
  DeleteLearningCenterCourseInput,
  LearningCenterCourse,
  UpdateLearningCenterCourseInput,
  UpdateLearningCenterCourseMutation,
} from "@/API";
import useAPIResponse from "./useAPIResponse";
import { orderBy } from "lodash";

export default function useLearningCourse() {
  const { getErrorMessage } = useAPIResponse();
  const client = generateClient();
  // 一覧取得
  const apiGetLearningCourses = async (): Promise<
    ApiResponse<Array<LearningCenterCourse>>
  > => {
    try {
      const result = await client.graphql({
        query: queries.listLearningCenterCourses,
        authMode: "apiKey",
      });
      return {
        isSuccess: true,
        data: orderBy(
          result.data.listLearningCenterCourses.items,
          "createdAt",
          "desc"
        ),
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  // 作成
  const apiCreateLearningCourse = async (
    learningCourse: CreateLearningCenterCourseInput
  ) => {
    try {
      const request: CreateLearningCenterCourseInput = {
        ...learningCourse,
      };
      const result = await client.graphql({
        query: mutations.createLearningCenterCourse,
        variables: { input: request },
      });
      return {
        isSuccess: true,
        data: result.data.createLearningCenterCourse,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  const apiUpdateLearningCourse = async (
    learningCourse: UpdateLearningCenterCourseInput
  ): Promise<
    ApiResponse<
      UpdateLearningCenterCourseMutation["updateLearningCenterCourse"]
    >
  > => {
    try {
      const result = await client.graphql({
        query: mutations.updateLearningCenterCourse,
        variables: { input: learningCourse },
      });
      return {
        isSuccess: true,
        data: result.data.updateLearningCenterCourse,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  // 削除
  const apiDeleteLearningCourse = async (deleteItem: LearningCenterCourse) => {
    try {
      const request: DeleteLearningCenterCourseInput = {
        id: deleteItem.id,
      };
      const deletedResult = await client.graphql({
        query: mutations.deleteLearningCenterCourse,
        variables: { input: request },
      });
      return {
        isSuccess: true,
        data: deletedResult.data.deleteLearningCenterCourse,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  return {
    apiGetLearningCourses,
    apiCreateLearningCourse,
    apiUpdateLearningCourse,
    apiDeleteLearningCourse,
  };
}
