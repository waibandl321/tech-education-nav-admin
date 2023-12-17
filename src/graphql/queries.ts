/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getTodo = /* GraphQL */ `query GetTodo($id: ID!) {
  getTodo(id: $id) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTodoQueryVariables, APITypes.GetTodoQuery>;
export const listTodos = /* GraphQL */ `query ListTodos(
  $filter: ModelTodoFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTodosQueryVariables, APITypes.ListTodosQuery>;
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
export const getLearningCenter =
  /* GraphQL */ `query GetLearningCenter($id: ID!) {
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
    learningCenterCourses {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
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
  APITypes.ListLearningCentersQueryVariables,
  APITypes.ListLearningCentersQuery
>;
export const getLearningCenterCourse =
  /* GraphQL */ `query GetLearningCenterCourse($id: ID!) {
  getLearningCenterCourse(id: $id) {
    id
    learningCenterId
    courseName
    courseURL
    couseDetail
    learningCenter {
      id
      name
      memo
      operatingCompany
      headquartersLocation
      websiteURL
      logoImageURL
      establishmentYear
      representative
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
    APITypes.GetLearningCenterCourseQueryVariables,
    APITypes.GetLearningCenterCourseQuery
  >;
export const listLearningCenterCourses =
  /* GraphQL */ `query ListLearningCenterCourses(
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
    APITypes.ListLearningCenterCoursesQueryVariables,
    APITypes.ListLearningCenterCoursesQuery
  >;
