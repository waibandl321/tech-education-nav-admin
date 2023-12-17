/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateTodo =
  /* GraphQL */ `subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
  onCreateTodo(filter: $filter) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnCreateTodoSubscriptionVariables,
    APITypes.OnCreateTodoSubscription
  >;
export const onUpdateTodo =
  /* GraphQL */ `subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
  onUpdateTodo(filter: $filter) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnUpdateTodoSubscriptionVariables,
    APITypes.OnUpdateTodoSubscription
  >;
export const onDeleteTodo =
  /* GraphQL */ `subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
  onDeleteTodo(filter: $filter) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnDeleteTodoSubscriptionVariables,
    APITypes.OnDeleteTodoSubscription
  >;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onCreateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onUpdateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onDeleteUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateLearningCenter =
  /* GraphQL */ `subscription OnCreateLearningCenter(
  $filter: ModelSubscriptionLearningCenterFilterInput
  $owner: String
) {
  onCreateLearningCenter(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
    APITypes.OnCreateLearningCenterSubscriptionVariables,
    APITypes.OnCreateLearningCenterSubscription
  >;
export const onUpdateLearningCenter =
  /* GraphQL */ `subscription OnUpdateLearningCenter(
  $filter: ModelSubscriptionLearningCenterFilterInput
  $owner: String
) {
  onUpdateLearningCenter(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
    APITypes.OnUpdateLearningCenterSubscriptionVariables,
    APITypes.OnUpdateLearningCenterSubscription
  >;
export const onDeleteLearningCenter =
  /* GraphQL */ `subscription OnDeleteLearningCenter(
  $filter: ModelSubscriptionLearningCenterFilterInput
  $owner: String
) {
  onDeleteLearningCenter(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
    APITypes.OnDeleteLearningCenterSubscriptionVariables,
    APITypes.OnDeleteLearningCenterSubscription
  >;
export const onCreateLearningCenterCourse =
  /* GraphQL */ `subscription OnCreateLearningCenterCourse(
  $filter: ModelSubscriptionLearningCenterCourseFilterInput
  $owner: String
) {
  onCreateLearningCenterCourse(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
    APITypes.OnCreateLearningCenterCourseSubscriptionVariables,
    APITypes.OnCreateLearningCenterCourseSubscription
  >;
export const onUpdateLearningCenterCourse =
  /* GraphQL */ `subscription OnUpdateLearningCenterCourse(
  $filter: ModelSubscriptionLearningCenterCourseFilterInput
  $owner: String
) {
  onUpdateLearningCenterCourse(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
    APITypes.OnUpdateLearningCenterCourseSubscriptionVariables,
    APITypes.OnUpdateLearningCenterCourseSubscription
  >;
export const onDeleteLearningCenterCourse =
  /* GraphQL */ `subscription OnDeleteLearningCenterCourse(
  $filter: ModelSubscriptionLearningCenterCourseFilterInput
  $owner: String
) {
  onDeleteLearningCenterCourse(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
    APITypes.OnDeleteLearningCenterCourseSubscriptionVariables,
    APITypes.OnDeleteLearningCenterCourseSubscription
  >;
