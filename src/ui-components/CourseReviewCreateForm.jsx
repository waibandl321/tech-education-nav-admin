/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createCourseReview } from "../graphql/mutations";
const client = generateClient();
export default function CourseReviewCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    userId: "",
    userDisplayId: "",
    userGender: "",
    userAge: "",
    userPrefecture: "",
    courseStartMonth: "",
    courseEndMonth: "",
    learningCenterId: "",
    learningCenterCourseId: "",
    reviewTitle: "",
    reviewDetail: "",
    rating: "",
    isPublished: false,
    isDeleted: false,
  };
  const [userId, setUserId] = React.useState(initialValues.userId);
  const [userDisplayId, setUserDisplayId] = React.useState(
    initialValues.userDisplayId
  );
  const [userGender, setUserGender] = React.useState(initialValues.userGender);
  const [userAge, setUserAge] = React.useState(initialValues.userAge);
  const [userPrefecture, setUserPrefecture] = React.useState(
    initialValues.userPrefecture
  );
  const [courseStartMonth, setCourseStartMonth] = React.useState(
    initialValues.courseStartMonth
  );
  const [courseEndMonth, setCourseEndMonth] = React.useState(
    initialValues.courseEndMonth
  );
  const [learningCenterId, setLearningCenterId] = React.useState(
    initialValues.learningCenterId
  );
  const [learningCenterCourseId, setLearningCenterCourseId] = React.useState(
    initialValues.learningCenterCourseId
  );
  const [reviewTitle, setReviewTitle] = React.useState(
    initialValues.reviewTitle
  );
  const [reviewDetail, setReviewDetail] = React.useState(
    initialValues.reviewDetail
  );
  const [rating, setRating] = React.useState(initialValues.rating);
  const [isPublished, setIsPublished] = React.useState(
    initialValues.isPublished
  );
  const [isDeleted, setIsDeleted] = React.useState(initialValues.isDeleted);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUserId(initialValues.userId);
    setUserDisplayId(initialValues.userDisplayId);
    setUserGender(initialValues.userGender);
    setUserAge(initialValues.userAge);
    setUserPrefecture(initialValues.userPrefecture);
    setCourseStartMonth(initialValues.courseStartMonth);
    setCourseEndMonth(initialValues.courseEndMonth);
    setLearningCenterId(initialValues.learningCenterId);
    setLearningCenterCourseId(initialValues.learningCenterCourseId);
    setReviewTitle(initialValues.reviewTitle);
    setReviewDetail(initialValues.reviewDetail);
    setRating(initialValues.rating);
    setIsPublished(initialValues.isPublished);
    setIsDeleted(initialValues.isDeleted);
    setErrors({});
  };
  const validations = {
    userId: [{ type: "Required" }],
    userDisplayId: [],
    userGender: [],
    userAge: [],
    userPrefecture: [],
    courseStartMonth: [],
    courseEndMonth: [],
    learningCenterId: [{ type: "Required" }],
    learningCenterCourseId: [{ type: "Required" }],
    reviewTitle: [{ type: "Required" }],
    reviewDetail: [{ type: "Required" }],
    rating: [{ type: "Required" }],
    isPublished: [{ type: "Required" }],
    isDeleted: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertTimeStampToDate = (ts) => {
    if (Math.abs(Date.now() - ts) < Math.abs(Date.now() - ts * 1000)) {
      return new Date(ts);
    }
    return new Date(ts * 1000);
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          userId,
          userDisplayId,
          userGender,
          userAge,
          userPrefecture,
          courseStartMonth,
          courseEndMonth,
          learningCenterId,
          learningCenterCourseId,
          reviewTitle,
          reviewDetail,
          rating,
          isPublished,
          isDeleted,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createCourseReview.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "CourseReviewCreateForm")}
      {...rest}
    >
      <TextField
        label="User id"
        isRequired={true}
        isReadOnly={false}
        value={userId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId: value,
              userDisplayId,
              userGender,
              userAge,
              userPrefecture,
              courseStartMonth,
              courseEndMonth,
              learningCenterId,
              learningCenterCourseId,
              reviewTitle,
              reviewDetail,
              rating,
              isPublished,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.userId ?? value;
          }
          if (errors.userId?.hasError) {
            runValidationTasks("userId", value);
          }
          setUserId(value);
        }}
        onBlur={() => runValidationTasks("userId", userId)}
        errorMessage={errors.userId?.errorMessage}
        hasError={errors.userId?.hasError}
        {...getOverrideProps(overrides, "userId")}
      ></TextField>
      <TextField
        label="User display id"
        isRequired={false}
        isReadOnly={false}
        value={userDisplayId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              userDisplayId: value,
              userGender,
              userAge,
              userPrefecture,
              courseStartMonth,
              courseEndMonth,
              learningCenterId,
              learningCenterCourseId,
              reviewTitle,
              reviewDetail,
              rating,
              isPublished,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.userDisplayId ?? value;
          }
          if (errors.userDisplayId?.hasError) {
            runValidationTasks("userDisplayId", value);
          }
          setUserDisplayId(value);
        }}
        onBlur={() => runValidationTasks("userDisplayId", userDisplayId)}
        errorMessage={errors.userDisplayId?.errorMessage}
        hasError={errors.userDisplayId?.hasError}
        {...getOverrideProps(overrides, "userDisplayId")}
      ></TextField>
      <TextField
        label="User gender"
        isRequired={false}
        isReadOnly={false}
        value={userGender}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              userDisplayId,
              userGender: value,
              userAge,
              userPrefecture,
              courseStartMonth,
              courseEndMonth,
              learningCenterId,
              learningCenterCourseId,
              reviewTitle,
              reviewDetail,
              rating,
              isPublished,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.userGender ?? value;
          }
          if (errors.userGender?.hasError) {
            runValidationTasks("userGender", value);
          }
          setUserGender(value);
        }}
        onBlur={() => runValidationTasks("userGender", userGender)}
        errorMessage={errors.userGender?.errorMessage}
        hasError={errors.userGender?.hasError}
        {...getOverrideProps(overrides, "userGender")}
      ></TextField>
      <TextField
        label="User age"
        isRequired={false}
        isReadOnly={false}
        value={userAge}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              userDisplayId,
              userGender,
              userAge: value,
              userPrefecture,
              courseStartMonth,
              courseEndMonth,
              learningCenterId,
              learningCenterCourseId,
              reviewTitle,
              reviewDetail,
              rating,
              isPublished,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.userAge ?? value;
          }
          if (errors.userAge?.hasError) {
            runValidationTasks("userAge", value);
          }
          setUserAge(value);
        }}
        onBlur={() => runValidationTasks("userAge", userAge)}
        errorMessage={errors.userAge?.errorMessage}
        hasError={errors.userAge?.hasError}
        {...getOverrideProps(overrides, "userAge")}
      ></TextField>
      <TextField
        label="User prefecture"
        isRequired={false}
        isReadOnly={false}
        value={userPrefecture}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              userDisplayId,
              userGender,
              userAge,
              userPrefecture: value,
              courseStartMonth,
              courseEndMonth,
              learningCenterId,
              learningCenterCourseId,
              reviewTitle,
              reviewDetail,
              rating,
              isPublished,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.userPrefecture ?? value;
          }
          if (errors.userPrefecture?.hasError) {
            runValidationTasks("userPrefecture", value);
          }
          setUserPrefecture(value);
        }}
        onBlur={() => runValidationTasks("userPrefecture", userPrefecture)}
        errorMessage={errors.userPrefecture?.errorMessage}
        hasError={errors.userPrefecture?.hasError}
        {...getOverrideProps(overrides, "userPrefecture")}
      ></TextField>
      <TextField
        label="Course start month"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={
          courseStartMonth &&
          convertToLocal(convertTimeStampToDate(courseStartMonth))
        }
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : Number(new Date(e.target.value));
          if (onChange) {
            const modelFields = {
              userId,
              userDisplayId,
              userGender,
              userAge,
              userPrefecture,
              courseStartMonth: value,
              courseEndMonth,
              learningCenterId,
              learningCenterCourseId,
              reviewTitle,
              reviewDetail,
              rating,
              isPublished,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.courseStartMonth ?? value;
          }
          if (errors.courseStartMonth?.hasError) {
            runValidationTasks("courseStartMonth", value);
          }
          setCourseStartMonth(value);
        }}
        onBlur={() => runValidationTasks("courseStartMonth", courseStartMonth)}
        errorMessage={errors.courseStartMonth?.errorMessage}
        hasError={errors.courseStartMonth?.hasError}
        {...getOverrideProps(overrides, "courseStartMonth")}
      ></TextField>
      <TextField
        label="Course end month"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={
          courseEndMonth &&
          convertToLocal(convertTimeStampToDate(courseEndMonth))
        }
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : Number(new Date(e.target.value));
          if (onChange) {
            const modelFields = {
              userId,
              userDisplayId,
              userGender,
              userAge,
              userPrefecture,
              courseStartMonth,
              courseEndMonth: value,
              learningCenterId,
              learningCenterCourseId,
              reviewTitle,
              reviewDetail,
              rating,
              isPublished,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.courseEndMonth ?? value;
          }
          if (errors.courseEndMonth?.hasError) {
            runValidationTasks("courseEndMonth", value);
          }
          setCourseEndMonth(value);
        }}
        onBlur={() => runValidationTasks("courseEndMonth", courseEndMonth)}
        errorMessage={errors.courseEndMonth?.errorMessage}
        hasError={errors.courseEndMonth?.hasError}
        {...getOverrideProps(overrides, "courseEndMonth")}
      ></TextField>
      <TextField
        label="Learning center id"
        isRequired={true}
        isReadOnly={false}
        value={learningCenterId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              userDisplayId,
              userGender,
              userAge,
              userPrefecture,
              courseStartMonth,
              courseEndMonth,
              learningCenterId: value,
              learningCenterCourseId,
              reviewTitle,
              reviewDetail,
              rating,
              isPublished,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.learningCenterId ?? value;
          }
          if (errors.learningCenterId?.hasError) {
            runValidationTasks("learningCenterId", value);
          }
          setLearningCenterId(value);
        }}
        onBlur={() => runValidationTasks("learningCenterId", learningCenterId)}
        errorMessage={errors.learningCenterId?.errorMessage}
        hasError={errors.learningCenterId?.hasError}
        {...getOverrideProps(overrides, "learningCenterId")}
      ></TextField>
      <TextField
        label="Learning center course id"
        isRequired={true}
        isReadOnly={false}
        value={learningCenterCourseId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              userDisplayId,
              userGender,
              userAge,
              userPrefecture,
              courseStartMonth,
              courseEndMonth,
              learningCenterId,
              learningCenterCourseId: value,
              reviewTitle,
              reviewDetail,
              rating,
              isPublished,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.learningCenterCourseId ?? value;
          }
          if (errors.learningCenterCourseId?.hasError) {
            runValidationTasks("learningCenterCourseId", value);
          }
          setLearningCenterCourseId(value);
        }}
        onBlur={() =>
          runValidationTasks("learningCenterCourseId", learningCenterCourseId)
        }
        errorMessage={errors.learningCenterCourseId?.errorMessage}
        hasError={errors.learningCenterCourseId?.hasError}
        {...getOverrideProps(overrides, "learningCenterCourseId")}
      ></TextField>
      <TextField
        label="Review title"
        isRequired={true}
        isReadOnly={false}
        value={reviewTitle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              userDisplayId,
              userGender,
              userAge,
              userPrefecture,
              courseStartMonth,
              courseEndMonth,
              learningCenterId,
              learningCenterCourseId,
              reviewTitle: value,
              reviewDetail,
              rating,
              isPublished,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.reviewTitle ?? value;
          }
          if (errors.reviewTitle?.hasError) {
            runValidationTasks("reviewTitle", value);
          }
          setReviewTitle(value);
        }}
        onBlur={() => runValidationTasks("reviewTitle", reviewTitle)}
        errorMessage={errors.reviewTitle?.errorMessage}
        hasError={errors.reviewTitle?.hasError}
        {...getOverrideProps(overrides, "reviewTitle")}
      ></TextField>
      <TextField
        label="Review detail"
        isRequired={true}
        isReadOnly={false}
        value={reviewDetail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              userDisplayId,
              userGender,
              userAge,
              userPrefecture,
              courseStartMonth,
              courseEndMonth,
              learningCenterId,
              learningCenterCourseId,
              reviewTitle,
              reviewDetail: value,
              rating,
              isPublished,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.reviewDetail ?? value;
          }
          if (errors.reviewDetail?.hasError) {
            runValidationTasks("reviewDetail", value);
          }
          setReviewDetail(value);
        }}
        onBlur={() => runValidationTasks("reviewDetail", reviewDetail)}
        errorMessage={errors.reviewDetail?.errorMessage}
        hasError={errors.reviewDetail?.hasError}
        {...getOverrideProps(overrides, "reviewDetail")}
      ></TextField>
      <TextField
        label="Rating"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={rating}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              userId,
              userDisplayId,
              userGender,
              userAge,
              userPrefecture,
              courseStartMonth,
              courseEndMonth,
              learningCenterId,
              learningCenterCourseId,
              reviewTitle,
              reviewDetail,
              rating: value,
              isPublished,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.rating ?? value;
          }
          if (errors.rating?.hasError) {
            runValidationTasks("rating", value);
          }
          setRating(value);
        }}
        onBlur={() => runValidationTasks("rating", rating)}
        errorMessage={errors.rating?.errorMessage}
        hasError={errors.rating?.hasError}
        {...getOverrideProps(overrides, "rating")}
      ></TextField>
      <SwitchField
        label="Is published"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isPublished}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              userDisplayId,
              userGender,
              userAge,
              userPrefecture,
              courseStartMonth,
              courseEndMonth,
              learningCenterId,
              learningCenterCourseId,
              reviewTitle,
              reviewDetail,
              rating,
              isPublished: value,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.isPublished ?? value;
          }
          if (errors.isPublished?.hasError) {
            runValidationTasks("isPublished", value);
          }
          setIsPublished(value);
        }}
        onBlur={() => runValidationTasks("isPublished", isPublished)}
        errorMessage={errors.isPublished?.errorMessage}
        hasError={errors.isPublished?.hasError}
        {...getOverrideProps(overrides, "isPublished")}
      ></SwitchField>
      <SwitchField
        label="Is deleted"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isDeleted}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              userDisplayId,
              userGender,
              userAge,
              userPrefecture,
              courseStartMonth,
              courseEndMonth,
              learningCenterId,
              learningCenterCourseId,
              reviewTitle,
              reviewDetail,
              rating,
              isPublished,
              isDeleted: value,
            };
            const result = onChange(modelFields);
            value = result?.isDeleted ?? value;
          }
          if (errors.isDeleted?.hasError) {
            runValidationTasks("isDeleted", value);
          }
          setIsDeleted(value);
        }}
        onBlur={() => runValidationTasks("isDeleted", isDeleted)}
        errorMessage={errors.isDeleted?.errorMessage}
        hasError={errors.isDeleted?.hasError}
        {...getOverrideProps(overrides, "isDeleted")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
