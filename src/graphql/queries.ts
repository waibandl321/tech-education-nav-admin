/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getDevelopmentCategory =
  /* GraphQL */ `query GetDevelopmentCategory($id: ID!) {
  getDevelopmentCategory(id: $id) {
    id
    name
    memo
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
    APITypes.GetDevelopmentCategoryQueryVariables,
    APITypes.GetDevelopmentCategoryQuery
  >;
export const listDevelopmentCategories =
  /* GraphQL */ `query ListDevelopmentCategories(
  $filter: ModelDevelopmentCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listDevelopmentCategories(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      memo
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
    APITypes.ListDevelopmentCategoriesQueryVariables,
    APITypes.ListDevelopmentCategoriesQuery
  >;
export const getDevelopmentProduct =
  /* GraphQL */ `query GetDevelopmentProduct($id: ID!) {
  getDevelopmentProduct(id: $id) {
    id
    name
    memo
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
    APITypes.GetDevelopmentProductQueryVariables,
    APITypes.GetDevelopmentProductQuery
  >;
export const listDevelopmentProducts =
  /* GraphQL */ `query ListDevelopmentProducts(
  $filter: ModelDevelopmentProductFilterInput
  $limit: Int
  $nextToken: String
) {
  listDevelopmentProducts(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      memo
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
    APITypes.ListDevelopmentProductsQueryVariables,
    APITypes.ListDevelopmentProductsQuery
  >;
export const getQualification =
  /* GraphQL */ `query GetQualification($id: ID!) {
  getQualification(id: $id) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
    APITypes.GetQualificationQueryVariables,
    APITypes.GetQualificationQuery
  >;
export const listQualifications = /* GraphQL */ `query ListQualifications(
  $filter: ModelQualificationFilterInput
  $limit: Int
  $nextToken: String
) {
  listQualifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  APITypes.ListQualificationsQueryVariables,
  APITypes.ListQualificationsQuery
>;
export const getDevelopmentTool =
  /* GraphQL */ `query GetDevelopmentTool($id: ID!) {
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
export const getProgrammingLanguage =
  /* GraphQL */ `query GetProgrammingLanguage($id: ID!) {
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
export const listProgrammingLanguages =
  /* GraphQL */ `query ListProgrammingLanguages(
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
export const getPaymentMethod =
  /* GraphQL */ `query GetPaymentMethod($id: ID!) {
  getPaymentMethod(id: $id) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
    APITypes.GetPaymentMethodQueryVariables,
    APITypes.GetPaymentMethodQuery
  >;
export const listPaymentMethods = /* GraphQL */ `query ListPaymentMethods(
  $filter: ModelPaymentMethodFilterInput
  $limit: Int
  $nextToken: String
) {
  listPaymentMethods(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  APITypes.ListPaymentMethodsQueryVariables,
  APITypes.ListPaymentMethodsQuery
>;
export const getCreditCard = /* GraphQL */ `query GetCreditCard($id: ID!) {
  getCreditCard(id: $id) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCreditCardQueryVariables,
  APITypes.GetCreditCardQuery
>;
export const listCreditCards = /* GraphQL */ `query ListCreditCards(
  $filter: ModelCreditCardFilterInput
  $limit: Int
  $nextToken: String
) {
  listCreditCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  APITypes.ListCreditCardsQueryVariables,
  APITypes.ListCreditCardsQuery
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
export const getBenefitUserCategory =
  /* GraphQL */ `query GetBenefitUserCategory($id: ID!) {
  getBenefitUserCategory(id: $id) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
    APITypes.GetBenefitUserCategoryQueryVariables,
    APITypes.GetBenefitUserCategoryQuery
  >;
export const listBenefitUserCategories =
  /* GraphQL */ `query ListBenefitUserCategories(
  $filter: ModelBenefitUserCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listBenefitUserCategories(
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
    APITypes.ListBenefitUserCategoriesQueryVariables,
    APITypes.ListBenefitUserCategoriesQuery
  >;
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
    admissionFee
    cancelPolicy
    paymentOptions
    creditCards
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
      admissionFee
      cancelPolicy
      paymentOptions
      creditCards
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
export const getLearningCenterCourse =
  /* GraphQL */ `query GetLearningCenterCourse($id: ID!) {
  getLearningCenterCourse(id: $id) {
    id
    learningCenterId
    courseName
    courseURL
    couseDetail
    plans {
      id
      planName
      planMemo
      duration
      price
      splitPrice
      __typename
    }
    isAvailableMoneyBack
    moneyBackDetail
    isAvailableSubsidy
    subsidyMemo
    isMadeToOrder
    madeToOrderDetail
    isJobIntroductionAvailable
    jobIntroductionDetail
    isJobHuntingSupport
    jobHuntingSupportDetail
    isJobHuntingGuarantee
    jobHuntingGuaranteeDetail
    purposes
    jobTypes
    developmentCategories
    developmentProducts
    programmingLanguages
    frameworks
    developmentTools
    qualifications
    attendanceType
    locationPref
    locationCity
    benefitUsers
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
      isAvailableMoneyBack
      moneyBackDetail
      isAvailableSubsidy
      subsidyMemo
      isMadeToOrder
      madeToOrderDetail
      isJobIntroductionAvailable
      jobIntroductionDetail
      isJobHuntingSupport
      jobHuntingSupportDetail
      isJobHuntingGuarantee
      jobHuntingGuaranteeDetail
      purposes
      jobTypes
      developmentCategories
      developmentProducts
      programmingLanguages
      frameworks
      developmentTools
      qualifications
      attendanceType
      locationPref
      locationCity
      benefitUsers
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
