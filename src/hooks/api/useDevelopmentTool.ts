import * as queries from "@/graphql/queries";
import * as mutations from "@/graphql/mutations";
import { generateClient } from "aws-amplify/api";
import {
  CreateDevelopmentToolInput,
  DeleteDevelopmentToolInput,
  GetDevelopmentToolQuery,
  DevelopmentTool,
  UpdateDevelopmentToolInput,
  UpdateDevelopmentToolMutation,
} from "@/API";
import useAPIResponse from "./useAPIResponse";
import useConvertData from "../utils/useConvertData";

export default function useDevelopmentTool() {
  const { getErrorMessage } = useAPIResponse();
  const client = generateClient();
  const { ensureString } = useConvertData();
  // 一覧取得
  const apiGetDevelopmentTools = async (): Promise<
    ApiResponse<Array<DevelopmentTool>>
  > => {
    try {
      const result = await client.graphql({
        query: queries.listDevelopmentTools,
        authMode: "apiKey",
      });
      return {
        isSuccess: true,
        data: result.data.listDevelopmentTools.items,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  // 詳細取得
  const apiGetDevelopmentToolById = async (
    id: string | string[]
  ): Promise<ApiResponse<GetDevelopmentToolQuery["getDevelopmentTool"]>> => {
    try {
      const result = await client.graphql({
        query: queries.getDevelopmentTool,
        authMode: "apiKey",
        variables: { id: ensureString(id) },
      });
      return {
        isSuccess: true,
        data: result.data.getDevelopmentTool ?? null,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  // 作成
  const apiCreateDevelopmentTool = async (
    DevelopmentTool: CreateDevelopmentToolInput
  ) => {
    try {
      const request: CreateDevelopmentToolInput = {
        ...DevelopmentTool,
      };
      const result = await client.graphql({
        query: mutations.createDevelopmentTool,
        variables: { input: request },
      });
      return {
        isSuccess: true,
        data: result.data.createDevelopmentTool,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  const apiUpdateDevelopmentTool = async (
    DevelopmentTool: UpdateDevelopmentToolInput
  ): Promise<
    ApiResponse<UpdateDevelopmentToolMutation["updateDevelopmentTool"]>
  > => {
    try {
      const result = await client.graphql({
        query: mutations.updateDevelopmentTool,
        variables: { input: DevelopmentTool },
      });
      return {
        isSuccess: true,
        data: result.data.updateDevelopmentTool,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  // 削除
  const apiDeleteDevelopmentTool = async (deleteItem: DevelopmentTool) => {
    try {
      const request: DeleteDevelopmentToolInput = {
        id: deleteItem.id,
      };
      const deletedResult = await client.graphql({
        query: mutations.deleteDevelopmentTool,
        variables: { input: request },
      });
      return {
        isSuccess: true,
        data: deletedResult.data.deleteDevelopmentTool,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  return {
    apiGetDevelopmentTools,
    apiGetDevelopmentToolById,
    apiCreateDevelopmentTool,
    apiUpdateDevelopmentTool,
    apiDeleteDevelopmentTool,
  };
}
