import * as queries from "@/graphql/queries";
import * as mutations from "@/graphql/mutations";
import { generateClient } from "aws-amplify/api";
import {
  CreateProgrammingLanguageInput,
  DeleteProgrammingLanguageInput,
  GetProgrammingLanguageQuery,
  ProgrammingLanguage,
  UpdateProgrammingLanguageInput,
  UpdateProgrammingLanguageMutation,
} from "@/API";
import useAPIResponse from "./useAPIResponse";
import useConvertData from "../utils/useConvertData";

export default function useProgrammingLanguage() {
  const { getErrorMessage } = useAPIResponse();
  const client = generateClient();
  const { ensureString } = useConvertData();
  // 一覧取得
  const apiGetProgrammingLanguages = async (): Promise<
    ApiResponse<Array<ProgrammingLanguage>>
  > => {
    try {
      const result = await client.graphql({
        query: queries.listProgrammingLanguages,
        authMode: "apiKey",
      });
      return {
        isSuccess: true,
        data: result.data.listProgrammingLanguages.items,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  // 詳細取得
  const apiGetProgrammingLanguageById = async (
    id: string | string[]
  ): Promise<
    ApiResponse<GetProgrammingLanguageQuery["getProgrammingLanguage"]>
  > => {
    try {
      const result = await client.graphql({
        query: queries.getProgrammingLanguage,
        authMode: "apiKey",
        variables: { id: ensureString(id) },
      });
      return {
        isSuccess: true,
        data: result.data.getProgrammingLanguage ?? null,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  // 作成
  const apiCreateProgrammingLanguage = async (
    programmingLanguage: CreateProgrammingLanguageInput
  ) => {
    try {
      const request: CreateProgrammingLanguageInput = {
        ...programmingLanguage,
      };
      const result = await client.graphql({
        query: mutations.createProgrammingLanguage,
        variables: { input: request },
      });
      return {
        isSuccess: true,
        data: result.data.createProgrammingLanguage,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  const apiUpdateProgrammingLanguage = async (
    programmingLanguage: UpdateProgrammingLanguageInput
  ): Promise<
    ApiResponse<UpdateProgrammingLanguageMutation["updateProgrammingLanguage"]>
  > => {
    try {
      const result = await client.graphql({
        query: mutations.updateProgrammingLanguage,
        variables: { input: programmingLanguage },
      });
      return {
        isSuccess: true,
        data: result.data.updateProgrammingLanguage,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  // 削除
  const apiDeleteProgrammingLanguage = async (
    deleteItem: ProgrammingLanguage
  ) => {
    try {
      const request: DeleteProgrammingLanguageInput = {
        id: deleteItem.id,
      };
      const deletedResult = await client.graphql({
        query: mutations.deleteProgrammingLanguage,
        variables: { input: request },
      });
      return {
        isSuccess: true,
        data: deletedResult.data.deleteProgrammingLanguage,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  return {
    apiGetProgrammingLanguages,
    apiGetProgrammingLanguageById,
    apiCreateProgrammingLanguage,
    apiUpdateProgrammingLanguage,
    apiDeleteProgrammingLanguage,
  };
}
