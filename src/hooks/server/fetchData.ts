import { generateClient } from "aws-amplify/api";
import {
  listCourseReviews,
  listFrameworks,
  listLearningCenterCourses,
  listLearningCenters,
  listProgrammingLanguages,
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
