/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  id?: string | null;
  name: string;
  description?: string | null;
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelTodoConditionInput | null> | null;
  or?: Array<ModelTodoConditionInput | null> | null;
  not?: ModelTodoConditionInput | null;
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

export type Todo = {
  __typename: "Todo";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTodoInput = {
  id: string;
  name?: string | null;
  description?: string | null;
};

export type DeleteTodoInput = {
  id: string;
};

export type CreateUserInput = {
  id?: string | null;
  cognitoSub: string;
  displayId: string;
  name?: string | null;
  nameKana?: string | null;
  gender?: string | null;
  birthYear?: number | null;
  birthMonth?: number | null;
  birthDate?: number | null;
  prefecture?: string | null;
  previousJob?: string | null;
  isRegisterUserInfo?: boolean | null;
};

export type ModelUserConditionInput = {
  cognitoSub?: ModelStringInput | null;
  displayId?: ModelStringInput | null;
  name?: ModelStringInput | null;
  nameKana?: ModelStringInput | null;
  gender?: ModelStringInput | null;
  birthYear?: ModelIntInput | null;
  birthMonth?: ModelIntInput | null;
  birthDate?: ModelIntInput | null;
  prefecture?: ModelStringInput | null;
  previousJob?: ModelStringInput | null;
  isRegisterUserInfo?: ModelBooleanInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
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

export type User = {
  __typename: "User";
  id: string;
  cognitoSub: string;
  displayId: string;
  name?: string | null;
  nameKana?: string | null;
  gender?: string | null;
  birthYear?: number | null;
  birthMonth?: number | null;
  birthDate?: number | null;
  prefecture?: string | null;
  previousJob?: string | null;
  isRegisterUserInfo?: boolean | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateUserInput = {
  id: string;
  cognitoSub?: string | null;
  displayId?: string | null;
  name?: string | null;
  nameKana?: string | null;
  gender?: string | null;
  birthYear?: number | null;
  birthMonth?: number | null;
  birthDate?: number | null;
  prefecture?: string | null;
  previousJob?: string | null;
  isRegisterUserInfo?: boolean | null;
};

export type DeleteUserInput = {
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
  and?: Array<ModelLearningCenterConditionInput | null> | null;
  or?: Array<ModelLearningCenterConditionInput | null> | null;
  not?: ModelLearningCenterConditionInput | null;
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
  learningCenterCourses?: ModelLearningCenterCourseConnection | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type ModelLearningCenterCourseConnection = {
  __typename: "ModelLearningCenterCourseConnection";
  items: Array<LearningCenterCourse | null>;
  nextToken?: string | null;
};

export type LearningCenterCourse = {
  __typename: "LearningCenterCourse";
  id: string;
  learningCenterId: string;
  courseName?: string | null;
  courseURL?: string | null;
  couseDetail?: string | null;
  learningCenter?: LearningCenter | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
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
};

export type ModelLearningCenterCourseConditionInput = {
  learningCenterId?: ModelIDInput | null;
  courseName?: ModelStringInput | null;
  courseURL?: ModelStringInput | null;
  couseDetail?: ModelStringInput | null;
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

export type UpdateLearningCenterCourseInput = {
  id: string;
  learningCenterId?: string | null;
  courseName?: string | null;
  courseURL?: string | null;
  couseDetail?: string | null;
};

export type DeleteLearningCenterCourseInput = {
  id: string;
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelTodoFilterInput | null> | null;
  or?: Array<ModelTodoFilterInput | null> | null;
  not?: ModelTodoFilterInput | null;
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection";
  items: Array<Todo | null>;
  nextToken?: string | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  cognitoSub?: ModelStringInput | null;
  displayId?: ModelStringInput | null;
  name?: ModelStringInput | null;
  nameKana?: ModelStringInput | null;
  gender?: ModelStringInput | null;
  birthYear?: ModelIntInput | null;
  birthMonth?: ModelIntInput | null;
  birthDate?: ModelIntInput | null;
  prefecture?: ModelStringInput | null;
  previousJob?: ModelStringInput | null;
  isRegisterUserInfo?: ModelBooleanInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection";
  items: Array<User | null>;
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
  and?: Array<ModelLearningCenterCourseFilterInput | null> | null;
  or?: Array<ModelLearningCenterCourseFilterInput | null> | null;
  not?: ModelLearningCenterCourseFilterInput | null;
};

export type ModelSubscriptionTodoFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionTodoFilterInput | null> | null;
  or?: Array<ModelSubscriptionTodoFilterInput | null> | null;
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

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  cognitoSub?: ModelSubscriptionStringInput | null;
  displayId?: ModelSubscriptionStringInput | null;
  name?: ModelSubscriptionStringInput | null;
  nameKana?: ModelSubscriptionStringInput | null;
  gender?: ModelSubscriptionStringInput | null;
  birthYear?: ModelSubscriptionIntInput | null;
  birthMonth?: ModelSubscriptionIntInput | null;
  birthDate?: ModelSubscriptionIntInput | null;
  prefecture?: ModelSubscriptionStringInput | null;
  previousJob?: ModelSubscriptionStringInput | null;
  isRegisterUserInfo?: ModelSubscriptionBooleanInput | null;
  and?: Array<ModelSubscriptionUserFilterInput | null> | null;
  or?: Array<ModelSubscriptionUserFilterInput | null> | null;
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
  and?: Array<ModelSubscriptionLearningCenterFilterInput | null> | null;
  or?: Array<ModelSubscriptionLearningCenterFilterInput | null> | null;
};

export type ModelSubscriptionLearningCenterCourseFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  learningCenterId?: ModelSubscriptionIDInput | null;
  courseName?: ModelSubscriptionStringInput | null;
  courseURL?: ModelSubscriptionStringInput | null;
  couseDetail?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionLearningCenterCourseFilterInput | null> | null;
  or?: Array<ModelSubscriptionLearningCenterCourseFilterInput | null> | null;
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput;
  condition?: ModelTodoConditionInput | null;
};

export type CreateTodoMutation = {
  createTodo?: {
    __typename: "Todo";
    id: string;
    name: string;
    description?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput;
  condition?: ModelTodoConditionInput | null;
};

export type UpdateTodoMutation = {
  updateTodo?: {
    __typename: "Todo";
    id: string;
    name: string;
    description?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput;
  condition?: ModelTodoConditionInput | null;
};

export type DeleteTodoMutation = {
  deleteTodo?: {
    __typename: "Todo";
    id: string;
    name: string;
    description?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateUserMutationVariables = {
  input: CreateUserInput;
  condition?: ModelUserConditionInput | null;
};

export type CreateUserMutation = {
  createUser?: {
    __typename: "User";
    id: string;
    cognitoSub: string;
    displayId: string;
    name?: string | null;
    nameKana?: string | null;
    gender?: string | null;
    birthYear?: number | null;
    birthMonth?: number | null;
    birthDate?: number | null;
    prefecture?: string | null;
    previousJob?: string | null;
    isRegisterUserInfo?: boolean | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput;
  condition?: ModelUserConditionInput | null;
};

export type UpdateUserMutation = {
  updateUser?: {
    __typename: "User";
    id: string;
    cognitoSub: string;
    displayId: string;
    name?: string | null;
    nameKana?: string | null;
    gender?: string | null;
    birthYear?: number | null;
    birthMonth?: number | null;
    birthDate?: number | null;
    prefecture?: string | null;
    previousJob?: string | null;
    isRegisterUserInfo?: boolean | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput;
  condition?: ModelUserConditionInput | null;
};

export type DeleteUserMutation = {
  deleteUser?: {
    __typename: "User";
    id: string;
    cognitoSub: string;
    displayId: string;
    name?: string | null;
    nameKana?: string | null;
    gender?: string | null;
    birthYear?: number | null;
    birthMonth?: number | null;
    birthDate?: number | null;
    prefecture?: string | null;
    previousJob?: string | null;
    isRegisterUserInfo?: boolean | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
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
    learningCenterCourses?: {
      __typename: "ModelLearningCenterCourseConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
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
    learningCenterCourses?: {
      __typename: "ModelLearningCenterCourseConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
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
    learningCenterCourses?: {
      __typename: "ModelLearningCenterCourseConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
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
    learningCenter?: {
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
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
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
    learningCenter?: {
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
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
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
    learningCenter?: {
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
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type GetTodoQueryVariables = {
  id: string;
};

export type GetTodoQuery = {
  getTodo?: {
    __typename: "Todo";
    id: string;
    name: string;
    description?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListTodosQuery = {
  listTodos?: {
    __typename: "ModelTodoConnection";
    items: Array<{
      __typename: "Todo";
      id: string;
      name: string;
      description?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetUserQueryVariables = {
  id: string;
};

export type GetUserQuery = {
  getUser?: {
    __typename: "User";
    id: string;
    cognitoSub: string;
    displayId: string;
    name?: string | null;
    nameKana?: string | null;
    gender?: string | null;
    birthYear?: number | null;
    birthMonth?: number | null;
    birthDate?: number | null;
    prefecture?: string | null;
    previousJob?: string | null;
    isRegisterUserInfo?: boolean | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListUsersQuery = {
  listUsers?: {
    __typename: "ModelUserConnection";
    items: Array<{
      __typename: "User";
      id: string;
      cognitoSub: string;
      displayId: string;
      name?: string | null;
      nameKana?: string | null;
      gender?: string | null;
      birthYear?: number | null;
      birthMonth?: number | null;
      birthDate?: number | null;
      prefecture?: string | null;
      previousJob?: string | null;
      isRegisterUserInfo?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
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
    learningCenterCourses?: {
      __typename: "ModelLearningCenterCourseConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
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
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
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
    learningCenter?: {
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
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
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
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type OnCreateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null;
};

export type OnCreateTodoSubscription = {
  onCreateTodo?: {
    __typename: "Todo";
    id: string;
    name: string;
    description?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null;
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?: {
    __typename: "Todo";
    id: string;
    name: string;
    description?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null;
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?: {
    __typename: "Todo";
    id: string;
    name: string;
    description?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null;
  owner?: string | null;
};

export type OnCreateUserSubscription = {
  onCreateUser?: {
    __typename: "User";
    id: string;
    cognitoSub: string;
    displayId: string;
    name?: string | null;
    nameKana?: string | null;
    gender?: string | null;
    birthYear?: number | null;
    birthMonth?: number | null;
    birthDate?: number | null;
    prefecture?: string | null;
    previousJob?: string | null;
    isRegisterUserInfo?: boolean | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null;
  owner?: string | null;
};

export type OnUpdateUserSubscription = {
  onUpdateUser?: {
    __typename: "User";
    id: string;
    cognitoSub: string;
    displayId: string;
    name?: string | null;
    nameKana?: string | null;
    gender?: string | null;
    birthYear?: number | null;
    birthMonth?: number | null;
    birthDate?: number | null;
    prefecture?: string | null;
    previousJob?: string | null;
    isRegisterUserInfo?: boolean | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null;
  owner?: string | null;
};

export type OnDeleteUserSubscription = {
  onDeleteUser?: {
    __typename: "User";
    id: string;
    cognitoSub: string;
    displayId: string;
    name?: string | null;
    nameKana?: string | null;
    gender?: string | null;
    birthYear?: number | null;
    birthMonth?: number | null;
    birthDate?: number | null;
    prefecture?: string | null;
    previousJob?: string | null;
    isRegisterUserInfo?: boolean | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnCreateLearningCenterSubscriptionVariables = {
  filter?: ModelSubscriptionLearningCenterFilterInput | null;
  owner?: string | null;
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
    learningCenterCourses?: {
      __typename: "ModelLearningCenterCourseConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnUpdateLearningCenterSubscriptionVariables = {
  filter?: ModelSubscriptionLearningCenterFilterInput | null;
  owner?: string | null;
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
    learningCenterCourses?: {
      __typename: "ModelLearningCenterCourseConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnDeleteLearningCenterSubscriptionVariables = {
  filter?: ModelSubscriptionLearningCenterFilterInput | null;
  owner?: string | null;
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
    learningCenterCourses?: {
      __typename: "ModelLearningCenterCourseConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnCreateLearningCenterCourseSubscriptionVariables = {
  filter?: ModelSubscriptionLearningCenterCourseFilterInput | null;
  owner?: string | null;
};

export type OnCreateLearningCenterCourseSubscription = {
  onCreateLearningCenterCourse?: {
    __typename: "LearningCenterCourse";
    id: string;
    learningCenterId: string;
    courseName?: string | null;
    courseURL?: string | null;
    couseDetail?: string | null;
    learningCenter?: {
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
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnUpdateLearningCenterCourseSubscriptionVariables = {
  filter?: ModelSubscriptionLearningCenterCourseFilterInput | null;
  owner?: string | null;
};

export type OnUpdateLearningCenterCourseSubscription = {
  onUpdateLearningCenterCourse?: {
    __typename: "LearningCenterCourse";
    id: string;
    learningCenterId: string;
    courseName?: string | null;
    courseURL?: string | null;
    couseDetail?: string | null;
    learningCenter?: {
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
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnDeleteLearningCenterCourseSubscriptionVariables = {
  filter?: ModelSubscriptionLearningCenterCourseFilterInput | null;
  owner?: string | null;
};

export type OnDeleteLearningCenterCourseSubscription = {
  onDeleteLearningCenterCourse?: {
    __typename: "LearningCenterCourse";
    id: string;
    learningCenterId: string;
    courseName?: string | null;
    courseURL?: string | null;
    couseDetail?: string | null;
    learningCenter?: {
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
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};
