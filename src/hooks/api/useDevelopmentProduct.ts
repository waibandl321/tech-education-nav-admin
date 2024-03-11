import * as queries from "@/graphql/queries";
import * as mutations from "@/graphql/mutations";
import { generateClient } from "aws-amplify/api";
import {
  CreateDevelopmentProductInput,
  DeleteDevelopmentProductInput,
  GetDevelopmentProductQuery,
  DevelopmentProduct,
  UpdateDevelopmentProductInput,
  UpdateDevelopmentProductMutation,
} from "@/API";
import useAPIResponse from "./useAPIResponse";
import useConvertData from "../utils/useConvertData";

export default function useDevelopmentProduct() {
  const { getErrorMessage } = useAPIResponse();
  const client = generateClient();
  const { ensureString } = useConvertData();
  // 一覧取得
  const apiGetDevelopmentProducts = async (): Promise<
    ApiResponse<Array<DevelopmentProduct>>
  > => {
    try {
      const result = await client.graphql({
        query: queries.listDevelopmentProducts,
        authMode: "apiKey",
      });
      return {
        isSuccess: true,
        data: result.data.listDevelopmentProducts.items,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  // 詳細取得
  const apiGetDevelopmentProductById = async (
    id: string | string[]
  ): Promise<
    ApiResponse<GetDevelopmentProductQuery["getDevelopmentProduct"]>
  > => {
    try {
      const result = await client.graphql({
        query: queries.getDevelopmentProduct,
        authMode: "apiKey",
        variables: { id: ensureString(id) },
      });
      return {
        isSuccess: true,
        data: result.data.getDevelopmentProduct ?? null,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  // 作成
  const apiCreateDevelopmentProduct = async (
    item: CreateDevelopmentProductInput
  ) => {
    try {
      const request: CreateDevelopmentProductInput = {
        ...item,
      };
      const result = await client.graphql({
        query: mutations.createDevelopmentProduct,
        authMode: "userPool",
        variables: { input: request },
      });
      return {
        isSuccess: true,
        data: result.data.createDevelopmentProduct,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  const apiUpdateDevelopmentProduct = async (
    item: UpdateDevelopmentProductInput
  ): Promise<
    ApiResponse<UpdateDevelopmentProductMutation["updateDevelopmentProduct"]>
  > => {
    try {
      const result = await client.graphql({
        query: mutations.updateDevelopmentProduct,
        authMode: "userPool",
        variables: { input: item },
      });
      return {
        isSuccess: true,
        data: result.data.updateDevelopmentProduct,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  // 削除
  const apiDeleteDevelopmentProduct = async (
    deleteItem: DevelopmentProduct
  ) => {
    try {
      const request: DeleteDevelopmentProductInput = {
        id: deleteItem.id,
      };
      const deletedResult = await client.graphql({
        query: mutations.deleteDevelopmentProduct,
        authMode: "userPool",
        variables: { input: request },
      });
      return {
        isSuccess: true,
        data: deletedResult.data.deleteDevelopmentProduct,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  return {
    apiGetDevelopmentProducts,
    apiGetDevelopmentProductById,
    apiCreateDevelopmentProduct,
    apiUpdateDevelopmentProduct,
    apiDeleteDevelopmentProduct,
  };
}
