/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateLearningCenterInput = {
  id?: string | null;
  name?: string | null;
  memo?: string | null;
  operatingCompany?: string | null;
  headquartersLocation?: string | null;
  websiteURL?: string | null;
  logoImageURL?: string | null;
  establishmentYear?: number | null;
  representative?: string | null;
  isDeleted?: boolean | null;
};

export type ModelLearningCenterConditionInput = {
  name?: ModelStringInput | null;
  memo?: ModelStringInput | null;
  operatingCompany?: ModelStringInput | null;
  headquartersLocation?: ModelStringInput | null;
  websiteURL?: ModelStringInput | null;
  logoImageURL?: ModelStringInput | null;
  establishmentYear?: ModelIntInput | null;
  representative?: ModelStringInput | null;
  isDeleted?: ModelBooleanInput | null;
  and?: Array<ModelLearningCenterConditionInput | null> | null;
  or?: Array<ModelLearningCenterConditionInput | null> | null;
  not?: ModelLearningCenterConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type LearningCenter = {
  __typename: "LearningCenter";
  id: string;
  name?: string | null;
  memo?: string | null;
  operatingCompany?: string | null;
  headquartersLocation?: string | null;
  websiteURL?: string | null;
  logoImageURL?: string | null;
  establishmentYear?: number | null;
  representative?: string | null;
  isDeleted?: boolean | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateLearningCenterInput = {
  id: string;
  name?: string | null;
  memo?: string | null;
  operatingCompany?: string | null;
  headquartersLocation?: string | null;
  websiteURL?: string | null;
  logoImageURL?: string | null;
  establishmentYear?: number | null;
  representative?: string | null;
  isDeleted?: boolean | null;
};

export type DeleteLearningCenterInput = {
  id: string;
};

export type CreateLearningCenterCourseInput = {
  id?: string | null;
  learningCenterId: string;
  courseName?: string | null;
  courseURL?: string | null;
  couseDetail?: string | null;
  isDeleted?: boolean | null;
};

export type ModelLearningCenterCourseConditionInput = {
  learningCenterId?: ModelIDInput | null;
  courseName?: ModelStringInput | null;
  courseURL?: ModelStringInput | null;
  couseDetail?: ModelStringInput | null;
  isDeleted?: ModelBooleanInput | null;
  and?: Array<ModelLearningCenterCourseConditionInput | null> | null;
  or?: Array<ModelLearningCenterCourseConditionInput | null> | null;
  not?: ModelLearningCenterCourseConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type LearningCenterCourse = {
  __typename: "LearningCenterCourse";
  id: string;
  learningCenterId: string;
  courseName?: string | null;
  courseURL?: string | null;
  couseDetail?: string | null;
  isDeleted?: boolean | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateLearningCenterCourseInput = {
  id: string;
  learningCenterId?: string | null;
  courseName?: string | null;
  courseURL?: string | null;
  couseDetail?: string | null;
  isDeleted?: boolean | null;
};

export type DeleteLearningCenterCourseInput = {
  id: string;
};

export type CreateCourseReviewInput = {
  id?: string | null;
  userId: string;
  userDisplayId?: string | null;
  userGender?: string | null;
  userAge?: string | null;
  userPrefecture?: string | null;
  courseStartMonth?: number | null;
  courseEndMonth?: number | null;
  learningCenterId: string;
  learningCenterCourseId: string;
  reviewTitle: string;
  reviewDetail: string;
  rating: number;
  isPublished: boolean;
  isDeleted?: boolean | null;
};

export type ModelCourseReviewConditionInput = {
  userId?: ModelStringInput | null;
  userDisplayId?: ModelStringInput | null;
  userGender?: ModelStringInput | null;
  userAge?: ModelStringInput | null;
  userPrefecture?: ModelStringInput | null;
  courseStartMonth?: ModelIntInput | null;
  courseEndMonth?: ModelIntInput | null;
  learningCenterId?: ModelIDInput | null;
  learningCenterCourseId?: ModelIDInput | null;
  reviewTitle?: ModelStringInput | null;
  reviewDetail?: ModelStringInput | null;
  rating?: ModelIntInput | null;
  isPublished?: ModelBooleanInput | null;
  isDeleted?: ModelBooleanInput | null;
  and?: Array<ModelCourseReviewConditionInput | null> | null;
  or?: Array<ModelCourseReviewConditionInput | null> | null;
  not?: ModelCourseReviewConditionInput | null;
};

export type CourseReview = {
  __typename: "CourseReview";
  id: string;
  userId: string;
  userDisplayId?: string | null;
  userGender?: string | null;
  userAge?: string | null;
  userPrefecture?: string | null;
  courseStartMonth?: number | null;
  courseEndMonth?: number | null;
  learningCenterId: string;
  learningCenterCourseId: string;
  reviewTitle: string;
  reviewDetail: string;
  rating: number;
  isPublished: boolean;
  isDeleted?: boolean | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCourseReviewInput = {
  id: string;
  userId?: string | null;
  userDisplayId?: string | null;
  userGender?: string | null;
  userAge?: string | null;
  userPrefecture?: string | null;
  courseStartMonth?: number | null;
  courseEndMonth?: number | null;
  learningCenterId?: string | null;
  learningCenterCourseId?: string | null;
  reviewTitle?: string | null;
  reviewDetail?: string | null;
  rating?: number | null;
  isPublished?: boolean | null;
  isDeleted?: boolean | null;
};

export type DeleteCourseReviewInput = {
  id: string;
};

export type CreateContactInput = {
  id?: string | null;
  userEmail: string;
  userName: string;
  messageInfo: string;
};

export type ModelContactConditionInput = {
  userEmail?: ModelStringInput | null;
  userName?: ModelStringInput | null;
  messageInfo?: ModelStringInput | null;
  and?: Array<ModelContactConditionInput | null> | null;
  or?: Array<ModelContactConditionInput | null> | null;
  not?: ModelContactConditionInput | null;
};

export type Contact = {
  __typename: "Contact";
  id: string;
  userEmail: string;
  userName: string;
  messageInfo: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateContactInput = {
  id: string;
  userEmail?: string | null;
  userName?: string | null;
  messageInfo?: string | null;
};

export type DeleteContactInput = {
  id: string;
};

export type ModelLearningCenterFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  memo?: ModelStringInput | null;
  operatingCompany?: ModelStringInput | null;
  headquartersLocation?: ModelStringInput | null;
  websiteURL?: ModelStringInput | null;
  logoImageURL?: ModelStringInput | null;
  establishmentYear?: ModelIntInput | null;
  representative?: ModelStringInput | null;
  isDeleted?: ModelBooleanInput | null;
  and?: Array<ModelLearningCenterFilterInput | null> | null;
  or?: Array<ModelLearningCenterFilterInput | null> | null;
  not?: ModelLearningCenterFilterInput | null;
};

export type ModelLearningCenterConnection = {
  __typename: "ModelLearningCenterConnection";
  items: Array<LearningCenter | null>;
  nextToken?: string | null;
};

export type ModelLearningCenterCourseFilterInput = {
  id?: ModelIDInput | null;
  learningCenterId?: ModelIDInput | null;
  courseName?: ModelStringInput | null;
  courseURL?: ModelStringInput | null;
  couseDetail?: ModelStringInput | null;
  isDeleted?: ModelBooleanInput | null;
  and?: Array<ModelLearningCenterCourseFilterInput | null> | null;
  or?: Array<ModelLearningCenterCourseFilterInput | null> | null;
  not?: ModelLearningCenterCourseFilterInput | null;
};

export type ModelLearningCenterCourseConnection = {
  __typename: "ModelLearningCenterCourseConnection";
  items: Array<LearningCenterCourse | null>;
  nextToken?: string | null;
};

export type ModelCourseReviewFilterInput = {
  id?: ModelIDInput | null;
  userId?: ModelStringInput | null;
  userDisplayId?: ModelStringInput | null;
  userGender?: ModelStringInput | null;
  userAge?: ModelStringInput | null;
  userPrefecture?: ModelStringInput | null;
  courseStartMonth?: ModelIntInput | null;
  courseEndMonth?: ModelIntInput | null;
  learningCenterId?: ModelIDInput | null;
  learningCenterCourseId?: ModelIDInput | null;
  reviewTitle?: ModelStringInput | null;
  reviewDetail?: ModelStringInput | null;
  rating?: ModelIntInput | null;
  isPublished?: ModelBooleanInput | null;
  isDeleted?: ModelBooleanInput | null;
  and?: Array<ModelCourseReviewFilterInput | null> | null;
  or?: Array<ModelCourseReviewFilterInput | null> | null;
  not?: ModelCourseReviewFilterInput | null;
};

export type ModelCourseReviewConnection = {
  __typename: "ModelCourseReviewConnection";
  items: Array<CourseReview | null>;
  nextToken?: string | null;
};

export type ModelContactFilterInput = {
  id?: ModelIDInput | null;
  userEmail?: ModelStringInput | null;
  userName?: ModelStringInput | null;
  messageInfo?: ModelStringInput | null;
  and?: Array<ModelContactFilterInput | null> | null;
  or?: Array<ModelContactFilterInput | null> | null;
  not?: ModelContactFilterInput | null;
};

export type ModelContactConnection = {
  __typename: "ModelContactConnection";
  items: Array<Contact | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionLearningCenterFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  memo?: ModelSubscriptionStringInput | null;
  operatingCompany?: ModelSubscriptionStringInput | null;
  headquartersLocation?: ModelSubscriptionStringInput | null;
  websiteURL?: ModelSubscriptionStringInput | null;
  logoImageURL?: ModelSubscriptionStringInput | null;
  establishmentYear?: ModelSubscriptionIntInput | null;
  representative?: ModelSubscriptionStringInput | null;
  isDeleted?: ModelSubscriptionBooleanInput | null;
  and?: Array<ModelSubscriptionLearningCenterFilterInput | null> | null;
  or?: Array<ModelSubscriptionLearningCenterFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
};

export type ModelSubscriptionLearningCenterCourseFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  learningCenterId?: ModelSubscriptionIDInput | null;
  courseName?: ModelSubscriptionStringInput | null;
  courseURL?: ModelSubscriptionStringInput | null;
  couseDetail?: ModelSubscriptionStringInput | null;
  isDeleted?: ModelSubscriptionBooleanInput | null;
  and?: Array<ModelSubscriptionLearningCenterCourseFilterInput | null> | null;
  or?: Array<ModelSubscriptionLearningCenterCourseFilterInput | null> | null;
};

export type ModelSubscriptionCourseReviewFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  userId?: ModelSubscriptionStringInput | null;
  userDisplayId?: ModelSubscriptionStringInput | null;
  userGender?: ModelSubscriptionStringInput | null;
  userAge?: ModelSubscriptionStringInput | null;
  userPrefecture?: ModelSubscriptionStringInput | null;
  courseStartMonth?: ModelSubscriptionIntInput | null;
  courseEndMonth?: ModelSubscriptionIntInput | null;
  learningCenterId?: ModelSubscriptionIDInput | null;
  learningCenterCourseId?: ModelSubscriptionIDInput | null;
  reviewTitle?: ModelSubscriptionStringInput | null;
  reviewDetail?: ModelSubscriptionStringInput | null;
  rating?: ModelSubscriptionIntInput | null;
  isPublished?: ModelSubscriptionBooleanInput | null;
  isDeleted?: ModelSubscriptionBooleanInput | null;
  and?: Array<ModelSubscriptionCourseReviewFilterInput | null> | null;
  or?: Array<ModelSubscriptionCourseReviewFilterInput | null> | null;
};

export type ModelSubscriptionContactFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  userEmail?: ModelSubscriptionStringInput | null;
  userName?: ModelSubscriptionStringInput | null;
  messageInfo?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionContactFilterInput | null> | null;
  or?: Array<ModelSubscriptionContactFilterInput | null> | null;
};

export type CreateLearningCenterMutationVariables = {
  input: CreateLearningCenterInput;
  condition?: ModelLearningCenterConditionInput | null;
};

export type CreateLearningCenterMutation = {
  createLearningCenter?: {
    __typename: "LearningCenter";
    id: string;
    name?: string | null;
    memo?: string | null;
    operatingCompany?: string | null;
    headquartersLocation?: string | null;
    websiteURL?: string | null;
    logoImageURL?: string | null;
    establishmentYear?: number | null;
    representative?: string | null;
    isDeleted?: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateLearningCenterMutationVariables = {
  input: UpdateLearningCenterInput;
  condition?: ModelLearningCenterConditionInput | null;
};

export type UpdateLearningCenterMutation = {
  updateLearningCenter?: {
    __typename: "LearningCenter";
    id: string;
    name?: string | null;
    memo?: string | null;
    operatingCompany?: string | null;
    headquartersLocation?: string | null;
    websiteURL?: string | null;
    logoImageURL?: string | null;
    establishmentYear?: number | null;
    representative?: string | null;
    isDeleted?: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteLearningCenterMutationVariables = {
  input: DeleteLearningCenterInput;
  condition?: ModelLearningCenterConditionInput | null;
};

export type DeleteLearningCenterMutation = {
  deleteLearningCenter?: {
    __typename: "LearningCenter";
    id: string;
    name?: string | null;
    memo?: string | null;
    operatingCompany?: string | null;
    headquartersLocation?: string | null;
    websiteURL?: string | null;
    logoImageURL?: string | null;
    establishmentYear?: number | null;
    representative?: string | null;
    isDeleted?: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateLearningCenterCourseMutationVariables = {
  input: CreateLearningCenterCourseInput;
  condition?: ModelLearningCenterCourseConditionInput | null;
};

export type CreateLearningCenterCourseMutation = {
  createLearningCenterCourse?: {
    __typename: "LearningCenterCourse";
    id: string;
    learningCenterId: string;
    courseName?: string | null;
    courseURL?: string | null;
    couseDetail?: string | null;
    isDeleted?: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateLearningCenterCourseMutationVariables = {
  input: UpdateLearningCenterCourseInput;
  condition?: ModelLearningCenterCourseConditionInput | null;
};

export type UpdateLearningCenterCourseMutation = {
  updateLearningCenterCourse?: {
    __typename: "LearningCenterCourse";
    id: string;
    learningCenterId: string;
    courseName?: string | null;
    courseURL?: string | null;
    couseDetail?: string | null;
    isDeleted?: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteLearningCenterCourseMutationVariables = {
  input: DeleteLearningCenterCourseInput;
  condition?: ModelLearningCenterCourseConditionInput | null;
};

export type DeleteLearningCenterCourseMutation = {
  deleteLearningCenterCourse?: {
    __typename: "LearningCenterCourse";
    id: string;
    learningCenterId: string;
    courseName?: string | null;
    courseURL?: string | null;
    couseDetail?: string | null;
    isDeleted?: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateCourseReviewMutationVariables = {
  input: CreateCourseReviewInput;
  condition?: ModelCourseReviewConditionInput | null;
};

export type CreateCourseReviewMutation = {
  createCourseReview?: {
    __typename: "CourseReview";
    id: string;
    userId: string;
    userDisplayId?: string | null;
    userGender?: string | null;
    userAge?: string | null;
    userPrefecture?: string | null;
    courseStartMonth?: number | null;
    courseEndMonth?: number | null;
    learningCenterId: string;
    learningCenterCourseId: string;
    reviewTitle: string;
    reviewDetail: string;
    rating: number;
    isPublished: boolean;
    isDeleted?: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateCourseReviewMutationVariables = {
  input: UpdateCourseReviewInput;
  condition?: ModelCourseReviewConditionInput | null;
};

export type UpdateCourseReviewMutation = {
  updateCourseReview?: {
    __typename: "CourseReview";
    id: string;
    userId: string;
    userDisplayId?: string | null;
    userGender?: string | null;
    userAge?: string | null;
    userPrefecture?: string | null;
    courseStartMonth?: number | null;
    courseEndMonth?: number | null;
    learningCenterId: string;
    learningCenterCourseId: string;
    reviewTitle: string;
    reviewDetail: string;
    rating: number;
    isPublished: boolean;
    isDeleted?: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteCourseReviewMutationVariables = {
  input: DeleteCourseReviewInput;
  condition?: ModelCourseReviewConditionInput | null;
};

export type DeleteCourseReviewMutation = {
  deleteCourseReview?: {
    __typename: "CourseReview";
    id: string;
    userId: string;
    userDisplayId?: string | null;
    userGender?: string | null;
    userAge?: string | null;
    userPrefecture?: string | null;
    courseStartMonth?: number | null;
    courseEndMonth?: number | null;
    learningCenterId: string;
    learningCenterCourseId: string;
    reviewTitle: string;
    reviewDetail: string;
    rating: number;
    isPublished: boolean;
    isDeleted?: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateContactMutationVariables = {
  input: CreateContactInput;
  condition?: ModelContactConditionInput | null;
};

export type CreateContactMutation = {
  createContact?: {
    __typename: "Contact";
    id: string;
    userEmail: string;
    userName: string;
    messageInfo: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateContactMutationVariables = {
  input: UpdateContactInput;
  condition?: ModelContactConditionInput | null;
};

export type UpdateContactMutation = {
  updateContact?: {
    __typename: "Contact";
    id: string;
    userEmail: string;
    userName: string;
    messageInfo: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteContactMutationVariables = {
  input: DeleteContactInput;
  condition?: ModelContactConditionInput | null;
};

export type DeleteContactMutation = {
  deleteContact?: {
    __typename: "Contact";
    id: string;
    userEmail: string;
    userName: string;
    messageInfo: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type GetLearningCenterQueryVariables = {
  id: string;
};

export type GetLearningCenterQuery = {
  getLearningCenter?: {
    __typename: "LearningCenter";
    id: string;
    name?: string | null;
    memo?: string | null;
    operatingCompany?: string | null;
    headquartersLocation?: string | null;
    websiteURL?: string | null;
    logoImageURL?: string | null;
    establishmentYear?: number | null;
    representative?: string | null;
    isDeleted?: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListLearningCentersQueryVariables = {
  filter?: ModelLearningCenterFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListLearningCentersQuery = {
  listLearningCenters?: {
    __typename: "ModelLearningCenterConnection";
    items: Array<{
      __typename: "LearningCenter";
      id: string;
      name?: string | null;
      memo?: string | null;
      operatingCompany?: string | null;
      headquartersLocation?: string | null;
      websiteURL?: string | null;
      logoImageURL?: string | null;
      establishmentYear?: number | null;
      representative?: string | null;
      isDeleted?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetLearningCenterCourseQueryVariables = {
  id: string;
};

export type GetLearningCenterCourseQuery = {
  getLearningCenterCourse?: {
    __typename: "LearningCenterCourse";
    id: string;
    learningCenterId: string;
    courseName?: string | null;
    courseURL?: string | null;
    couseDetail?: string | null;
    isDeleted?: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListLearningCenterCoursesQueryVariables = {
  filter?: ModelLearningCenterCourseFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListLearningCenterCoursesQuery = {
  listLearningCenterCourses?: {
    __typename: "ModelLearningCenterCourseConnection";
    items: Array<{
      __typename: "LearningCenterCourse";
      id: string;
      learningCenterId: string;
      courseName?: string | null;
      courseURL?: string | null;
      couseDetail?: string | null;
      isDeleted?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetCourseReviewQueryVariables = {
  id: string;
};

export type GetCourseReviewQuery = {
  getCourseReview?: {
    __typename: "CourseReview";
    id: string;
    userId: string;
    userDisplayId?: string | null;
    userGender?: string | null;
    userAge?: string | null;
    userPrefecture?: string | null;
    courseStartMonth?: number | null;
    courseEndMonth?: number | null;
    learningCenterId: string;
    learningCenterCourseId: string;
    reviewTitle: string;
    reviewDetail: string;
    rating: number;
    isPublished: boolean;
    isDeleted?: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListCourseReviewsQueryVariables = {
  filter?: ModelCourseReviewFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListCourseReviewsQuery = {
  listCourseReviews?: {
    __typename: "ModelCourseReviewConnection";
    items: Array<{
      __typename: "CourseReview";
      id: string;
      userId: string;
      userDisplayId?: string | null;
      userGender?: string | null;
      userAge?: string | null;
      userPrefecture?: string | null;
      courseStartMonth?: number | null;
      courseEndMonth?: number | null;
      learningCenterId: string;
      learningCenterCourseId: string;
      reviewTitle: string;
      reviewDetail: string;
      rating: number;
      isPublished: boolean;
      isDeleted?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetContactQueryVariables = {
  id: string;
};

export type GetContactQuery = {
  getContact?: {
    __typename: "Contact";
    id: string;
    userEmail: string;
    userName: string;
    messageInfo: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListContactsQueryVariables = {
  filter?: ModelContactFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListContactsQuery = {
  listContacts?: {
    __typename: "ModelContactConnection";
    items: Array<{
      __typename: "Contact";
      id: string;
      userEmail: string;
      userName: string;
      messageInfo: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type OnCreateLearningCenterSubscriptionVariables = {
  filter?: ModelSubscriptionLearningCenterFilterInput | null;
};

export type OnCreateLearningCenterSubscription = {
  onCreateLearningCenter?: {
    __typename: "LearningCenter";
    id: string;
    name?: string | null;
    memo?: string | null;
    operatingCompany?: string | null;
    headquartersLocation?: string | null;
    websiteURL?: string | null;
    logoImageURL?: string | null;
    establishmentYear?: number | null;
    representative?: string | null;
    isDeleted?: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateLearningCenterSubscriptionVariables = {
  filter?: ModelSubscriptionLearningCenterFilterInput | null;
};

export type OnUpdateLearningCenterSubscription = {
  onUpdateLearningCenter?: {
    __typename: "LearningCenter";
    id: string;
    name?: string | null;
    memo?: string | null;
    operatingCompany?: string | null;
    headquartersLocation?: string | null;
    websiteURL?: string | null;
    logoImageURL?: string | null;
    establishmentYear?: number | null;
    representative?: string | null;
    isDeleted?: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteLearningCenterSubscriptionVariables = {
  filter?: ModelSubscriptionLearningCenterFilterInput | null;
};

export type OnDeleteLearningCenterSubscription = {
  onDeleteLearningCenter?: {
    __typename: "LearningCenter";
    id: string;
    name?: string | null;
    memo?: string | null;
    operatingCompany?: string | null;
    headquartersLocation?: string | null;
    websiteURL?: string | null;
    logoImageURL?: string | null;
    establishmentYear?: number | null;
    representative?: string | null;
    isDeleted?: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateLearningCenterCourseSubscriptionVariables = {
  filter?: ModelSubscriptionLearningCenterCourseFilterInput | null;
};

export type OnCreateLearningCenterCourseSubscription = {
  onCreateLearningCenterCourse?: {
    __typename: "LearningCenterCourse";
    id: string;
    learningCenterId: string;
    courseName?: string | null;
    courseURL?: string | null;
    couseDetail?: string | null;
    isDeleted?: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateLearningCenterCourseSubscriptionVariables = {
  filter?: ModelSubscriptionLearningCenterCourseFilterInput | null;
};

export type OnUpdateLearningCenterCourseSubscription = {
  onUpdateLearningCenterCourse?: {
    __typename: "LearningCenterCourse";
    id: string;
    learningCenterId: string;
    courseName?: string | null;
    courseURL?: string | null;
    couseDetail?: string | null;
    isDeleted?: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteLearningCenterCourseSubscriptionVariables = {
  filter?: ModelSubscriptionLearningCenterCourseFilterInput | null;
};

export type OnDeleteLearningCenterCourseSubscription = {
  onDeleteLearningCenterCourse?: {
    __typename: "LearningCenterCourse";
    id: string;
    learningCenterId: string;
    courseName?: string | null;
    courseURL?: string | null;
    couseDetail?: string | null;
    isDeleted?: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateCourseReviewSubscriptionVariables = {
  filter?: ModelSubscriptionCourseReviewFilterInput | null;
};

export type OnCreateCourseReviewSubscription = {
  onCreateCourseReview?: {
    __typename: "CourseReview";
    id: string;
    userId: string;
    userDisplayId?: string | null;
    userGender?: string | null;
    userAge?: string | null;
    userPrefecture?: string | null;
    courseStartMonth?: number | null;
    courseEndMonth?: number | null;
    learningCenterId: string;
    learningCenterCourseId: string;
    reviewTitle: string;
    reviewDetail: string;
    rating: number;
    isPublished: boolean;
    isDeleted?: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateCourseReviewSubscriptionVariables = {
  filter?: ModelSubscriptionCourseReviewFilterInput | null;
};

export type OnUpdateCourseReviewSubscription = {
  onUpdateCourseReview?: {
    __typename: "CourseReview";
    id: string;
    userId: string;
    userDisplayId?: string | null;
    userGender?: string | null;
    userAge?: string | null;
    userPrefecture?: string | null;
    courseStartMonth?: number | null;
    courseEndMonth?: number | null;
    learningCenterId: string;
    learningCenterCourseId: string;
    reviewTitle: string;
    reviewDetail: string;
    rating: number;
    isPublished: boolean;
    isDeleted?: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteCourseReviewSubscriptionVariables = {
  filter?: ModelSubscriptionCourseReviewFilterInput | null;
};

export type OnDeleteCourseReviewSubscription = {
  onDeleteCourseReview?: {
    __typename: "CourseReview";
    id: string;
    userId: string;
    userDisplayId?: string | null;
    userGender?: string | null;
    userAge?: string | null;
    userPrefecture?: string | null;
    courseStartMonth?: number | null;
    courseEndMonth?: number | null;
    learningCenterId: string;
    learningCenterCourseId: string;
    reviewTitle: string;
    reviewDetail: string;
    rating: number;
    isPublished: boolean;
    isDeleted?: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateContactSubscriptionVariables = {
  filter?: ModelSubscriptionContactFilterInput | null;
};

export type OnCreateContactSubscription = {
  onCreateContact?: {
    __typename: "Contact";
    id: string;
    userEmail: string;
    userName: string;
    messageInfo: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateContactSubscriptionVariables = {
  filter?: ModelSubscriptionContactFilterInput | null;
};

export type OnUpdateContactSubscription = {
  onUpdateContact?: {
    __typename: "Contact";
    id: string;
    userEmail: string;
    userName: string;
    messageInfo: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteContactSubscriptionVariables = {
  filter?: ModelSubscriptionContactFilterInput | null;
};

export type OnDeleteContactSubscription = {
  onDeleteContact?: {
    __typename: "Contact";
    id: string;
    userEmail: string;
    userName: string;
    messageInfo: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};
