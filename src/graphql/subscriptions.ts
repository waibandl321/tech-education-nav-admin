/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateLearningCenter = /* GraphQL */ `subscription OnCreateLearningCenter(
  $filter: ModelSubscriptionLearningCenterFilterInput
) {
  onCreateLearningCenter(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateLearningCenterSubscriptionVariables,
  APITypes.OnCreateLearningCenterSubscription
>;
export const onUpdateLearningCenter = /* GraphQL */ `subscription OnUpdateLearningCenter(
  $filter: ModelSubscriptionLearningCenterFilterInput
) {
  onUpdateLearningCenter(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateLearningCenterSubscriptionVariables,
  APITypes.OnUpdateLearningCenterSubscription
>;
export const onDeleteLearningCenter = /* GraphQL */ `subscription OnDeleteLearningCenter(
  $filter: ModelSubscriptionLearningCenterFilterInput
) {
  onDeleteLearningCenter(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteLearningCenterSubscriptionVariables,
  APITypes.OnDeleteLearningCenterSubscription
>;
export const onCreateLearningCenterCourse = /* GraphQL */ `subscription OnCreateLearningCenterCourse(
  $filter: ModelSubscriptionLearningCenterCourseFilterInput
) {
  onCreateLearningCenterCourse(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateLearningCenterCourseSubscriptionVariables,
  APITypes.OnCreateLearningCenterCourseSubscription
>;
export const onUpdateLearningCenterCourse = /* GraphQL */ `subscription OnUpdateLearningCenterCourse(
  $filter: ModelSubscriptionLearningCenterCourseFilterInput
) {
  onUpdateLearningCenterCourse(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateLearningCenterCourseSubscriptionVariables,
  APITypes.OnUpdateLearningCenterCourseSubscription
>;
export const onDeleteLearningCenterCourse = /* GraphQL */ `subscription OnDeleteLearningCenterCourse(
  $filter: ModelSubscriptionLearningCenterCourseFilterInput
) {
  onDeleteLearningCenterCourse(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteLearningCenterCourseSubscriptionVariables,
  APITypes.OnDeleteLearningCenterCourseSubscription
>;
export const onCreateCourseReview = /* GraphQL */ `subscription OnCreateCourseReview(
  $filter: ModelSubscriptionCourseReviewFilterInput
) {
  onCreateCourseReview(filter: $filter) {
    id
    userId
    userDisplayId
    userGender
    userAge
    userPrefecture
    courseStartMonth
    courseEndMonth
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
` as GeneratedSubscription<
  APITypes.OnCreateCourseReviewSubscriptionVariables,
  APITypes.OnCreateCourseReviewSubscription
>;
export const onUpdateCourseReview = /* GraphQL */ `subscription OnUpdateCourseReview(
  $filter: ModelSubscriptionCourseReviewFilterInput
) {
  onUpdateCourseReview(filter: $filter) {
    id
    userId
    userDisplayId
    userGender
    userAge
    userPrefecture
    courseStartMonth
    courseEndMonth
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
` as GeneratedSubscription<
  APITypes.OnUpdateCourseReviewSubscriptionVariables,
  APITypes.OnUpdateCourseReviewSubscription
>;
export const onDeleteCourseReview = /* GraphQL */ `subscription OnDeleteCourseReview(
  $filter: ModelSubscriptionCourseReviewFilterInput
) {
  onDeleteCourseReview(filter: $filter) {
    id
    userId
    userDisplayId
    userGender
    userAge
    userPrefecture
    courseStartMonth
    courseEndMonth
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
` as GeneratedSubscription<
  APITypes.OnDeleteCourseReviewSubscriptionVariables,
  APITypes.OnDeleteCourseReviewSubscription
>;
export const onCreateContact = /* GraphQL */ `subscription OnCreateContact($filter: ModelSubscriptionContactFilterInput) {
  onCreateContact(filter: $filter) {
    id
    userEmail
    userName
    messageInfo
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateContactSubscriptionVariables,
  APITypes.OnCreateContactSubscription
>;
export const onUpdateContact = /* GraphQL */ `subscription OnUpdateContact($filter: ModelSubscriptionContactFilterInput) {
  onUpdateContact(filter: $filter) {
    id
    userEmail
    userName
    messageInfo
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateContactSubscriptionVariables,
  APITypes.OnUpdateContactSubscription
>;
export const onDeleteContact = /* GraphQL */ `subscription OnDeleteContact($filter: ModelSubscriptionContactFilterInput) {
  onDeleteContact(filter: $filter) {
    id
    userEmail
    userName
    messageInfo
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteContactSubscriptionVariables,
  APITypes.OnDeleteContactSubscription
>;
