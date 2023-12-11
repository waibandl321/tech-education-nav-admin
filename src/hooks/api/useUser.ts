import * as queries from "@/graphql/queries";
import * as mutations from "@/graphql/mutations";
import { generateClient } from "aws-amplify/api";
import { CreateUserInput, UpdateUserInput, User } from "@/API";
import { v4 as uuidv4 } from "uuid";
import useAPIResponse from "./useAPIResponse";

export default function useUser() {
  const { getErrorMessage } = useAPIResponse();
  const client = generateClient();

  /**
   * cognitoSubに一致するユーザー取得
   * @param cognitoSub CognitoユーザープールのuserId
   * @returns 作成したユーザー
   */
  const apiGetUserByCognitoSub = async (
    cognitoSub: string
  ): Promise<ApiResponse<User>> => {
    try {
      const variables = {
        filter: {
          cognitoSub: {
            eq: cognitoSub,
          },
        },
      };
      const result = await client.graphql({
        query: queries.listUsers,
        variables: variables,
      });
      return {
        isSuccess: true,
        data: result.data.listUsers.items[0],
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  /**
   * ユーザー作成
   */
  const apiCreateUser = async (
    cognitoSub: string
  ): Promise<ApiResponse<User>> => {
    try {
      const request: CreateUserInput = {
        cognitoSub,
        displayId: uuidv4(),
        isRegisterUserInfo: false,
        name: null,
        nameKana: null,
        gender: null,
        birthYear: null,
        birthMonth: null,
        birthDate: null,
        prefecture: null,
        previousJob: null,
      };
      const result = await client.graphql({
        query: mutations.createUser,
        variables: { input: request },
      });
      return {
        isSuccess: true,
        data: result.data.createUser,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  /**
   * ユーザー情報の更新
   */
  const apiUpdateUser = async (request: UpdateUserInput) => {
    try {
      const result = await client.graphql({
        query: mutations.updateUser,
        variables: { input: request },
      });
      return {
        isSuccess: true,
        data: result.data.updateUser,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  return {
    apiGetUserByCognitoSub,
    apiCreateUser,
    apiUpdateUser,
  };
}
