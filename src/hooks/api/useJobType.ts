import * as queries from "@/graphql/queries";
import * as mutations from "@/graphql/mutations";
import { generateClient } from "aws-amplify/api";
import {
  CreateJobTypeInput,
  DeleteJobTypeInput,
  GetJobTypeQuery,
  JobType,
  UpdateJobTypeInput,
  UpdateJobTypeMutation,
} from "@/API";
import useAPIResponse from "./useAPIResponse";
import useConvertData from "../utils/useConvertData";

export default function useJobType() {
  const { getErrorMessage } = useAPIResponse();
  const client = generateClient();
  const { ensureString } = useConvertData();
  // 一覧取得
  const apiGetJobTypes = async (): Promise<ApiResponse<Array<JobType>>> => {
    try {
      const result = await client.graphql({
        query: queries.listJobTypes,
        authMode: "apiKey",
      });
      return {
        isSuccess: true,
        data: result.data.listJobTypes.items,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  // 詳細取得
  const apiGetJobTypeById = async (
    id: string | string[]
  ): Promise<ApiResponse<GetJobTypeQuery["getJobType"]>> => {
    try {
      const result = await client.graphql({
        query: queries.getJobType,
        authMode: "apiKey",
        variables: { id: ensureString(id) },
      });
      return {
        isSuccess: true,
        data: result.data.getJobType ?? null,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  // 作成
  const apiCreateJobType = async (JobType: CreateJobTypeInput) => {
    try {
      const request: CreateJobTypeInput = {
        ...JobType,
      };
      const result = await client.graphql({
        query: mutations.createJobType,
        authMode: "userPool",
        variables: { input: request },
      });
      return {
        isSuccess: true,
        data: result.data.createJobType,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  const apiUpdateJobType = async (
    JobType: UpdateJobTypeInput
  ): Promise<ApiResponse<UpdateJobTypeMutation["updateJobType"]>> => {
    try {
      const result = await client.graphql({
        query: mutations.updateJobType,
        authMode: "userPool",
        variables: { input: JobType },
      });
      return {
        isSuccess: true,
        data: result.data.updateJobType,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  // 削除
  const apiDeleteJobType = async (deleteItem: JobType) => {
    try {
      const request: DeleteJobTypeInput = {
        id: deleteItem.id,
      };
      const deletedResult = await client.graphql({
        query: mutations.deleteJobType,
        authMode: "userPool",
        variables: { input: request },
      });
      return {
        isSuccess: true,
        data: deletedResult.data.deleteJobType,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  return {
    apiGetJobTypes,
    apiGetJobTypeById,
    apiCreateJobType,
    apiUpdateJobType,
    apiDeleteJobType,
  };
}
