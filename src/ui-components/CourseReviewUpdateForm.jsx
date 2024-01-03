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
import { getCourseReview } from "../graphql/queries";
import { updateCourseReview } from "../graphql/mutations";
const client = generateClient();
export default function CourseReviewUpdateForm(props) {
  const {
    id: idProp,
    courseReview: courseReviewModelProp,
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
    userDisplayName: "",
    userGender: "",
    userAge: "",
    userPreviousJob: "",
    learningCenterId: "",
    learningCenterCourseId: "",
    reviewTitle: "",
    reviewDetail: "",
    rating: "",
    isPublished: false,
  };
  const [userId, setUserId] = React.useState(initialValues.userId);
  const [userDisplayName, setUserDisplayName] = React.useState(
    initialValues.userDisplayName
  );
  const [userGender, setUserGender] = React.useState(initialValues.userGender);
  const [userAge, setUserAge] = React.useState(initialValues.userAge);
  const [userPreviousJob, setUserPreviousJob] = React.useState(
    initialValues.userPreviousJob
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
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = courseReviewRecord
      ? { ...initialValues, ...courseReviewRecord }
      : initialValues;
    setUserId(cleanValues.userId);
    setUserDisplayName(cleanValues.userDisplayName);
    setUserGender(cleanValues.userGender);
    setUserAge(cleanValues.userAge);
    setUserPreviousJob(cleanValues.userPreviousJob);
    setLearningCenterId(cleanValues.learningCenterId);
    setLearningCenterCourseId(cleanValues.learningCenterCourseId);
    setReviewTitle(cleanValues.reviewTitle);
    setReviewDetail(cleanValues.reviewDetail);
    setRating(cleanValues.rating);
    setIsPublished(cleanValues.isPublished);
    setErrors({});
  };
  const [courseReviewRecord, setCourseReviewRecord] = React.useState(
    courseReviewModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getCourseReview.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getCourseReview
        : courseReviewModelProp;
      setCourseReviewRecord(record);
    };
    queryData();
  }, [idProp, courseReviewModelProp]);
  React.useEffect(resetStateValues, [courseReviewRecord]);
  const validations = {
    userId: [{ type: "Required" }],
    userDisplayName: [],
    userGender: [],
    userAge: [],
    userPreviousJob: [],
    learningCenterId: [{ type: "Required" }],
    learningCenterCourseId: [{ type: "Required" }],
    reviewTitle: [{ type: "Required" }],
    reviewDetail: [{ type: "Required" }],
    rating: [{ type: "Required" }],
    isPublished: [{ type: "Required" }],
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
          userDisplayName: userDisplayName ?? null,
          userGender: userGender ?? null,
          userAge: userAge ?? null,
          userPreviousJob: userPreviousJob ?? null,
          learningCenterId,
          learningCenterCourseId,
          reviewTitle,
          reviewDetail,
          rating,
          isPublished,
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
            query: updateCourseReview.replaceAll("__typename", ""),
            variables: {
              input: {
                id: courseReviewRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "CourseReviewUpdateForm")}
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
              userDisplayName,
              userGender,
              userAge,
              userPreviousJob,
              learningCenterId,
              learningCenterCourseId,
              reviewTitle,
              reviewDetail,
              rating,
              isPublished,
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
        label="User display name"
        isRequired={false}
        isReadOnly={false}
        value={userDisplayName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              userDisplayName: value,
              userGender,
              userAge,
              userPreviousJob,
              learningCenterId,
              learningCenterCourseId,
              reviewTitle,
              reviewDetail,
              rating,
              isPublished,
            };
            const result = onChange(modelFields);
            value = result?.userDisplayName ?? value;
          }
          if (errors.userDisplayName?.hasError) {
            runValidationTasks("userDisplayName", value);
          }
          setUserDisplayName(value);
        }}
        onBlur={() => runValidationTasks("userDisplayName", userDisplayName)}
        errorMessage={errors.userDisplayName?.errorMessage}
        hasError={errors.userDisplayName?.hasError}
        {...getOverrideProps(overrides, "userDisplayName")}
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
              userDisplayName,
              userGender: value,
              userAge,
              userPreviousJob,
              learningCenterId,
              learningCenterCourseId,
              reviewTitle,
              reviewDetail,
              rating,
              isPublished,
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
              userDisplayName,
              userGender,
              userAge: value,
              userPreviousJob,
              learningCenterId,
              learningCenterCourseId,
              reviewTitle,
              reviewDetail,
              rating,
              isPublished,
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
        label="User previous job"
        isRequired={false}
        isReadOnly={false}
        value={userPreviousJob}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              userDisplayName,
              userGender,
              userAge,
              userPreviousJob: value,
              learningCenterId,
              learningCenterCourseId,
              reviewTitle,
              reviewDetail,
              rating,
              isPublished,
            };
            const result = onChange(modelFields);
            value = result?.userPreviousJob ?? value;
          }
          if (errors.userPreviousJob?.hasError) {
            runValidationTasks("userPreviousJob", value);
          }
          setUserPreviousJob(value);
        }}
        onBlur={() => runValidationTasks("userPreviousJob", userPreviousJob)}
        errorMessage={errors.userPreviousJob?.errorMessage}
        hasError={errors.userPreviousJob?.hasError}
        {...getOverrideProps(overrides, "userPreviousJob")}
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
              userDisplayName,
              userGender,
              userAge,
              userPreviousJob,
              learningCenterId: value,
              learningCenterCourseId,
              reviewTitle,
              reviewDetail,
              rating,
              isPublished,
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
              userDisplayName,
              userGender,
              userAge,
              userPreviousJob,
              learningCenterId,
              learningCenterCourseId: value,
              reviewTitle,
              reviewDetail,
              rating,
              isPublished,
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
              userDisplayName,
              userGender,
              userAge,
              userPreviousJob,
              learningCenterId,
              learningCenterCourseId,
              reviewTitle: value,
              reviewDetail,
              rating,
              isPublished,
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
              userDisplayName,
              userGender,
              userAge,
              userPreviousJob,
              learningCenterId,
              learningCenterCourseId,
              reviewTitle,
              reviewDetail: value,
              rating,
              isPublished,
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
              userDisplayName,
              userGender,
              userAge,
              userPreviousJob,
              learningCenterId,
              learningCenterCourseId,
              reviewTitle,
              reviewDetail,
              rating: value,
              isPublished,
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
              userDisplayName,
              userGender,
              userAge,
              userPreviousJob,
              learningCenterId,
              learningCenterCourseId,
              reviewTitle,
              reviewDetail,
              rating,
              isPublished: value,
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
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || courseReviewModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || courseReviewModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
