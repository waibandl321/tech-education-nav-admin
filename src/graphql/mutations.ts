/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createLearningCenter = /* GraphQL */ `mutation CreateLearningCenter(
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
    isDeleted
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateLearningCenterMutationVariables,
  APITypes.CreateLearningCenterMutation
>;
export const updateLearningCenter = /* GraphQL */ `mutation UpdateLearningCenter(
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
    isDeleted
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateLearningCenterMutationVariables,
  APITypes.UpdateLearningCenterMutation
>;
export const deleteLearningCenter = /* GraphQL */ `mutation DeleteLearningCenter(
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
    isDeleted
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteLearningCenterMutationVariables,
  APITypes.DeleteLearningCenterMutation
>;
export const createLearningCenterCourse = /* GraphQL */ `mutation CreateLearningCenterCourse(
  $input: CreateLearningCenterCourseInput!
  $condition: ModelLearningCenterCourseConditionInput
) {
  createLearningCenterCourse(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateLearningCenterCourseMutationVariables,
  APITypes.CreateLearningCenterCourseMutation
>;
export const updateLearningCenterCourse = /* GraphQL */ `mutation UpdateLearningCenterCourse(
  $input: UpdateLearningCenterCourseInput!
  $condition: ModelLearningCenterCourseConditionInput
) {
  updateLearningCenterCourse(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateLearningCenterCourseMutationVariables,
  APITypes.UpdateLearningCenterCourseMutation
>;
export const deleteLearningCenterCourse = /* GraphQL */ `mutation DeleteLearningCenterCourse(
  $input: DeleteLearningCenterCourseInput!
  $condition: ModelLearningCenterCourseConditionInput
) {
  deleteLearningCenterCourse(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteLearningCenterCourseMutationVariables,
  APITypes.DeleteLearningCenterCourseMutation
>;
export const createCourseReview = /* GraphQL */ `mutation CreateCourseReview(
  $input: CreateCourseReviewInput!
  $condition: ModelCourseReviewConditionInput
) {
  createCourseReview(input: $input, condition: $condition) {
    id
    userDisplayId
    userEmail
    userGender
    userAge
    userPrefecture
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
` as GeneratedMutation<
  APITypes.CreateCourseReviewMutationVariables,
  APITypes.CreateCourseReviewMutation
>;
export const updateCourseReview = /* GraphQL */ `mutation UpdateCourseReview(
  $input: UpdateCourseReviewInput!
  $condition: ModelCourseReviewConditionInput
) {
  updateCourseReview(input: $input, condition: $condition) {
    id
    userDisplayId
    userEmail
    userGender
    userAge
    userPrefecture
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
` as GeneratedMutation<
  APITypes.UpdateCourseReviewMutationVariables,
  APITypes.UpdateCourseReviewMutation
>;
export const deleteCourseReview = /* GraphQL */ `mutation DeleteCourseReview(
  $input: DeleteCourseReviewInput!
  $condition: ModelCourseReviewConditionInput
) {
  deleteCourseReview(input: $input, condition: $condition) {
    id
    userDisplayId
    userEmail
    userGender
    userAge
    userPrefecture
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
` as GeneratedMutation<
  APITypes.DeleteCourseReviewMutationVariables,
  APITypes.DeleteCourseReviewMutation
>;
