/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createTodo = /* GraphQL */ `mutation CreateTodo(
  $input: CreateTodoInput!
  $condition: ModelTodoConditionInput
) {
  createTodo(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTodoMutationVariables,
  APITypes.CreateTodoMutation
>;
export const updateTodo = /* GraphQL */ `mutation UpdateTodo(
  $input: UpdateTodoInput!
  $condition: ModelTodoConditionInput
) {
  updateTodo(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTodoMutationVariables,
  APITypes.UpdateTodoMutation
>;
export const deleteTodo = /* GraphQL */ `mutation DeleteTodo(
  $input: DeleteTodoInput!
  $condition: ModelTodoConditionInput
) {
  deleteTodo(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTodoMutationVariables,
  APITypes.DeleteTodoMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createLearningCenter =
  /* GraphQL */ `mutation CreateLearningCenter(
  $input: CreateLearningCenterInput!
  $condition: ModelLearningCenterConditionInput
) {
  createLearningCenter(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.CreateLearningCenterMutationVariables,
    APITypes.CreateLearningCenterMutation
  >;
export const updateLearningCenter =
  /* GraphQL */ `mutation UpdateLearningCenter(
  $input: UpdateLearningCenterInput!
  $condition: ModelLearningCenterConditionInput
) {
  updateLearningCenter(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.UpdateLearningCenterMutationVariables,
    APITypes.UpdateLearningCenterMutation
  >;
export const deleteLearningCenter =
  /* GraphQL */ `mutation DeleteLearningCenter(
  $input: DeleteLearningCenterInput!
  $condition: ModelLearningCenterConditionInput
) {
  deleteLearningCenter(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.DeleteLearningCenterMutationVariables,
    APITypes.DeleteLearningCenterMutation
  >;
export const createLearningCenterCourse =
  /* GraphQL */ `mutation CreateLearningCenterCourse(
  $input: CreateLearningCenterCourseInput!
  $condition: ModelLearningCenterCourseConditionInput
) {
  createLearningCenterCourse(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.CreateLearningCenterCourseMutationVariables,
    APITypes.CreateLearningCenterCourseMutation
  >;
export const updateLearningCenterCourse =
  /* GraphQL */ `mutation UpdateLearningCenterCourse(
  $input: UpdateLearningCenterCourseInput!
  $condition: ModelLearningCenterCourseConditionInput
) {
  updateLearningCenterCourse(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.UpdateLearningCenterCourseMutationVariables,
    APITypes.UpdateLearningCenterCourseMutation
  >;
export const deleteLearningCenterCourse =
  /* GraphQL */ `mutation DeleteLearningCenterCourse(
  $input: DeleteLearningCenterCourseInput!
  $condition: ModelLearningCenterCourseConditionInput
) {
  deleteLearningCenterCourse(input: $input, condition: $condition) {
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
` as GeneratedMutation<
    APITypes.DeleteLearningCenterCourseMutationVariables,
    APITypes.DeleteLearningCenterCourseMutation
  >;
