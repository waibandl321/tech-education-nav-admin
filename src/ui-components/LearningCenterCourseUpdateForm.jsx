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
import { getLearningCenterCourse } from "../graphql/queries";
import { updateLearningCenterCourse } from "../graphql/mutations";
const client = generateClient();
export default function LearningCenterCourseUpdateForm(props) {
  const {
    id: idProp,
    learningCenterCourse: learningCenterCourseModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    learningCenterId: "",
    courseName: "",
    courseURL: "",
    couseDetail: "",
    isDeleted: false,
  };
  const [learningCenterId, setLearningCenterId] = React.useState(
    initialValues.learningCenterId
  );
  const [courseName, setCourseName] = React.useState(initialValues.courseName);
  const [courseURL, setCourseURL] = React.useState(initialValues.courseURL);
  const [couseDetail, setCouseDetail] = React.useState(
    initialValues.couseDetail
  );
  const [isDeleted, setIsDeleted] = React.useState(initialValues.isDeleted);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = learningCenterCourseRecord
      ? { ...initialValues, ...learningCenterCourseRecord }
      : initialValues;
    setLearningCenterId(cleanValues.learningCenterId);
    setCourseName(cleanValues.courseName);
    setCourseURL(cleanValues.courseURL);
    setCouseDetail(cleanValues.couseDetail);
    setIsDeleted(cleanValues.isDeleted);
    setErrors({});
  };
  const [learningCenterCourseRecord, setLearningCenterCourseRecord] =
    React.useState(learningCenterCourseModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getLearningCenterCourse.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getLearningCenterCourse
        : learningCenterCourseModelProp;
      setLearningCenterCourseRecord(record);
    };
    queryData();
  }, [idProp, learningCenterCourseModelProp]);
  React.useEffect(resetStateValues, [learningCenterCourseRecord]);
  const validations = {
    learningCenterId: [{ type: "Required" }],
    courseName: [],
    courseURL: [],
    couseDetail: [],
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
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          learningCenterId,
          courseName: courseName ?? null,
          courseURL: courseURL ?? null,
          couseDetail: couseDetail ?? null,
          isDeleted: isDeleted ?? null,
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
            query: updateLearningCenterCourse.replaceAll("__typename", ""),
            variables: {
              input: {
                id: learningCenterCourseRecord.id,
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
      {...getOverrideProps(overrides, "LearningCenterCourseUpdateForm")}
      {...rest}
    >
      <TextField
        label="Learning center id"
        isRequired={true}
        isReadOnly={false}
        value={learningCenterId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              learningCenterId: value,
              courseName,
              courseURL,
              couseDetail,
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
        label="Course name"
        isRequired={false}
        isReadOnly={false}
        value={courseName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              learningCenterId,
              courseName: value,
              courseURL,
              couseDetail,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.courseName ?? value;
          }
          if (errors.courseName?.hasError) {
            runValidationTasks("courseName", value);
          }
          setCourseName(value);
        }}
        onBlur={() => runValidationTasks("courseName", courseName)}
        errorMessage={errors.courseName?.errorMessage}
        hasError={errors.courseName?.hasError}
        {...getOverrideProps(overrides, "courseName")}
      ></TextField>
      <TextField
        label="Course url"
        isRequired={false}
        isReadOnly={false}
        value={courseURL}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              learningCenterId,
              courseName,
              courseURL: value,
              couseDetail,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.courseURL ?? value;
          }
          if (errors.courseURL?.hasError) {
            runValidationTasks("courseURL", value);
          }
          setCourseURL(value);
        }}
        onBlur={() => runValidationTasks("courseURL", courseURL)}
        errorMessage={errors.courseURL?.errorMessage}
        hasError={errors.courseURL?.hasError}
        {...getOverrideProps(overrides, "courseURL")}
      ></TextField>
      <TextField
        label="Couse detail"
        isRequired={false}
        isReadOnly={false}
        value={couseDetail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              learningCenterId,
              courseName,
              courseURL,
              couseDetail: value,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.couseDetail ?? value;
          }
          if (errors.couseDetail?.hasError) {
            runValidationTasks("couseDetail", value);
          }
          setCouseDetail(value);
        }}
        onBlur={() => runValidationTasks("couseDetail", couseDetail)}
        errorMessage={errors.couseDetail?.errorMessage}
        hasError={errors.couseDetail?.hasError}
        {...getOverrideProps(overrides, "couseDetail")}
      ></TextField>
      <SwitchField
        label="Is deleted"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isDeleted}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              learningCenterId,
              courseName,
              courseURL,
              couseDetail,
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
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || learningCenterCourseModelProp)}
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
              !(idProp || learningCenterCourseModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
