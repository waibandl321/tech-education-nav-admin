import * as queries from "@/graphql/queries";
import * as mutations from "@/graphql/mutations";
import { generateClient } from "aws-amplify/api";
import {
  CreateFrameworkInput,
  DeleteFrameworkInput,
  GetFrameworkQuery,
  Framework,
  UpdateFrameworkInput,
  UpdateFrameworkMutation,
} from "@/API";
import useAPIResponse from "./useAPIResponse";
import useConvertData from "../utils/useConvertData";

export default function useFramework() {
  const { getErrorMessage } = useAPIResponse();
  const client = generateClient();
  const { ensureString } = useConvertData();
  // 一覧取得
  const apiGetFrameworks = async (): Promise<ApiResponse<Array<Framework>>> => {
    try {
      const result = await client.graphql({
        query: queries.listFrameworks,
        authMode: "apiKey",
      });
      return {
        isSuccess: true,
        data: result.data.listFrameworks.items,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  // 詳細取得
  const apiGetFrameworkById = async (
    id: string | string[]
  ): Promise<ApiResponse<GetFrameworkQuery["getFramework"]>> => {
    try {
      const result = await client.graphql({
        query: queries.getFramework,
        authMode: "apiKey",
        variables: { id: ensureString(id) },
      });
      return {
        isSuccess: true,
        data: result.data.getFramework ?? null,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  // 作成
  const apiCreateFramework = async (Framework: CreateFrameworkInput) => {
    try {
      const request: CreateFrameworkInput = {
        ...Framework,
      };
      const result = await client.graphql({
        query: mutations.createFramework,
        authMode: "userPool",
        variables: { input: request },
      });
      return {
        isSuccess: true,
        data: result.data.createFramework,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  const apiUpdateFramework = async (
    Framework: UpdateFrameworkInput
  ): Promise<ApiResponse<UpdateFrameworkMutation["updateFramework"]>> => {
    try {
      const result = await client.graphql({
        query: mutations.updateFramework,
        authMode: "userPool",
        variables: { input: Framework },
      });
      return {
        isSuccess: true,
        data: result.data.updateFramework,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  // 削除
  const apiDeleteFramework = async (deleteItem: Framework) => {
    try {
      const request: DeleteFrameworkInput = {
        id: deleteItem.id,
      };
      const deletedResult = await client.graphql({
        query: mutations.deleteFramework,
        authMode: "userPool",
        variables: { input: request },
      });
      return {
        isSuccess: true,
        data: deletedResult.data.deleteFramework,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  return {
    apiGetFrameworks,
    apiGetFrameworkById,
    apiCreateFramework,
    apiUpdateFramework,
    apiDeleteFramework,
  };
}
