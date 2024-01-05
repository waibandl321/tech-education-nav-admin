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
import { getUser } from "../graphql/queries";
import { updateUser } from "../graphql/mutations";
const client = generateClient();
export default function UserUpdateForm(props) {
  const {
    id: idProp,
    user: userModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    cognitoSub: "",
    displayId: "",
    name: "",
    nameKana: "",
    gender: "",
    birthYear: "",
    birthMonth: "",
    birthDate: "",
    prefecture: "",
    previousJob: "",
    isRegisterUserInfo: false,
    isDeleted: false,
  };
  const [cognitoSub, setCognitoSub] = React.useState(initialValues.cognitoSub);
  const [displayId, setDisplayId] = React.useState(initialValues.displayId);
  const [name, setName] = React.useState(initialValues.name);
  const [nameKana, setNameKana] = React.useState(initialValues.nameKana);
  const [gender, setGender] = React.useState(initialValues.gender);
  const [birthYear, setBirthYear] = React.useState(initialValues.birthYear);
  const [birthMonth, setBirthMonth] = React.useState(initialValues.birthMonth);
  const [birthDate, setBirthDate] = React.useState(initialValues.birthDate);
  const [prefecture, setPrefecture] = React.useState(initialValues.prefecture);
  const [previousJob, setPreviousJob] = React.useState(
    initialValues.previousJob
  );
  const [isRegisterUserInfo, setIsRegisterUserInfo] = React.useState(
    initialValues.isRegisterUserInfo
  );
  const [isDeleted, setIsDeleted] = React.useState(initialValues.isDeleted);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = userRecord
      ? { ...initialValues, ...userRecord }
      : initialValues;
    setCognitoSub(cleanValues.cognitoSub);
    setDisplayId(cleanValues.displayId);
    setName(cleanValues.name);
    setNameKana(cleanValues.nameKana);
    setGender(cleanValues.gender);
    setBirthYear(cleanValues.birthYear);
    setBirthMonth(cleanValues.birthMonth);
    setBirthDate(cleanValues.birthDate);
    setPrefecture(cleanValues.prefecture);
    setPreviousJob(cleanValues.previousJob);
    setIsRegisterUserInfo(cleanValues.isRegisterUserInfo);
    setIsDeleted(cleanValues.isDeleted);
    setErrors({});
  };
  const [userRecord, setUserRecord] = React.useState(userModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getUser.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getUser
        : userModelProp;
      setUserRecord(record);
    };
    queryData();
  }, [idProp, userModelProp]);
  React.useEffect(resetStateValues, [userRecord]);
  const validations = {
    cognitoSub: [{ type: "Required" }],
    displayId: [{ type: "Required" }],
    name: [],
    nameKana: [],
    gender: [],
    birthYear: [],
    birthMonth: [],
    birthDate: [],
    prefecture: [],
    previousJob: [],
    isRegisterUserInfo: [],
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
          cognitoSub,
          displayId,
          name: name ?? null,
          nameKana: nameKana ?? null,
          gender: gender ?? null,
          birthYear: birthYear ?? null,
          birthMonth: birthMonth ?? null,
          birthDate: birthDate ?? null,
          prefecture: prefecture ?? null,
          previousJob: previousJob ?? null,
          isRegisterUserInfo: isRegisterUserInfo ?? null,
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
            query: updateUser.replaceAll("__typename", ""),
            variables: {
              input: {
                id: userRecord.id,
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
      {...getOverrideProps(overrides, "UserUpdateForm")}
      {...rest}
    >
      <TextField
        label="Cognito sub"
        isRequired={true}
        isReadOnly={false}
        value={cognitoSub}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cognitoSub: value,
              displayId,
              name,
              nameKana,
              gender,
              birthYear,
              birthMonth,
              birthDate,
              prefecture,
              previousJob,
              isRegisterUserInfo,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.cognitoSub ?? value;
          }
          if (errors.cognitoSub?.hasError) {
            runValidationTasks("cognitoSub", value);
          }
          setCognitoSub(value);
        }}
        onBlur={() => runValidationTasks("cognitoSub", cognitoSub)}
        errorMessage={errors.cognitoSub?.errorMessage}
        hasError={errors.cognitoSub?.hasError}
        {...getOverrideProps(overrides, "cognitoSub")}
      ></TextField>
      <TextField
        label="Display id"
        isRequired={true}
        isReadOnly={false}
        value={displayId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cognitoSub,
              displayId: value,
              name,
              nameKana,
              gender,
              birthYear,
              birthMonth,
              birthDate,
              prefecture,
              previousJob,
              isRegisterUserInfo,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.displayId ?? value;
          }
          if (errors.displayId?.hasError) {
            runValidationTasks("displayId", value);
          }
          setDisplayId(value);
        }}
        onBlur={() => runValidationTasks("displayId", displayId)}
        errorMessage={errors.displayId?.errorMessage}
        hasError={errors.displayId?.hasError}
        {...getOverrideProps(overrides, "displayId")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cognitoSub,
              displayId,
              name: value,
              nameKana,
              gender,
              birthYear,
              birthMonth,
              birthDate,
              prefecture,
              previousJob,
              isRegisterUserInfo,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Name kana"
        isRequired={false}
        isReadOnly={false}
        value={nameKana}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cognitoSub,
              displayId,
              name,
              nameKana: value,
              gender,
              birthYear,
              birthMonth,
              birthDate,
              prefecture,
              previousJob,
              isRegisterUserInfo,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.nameKana ?? value;
          }
          if (errors.nameKana?.hasError) {
            runValidationTasks("nameKana", value);
          }
          setNameKana(value);
        }}
        onBlur={() => runValidationTasks("nameKana", nameKana)}
        errorMessage={errors.nameKana?.errorMessage}
        hasError={errors.nameKana?.hasError}
        {...getOverrideProps(overrides, "nameKana")}
      ></TextField>
      <TextField
        label="Gender"
        isRequired={false}
        isReadOnly={false}
        value={gender}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cognitoSub,
              displayId,
              name,
              nameKana,
              gender: value,
              birthYear,
              birthMonth,
              birthDate,
              prefecture,
              previousJob,
              isRegisterUserInfo,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.gender ?? value;
          }
          if (errors.gender?.hasError) {
            runValidationTasks("gender", value);
          }
          setGender(value);
        }}
        onBlur={() => runValidationTasks("gender", gender)}
        errorMessage={errors.gender?.errorMessage}
        hasError={errors.gender?.hasError}
        {...getOverrideProps(overrides, "gender")}
      ></TextField>
      <TextField
        label="Birth year"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={birthYear}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              cognitoSub,
              displayId,
              name,
              nameKana,
              gender,
              birthYear: value,
              birthMonth,
              birthDate,
              prefecture,
              previousJob,
              isRegisterUserInfo,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.birthYear ?? value;
          }
          if (errors.birthYear?.hasError) {
            runValidationTasks("birthYear", value);
          }
          setBirthYear(value);
        }}
        onBlur={() => runValidationTasks("birthYear", birthYear)}
        errorMessage={errors.birthYear?.errorMessage}
        hasError={errors.birthYear?.hasError}
        {...getOverrideProps(overrides, "birthYear")}
      ></TextField>
      <TextField
        label="Birth month"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={birthMonth}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              cognitoSub,
              displayId,
              name,
              nameKana,
              gender,
              birthYear,
              birthMonth: value,
              birthDate,
              prefecture,
              previousJob,
              isRegisterUserInfo,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.birthMonth ?? value;
          }
          if (errors.birthMonth?.hasError) {
            runValidationTasks("birthMonth", value);
          }
          setBirthMonth(value);
        }}
        onBlur={() => runValidationTasks("birthMonth", birthMonth)}
        errorMessage={errors.birthMonth?.errorMessage}
        hasError={errors.birthMonth?.hasError}
        {...getOverrideProps(overrides, "birthMonth")}
      ></TextField>
      <TextField
        label="Birth date"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={birthDate}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              cognitoSub,
              displayId,
              name,
              nameKana,
              gender,
              birthYear,
              birthMonth,
              birthDate: value,
              prefecture,
              previousJob,
              isRegisterUserInfo,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.birthDate ?? value;
          }
          if (errors.birthDate?.hasError) {
            runValidationTasks("birthDate", value);
          }
          setBirthDate(value);
        }}
        onBlur={() => runValidationTasks("birthDate", birthDate)}
        errorMessage={errors.birthDate?.errorMessage}
        hasError={errors.birthDate?.hasError}
        {...getOverrideProps(overrides, "birthDate")}
      ></TextField>
      <TextField
        label="Prefecture"
        isRequired={false}
        isReadOnly={false}
        value={prefecture}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cognitoSub,
              displayId,
              name,
              nameKana,
              gender,
              birthYear,
              birthMonth,
              birthDate,
              prefecture: value,
              previousJob,
              isRegisterUserInfo,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.prefecture ?? value;
          }
          if (errors.prefecture?.hasError) {
            runValidationTasks("prefecture", value);
          }
          setPrefecture(value);
        }}
        onBlur={() => runValidationTasks("prefecture", prefecture)}
        errorMessage={errors.prefecture?.errorMessage}
        hasError={errors.prefecture?.hasError}
        {...getOverrideProps(overrides, "prefecture")}
      ></TextField>
      <TextField
        label="Previous job"
        isRequired={false}
        isReadOnly={false}
        value={previousJob}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cognitoSub,
              displayId,
              name,
              nameKana,
              gender,
              birthYear,
              birthMonth,
              birthDate,
              prefecture,
              previousJob: value,
              isRegisterUserInfo,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.previousJob ?? value;
          }
          if (errors.previousJob?.hasError) {
            runValidationTasks("previousJob", value);
          }
          setPreviousJob(value);
        }}
        onBlur={() => runValidationTasks("previousJob", previousJob)}
        errorMessage={errors.previousJob?.errorMessage}
        hasError={errors.previousJob?.hasError}
        {...getOverrideProps(overrides, "previousJob")}
      ></TextField>
      <SwitchField
        label="Is register user info"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isRegisterUserInfo}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              cognitoSub,
              displayId,
              name,
              nameKana,
              gender,
              birthYear,
              birthMonth,
              birthDate,
              prefecture,
              previousJob,
              isRegisterUserInfo: value,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.isRegisterUserInfo ?? value;
          }
          if (errors.isRegisterUserInfo?.hasError) {
            runValidationTasks("isRegisterUserInfo", value);
          }
          setIsRegisterUserInfo(value);
        }}
        onBlur={() =>
          runValidationTasks("isRegisterUserInfo", isRegisterUserInfo)
        }
        errorMessage={errors.isRegisterUserInfo?.errorMessage}
        hasError={errors.isRegisterUserInfo?.hasError}
        {...getOverrideProps(overrides, "isRegisterUserInfo")}
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
              cognitoSub,
              displayId,
              name,
              nameKana,
              gender,
              birthYear,
              birthMonth,
              birthDate,
              prefecture,
              previousJob,
              isRegisterUserInfo,
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
          isDisabled={!(idProp || userModelProp)}
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
              !(idProp || userModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
