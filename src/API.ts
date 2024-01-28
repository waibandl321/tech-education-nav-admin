/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateDevelopmentToolInput = {
  id?: string | null;
  name: string;
};

export type ModelDevelopmentToolConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelDevelopmentToolConditionInput | null> | null;
  or?: Array<ModelDevelopmentToolConditionInput | null> | null;
  not?: ModelDevelopmentToolConditionInput | null;
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

export type DevelopmentTool = {
  __typename: "DevelopmentTool";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateDevelopmentToolInput = {
  id: string;
  name?: string | null;
};

export type DeleteDevelopmentToolInput = {
  id: string;
};

export type CreateProgrammingLanguageInput = {
  id?: string | null;
  name: string;
};

export type ModelProgrammingLanguageConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelProgrammingLanguageConditionInput | null> | null;
  or?: Array<ModelProgrammingLanguageConditionInput | null> | null;
  not?: ModelProgrammingLanguageConditionInput | null;
};

export type ProgrammingLanguage = {
  __typename: "ProgrammingLanguage";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateProgrammingLanguageInput = {
  id: string;
  name?: string | null;
};

export type DeleteProgrammingLanguageInput = {
  id: string;
};

export type CreateFrameworkInput = {
  id?: string | null;
  programmingLanguageId?: string | null;
  name: string;
};

export type ModelFrameworkConditionInput = {
  programmingLanguageId?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelFrameworkConditionInput | null> | null;
  or?: Array<ModelFrameworkConditionInput | null> | null;
  not?: ModelFrameworkConditionInput | null;
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

export type Framework = {
  __typename: "Framework";
  id: string;
  programmingLanguageId?: string | null;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateFrameworkInput = {
  id: string;
  programmingLanguageId?: string | null;
  name?: string | null;
};

export type DeleteFrameworkInput = {
  id: string;
};

export type CreateJobTypeInput = {
  id?: string | null;
  name: string;
};

export type ModelJobTypeConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelJobTypeConditionInput | null> | null;
  or?: Array<ModelJobTypeConditionInput | null> | null;
  not?: ModelJobTypeConditionInput | null;
};

export type JobType = {
  __typename: "JobType";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateJobTypeInput = {
  id: string;
  name?: string | null;
};

export type DeleteJobTypeInput = {
  id: string;
};

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
  duration?: number | null;
  price?: number | null;
  isAvailableMoneyBack?: boolean | null;
  moneyBackDetail?: string | null;
  isAvailableSubsidy?: boolean | null;
  subsidyMemo?: string | null;
  onSale?: boolean | null;
  saleMemo?: string | null;
  purposes?: Array<Purpose | null> | null;
  jobTypes?: Array<string | null> | null;
  programmingLanguages?: Array<string | null> | null;
  frameworks?: Array<string | null> | null;
  developmentTools?: Array<string | null> | null;
  paymentOptions?: Array<PaymentOption | null> | null;
  attendanceType?: AttendanceType | null;
  locationPref?: string | null;
  locationCity?: string | null;
  isMadeToOrder?: boolean | null;
  especiallyAudiences?: Array<EspeciallyAudience | null> | null;
  isDeleted?: boolean | null;
};

export enum Purpose {
  JOB = "JOB",
  FREELANCE = "FREELANCE",
  ENTREPRENEURSHIP = "ENTREPRENEURSHIP",
  SIDE_JOB = "SIDE_JOB",
  CERTIFICATION = "CERTIFICATION",
  LEARNING = "LEARNING",
}

export enum PaymentOption {
  FULL = "FULL",
  INSTALLMENTS = "INSTALLMENTS",
  SUBSCRIPTION = "SUBSCRIPTION",
}

export enum AttendanceType {
  ONLINE = "ONLINE",
  OFFLINE = "OFFLINE",
  HYBRID = "HYBRID",
}

export enum EspeciallyAudience {
  FOR_ELEMENTARY_STUDENTS = "FOR_ELEMENTARY_STUDENTS",
  FOR_JUNIOR_HIGH_STUDENTS = "FOR_JUNIOR_HIGH_STUDENTS",
  FOR_HIGH_SCHOOL_STUDENTS = "FOR_HIGH_SCHOOL_STUDENTS",
  FOR_UNIVERSITY_STUDENTS = "FOR_UNIVERSITY_STUDENTS",
  FOR_HOUSEWIVES = "FOR_HOUSEWIVES",
  FOR_SENIORS = "FOR_SENIORS",
  FOR_PEOPLE_WITH_DISABILITIES = "FOR_PEOPLE_WITH_DISABILITIES",
}

export type ModelLearningCenterCourseConditionInput = {
  learningCenterId?: ModelIDInput | null;
  courseName?: ModelStringInput | null;
  courseURL?: ModelStringInput | null;
  couseDetail?: ModelStringInput | null;
  duration?: ModelIntInput | null;
  price?: ModelFloatInput | null;
  isAvailableMoneyBack?: ModelBooleanInput | null;
  moneyBackDetail?: ModelStringInput | null;
  isAvailableSubsidy?: ModelBooleanInput | null;
  subsidyMemo?: ModelStringInput | null;
  onSale?: ModelBooleanInput | null;
  saleMemo?: ModelStringInput | null;
  purposes?: ModelPurposeListInput | null;
  jobTypes?: ModelStringInput | null;
  programmingLanguages?: ModelStringInput | null;
  frameworks?: ModelStringInput | null;
  developmentTools?: ModelStringInput | null;
  paymentOptions?: ModelPaymentOptionListInput | null;
  attendanceType?: ModelAttendanceTypeInput | null;
  locationPref?: ModelStringInput | null;
  locationCity?: ModelStringInput | null;
  isMadeToOrder?: ModelBooleanInput | null;
  especiallyAudiences?: ModelEspeciallyAudienceListInput | null;
  isDeleted?: ModelBooleanInput | null;
  and?: Array<ModelLearningCenterCourseConditionInput | null> | null;
  or?: Array<ModelLearningCenterCourseConditionInput | null> | null;
  not?: ModelLearningCenterCourseConditionInput | null;
};

export type ModelFloatInput = {
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

export type ModelPurposeListInput = {
  eq?: Array<Purpose | null> | null;
  ne?: Array<Purpose | null> | null;
  contains?: Purpose | null;
  notContains?: Purpose | null;
};

export type ModelPaymentOptionListInput = {
  eq?: Array<PaymentOption | null> | null;
  ne?: Array<PaymentOption | null> | null;
  contains?: PaymentOption | null;
  notContains?: PaymentOption | null;
};

export type ModelAttendanceTypeInput = {
  eq?: AttendanceType | null;
  ne?: AttendanceType | null;
};

export type ModelEspeciallyAudienceListInput = {
  eq?: Array<EspeciallyAudience | null> | null;
  ne?: Array<EspeciallyAudience | null> | null;
  contains?: EspeciallyAudience | null;
  notContains?: EspeciallyAudience | null;
};

export type LearningCenterCourse = {
  __typename: "LearningCenterCourse";
  id: string;
  learningCenterId: string;
  courseName?: string | null;
  courseURL?: string | null;
  couseDetail?: string | null;
  duration?: number | null;
  price?: number | null;
  isAvailableMoneyBack?: boolean | null;
  moneyBackDetail?: string | null;
  isAvailableSubsidy?: boolean | null;
  subsidyMemo?: string | null;
  onSale?: boolean | null;
  saleMemo?: string | null;
  purposes?: Array<Purpose | null> | null;
  jobTypes?: Array<string | null> | null;
  programmingLanguages?: Array<string | null> | null;
  frameworks?: Array<string | null> | null;
  developmentTools?: Array<string | null> | null;
  paymentOptions?: Array<PaymentOption | null> | null;
  attendanceType?: AttendanceType | null;
  locationPref?: string | null;
  locationCity?: string | null;
  isMadeToOrder?: boolean | null;
  especiallyAudiences?: Array<EspeciallyAudience | null> | null;
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
  duration?: number | null;
  price?: number | null;
  isAvailableMoneyBack?: boolean | null;
  moneyBackDetail?: string | null;
  isAvailableSubsidy?: boolean | null;
  subsidyMemo?: string | null;
  onSale?: boolean | null;
  saleMemo?: string | null;
  purposes?: Array<Purpose | null> | null;
  jobTypes?: Array<string | null> | null;
  programmingLanguages?: Array<string | null> | null;
  frameworks?: Array<string | null> | null;
  developmentTools?: Array<string | null> | null;
  paymentOptions?: Array<PaymentOption | null> | null;
  attendanceType?: AttendanceType | null;
  locationPref?: string | null;
  locationCity?: string | null;
  isMadeToOrder?: boolean | null;
  especiallyAudiences?: Array<EspeciallyAudience | null> | null;
  isDeleted?: boolean | null;
};

export type DeleteLearningCenterCourseInput = {
  id: string;
};

export type CreateCourseReviewInput = {
  id?: string | null;
  userDisplayId?: string | null;
  userGender: string;
  userAge: string;
  userPrefecture: string;
  studyLengthMonths: number;
  learningCenterId: string;
  learningCenterCourseId: string;
  reviewTitle: string;
  reviewDetail: string;
  rating: number;
  isPublished: boolean;
  isDeleted?: boolean | null;
};

export type ModelCourseReviewConditionInput = {
  userDisplayId?: ModelStringInput | null;
  userGender?: ModelStringInput | null;
  userAge?: ModelStringInput | null;
  userPrefecture?: ModelStringInput | null;
  studyLengthMonths?: ModelIntInput | null;
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
  userDisplayId?: string | null;
  userGender: string;
  userAge: string;
  userPrefecture: string;
  studyLengthMonths: number;
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
  userDisplayId?: string | null;
  userGender?: string | null;
  userAge?: string | null;
  userPrefecture?: string | null;
  studyLengthMonths?: number | null;
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

export type ModelDevelopmentToolFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelDevelopmentToolFilterInput | null> | null;
  or?: Array<ModelDevelopmentToolFilterInput | null> | null;
  not?: ModelDevelopmentToolFilterInput | null;
};

export type ModelDevelopmentToolConnection = {
  __typename: "ModelDevelopmentToolConnection";
  items: Array<DevelopmentTool | null>;
  nextToken?: string | null;
};

export type ModelProgrammingLanguageFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelProgrammingLanguageFilterInput | null> | null;
  or?: Array<ModelProgrammingLanguageFilterInput | null> | null;
  not?: ModelProgrammingLanguageFilterInput | null;
};

export type ModelProgrammingLanguageConnection = {
  __typename: "ModelProgrammingLanguageConnection";
  items: Array<ProgrammingLanguage | null>;
  nextToken?: string | null;
};

export type ModelFrameworkFilterInput = {
  id?: ModelIDInput | null;
  programmingLanguageId?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelFrameworkFilterInput | null> | null;
  or?: Array<ModelFrameworkFilterInput | null> | null;
  not?: ModelFrameworkFilterInput | null;
};

export type ModelFrameworkConnection = {
  __typename: "ModelFrameworkConnection";
  items: Array<Framework | null>;
  nextToken?: string | null;
};

export type ModelJobTypeFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelJobTypeFilterInput | null> | null;
  or?: Array<ModelJobTypeFilterInput | null> | null;
  not?: ModelJobTypeFilterInput | null;
};

export type ModelJobTypeConnection = {
  __typename: "ModelJobTypeConnection";
  items: Array<JobType | null>;
  nextToken?: string | null;
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
  duration?: ModelIntInput | null;
  price?: ModelFloatInput | null;
  isAvailableMoneyBack?: ModelBooleanInput | null;
  moneyBackDetail?: ModelStringInput | null;
  isAvailableSubsidy?: ModelBooleanInput | null;
  subsidyMemo?: ModelStringInput | null;
  onSale?: ModelBooleanInput | null;
  saleMemo?: ModelStringInput | null;
  purposes?: ModelPurposeListInput | null;
  jobTypes?: ModelStringInput | null;
  programmingLanguages?: ModelStringInput | null;
  frameworks?: ModelStringInput | null;
  developmentTools?: ModelStringInput | null;
  paymentOptions?: ModelPaymentOptionListInput | null;
  attendanceType?: ModelAttendanceTypeInput | null;
  locationPref?: ModelStringInput | null;
  locationCity?: ModelStringInput | null;
  isMadeToOrder?: ModelBooleanInput | null;
  especiallyAudiences?: ModelEspeciallyAudienceListInput | null;
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
  userDisplayId?: ModelStringInput | null;
  userGender?: ModelStringInput | null;
  userAge?: ModelStringInput | null;
  userPrefecture?: ModelStringInput | null;
  studyLengthMonths?: ModelIntInput | null;
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

export type ModelSubscriptionDevelopmentToolFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionDevelopmentToolFilterInput | null> | null;
  or?: Array<ModelSubscriptionDevelopmentToolFilterInput | null> | null;
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

export type ModelSubscriptionProgrammingLanguageFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionProgrammingLanguageFilterInput | null> | null;
  or?: Array<ModelSubscriptionProgrammingLanguageFilterInput | null> | null;
};

export type ModelSubscriptionFrameworkFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  programmingLanguageId?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionFrameworkFilterInput | null> | null;
  or?: Array<ModelSubscriptionFrameworkFilterInput | null> | null;
};

export type ModelSubscriptionJobTypeFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionJobTypeFilterInput | null> | null;
  or?: Array<ModelSubscriptionJobTypeFilterInput | null> | null;
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
  duration?: ModelSubscriptionIntInput | null;
  price?: ModelSubscriptionFloatInput | null;
  isAvailableMoneyBack?: ModelSubscriptionBooleanInput | null;
  moneyBackDetail?: ModelSubscriptionStringInput | null;
  isAvailableSubsidy?: ModelSubscriptionBooleanInput | null;
  subsidyMemo?: ModelSubscriptionStringInput | null;
  onSale?: ModelSubscriptionBooleanInput | null;
  saleMemo?: ModelSubscriptionStringInput | null;
  purposes?: ModelSubscriptionStringInput | null;
  jobTypes?: ModelSubscriptionStringInput | null;
  programmingLanguages?: ModelSubscriptionStringInput | null;
  frameworks?: ModelSubscriptionStringInput | null;
  developmentTools?: ModelSubscriptionStringInput | null;
  paymentOptions?: ModelSubscriptionStringInput | null;
  attendanceType?: ModelSubscriptionStringInput | null;
  locationPref?: ModelSubscriptionStringInput | null;
  locationCity?: ModelSubscriptionStringInput | null;
  isMadeToOrder?: ModelSubscriptionBooleanInput | null;
  especiallyAudiences?: ModelSubscriptionStringInput | null;
  isDeleted?: ModelSubscriptionBooleanInput | null;
  and?: Array<ModelSubscriptionLearningCenterCourseFilterInput | null> | null;
  or?: Array<ModelSubscriptionLearningCenterCourseFilterInput | null> | null;
};

export type ModelSubscriptionFloatInput = {
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

export type ModelSubscriptionCourseReviewFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  userDisplayId?: ModelSubscriptionStringInput | null;
  userGender?: ModelSubscriptionStringInput | null;
  userAge?: ModelSubscriptionStringInput | null;
  userPrefecture?: ModelSubscriptionStringInput | null;
  studyLengthMonths?: ModelSubscriptionIntInput | null;
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

export type CreateDevelopmentToolMutationVariables = {
  input: CreateDevelopmentToolInput;
  condition?: ModelDevelopmentToolConditionInput | null;
};

export type CreateDevelopmentToolMutation = {
  createDevelopmentTool?: {
    __typename: "DevelopmentTool";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateDevelopmentToolMutationVariables = {
  input: UpdateDevelopmentToolInput;
  condition?: ModelDevelopmentToolConditionInput | null;
};

export type UpdateDevelopmentToolMutation = {
  updateDevelopmentTool?: {
    __typename: "DevelopmentTool";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteDevelopmentToolMutationVariables = {
  input: DeleteDevelopmentToolInput;
  condition?: ModelDevelopmentToolConditionInput | null;
};

export type DeleteDevelopmentToolMutation = {
  deleteDevelopmentTool?: {
    __typename: "DevelopmentTool";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateProgrammingLanguageMutationVariables = {
  input: CreateProgrammingLanguageInput;
  condition?: ModelProgrammingLanguageConditionInput | null;
};

export type CreateProgrammingLanguageMutation = {
  createProgrammingLanguage?: {
    __typename: "ProgrammingLanguage";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateProgrammingLanguageMutationVariables = {
  input: UpdateProgrammingLanguageInput;
  condition?: ModelProgrammingLanguageConditionInput | null;
};

export type UpdateProgrammingLanguageMutation = {
  updateProgrammingLanguage?: {
    __typename: "ProgrammingLanguage";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteProgrammingLanguageMutationVariables = {
  input: DeleteProgrammingLanguageInput;
  condition?: ModelProgrammingLanguageConditionInput | null;
};

export type DeleteProgrammingLanguageMutation = {
  deleteProgrammingLanguage?: {
    __typename: "ProgrammingLanguage";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateFrameworkMutationVariables = {
  input: CreateFrameworkInput;
  condition?: ModelFrameworkConditionInput | null;
};

export type CreateFrameworkMutation = {
  createFramework?: {
    __typename: "Framework";
    id: string;
    programmingLanguageId?: string | null;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateFrameworkMutationVariables = {
  input: UpdateFrameworkInput;
  condition?: ModelFrameworkConditionInput | null;
};

export type UpdateFrameworkMutation = {
  updateFramework?: {
    __typename: "Framework";
    id: string;
    programmingLanguageId?: string | null;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteFrameworkMutationVariables = {
  input: DeleteFrameworkInput;
  condition?: ModelFrameworkConditionInput | null;
};

export type DeleteFrameworkMutation = {
  deleteFramework?: {
    __typename: "Framework";
    id: string;
    programmingLanguageId?: string | null;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateJobTypeMutationVariables = {
  input: CreateJobTypeInput;
  condition?: ModelJobTypeConditionInput | null;
};

export type CreateJobTypeMutation = {
  createJobType?: {
    __typename: "JobType";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateJobTypeMutationVariables = {
  input: UpdateJobTypeInput;
  condition?: ModelJobTypeConditionInput | null;
};

export type UpdateJobTypeMutation = {
  updateJobType?: {
    __typename: "JobType";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteJobTypeMutationVariables = {
  input: DeleteJobTypeInput;
  condition?: ModelJobTypeConditionInput | null;
};

export type DeleteJobTypeMutation = {
  deleteJobType?: {
    __typename: "JobType";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
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
    duration?: number | null;
    price?: number | null;
    isAvailableMoneyBack?: boolean | null;
    moneyBackDetail?: string | null;
    isAvailableSubsidy?: boolean | null;
    subsidyMemo?: string | null;
    onSale?: boolean | null;
    saleMemo?: string | null;
    purposes?: Array<Purpose | null> | null;
    jobTypes?: Array<string | null> | null;
    programmingLanguages?: Array<string | null> | null;
    frameworks?: Array<string | null> | null;
    developmentTools?: Array<string | null> | null;
    paymentOptions?: Array<PaymentOption | null> | null;
    attendanceType?: AttendanceType | null;
    locationPref?: string | null;
    locationCity?: string | null;
    isMadeToOrder?: boolean | null;
    especiallyAudiences?: Array<EspeciallyAudience | null> | null;
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
    duration?: number | null;
    price?: number | null;
    isAvailableMoneyBack?: boolean | null;
    moneyBackDetail?: string | null;
    isAvailableSubsidy?: boolean | null;
    subsidyMemo?: string | null;
    onSale?: boolean | null;
    saleMemo?: string | null;
    purposes?: Array<Purpose | null> | null;
    jobTypes?: Array<string | null> | null;
    programmingLanguages?: Array<string | null> | null;
    frameworks?: Array<string | null> | null;
    developmentTools?: Array<string | null> | null;
    paymentOptions?: Array<PaymentOption | null> | null;
    attendanceType?: AttendanceType | null;
    locationPref?: string | null;
    locationCity?: string | null;
    isMadeToOrder?: boolean | null;
    especiallyAudiences?: Array<EspeciallyAudience | null> | null;
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
    duration?: number | null;
    price?: number | null;
    isAvailableMoneyBack?: boolean | null;
    moneyBackDetail?: string | null;
    isAvailableSubsidy?: boolean | null;
    subsidyMemo?: string | null;
    onSale?: boolean | null;
    saleMemo?: string | null;
    purposes?: Array<Purpose | null> | null;
    jobTypes?: Array<string | null> | null;
    programmingLanguages?: Array<string | null> | null;
    frameworks?: Array<string | null> | null;
    developmentTools?: Array<string | null> | null;
    paymentOptions?: Array<PaymentOption | null> | null;
    attendanceType?: AttendanceType | null;
    locationPref?: string | null;
    locationCity?: string | null;
    isMadeToOrder?: boolean | null;
    especiallyAudiences?: Array<EspeciallyAudience | null> | null;
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
    userDisplayId?: string | null;
    userGender: string;
    userAge: string;
    userPrefecture: string;
    studyLengthMonths: number;
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
    userDisplayId?: string | null;
    userGender: string;
    userAge: string;
    userPrefecture: string;
    studyLengthMonths: number;
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
    userDisplayId?: string | null;
    userGender: string;
    userAge: string;
    userPrefecture: string;
    studyLengthMonths: number;
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

export type GetDevelopmentToolQueryVariables = {
  id: string;
};

export type GetDevelopmentToolQuery = {
  getDevelopmentTool?: {
    __typename: "DevelopmentTool";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListDevelopmentToolsQueryVariables = {
  filter?: ModelDevelopmentToolFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListDevelopmentToolsQuery = {
  listDevelopmentTools?: {
    __typename: "ModelDevelopmentToolConnection";
    items: Array<{
      __typename: "DevelopmentTool";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetProgrammingLanguageQueryVariables = {
  id: string;
};

export type GetProgrammingLanguageQuery = {
  getProgrammingLanguage?: {
    __typename: "ProgrammingLanguage";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListProgrammingLanguagesQueryVariables = {
  filter?: ModelProgrammingLanguageFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListProgrammingLanguagesQuery = {
  listProgrammingLanguages?: {
    __typename: "ModelProgrammingLanguageConnection";
    items: Array<{
      __typename: "ProgrammingLanguage";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetFrameworkQueryVariables = {
  id: string;
};

export type GetFrameworkQuery = {
  getFramework?: {
    __typename: "Framework";
    id: string;
    programmingLanguageId?: string | null;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListFrameworksQueryVariables = {
  filter?: ModelFrameworkFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListFrameworksQuery = {
  listFrameworks?: {
    __typename: "ModelFrameworkConnection";
    items: Array<{
      __typename: "Framework";
      id: string;
      programmingLanguageId?: string | null;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetJobTypeQueryVariables = {
  id: string;
};

export type GetJobTypeQuery = {
  getJobType?: {
    __typename: "JobType";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListJobTypesQueryVariables = {
  filter?: ModelJobTypeFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListJobTypesQuery = {
  listJobTypes?: {
    __typename: "ModelJobTypeConnection";
    items: Array<{
      __typename: "JobType";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
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
    duration?: number | null;
    price?: number | null;
    isAvailableMoneyBack?: boolean | null;
    moneyBackDetail?: string | null;
    isAvailableSubsidy?: boolean | null;
    subsidyMemo?: string | null;
    onSale?: boolean | null;
    saleMemo?: string | null;
    purposes?: Array<Purpose | null> | null;
    jobTypes?: Array<string | null> | null;
    programmingLanguages?: Array<string | null> | null;
    frameworks?: Array<string | null> | null;
    developmentTools?: Array<string | null> | null;
    paymentOptions?: Array<PaymentOption | null> | null;
    attendanceType?: AttendanceType | null;
    locationPref?: string | null;
    locationCity?: string | null;
    isMadeToOrder?: boolean | null;
    especiallyAudiences?: Array<EspeciallyAudience | null> | null;
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
      duration?: number | null;
      price?: number | null;
      isAvailableMoneyBack?: boolean | null;
      moneyBackDetail?: string | null;
      isAvailableSubsidy?: boolean | null;
      subsidyMemo?: string | null;
      onSale?: boolean | null;
      saleMemo?: string | null;
      purposes?: Array<Purpose | null> | null;
      jobTypes?: Array<string | null> | null;
      programmingLanguages?: Array<string | null> | null;
      frameworks?: Array<string | null> | null;
      developmentTools?: Array<string | null> | null;
      paymentOptions?: Array<PaymentOption | null> | null;
      attendanceType?: AttendanceType | null;
      locationPref?: string | null;
      locationCity?: string | null;
      isMadeToOrder?: boolean | null;
      especiallyAudiences?: Array<EspeciallyAudience | null> | null;
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
    userDisplayId?: string | null;
    userGender: string;
    userAge: string;
    userPrefecture: string;
    studyLengthMonths: number;
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
      userDisplayId?: string | null;
      userGender: string;
      userAge: string;
      userPrefecture: string;
      studyLengthMonths: number;
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

export type OnCreateDevelopmentToolSubscriptionVariables = {
  filter?: ModelSubscriptionDevelopmentToolFilterInput | null;
};

export type OnCreateDevelopmentToolSubscription = {
  onCreateDevelopmentTool?: {
    __typename: "DevelopmentTool";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateDevelopmentToolSubscriptionVariables = {
  filter?: ModelSubscriptionDevelopmentToolFilterInput | null;
};

export type OnUpdateDevelopmentToolSubscription = {
  onUpdateDevelopmentTool?: {
    __typename: "DevelopmentTool";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteDevelopmentToolSubscriptionVariables = {
  filter?: ModelSubscriptionDevelopmentToolFilterInput | null;
};

export type OnDeleteDevelopmentToolSubscription = {
  onDeleteDevelopmentTool?: {
    __typename: "DevelopmentTool";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateProgrammingLanguageSubscriptionVariables = {
  filter?: ModelSubscriptionProgrammingLanguageFilterInput | null;
};

export type OnCreateProgrammingLanguageSubscription = {
  onCreateProgrammingLanguage?: {
    __typename: "ProgrammingLanguage";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateProgrammingLanguageSubscriptionVariables = {
  filter?: ModelSubscriptionProgrammingLanguageFilterInput | null;
};

export type OnUpdateProgrammingLanguageSubscription = {
  onUpdateProgrammingLanguage?: {
    __typename: "ProgrammingLanguage";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteProgrammingLanguageSubscriptionVariables = {
  filter?: ModelSubscriptionProgrammingLanguageFilterInput | null;
};

export type OnDeleteProgrammingLanguageSubscription = {
  onDeleteProgrammingLanguage?: {
    __typename: "ProgrammingLanguage";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateFrameworkSubscriptionVariables = {
  filter?: ModelSubscriptionFrameworkFilterInput | null;
};

export type OnCreateFrameworkSubscription = {
  onCreateFramework?: {
    __typename: "Framework";
    id: string;
    programmingLanguageId?: string | null;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateFrameworkSubscriptionVariables = {
  filter?: ModelSubscriptionFrameworkFilterInput | null;
};

export type OnUpdateFrameworkSubscription = {
  onUpdateFramework?: {
    __typename: "Framework";
    id: string;
    programmingLanguageId?: string | null;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteFrameworkSubscriptionVariables = {
  filter?: ModelSubscriptionFrameworkFilterInput | null;
};

export type OnDeleteFrameworkSubscription = {
  onDeleteFramework?: {
    __typename: "Framework";
    id: string;
    programmingLanguageId?: string | null;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateJobTypeSubscriptionVariables = {
  filter?: ModelSubscriptionJobTypeFilterInput | null;
};

export type OnCreateJobTypeSubscription = {
  onCreateJobType?: {
    __typename: "JobType";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateJobTypeSubscriptionVariables = {
  filter?: ModelSubscriptionJobTypeFilterInput | null;
};

export type OnUpdateJobTypeSubscription = {
  onUpdateJobType?: {
    __typename: "JobType";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteJobTypeSubscriptionVariables = {
  filter?: ModelSubscriptionJobTypeFilterInput | null;
};

export type OnDeleteJobTypeSubscription = {
  onDeleteJobType?: {
    __typename: "JobType";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
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
    duration?: number | null;
    price?: number | null;
    isAvailableMoneyBack?: boolean | null;
    moneyBackDetail?: string | null;
    isAvailableSubsidy?: boolean | null;
    subsidyMemo?: string | null;
    onSale?: boolean | null;
    saleMemo?: string | null;
    purposes?: Array<Purpose | null> | null;
    jobTypes?: Array<string | null> | null;
    programmingLanguages?: Array<string | null> | null;
    frameworks?: Array<string | null> | null;
    developmentTools?: Array<string | null> | null;
    paymentOptions?: Array<PaymentOption | null> | null;
    attendanceType?: AttendanceType | null;
    locationPref?: string | null;
    locationCity?: string | null;
    isMadeToOrder?: boolean | null;
    especiallyAudiences?: Array<EspeciallyAudience | null> | null;
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
    duration?: number | null;
    price?: number | null;
    isAvailableMoneyBack?: boolean | null;
    moneyBackDetail?: string | null;
    isAvailableSubsidy?: boolean | null;
    subsidyMemo?: string | null;
    onSale?: boolean | null;
    saleMemo?: string | null;
    purposes?: Array<Purpose | null> | null;
    jobTypes?: Array<string | null> | null;
    programmingLanguages?: Array<string | null> | null;
    frameworks?: Array<string | null> | null;
    developmentTools?: Array<string | null> | null;
    paymentOptions?: Array<PaymentOption | null> | null;
    attendanceType?: AttendanceType | null;
    locationPref?: string | null;
    locationCity?: string | null;
    isMadeToOrder?: boolean | null;
    especiallyAudiences?: Array<EspeciallyAudience | null> | null;
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
    duration?: number | null;
    price?: number | null;
    isAvailableMoneyBack?: boolean | null;
    moneyBackDetail?: string | null;
    isAvailableSubsidy?: boolean | null;
    subsidyMemo?: string | null;
    onSale?: boolean | null;
    saleMemo?: string | null;
    purposes?: Array<Purpose | null> | null;
    jobTypes?: Array<string | null> | null;
    programmingLanguages?: Array<string | null> | null;
    frameworks?: Array<string | null> | null;
    developmentTools?: Array<string | null> | null;
    paymentOptions?: Array<PaymentOption | null> | null;
    attendanceType?: AttendanceType | null;
    locationPref?: string | null;
    locationCity?: string | null;
    isMadeToOrder?: boolean | null;
    especiallyAudiences?: Array<EspeciallyAudience | null> | null;
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
    userDisplayId?: string | null;
    userGender: string;
    userAge: string;
    userPrefecture: string;
    studyLengthMonths: number;
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
    userDisplayId?: string | null;
    userGender: string;
    userAge: string;
    userPrefecture: string;
    studyLengthMonths: number;
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
    userDisplayId?: string | null;
    userGender: string;
    userAge: string;
    userPrefecture: string;
    studyLengthMonths: number;
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
