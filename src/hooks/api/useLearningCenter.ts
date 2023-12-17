import * as queries from "@/graphql/queries";
import * as mutations from "@/graphql/mutations";
import { generateClient } from "aws-amplify/api";
import {
  CreateLearningCenterInput,
  DeleteLearningCenterInput,
  GetLearningCenterQuery,
  LearningCenter,
  UpdateLearningCenterInput,
  UpdateLearningCenterMutation,
} from "@/API";
import useAPIResponse from "./useAPIResponse";
import useConvertData from "../utils/useConvertData";

export default function useLearningCenter() {
  const { getErrorMessage } = useAPIResponse();
  const client = generateClient();
  const { ensureString } = useConvertData();
  // 一覧取得
  const apiGetLearningCenters = async (): Promise<
    ApiResponse<Array<LearningCenter>>
  > => {
    try {
      const result = await client.graphql({
        query: queries.listLearningCenters,
      });
      return {
        isSuccess: true,
        data: result.data.listLearningCenters.items,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  // 詳細取得
  const apiGetLearningCenterById = async (
    id: string | string[]
  ): Promise<ApiResponse<GetLearningCenterQuery["getLearningCenter"]>> => {
    try {
      const result = await client.graphql({
        query: queries.getLearningCenter,
        variables: { id: ensureString(id) },
      });
      return {
        isSuccess: true,
        data: result.data.getLearningCenter ?? null,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  // 作成
  const apiCreateLearningCenter = async (
    learningCenter: CreateLearningCenterInput
  ) => {
    try {
      const request: CreateLearningCenterInput = {
        ...learningCenter,
      };
      const result = await client.graphql({
        query: mutations.createLearningCenter,
        variables: { input: request },
      });
      return {
        isSuccess: true,
        data: result.data.createLearningCenter,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  const apiUpdateLearningCenter = async (
    learningCenter: UpdateLearningCenterInput
  ): Promise<
    ApiResponse<UpdateLearningCenterMutation["updateLearningCenter"]>
  > => {
    try {
      const result = await client.graphql({
        query: mutations.updateLearningCenter,
        variables: { input: learningCenter },
      });
      return {
        isSuccess: true,
        data: result.data.updateLearningCenter,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  // 削除
  const apiDeleteLearningCenter = async (deleteItem: LearningCenter) => {
    try {
      const request: DeleteLearningCenterInput = {
        id: deleteItem.id,
      };
      const deletedResult = await client.graphql({
        query: mutations.deleteLearningCenter,
        variables: { input: request },
      });
      return {
        isSuccess: true,
        data: deletedResult.data.deleteLearningCenter,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  return {
    apiGetLearningCenters,
    apiGetLearningCenterById,
    apiCreateLearningCenter,
    apiUpdateLearningCenter,
    apiDeleteLearningCenter,
  };
}
