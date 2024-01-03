import { LearningCenter, LearningCenterCourse } from "@/API";

export interface CentersAndCoursesPropType {
  centers: Array<LearningCenter>;
  courses: Array<LearningCenterCourse>;
}
export interface CenterAndCourseDetailPropType {
  center: LearningCenter;
  course: LearningCenterCourse;
}
