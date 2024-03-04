import * as queries from "@/graphql/queries";
import * as mutations from "@/graphql/mutations";
import { generateClient } from "aws-amplify/api";
import {
  CreateQualificationInput,
  DeleteQualificationInput,
  GetQualificationQuery,
  Qualification,
  UpdateQualificationInput,
  UpdateQualificationMutation,
} from "@/API";
import useAPIResponse from "./useAPIResponse";
import useConvertData from "../utils/useConvertData";

export default function useQualification() {
  const { getErrorMessage } = useAPIResponse();
  const client = generateClient();
  const { ensureString } = useConvertData();
  // 一覧取得
  const apiGetQualifications = async (): Promise<
    ApiResponse<Array<Qualification>>
  > => {
    try {
      const result = await client.graphql({
        query: queries.listQualifications,
        authMode: "apiKey",
      });
      return {
        isSuccess: true,
        data: result.data.listQualifications.items,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  // 詳細取得
  const apiGetQualificationById = async (
    id: string | string[]
  ): Promise<ApiResponse<GetQualificationQuery["getQualification"]>> => {
    try {
      const result = await client.graphql({
        query: queries.getQualification,
        authMode: "apiKey",
        variables: { id: ensureString(id) },
      });
      return {
        isSuccess: true,
        data: result.data.getQualification ?? null,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  // 作成
  const apiCreateQualification = async (
    qualification: CreateQualificationInput
  ) => {
    try {
      const request: CreateQualificationInput = {
        ...qualification,
      };
      const result = await client.graphql({
        query: mutations.createQualification,
        authMode: "userPool",
        variables: { input: request },
      });
      return {
        isSuccess: true,
        data: result.data.createQualification,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  const apiUpdateQualification = async (
    qualification: UpdateQualificationInput
  ): Promise<
    ApiResponse<UpdateQualificationMutation["updateQualification"]>
  > => {
    try {
      const result = await client.graphql({
        query: mutations.updateQualification,
        authMode: "userPool",
        variables: { input: qualification },
      });
      return {
        isSuccess: true,
        data: result.data.updateQualification,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  // 削除
  const apiDeleteQualification = async (deleteItem: Qualification) => {
    try {
      const request: DeleteQualificationInput = {
        id: deleteItem.id,
      };
      const deletedResult = await client.graphql({
        query: mutations.deleteQualification,
        authMode: "userPool",
        variables: { input: request },
      });
      return {
        isSuccess: true,
        data: deletedResult.data.deleteQualification,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  return {
    apiGetQualifications,
    apiGetQualificationById,
    apiCreateQualification,
    apiUpdateQualification,
    apiDeleteQualification,
  };
}
