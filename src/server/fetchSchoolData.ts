import { generateClient } from "aws-amplify/api";
import {
  listLearningCenterCourses,
  listLearningCenters,
} from "@/graphql/queries";
import { orderBy } from "lodash";

const client = generateClient();

// スクールとコースの一覧をサーバーサイドで取得する
export const fetchCentersAndCourses = async () => {
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
      centers: orderBy(
        learningCentersResult.data.listLearningCenters.items,
        ["createdAt"],
        ["desc"]
      ),
      courses: orderBy(
        learningCenterCoursesResult.data.listLearningCenterCourses.items,
        ["createdAt"],
        ["desc"]
      ),
    };
  } catch (error) {
    console.error("Error fetching listLearningCenters:", error);
    // エラーハンドリングをここに追加
    return {
      centers: [],
      courses: [],
    };
  }
};

// スクール一覧をサーバーサイドで取得する
export const fetchSchoolList = async () => {
  try {
    const learningCentersResult = await client.graphql({
      query: listLearningCenters,
      authMode: "apiKey",
    });
    return {
      centers: orderBy(
        learningCentersResult.data.listLearningCenters.items,
        ["createdAt"],
        ["desc"]
      ),
    };
  } catch (error) {
    console.error("Error fetching listLearningCenters:", error);
    // エラーハンドリングをここに追加
    return {
      centers: [],
    };
  }
};
