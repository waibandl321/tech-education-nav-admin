/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    cognitoSub
    displayId
    name
    nameKana
    gender
    birthYear
    birthMonth
    birthDate
    prefecture
    previousJob
    isRegisterUserInfo
    isApproved
    isDeleted
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      cognitoSub
      displayId
      name
      nameKana
      gender
      birthYear
      birthMonth
      birthDate
      prefecture
      previousJob
      isRegisterUserInfo
      isApproved
      isDeleted
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getLearningCenter = /* GraphQL */ `query GetLearningCenter($id: ID!) {
  getLearningCenter(id: $id) {
    id
    name
    memo
    operatingCompany
    headquartersLocation
    websiteURL
    logoImageURL
    establishmentYear
    representative
    isDeleted
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetLearningCenterQueryVariables,
  APITypes.GetLearningCenterQuery
>;
export const listLearningCenters = /* GraphQL */ `query ListLearningCenters(
  $filter: ModelLearningCenterFilterInput
  $limit: Int
  $nextToken: String
) {
  listLearningCenters(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      memo
      operatingCompany
      headquartersLocation
      websiteURL
      logoImageURL
      establishmentYear
      representative
      isDeleted
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLearningCentersQueryVariables,
  APITypes.ListLearningCentersQuery
>;
export const getLearningCenterCourse = /* GraphQL */ `query GetLearningCenterCourse($id: ID!) {
  getLearningCenterCourse(id: $id) {
    id
    learningCenterId
    courseName
    courseURL
    couseDetail
    isDeleted
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetLearningCenterCourseQueryVariables,
  APITypes.GetLearningCenterCourseQuery
>;
export const listLearningCenterCourses = /* GraphQL */ `query ListLearningCenterCourses(
  $filter: ModelLearningCenterCourseFilterInput
  $limit: Int
  $nextToken: String
) {
  listLearningCenterCourses(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      learningCenterId
      courseName
      courseURL
      couseDetail
      isDeleted
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLearningCenterCoursesQueryVariables,
  APITypes.ListLearningCenterCoursesQuery
>;
export const getCourseReview = /* GraphQL */ `query GetCourseReview($id: ID!) {
  getCourseReview(id: $id) {
    id
    userId
    userDisplayName
    userGender
    userAge
    userPreviousJob
    learningCenterId
    learningCenterCourseId
    reviewTitle
    reviewDetail
    rating
    isPublished
    isDeleted
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCourseReviewQueryVariables,
  APITypes.GetCourseReviewQuery
>;
export const listCourseReviews = /* GraphQL */ `query ListCourseReviews(
  $filter: ModelCourseReviewFilterInput
  $limit: Int
  $nextToken: String
) {
  listCourseReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      userDisplayName
      userGender
      userAge
      userPreviousJob
      learningCenterId
      learningCenterCourseId
      reviewTitle
      reviewDetail
      rating
      isPublished
      isDeleted
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCourseReviewsQueryVariables,
  APITypes.ListCourseReviewsQuery
>;
