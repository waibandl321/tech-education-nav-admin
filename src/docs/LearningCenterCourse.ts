import {
  AttendanceType,
  CoursePlanInput,
  EspeciallyAudience,
  Purpose,
} from "@/API";

/**
 * コース情報を新規作成する際に、初期値をセットしたオブジェクトを作成する
 * データ、型情報は以下を参照
 * @see amplify/backend/api/techeducationnav/schema.graphql
 */
class CreateLearningCenterCourse {
  id?: string | null;
  learningCenterId: string = "";
  courseName?: string | null = "";
  courseURL?: string | null = "";
  couseDetail?: string | null = "";
  plans?: Array<CoursePlanInput | null> | null = null;
  cancelPolicy?: string | null = "";
  isAvailableMoneyBack?: boolean | null = false;
  moneyBackDetail?: string | null = "";
  isAvailableSubsidy?: boolean | null = false;
  subsidyMemo?: string | null = "";
  onSale?: boolean | null = false;
  saleMemo?: string | null = "";
  isMadeToOrder?: boolean | null = false;
  madeToOrderDetail?: string | null = "";
  isJobIntroductionAvailable?: boolean | null = false;
  jobIntroductionDetail?: string | null = "";
  isJobHuntingSupport?: boolean | null = false;
  jobHuntingSupportDetail?: string | null = "";
  purposes?: Array<Purpose | null> | null = null;
  jobTypes?: Array<string | null> | null = null;
  programmingLanguages?: Array<string | null> | null = null;
  frameworks?: Array<string | null> | null = null;
  developmentTools?: Array<string | null> | null = null;
  attendanceType?: AttendanceType | null = null;
  locationPref?: string | null = null;
  locationCity?: string | null = null;
  especiallyAudiences?: Array<EspeciallyAudience | null> | null = null;
  isDeleted?: boolean | null = null;

  constructor(options: Partial<CreateLearningCenterCourse>) {
    Object.assign(this, options);
  }
}

export default CreateLearningCenterCourse;
