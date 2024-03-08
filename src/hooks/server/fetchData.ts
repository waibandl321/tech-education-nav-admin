import { generateClient } from "aws-amplify/api";
import {
  listBenefitUserCategories,
  listCourseReviews,
  listCreditCards,
  listDevelopmentCategories,
  listDevelopmentProducts,
  listDevelopmentTools,
  listFrameworks,
  listJobTypes,
  listLearningCenterCourses,
  listLearningCenters,
  listPaymentMethods,
  listProgrammingLanguages,
  listQualifications,
} from "@/graphql/queries";

const client = generateClient();

// スクールとコースの一覧をサーバーサイドで取得する
export const fetchSchoolData = async () => {
  try {
    const [learningCentersResult, learningCenterCoursesResult] =
      await Promise.all([
        client.graphql({
          query: listLearningCenters,
          authMode: "apiKey",
        }),
        client.graphql({
          query: listLearningCenterCourses,
          authMode: "apiKey",
        }),
      ]);
    return {
      centers: learningCentersResult.data.listLearningCenters.items,
      courses: learningCenterCoursesResult.data.listLearningCenterCourses.items,
    };
  } catch (error) {
    console.error("Error fetching listLearningCenters:", error);
    return {
      centers: [],
      courses: [],
    };
  }
};

/**
 * スクール画面一覧で必要なデータを取得する
 * スクール一覧、支払い方法、クレジットカード
 */
export const fetchLearningCenterPageData = async () => {
  try {
    const [
      learningCentersResult,
      getPaymentMethodsResult,
      getCreditCardsResult,
    ] = await Promise.all([
      client.graphql({
        query: listLearningCenters,
        authMode: "apiKey",
      }),
      client.graphql({
        query: listPaymentMethods,
        authMode: "apiKey",
      }),
      client.graphql({
        query: listCreditCards,
        authMode: "apiKey",
      }),
    ]);
    return {
      centers: learningCentersResult.data.listLearningCenters.items,
      paymentMethods: getPaymentMethodsResult.data.listPaymentMethods.items,
      creditCards: getCreditCardsResult.data.listCreditCards.items,
    };
  } catch (error) {
    console.error("Error fetching listLearningCenters:", error);
    return {
      centers: [],
      paymentMethods: [],
      creditCards: [],
    };
  }
};

/**
 * コース情報画面で必要なデータを取得
 * @returns スクール一覧、コース一覧、職種、言語、フレームワーク、開発ツール、支払い方法、クレジットカード
 */
export const fetchCoursePageData = async () => {
  try {
    const [
      learningCentersResult,
      learningCenterCoursesResult,
      languagesResult,
      frameworksResult,
      developmentToolResult,
      getJobTypesResult,
      getQualificationsResult,
    ] = await Promise.all([
      client.graphql({
        query: listLearningCenters,
        authMode: "apiKey",
      }),
      client.graphql({
        query: listLearningCenterCourses,
        authMode: "apiKey",
      }),
      client.graphql({
        query: listProgrammingLanguages,
        authMode: "apiKey",
      }),
      client.graphql({
        query: listFrameworks,
        authMode: "apiKey",
      }),
      client.graphql({
        query: listDevelopmentTools,
        authMode: "apiKey",
      }),
      client.graphql({
        query: listJobTypes,
        authMode: "apiKey",
      }),
      client.graphql({
        query: listQualifications,
        authMode: "apiKey",
      }),
    ]);
    return {
      centers: learningCentersResult.data.listLearningCenters.items,
      courses: learningCenterCoursesResult.data.listLearningCenterCourses.items,
      languages: languagesResult.data.listProgrammingLanguages.items,
      frameworks: frameworksResult.data.listFrameworks.items,
      developmentTools: developmentToolResult.data.listDevelopmentTools.items,
      jobTypes: getJobTypesResult.data.listJobTypes.items,
      qualifications: getQualificationsResult.data.listQualifications.items,
    };
  } catch (error) {
    console.error("Error fetching listLearningCenters:", error);
    return {
      centers: [],
      courses: [],
      languages: [],
      frameworks: [],
      developmentTools: [],
      jobTypes: [],
      qualifications: [],
    };
  }
};

export const fetchReviewList = async () => {
  try {
    const getReviewListResult = await client.graphql({
      query: listCourseReviews,
      authMode: "apiKey",
    });
    return {
      reviews: getReviewListResult.data.listCourseReviews.items,
    };
  } catch (error) {
    console.error("Error fetchReviewList:", error);
    return {
      reviews: [],
    };
  }
};

// マスタデータの取得: 言語、フレームワーク
export const fetchLanguagesAndFrameworks = async () => {
  try {
    const [languagesResult, frameworksResult] = await Promise.all([
      client.graphql({
        query: listProgrammingLanguages,
        authMode: "apiKey",
      }),
      client.graphql({
        query: listFrameworks,
        authMode: "apiKey",
      }),
    ]);
    return {
      languages: languagesResult.data.listProgrammingLanguages.items,
      frameworks: frameworksResult.data.listFrameworks.items,
    };
  } catch (error) {
    console.error("Error fetching languages and frameworks:", error);
    return {
      languages: [],
      frameworks: [],
    };
  }
};

// マスタデータの取得: 開発ツール
export const fetchDevelopmentTools = async () => {
  try {
    const developmentToolResult = await client.graphql({
      query: listDevelopmentTools,
      authMode: "apiKey",
    });
    return {
      developmentTools: developmentToolResult.data.listDevelopmentTools.items,
    };
  } catch (error) {
    console.error("Error fetching development tools:", error);
    return {
      developmentTools: [],
    };
  }
};

// マスタデータの取得: 職種/資格
export const fetchJobTypes = async () => {
  try {
    const getJobTypesResult = await client.graphql({
      query: listJobTypes,
      authMode: "apiKey",
    });

    return {
      jobTypes: getJobTypesResult.data.listJobTypes.items,
    };
  } catch (error) {
    console.error("Error fetchJobTypes:", error);
    return {
      jobTypes: [],
    };
  }
};

// 開発領域
export const fetchDevelopmentCategories = async () => {
  try {
    const getDevelopmentCategoriesResult = await client.graphql({
      query: listDevelopmentCategories,
      authMode: "apiKey",
    });

    return {
      developmentCategories:
        getDevelopmentCategoriesResult.data.listDevelopmentCategories.items,
    };
  } catch (error) {
    console.error("Error fetchDevelopmentCategories:", error);
    return {
      developmentCategories: [],
    };
  }
};

// 開発プロダクト
export const fetchDevelopmentProducts = async () => {
  try {
    const getDevelopmentProductsResult = await client.graphql({
      query: listDevelopmentProducts,
      authMode: "apiKey",
    });

    return {
      developmentProducts:
        getDevelopmentProductsResult.data.listDevelopmentProducts.items,
    };
  } catch (error) {
    console.error("Error fetchDevelopmentProducts:", error);
    return {
      developmentProducts: [],
    };
  }
};

// 資格
export const fetchQualifications = async () => {
  try {
    const getQualificationsResult = await client.graphql({
      query: listQualifications,
      authMode: "apiKey",
    });

    return {
      qualifications: getQualificationsResult.data.listQualifications.items,
    };
  } catch (error) {
    console.error("Error fetchJobTypes:", error);
    return {
      qualifications: [],
    };
  }
};

/**
 * 支払いマスタ画面で必要なデータを取得
 * @returns 支払い方法、クレジットカード
 */
export const fetchPaymentPageData = async () => {
  try {
    const [getPaymentMethodsResult, getCreditCardsResult] = await Promise.all([
      client.graphql({
        query: listPaymentMethods,
        authMode: "apiKey",
      }),
      client.graphql({
        query: listCreditCards,
        authMode: "apiKey",
      }),
    ]);
    return {
      paymentMethods: getPaymentMethodsResult.data.listPaymentMethods.items,
      creditCards: getCreditCardsResult.data.listCreditCards.items,
    };
  } catch (error) {
    console.error("Error fetching Payment:", error);
    return {
      paymentMethods: [],
      creditCards: [],
    };
  }
};

// ユーザー種別
export const fetchUserCategoryPageData = async () => {
  try {
    const getUserCategoriesResult = await client.graphql({
      query: listBenefitUserCategories,
      authMode: "apiKey",
    });
    return {
      benefitUserCategories:
        getUserCategoriesResult.data.listBenefitUserCategories.items,
    };
  } catch (error) {
    console.error("Error fetching benefitUserCategories:", error);
    return {
      benefitUserCategories: [],
    };
  }
};
