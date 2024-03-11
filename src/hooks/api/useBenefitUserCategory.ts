import * as queries from "@/graphql/queries";
import * as mutations from "@/graphql/mutations";
import { generateClient } from "aws-amplify/api";
import {
  CreateBenefitUserCategoryInput,
  DeleteBenefitUserCategoryInput,
  GetBenefitUserCategoryQuery,
  BenefitUserCategory,
  UpdateBenefitUserCategoryInput,
  UpdateBenefitUserCategoryMutation,
} from "@/API";
import useAPIResponse from "./useAPIResponse";
import useConvertData from "../utils/useConvertData";

export default function useBenefitUserCategory() {
  const { getErrorMessage } = useAPIResponse();
  const client = generateClient();
  const { ensureString } = useConvertData();

  // 優待ユーザー種別一覧取得
  const apiGetBenefitUserCategories = async (): Promise<
    ApiResponse<Array<BenefitUserCategory>>
  > => {
    try {
      const result = await client.graphql({
        query: queries.listBenefitUserCategories,
        authMode: "apiKey",
      });
      return {
        isSuccess: true,
        data: result.data.listBenefitUserCategories.items,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  // 優待ユーザー種別詳細取得
  const apiGetBenefitUserCategoryById = async (
    id: string | string[]
  ): Promise<
    ApiResponse<GetBenefitUserCategoryQuery["getBenefitUserCategory"]>
  > => {
    try {
      const result = await client.graphql({
        query: queries.getBenefitUserCategory,
        authMode: "apiKey",
        variables: { id: ensureString(id) },
      });
      return {
        isSuccess: true,
        data: result.data.getBenefitUserCategory ?? null,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  // 優待ユーザー種別作成
  const apiCreateBenefitUserCategory = async (
    items: CreateBenefitUserCategoryInput
  ) => {
    try {
      const request: CreateBenefitUserCategoryInput = {
        ...items,
      };
      const result = await client.graphql({
        query: mutations.createBenefitUserCategory,
        authMode: "userPool",
        variables: { input: request },
      });
      return {
        isSuccess: true,
        data: result.data.createBenefitUserCategory,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  // 優待ユーザー種別更新
  const apiUpdateBenefitUserCategory = async (
    item: UpdateBenefitUserCategoryInput
  ): Promise<
    ApiResponse<UpdateBenefitUserCategoryMutation["updateBenefitUserCategory"]>
  > => {
    try {
      const result = await client.graphql({
        query: mutations.updateBenefitUserCategory,
        authMode: "userPool",
        variables: { input: item },
      });
      return {
        isSuccess: true,
        data: result.data.updateBenefitUserCategory,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  // 優待ユーザー種別削除
  const apiDeleteBenefitUserCategory = async (
    deleteItem: BenefitUserCategory
  ) => {
    try {
      const request: DeleteBenefitUserCategoryInput = {
        id: deleteItem.id,
      };
      const deletedResult = await client.graphql({
        query: mutations.deleteBenefitUserCategory,
        authMode: "userPool",
        variables: { input: request },
      });
      return {
        isSuccess: true,
        data: deletedResult.data.deleteBenefitUserCategory,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  return {
    apiGetBenefitUserCategories,
    apiGetBenefitUserCategoryById,
    apiCreateBenefitUserCategory,
    apiUpdateBenefitUserCategory,
    apiDeleteBenefitUserCategory,
  };
}
