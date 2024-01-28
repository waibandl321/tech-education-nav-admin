/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getDevelopmentTool = /* GraphQL */ `query GetDevelopmentTool($id: ID!) {
  getDevelopmentTool(id: $id) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetDevelopmentToolQueryVariables,
  APITypes.GetDevelopmentToolQuery
>;
export const listDevelopmentTools = /* GraphQL */ `query ListDevelopmentTools(
  $filter: ModelDevelopmentToolFilterInput
  $limit: Int
  $nextToken: String
) {
  listDevelopmentTools(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDevelopmentToolsQueryVariables,
  APITypes.ListDevelopmentToolsQuery
>;
export const getProgrammingLanguage = /* GraphQL */ `query GetProgrammingLanguage($id: ID!) {
  getProgrammingLanguage(id: $id) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProgrammingLanguageQueryVariables,
  APITypes.GetProgrammingLanguageQuery
>;
export const listProgrammingLanguages = /* GraphQL */ `query ListProgrammingLanguages(
  $filter: ModelProgrammingLanguageFilterInput
  $limit: Int
  $nextToken: String
) {
  listProgrammingLanguages(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProgrammingLanguagesQueryVariables,
  APITypes.ListProgrammingLanguagesQuery
>;
export const getFramework = /* GraphQL */ `query GetFramework($id: ID!) {
  getFramework(id: $id) {
    id
    programmingLanguageId
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetFrameworkQueryVariables,
  APITypes.GetFrameworkQuery
>;
export const listFrameworks = /* GraphQL */ `query ListFrameworks(
  $filter: ModelFrameworkFilterInput
  $limit: Int
  $nextToken: String
) {
  listFrameworks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      programmingLanguageId
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFrameworksQueryVariables,
  APITypes.ListFrameworksQuery
>;
export const getJobType = /* GraphQL */ `query GetJobType($id: ID!) {
  getJobType(id: $id) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetJobTypeQueryVariables,
  APITypes.GetJobTypeQuery
>;
export const listJobTypes = /* GraphQL */ `query ListJobTypes(
  $filter: ModelJobTypeFilterInput
  $limit: Int
  $nextToken: String
) {
  listJobTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListJobTypesQueryVariables,
  APITypes.ListJobTypesQuery
>;
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
    duration
    price
    isAvailableMoneyBack
    moneyBackDetail
    isAvailableSubsidy
    subsidyMemo
    onSale
    saleMemo
    purposes
    jobTypes
    programmingLanguages
    frameworks
    developmentTools
    paymentOptions
    attendanceType
    locationPref
    locationCity
    isMadeToOrder
    especiallyAudiences
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
      duration
      price
      isAvailableMoneyBack
      moneyBackDetail
      isAvailableSubsidy
      subsidyMemo
      onSale
      saleMemo
      purposes
      jobTypes
      programmingLanguages
      frameworks
      developmentTools
      paymentOptions
      attendanceType
      locationPref
      locationCity
      isMadeToOrder
      especiallyAudiences
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
    userDisplayId
    userGender
    userAge
    userPrefecture
    studyLengthMonths
    learningCenterId
    learningCenterCourseId
    reviewTitle
    reviewDetail
    rating
    isPublished
    isDeleted
    createdAt
    updatedAt
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
      userDisplayId
      userGender
      userAge
      userPrefecture
      studyLengthMonths
      learningCenterId
      learningCenterCourseId
      reviewTitle
      reviewDetail
      rating
      isPublished
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
  APITypes.ListCourseReviewsQueryVariables,
  APITypes.ListCourseReviewsQuery
>;
export const getContact = /* GraphQL */ `query GetContact($id: ID!) {
  getContact(id: $id) {
    id
    userEmail
    userName
    messageInfo
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetContactQueryVariables,
  APITypes.GetContactQuery
>;
export const listContacts = /* GraphQL */ `query ListContacts(
  $filter: ModelContactFilterInput
  $limit: Int
  $nextToken: String
) {
  listContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userEmail
      userName
      messageInfo
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListContactsQueryVariables,
  APITypes.ListContactsQuery
>;
