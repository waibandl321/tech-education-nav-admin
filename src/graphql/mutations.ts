/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createDevelopmentCategory =
  /* GraphQL */ `mutation CreateDevelopmentCategory(
  $input: CreateDevelopmentCategoryInput!
  $condition: ModelDevelopmentCategoryConditionInput
) {
  createDevelopmentCategory(input: $input, condition: $condition) {
    id
    name
    memo
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
    APITypes.CreateDevelopmentCategoryMutationVariables,
    APITypes.CreateDevelopmentCategoryMutation
  >;
export const updateDevelopmentCategory =
  /* GraphQL */ `mutation UpdateDevelopmentCategory(
  $input: UpdateDevelopmentCategoryInput!
  $condition: ModelDevelopmentCategoryConditionInput
) {
  updateDevelopmentCategory(input: $input, condition: $condition) {
    id
    name
    memo
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
    APITypes.UpdateDevelopmentCategoryMutationVariables,
    APITypes.UpdateDevelopmentCategoryMutation
  >;
export const deleteDevelopmentCategory =
  /* GraphQL */ `mutation DeleteDevelopmentCategory(
  $input: DeleteDevelopmentCategoryInput!
  $condition: ModelDevelopmentCategoryConditionInput
) {
  deleteDevelopmentCategory(input: $input, condition: $condition) {
    id
    name
    memo
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
    APITypes.DeleteDevelopmentCategoryMutationVariables,
    APITypes.DeleteDevelopmentCategoryMutation
  >;
export const createDevelopmentProduct =
  /* GraphQL */ `mutation CreateDevelopmentProduct(
  $input: CreateDevelopmentProductInput!
  $condition: ModelDevelopmentProductConditionInput
) {
  createDevelopmentProduct(input: $input, condition: $condition) {
    id
    name
    memo
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
    APITypes.CreateDevelopmentProductMutationVariables,
    APITypes.CreateDevelopmentProductMutation
  >;
export const updateDevelopmentProduct =
  /* GraphQL */ `mutation UpdateDevelopmentProduct(
  $input: UpdateDevelopmentProductInput!
  $condition: ModelDevelopmentProductConditionInput
) {
  updateDevelopmentProduct(input: $input, condition: $condition) {
    id
    name
    memo
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
    APITypes.UpdateDevelopmentProductMutationVariables,
    APITypes.UpdateDevelopmentProductMutation
  >;
export const deleteDevelopmentProduct =
  /* GraphQL */ `mutation DeleteDevelopmentProduct(
  $input: DeleteDevelopmentProductInput!
  $condition: ModelDevelopmentProductConditionInput
) {
  deleteDevelopmentProduct(input: $input, condition: $condition) {
    id
    name
    memo
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
    APITypes.DeleteDevelopmentProductMutationVariables,
    APITypes.DeleteDevelopmentProductMutation
  >;
export const createQualification = /* GraphQL */ `mutation CreateQualification(
  $input: CreateQualificationInput!
  $condition: ModelQualificationConditionInput
) {
  createQualification(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateQualificationMutationVariables,
  APITypes.CreateQualificationMutation
>;
export const updateQualification = /* GraphQL */ `mutation UpdateQualification(
  $input: UpdateQualificationInput!
  $condition: ModelQualificationConditionInput
) {
  updateQualification(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateQualificationMutationVariables,
  APITypes.UpdateQualificationMutation
>;
export const deleteQualification = /* GraphQL */ `mutation DeleteQualification(
  $input: DeleteQualificationInput!
  $condition: ModelQualificationConditionInput
) {
  deleteQualification(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteQualificationMutationVariables,
  APITypes.DeleteQualificationMutation
>;
export const createDevelopmentTool =
  /* GraphQL */ `mutation CreateDevelopmentTool(
  $input: CreateDevelopmentToolInput!
  $condition: ModelDevelopmentToolConditionInput
) {
  createDevelopmentTool(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
    APITypes.CreateDevelopmentToolMutationVariables,
    APITypes.CreateDevelopmentToolMutation
  >;
export const updateDevelopmentTool =
  /* GraphQL */ `mutation UpdateDevelopmentTool(
  $input: UpdateDevelopmentToolInput!
  $condition: ModelDevelopmentToolConditionInput
) {
  updateDevelopmentTool(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
    APITypes.UpdateDevelopmentToolMutationVariables,
    APITypes.UpdateDevelopmentToolMutation
  >;
export const deleteDevelopmentTool =
  /* GraphQL */ `mutation DeleteDevelopmentTool(
  $input: DeleteDevelopmentToolInput!
  $condition: ModelDevelopmentToolConditionInput
) {
  deleteDevelopmentTool(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
    APITypes.DeleteDevelopmentToolMutationVariables,
    APITypes.DeleteDevelopmentToolMutation
  >;
export const createProgrammingLanguage =
  /* GraphQL */ `mutation CreateProgrammingLanguage(
  $input: CreateProgrammingLanguageInput!
  $condition: ModelProgrammingLanguageConditionInput
) {
  createProgrammingLanguage(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
    APITypes.CreateProgrammingLanguageMutationVariables,
    APITypes.CreateProgrammingLanguageMutation
  >;
export const updateProgrammingLanguage =
  /* GraphQL */ `mutation UpdateProgrammingLanguage(
  $input: UpdateProgrammingLanguageInput!
  $condition: ModelProgrammingLanguageConditionInput
) {
  updateProgrammingLanguage(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
    APITypes.UpdateProgrammingLanguageMutationVariables,
    APITypes.UpdateProgrammingLanguageMutation
  >;
export const deleteProgrammingLanguage =
  /* GraphQL */ `mutation DeleteProgrammingLanguage(
  $input: DeleteProgrammingLanguageInput!
  $condition: ModelProgrammingLanguageConditionInput
) {
  deleteProgrammingLanguage(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
    APITypes.DeleteProgrammingLanguageMutationVariables,
    APITypes.DeleteProgrammingLanguageMutation
  >;
export const createPaymentMethod = /* GraphQL */ `mutation CreatePaymentMethod(
  $input: CreatePaymentMethodInput!
  $condition: ModelPaymentMethodConditionInput
) {
  createPaymentMethod(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePaymentMethodMutationVariables,
  APITypes.CreatePaymentMethodMutation
>;
export const updatePaymentMethod = /* GraphQL */ `mutation UpdatePaymentMethod(
  $input: UpdatePaymentMethodInput!
  $condition: ModelPaymentMethodConditionInput
) {
  updatePaymentMethod(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePaymentMethodMutationVariables,
  APITypes.UpdatePaymentMethodMutation
>;
export const deletePaymentMethod = /* GraphQL */ `mutation DeletePaymentMethod(
  $input: DeletePaymentMethodInput!
  $condition: ModelPaymentMethodConditionInput
) {
  deletePaymentMethod(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePaymentMethodMutationVariables,
  APITypes.DeletePaymentMethodMutation
>;
export const createCreditCard = /* GraphQL */ `mutation CreateCreditCard(
  $input: CreateCreditCardInput!
  $condition: ModelCreditCardConditionInput
) {
  createCreditCard(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCreditCardMutationVariables,
  APITypes.CreateCreditCardMutation
>;
export const updateCreditCard = /* GraphQL */ `mutation UpdateCreditCard(
  $input: UpdateCreditCardInput!
  $condition: ModelCreditCardConditionInput
) {
  updateCreditCard(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCreditCardMutationVariables,
  APITypes.UpdateCreditCardMutation
>;
export const deleteCreditCard = /* GraphQL */ `mutation DeleteCreditCard(
  $input: DeleteCreditCardInput!
  $condition: ModelCreditCardConditionInput
) {
  deleteCreditCard(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCreditCardMutationVariables,
  APITypes.DeleteCreditCardMutation
>;
export const createFramework = /* GraphQL */ `mutation CreateFramework(
  $input: CreateFrameworkInput!
  $condition: ModelFrameworkConditionInput
) {
  createFramework(input: $input, condition: $condition) {
    id
    programmingLanguageId
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateFrameworkMutationVariables,
  APITypes.CreateFrameworkMutation
>;
export const updateFramework = /* GraphQL */ `mutation UpdateFramework(
  $input: UpdateFrameworkInput!
  $condition: ModelFrameworkConditionInput
) {
  updateFramework(input: $input, condition: $condition) {
    id
    programmingLanguageId
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateFrameworkMutationVariables,
  APITypes.UpdateFrameworkMutation
>;
export const deleteFramework = /* GraphQL */ `mutation DeleteFramework(
  $input: DeleteFrameworkInput!
  $condition: ModelFrameworkConditionInput
) {
  deleteFramework(input: $input, condition: $condition) {
    id
    programmingLanguageId
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteFrameworkMutationVariables,
  APITypes.DeleteFrameworkMutation
>;
export const createJobType = /* GraphQL */ `mutation CreateJobType(
  $input: CreateJobTypeInput!
  $condition: ModelJobTypeConditionInput
) {
  createJobType(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateJobTypeMutationVariables,
  APITypes.CreateJobTypeMutation
>;
export const updateJobType = /* GraphQL */ `mutation UpdateJobType(
  $input: UpdateJobTypeInput!
  $condition: ModelJobTypeConditionInput
) {
  updateJobType(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateJobTypeMutationVariables,
  APITypes.UpdateJobTypeMutation
>;
export const deleteJobType = /* GraphQL */ `mutation DeleteJobType(
  $input: DeleteJobTypeInput!
  $condition: ModelJobTypeConditionInput
) {
  deleteJobType(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteJobTypeMutationVariables,
  APITypes.DeleteJobTypeMutation
>;
export const createBenefitUserCategory =
  /* GraphQL */ `mutation CreateBenefitUserCategory(
  $input: CreateBenefitUserCategoryInput!
  $condition: ModelBenefitUserCategoryConditionInput
) {
  createBenefitUserCategory(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
    APITypes.CreateBenefitUserCategoryMutationVariables,
    APITypes.CreateBenefitUserCategoryMutation
  >;
export const updateBenefitUserCategory =
  /* GraphQL */ `mutation UpdateBenefitUserCategory(
  $input: UpdateBenefitUserCategoryInput!
  $condition: ModelBenefitUserCategoryConditionInput
) {
  updateBenefitUserCategory(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
    APITypes.UpdateBenefitUserCategoryMutationVariables,
    APITypes.UpdateBenefitUserCategoryMutation
  >;
export const deleteBenefitUserCategory =
  /* GraphQL */ `mutation DeleteBenefitUserCategory(
  $input: DeleteBenefitUserCategoryInput!
  $condition: ModelBenefitUserCategoryConditionInput
) {
  deleteBenefitUserCategory(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
    APITypes.DeleteBenefitUserCategoryMutationVariables,
    APITypes.DeleteBenefitUserCategoryMutation
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
` as GeneratedMutation<
  APITypes.DeleteCourseReviewMutationVariables,
  APITypes.DeleteCourseReviewMutation
>;
export const createContact = /* GraphQL */ `mutation CreateContact(
  $input: CreateContactInput!
  $condition: ModelContactConditionInput
) {
  createContact(input: $input, condition: $condition) {
    id
    userEmail
    userName
    messageInfo
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateContactMutationVariables,
  APITypes.CreateContactMutation
>;
export const updateContact = /* GraphQL */ `mutation UpdateContact(
  $input: UpdateContactInput!
  $condition: ModelContactConditionInput
) {
  updateContact(input: $input, condition: $condition) {
    id
    userEmail
    userName
    messageInfo
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateContactMutationVariables,
  APITypes.UpdateContactMutation
>;
export const deleteContact = /* GraphQL */ `mutation DeleteContact(
  $input: DeleteContactInput!
  $condition: ModelContactConditionInput
) {
  deleteContact(input: $input, condition: $condition) {
    id
    userEmail
    userName
    messageInfo
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteContactMutationVariables,
  APITypes.DeleteContactMutation
>;
