import * as queries from "@/graphql/queries";
import * as mutations from "@/graphql/mutations";
import { generateClient } from "aws-amplify/api";
import {
  CreatePaymentMethodInput,
  DeletePaymentMethodInput,
  GetPaymentMethodQuery,
  PaymentMethod,
  UpdatePaymentMethodInput,
  UpdatePaymentMethodMutation,
  CreateCreditCardInput,
  DeleteCreditCardInput,
  GetCreditCardQuery,
  CreditCard,
  UpdateCreditCardInput,
  UpdateCreditCardMutation,
} from "@/API";
import useAPIResponse from "./useAPIResponse";
import useConvertData from "../utils/useConvertData";

export default function usePayment() {
  const { getErrorMessage } = useAPIResponse();
  const client = generateClient();
  const { ensureString } = useConvertData();
  // 支払い方法一覧取得
  const apiGetPaymentMethods = async (): Promise<
    ApiResponse<Array<PaymentMethod>>
  > => {
    try {
      const result = await client.graphql({
        query: queries.listPaymentMethods,
        authMode: "apiKey",
      });
      return {
        isSuccess: true,
        data: result.data.listPaymentMethods.items,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  // 支払い方法詳細取得
  const apiGetPaymentMethodById = async (
    id: string | string[]
  ): Promise<ApiResponse<GetPaymentMethodQuery["getPaymentMethod"]>> => {
    try {
      const result = await client.graphql({
        query: queries.getPaymentMethod,
        authMode: "apiKey",
        variables: { id: ensureString(id) },
      });
      return {
        isSuccess: true,
        data: result.data.getPaymentMethod ?? null,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  // 支払い方法作成
  const apiCreatePaymentMethod = async (
    paymentMethod: CreatePaymentMethodInput
  ) => {
    try {
      const request: CreatePaymentMethodInput = {
        ...paymentMethod,
      };
      const result = await client.graphql({
        query: mutations.createPaymentMethod,
        variables: { input: request },
      });
      return {
        isSuccess: true,
        data: result.data.createPaymentMethod,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  // 支払い方法更新
  const apiUpdatePaymentMethod = async (
    paymentMethod: UpdatePaymentMethodInput
  ): Promise<
    ApiResponse<UpdatePaymentMethodMutation["updatePaymentMethod"]>
  > => {
    try {
      const result = await client.graphql({
        query: mutations.updatePaymentMethod,
        variables: { input: paymentMethod },
      });
      return {
        isSuccess: true,
        data: result.data.updatePaymentMethod,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  // 支払い方法削除
  const apiDeletePaymentMethod = async (deleteItem: PaymentMethod) => {
    try {
      const request: DeletePaymentMethodInput = {
        id: deleteItem.id,
      };
      const deletedResult = await client.graphql({
        query: mutations.deletePaymentMethod,
        variables: { input: request },
      });
      return {
        isSuccess: true,
        data: deletedResult.data.deletePaymentMethod,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };
  // 支払い方法一覧取得
  const apiGetCreditCards = async (): Promise<
    ApiResponse<Array<CreditCard>>
  > => {
    try {
      const result = await client.graphql({
        query: queries.listCreditCards,
        authMode: "apiKey",
      });
      return {
        isSuccess: true,
        data: result.data.listCreditCards.items,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  // 支払い方法詳細取得
  const apiGetCreditCardById = async (
    id: string | string[]
  ): Promise<ApiResponse<GetCreditCardQuery["getCreditCard"]>> => {
    try {
      const result = await client.graphql({
        query: queries.getCreditCard,
        authMode: "apiKey",
        variables: { id: ensureString(id) },
      });
      return {
        isSuccess: true,
        data: result.data.getCreditCard ?? null,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  // 支払い方法作成
  const apiCreateCreditCard = async (creditCards: CreateCreditCardInput) => {
    try {
      const request: CreateCreditCardInput = {
        ...creditCards,
      };
      const result = await client.graphql({
        query: mutations.createCreditCard,
        variables: { input: request },
      });
      return {
        isSuccess: true,
        data: result.data.createCreditCard,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  // 支払い方法更新
  const apiUpdateCreditCard = async (
    creditCard: UpdateCreditCardInput
  ): Promise<ApiResponse<UpdateCreditCardMutation["updateCreditCard"]>> => {
    try {
      const result = await client.graphql({
        query: mutations.updateCreditCard,
        variables: { input: creditCard },
      });
      return {
        isSuccess: true,
        data: result.data.updateCreditCard,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  // 支払い方法削除
  const apiDeleteCreditCard = async (deleteItem: CreditCard) => {
    try {
      const request: DeleteCreditCardInput = {
        id: deleteItem.id,
      };
      const deletedResult = await client.graphql({
        query: mutations.deleteCreditCard,
        variables: { input: request },
      });
      return {
        isSuccess: true,
        data: deletedResult.data.deleteCreditCard,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  return {
    apiGetPaymentMethods,
    apiGetPaymentMethodById,
    apiCreatePaymentMethod,
    apiUpdatePaymentMethod,
    apiDeletePaymentMethod,
    apiGetCreditCards,
    apiGetCreditCardById,
    apiCreateCreditCard,
    apiUpdateCreditCard,
    apiDeleteCreditCard,
  };
}
