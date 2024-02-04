import * as queries from "@/graphql/queries";
import * as mutations from "@/graphql/mutations";
import { generateClient } from "aws-amplify/api";
import {
  CreateDevelopmentCategoryInput,
  DeleteDevelopmentCategoryInput,
  GetDevelopmentCategoryQuery,
  DevelopmentCategory,
  UpdateDevelopmentCategoryInput,
  UpdateDevelopmentCategoryMutation,
} from "@/API";
import useAPIResponse from "./useAPIResponse";
import useConvertData from "../utils/useConvertData";

export default function useDevelopmentCategory() {
  const { getErrorMessage } = useAPIResponse();
  const client = generateClient();
  const { ensureString } = useConvertData();
  // 一覧取得
  const apiGetDevelopmentCategorys = async (): Promise<
    ApiResponse<Array<DevelopmentCategory>>
  > => {
    try {
      const result = await client.graphql({
        query: queries.listDevelopmentCategories,
        authMode: "apiKey",
      });
      return {
        isSuccess: true,
        data: result.data.listDevelopmentCategories.items,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  // 詳細取得
  const apiGetDevelopmentCategoryById = async (
    id: string | string[]
  ): Promise<
    ApiResponse<GetDevelopmentCategoryQuery["getDevelopmentCategory"]>
  > => {
    try {
      const result = await client.graphql({
        query: queries.getDevelopmentCategory,
        authMode: "apiKey",
        variables: { id: ensureString(id) },
      });
      return {
        isSuccess: true,
        data: result.data.getDevelopmentCategory ?? null,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  // 作成
  const apiCreateDevelopmentCategory = async (
    item: CreateDevelopmentCategoryInput
  ) => {
    try {
      const request: CreateDevelopmentCategoryInput = {
        ...item,
      };
      const result = await client.graphql({
        query: mutations.createDevelopmentCategory,
        variables: { input: request },
      });
      return {
        isSuccess: true,
        data: result.data.createDevelopmentCategory,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  const apiUpdateDevelopmentCategory = async (
    item: UpdateDevelopmentCategoryInput
  ): Promise<
    ApiResponse<UpdateDevelopmentCategoryMutation["updateDevelopmentCategory"]>
  > => {
    try {
      const result = await client.graphql({
        query: mutations.updateDevelopmentCategory,
        variables: { input: item },
      });
      return {
        isSuccess: true,
        data: result.data.updateDevelopmentCategory,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  // 削除
  const apiDeleteDevelopmentCategory = async (
    deleteItem: DevelopmentCategory
  ) => {
    try {
      const request: DeleteDevelopmentCategoryInput = {
        id: deleteItem.id,
      };
      const deletedResult = await client.graphql({
        query: mutations.deleteDevelopmentCategory,
        variables: { input: request },
      });
      return {
        isSuccess: true,
        data: deletedResult.data.deleteDevelopmentCategory,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  return {
    apiGetDevelopmentCategorys,
    apiGetDevelopmentCategoryById,
    apiCreateDevelopmentCategory,
    apiUpdateDevelopmentCategory,
    apiDeleteDevelopmentCategory,
  };
}
