/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SelectField,
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createLearningCenterCourse } from "../graphql/mutations";
const client = generateClient();
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function LearningCenterCourseCreateForm(props) {
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
    learningCenterId: "",
    courseName: "",
    courseURL: "",
    couseDetail: "",
    isAvailableMoneyBack: false,
    moneyBackDetail: "",
    isAvailableSubsidy: false,
    subsidyMemo: "",
    onSale: false,
    saleMemo: "",
    purposes: [],
    jobTypes: [],
    programmingLanguages: [],
    frameworks: [],
    developmentTools: [],
    paymentOptions: [],
    attendanceType: "",
    locationPref: "",
    locationCity: "",
    isMadeToOrder: false,
    especiallyAudiences: [],
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
  const [isAvailableMoneyBack, setIsAvailableMoneyBack] = React.useState(
    initialValues.isAvailableMoneyBack
  );
  const [moneyBackDetail, setMoneyBackDetail] = React.useState(
    initialValues.moneyBackDetail
  );
  const [isAvailableSubsidy, setIsAvailableSubsidy] = React.useState(
    initialValues.isAvailableSubsidy
  );
  const [subsidyMemo, setSubsidyMemo] = React.useState(
    initialValues.subsidyMemo
  );
  const [onSale, setOnSale] = React.useState(initialValues.onSale);
  const [saleMemo, setSaleMemo] = React.useState(initialValues.saleMemo);
  const [purposes, setPurposes] = React.useState(initialValues.purposes);
  const [jobTypes, setJobTypes] = React.useState(initialValues.jobTypes);
  const [programmingLanguages, setProgrammingLanguages] = React.useState(
    initialValues.programmingLanguages
  );
  const [frameworks, setFrameworks] = React.useState(initialValues.frameworks);
  const [developmentTools, setDevelopmentTools] = React.useState(
    initialValues.developmentTools
  );
  const [paymentOptions, setPaymentOptions] = React.useState(
    initialValues.paymentOptions
  );
  const [attendanceType, setAttendanceType] = React.useState(
    initialValues.attendanceType
  );
  const [locationPref, setLocationPref] = React.useState(
    initialValues.locationPref
  );
  const [locationCity, setLocationCity] = React.useState(
    initialValues.locationCity
  );
  const [isMadeToOrder, setIsMadeToOrder] = React.useState(
    initialValues.isMadeToOrder
  );
  const [especiallyAudiences, setEspeciallyAudiences] = React.useState(
    initialValues.especiallyAudiences
  );
  const [isDeleted, setIsDeleted] = React.useState(initialValues.isDeleted);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setLearningCenterId(initialValues.learningCenterId);
    setCourseName(initialValues.courseName);
    setCourseURL(initialValues.courseURL);
    setCouseDetail(initialValues.couseDetail);
    setIsAvailableMoneyBack(initialValues.isAvailableMoneyBack);
    setMoneyBackDetail(initialValues.moneyBackDetail);
    setIsAvailableSubsidy(initialValues.isAvailableSubsidy);
    setSubsidyMemo(initialValues.subsidyMemo);
    setOnSale(initialValues.onSale);
    setSaleMemo(initialValues.saleMemo);
    setPurposes(initialValues.purposes);
    setCurrentPurposesValue("");
    setJobTypes(initialValues.jobTypes);
    setCurrentJobTypesValue("");
    setProgrammingLanguages(initialValues.programmingLanguages);
    setCurrentProgrammingLanguagesValue("");
    setFrameworks(initialValues.frameworks);
    setCurrentFrameworksValue("");
    setDevelopmentTools(initialValues.developmentTools);
    setCurrentDevelopmentToolsValue("");
    setPaymentOptions(initialValues.paymentOptions);
    setCurrentPaymentOptionsValue("");
    setAttendanceType(initialValues.attendanceType);
    setLocationPref(initialValues.locationPref);
    setLocationCity(initialValues.locationCity);
    setIsMadeToOrder(initialValues.isMadeToOrder);
    setEspeciallyAudiences(initialValues.especiallyAudiences);
    setCurrentEspeciallyAudiencesValue("");
    setIsDeleted(initialValues.isDeleted);
    setErrors({});
  };
  const [currentPurposesValue, setCurrentPurposesValue] = React.useState("");
  const purposesRef = React.createRef();
  const [currentJobTypesValue, setCurrentJobTypesValue] = React.useState("");
  const jobTypesRef = React.createRef();
  const [
    currentProgrammingLanguagesValue,
    setCurrentProgrammingLanguagesValue,
  ] = React.useState("");
  const programmingLanguagesRef = React.createRef();
  const [currentFrameworksValue, setCurrentFrameworksValue] =
    React.useState("");
  const frameworksRef = React.createRef();
  const [currentDevelopmentToolsValue, setCurrentDevelopmentToolsValue] =
    React.useState("");
  const developmentToolsRef = React.createRef();
  const [currentPaymentOptionsValue, setCurrentPaymentOptionsValue] =
    React.useState("");
  const paymentOptionsRef = React.createRef();
  const [currentEspeciallyAudiencesValue, setCurrentEspeciallyAudiencesValue] =
    React.useState("");
  const especiallyAudiencesRef = React.createRef();
  const getDisplayValue = {
    purposes: (r) => {
      const enumDisplayValueMap = {
        JOB: "Job",
        FREELANCE: "Freelance",
        ENTREPRENEURSHIP: "Entrepreneurship",
        SIDE_JOB: "Side job",
        CERTIFICATION: "Certification",
        LEARNING: "Learning",
      };
      return enumDisplayValueMap[r];
    },
    paymentOptions: (r) => {
      const enumDisplayValueMap = {
        FULL: "Full",
        INSTALLMENTS: "Installments",
        SUBSCRIPTION: "Subscription",
      };
      return enumDisplayValueMap[r];
    },
    especiallyAudiences: (r) => {
      const enumDisplayValueMap = {
        FOR_ELEMENTARY_STUDENTS: "For elementary students",
        FOR_JUNIOR_HIGH_STUDENTS: "For junior high students",
        FOR_HIGH_SCHOOL_STUDENTS: "For high school students",
        FOR_UNIVERSITY_STUDENTS: "For university students",
        FOR_HOUSEWIVES: "For housewives",
        FOR_SENIORS: "For seniors",
        FOR_PEOPLE_WITH_DISABILITIES: "For people with disabilities",
      };
      return enumDisplayValueMap[r];
    },
  };
  const validations = {
    learningCenterId: [{ type: "Required" }],
    courseName: [],
    courseURL: [],
    couseDetail: [],
    isAvailableMoneyBack: [],
    moneyBackDetail: [],
    isAvailableSubsidy: [],
    subsidyMemo: [],
    onSale: [],
    saleMemo: [],
    purposes: [],
    jobTypes: [],
    programmingLanguages: [],
    frameworks: [],
    developmentTools: [],
    paymentOptions: [],
    attendanceType: [],
    locationPref: [],
    locationCity: [],
    isMadeToOrder: [],
    especiallyAudiences: [],
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
          courseName,
          courseURL,
          couseDetail,
          isAvailableMoneyBack,
          moneyBackDetail,
          isAvailableSubsidy,
          subsidyMemo,
          onSale,
          saleMemo,
          purposes,
          jobTypes,
          programmingLanguages,
          frameworks,
          developmentTools,
          paymentOptions,
          attendanceType,
          locationPref,
          locationCity,
          isMadeToOrder,
          especiallyAudiences,
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
            query: createLearningCenterCourse.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "LearningCenterCourseCreateForm")}
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
              isAvailableMoneyBack,
              moneyBackDetail,
              isAvailableSubsidy,
              subsidyMemo,
              onSale,
              saleMemo,
              purposes,
              jobTypes,
              programmingLanguages,
              frameworks,
              developmentTools,
              paymentOptions,
              attendanceType,
              locationPref,
              locationCity,
              isMadeToOrder,
              especiallyAudiences,
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
              isAvailableMoneyBack,
              moneyBackDetail,
              isAvailableSubsidy,
              subsidyMemo,
              onSale,
              saleMemo,
              purposes,
              jobTypes,
              programmingLanguages,
              frameworks,
              developmentTools,
              paymentOptions,
              attendanceType,
              locationPref,
              locationCity,
              isMadeToOrder,
              especiallyAudiences,
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
              isAvailableMoneyBack,
              moneyBackDetail,
              isAvailableSubsidy,
              subsidyMemo,
              onSale,
              saleMemo,
              purposes,
              jobTypes,
              programmingLanguages,
              frameworks,
              developmentTools,
              paymentOptions,
              attendanceType,
              locationPref,
              locationCity,
              isMadeToOrder,
              especiallyAudiences,
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
              isAvailableMoneyBack,
              moneyBackDetail,
              isAvailableSubsidy,
              subsidyMemo,
              onSale,
              saleMemo,
              purposes,
              jobTypes,
              programmingLanguages,
              frameworks,
              developmentTools,
              paymentOptions,
              attendanceType,
              locationPref,
              locationCity,
              isMadeToOrder,
              especiallyAudiences,
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
        label="Is available money back"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isAvailableMoneyBack}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              learningCenterId,
              courseName,
              courseURL,
              couseDetail,
              isAvailableMoneyBack: value,
              moneyBackDetail,
              isAvailableSubsidy,
              subsidyMemo,
              onSale,
              saleMemo,
              purposes,
              jobTypes,
              programmingLanguages,
              frameworks,
              developmentTools,
              paymentOptions,
              attendanceType,
              locationPref,
              locationCity,
              isMadeToOrder,
              especiallyAudiences,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.isAvailableMoneyBack ?? value;
          }
          if (errors.isAvailableMoneyBack?.hasError) {
            runValidationTasks("isAvailableMoneyBack", value);
          }
          setIsAvailableMoneyBack(value);
        }}
        onBlur={() =>
          runValidationTasks("isAvailableMoneyBack", isAvailableMoneyBack)
        }
        errorMessage={errors.isAvailableMoneyBack?.errorMessage}
        hasError={errors.isAvailableMoneyBack?.hasError}
        {...getOverrideProps(overrides, "isAvailableMoneyBack")}
      ></SwitchField>
      <TextField
        label="Money back detail"
        isRequired={false}
        isReadOnly={false}
        value={moneyBackDetail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              learningCenterId,
              courseName,
              courseURL,
              couseDetail,
              isAvailableMoneyBack,
              moneyBackDetail: value,
              isAvailableSubsidy,
              subsidyMemo,
              onSale,
              saleMemo,
              purposes,
              jobTypes,
              programmingLanguages,
              frameworks,
              developmentTools,
              paymentOptions,
              attendanceType,
              locationPref,
              locationCity,
              isMadeToOrder,
              especiallyAudiences,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.moneyBackDetail ?? value;
          }
          if (errors.moneyBackDetail?.hasError) {
            runValidationTasks("moneyBackDetail", value);
          }
          setMoneyBackDetail(value);
        }}
        onBlur={() => runValidationTasks("moneyBackDetail", moneyBackDetail)}
        errorMessage={errors.moneyBackDetail?.errorMessage}
        hasError={errors.moneyBackDetail?.hasError}
        {...getOverrideProps(overrides, "moneyBackDetail")}
      ></TextField>
      <SwitchField
        label="Is available subsidy"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isAvailableSubsidy}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              learningCenterId,
              courseName,
              courseURL,
              couseDetail,
              isAvailableMoneyBack,
              moneyBackDetail,
              isAvailableSubsidy: value,
              subsidyMemo,
              onSale,
              saleMemo,
              purposes,
              jobTypes,
              programmingLanguages,
              frameworks,
              developmentTools,
              paymentOptions,
              attendanceType,
              locationPref,
              locationCity,
              isMadeToOrder,
              especiallyAudiences,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.isAvailableSubsidy ?? value;
          }
          if (errors.isAvailableSubsidy?.hasError) {
            runValidationTasks("isAvailableSubsidy", value);
          }
          setIsAvailableSubsidy(value);
        }}
        onBlur={() =>
          runValidationTasks("isAvailableSubsidy", isAvailableSubsidy)
        }
        errorMessage={errors.isAvailableSubsidy?.errorMessage}
        hasError={errors.isAvailableSubsidy?.hasError}
        {...getOverrideProps(overrides, "isAvailableSubsidy")}
      ></SwitchField>
      <TextField
        label="Subsidy memo"
        isRequired={false}
        isReadOnly={false}
        value={subsidyMemo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              learningCenterId,
              courseName,
              courseURL,
              couseDetail,
              isAvailableMoneyBack,
              moneyBackDetail,
              isAvailableSubsidy,
              subsidyMemo: value,
              onSale,
              saleMemo,
              purposes,
              jobTypes,
              programmingLanguages,
              frameworks,
              developmentTools,
              paymentOptions,
              attendanceType,
              locationPref,
              locationCity,
              isMadeToOrder,
              especiallyAudiences,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.subsidyMemo ?? value;
          }
          if (errors.subsidyMemo?.hasError) {
            runValidationTasks("subsidyMemo", value);
          }
          setSubsidyMemo(value);
        }}
        onBlur={() => runValidationTasks("subsidyMemo", subsidyMemo)}
        errorMessage={errors.subsidyMemo?.errorMessage}
        hasError={errors.subsidyMemo?.hasError}
        {...getOverrideProps(overrides, "subsidyMemo")}
      ></TextField>
      <SwitchField
        label="On sale"
        defaultChecked={false}
        isDisabled={false}
        isChecked={onSale}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              learningCenterId,
              courseName,
              courseURL,
              couseDetail,
              isAvailableMoneyBack,
              moneyBackDetail,
              isAvailableSubsidy,
              subsidyMemo,
              onSale: value,
              saleMemo,
              purposes,
              jobTypes,
              programmingLanguages,
              frameworks,
              developmentTools,
              paymentOptions,
              attendanceType,
              locationPref,
              locationCity,
              isMadeToOrder,
              especiallyAudiences,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.onSale ?? value;
          }
          if (errors.onSale?.hasError) {
            runValidationTasks("onSale", value);
          }
          setOnSale(value);
        }}
        onBlur={() => runValidationTasks("onSale", onSale)}
        errorMessage={errors.onSale?.errorMessage}
        hasError={errors.onSale?.hasError}
        {...getOverrideProps(overrides, "onSale")}
      ></SwitchField>
      <TextField
        label="Sale memo"
        isRequired={false}
        isReadOnly={false}
        value={saleMemo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              learningCenterId,
              courseName,
              courseURL,
              couseDetail,
              isAvailableMoneyBack,
              moneyBackDetail,
              isAvailableSubsidy,
              subsidyMemo,
              onSale,
              saleMemo: value,
              purposes,
              jobTypes,
              programmingLanguages,
              frameworks,
              developmentTools,
              paymentOptions,
              attendanceType,
              locationPref,
              locationCity,
              isMadeToOrder,
              especiallyAudiences,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.saleMemo ?? value;
          }
          if (errors.saleMemo?.hasError) {
            runValidationTasks("saleMemo", value);
          }
          setSaleMemo(value);
        }}
        onBlur={() => runValidationTasks("saleMemo", saleMemo)}
        errorMessage={errors.saleMemo?.errorMessage}
        hasError={errors.saleMemo?.hasError}
        {...getOverrideProps(overrides, "saleMemo")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              learningCenterId,
              courseName,
              courseURL,
              couseDetail,
              isAvailableMoneyBack,
              moneyBackDetail,
              isAvailableSubsidy,
              subsidyMemo,
              onSale,
              saleMemo,
              purposes: values,
              jobTypes,
              programmingLanguages,
              frameworks,
              developmentTools,
              paymentOptions,
              attendanceType,
              locationPref,
              locationCity,
              isMadeToOrder,
              especiallyAudiences,
              isDeleted,
            };
            const result = onChange(modelFields);
            values = result?.purposes ?? values;
          }
          setPurposes(values);
          setCurrentPurposesValue("");
        }}
        currentFieldValue={currentPurposesValue}
        label={"Purposes"}
        items={purposes}
        hasError={errors?.purposes?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("purposes", currentPurposesValue)
        }
        errorMessage={errors?.purposes?.errorMessage}
        getBadgeText={getDisplayValue.purposes}
        setFieldValue={setCurrentPurposesValue}
        inputFieldRef={purposesRef}
        defaultFieldValue={""}
      >
        <SelectField
          label="Purposes"
          placeholder="Please select an option"
          isDisabled={false}
          value={currentPurposesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.purposes?.hasError) {
              runValidationTasks("purposes", value);
            }
            setCurrentPurposesValue(value);
          }}
          onBlur={() => runValidationTasks("purposes", currentPurposesValue)}
          errorMessage={errors.purposes?.errorMessage}
          hasError={errors.purposes?.hasError}
          ref={purposesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "purposes")}
        >
          <option
            children="Job"
            value="JOB"
            {...getOverrideProps(overrides, "purposesoption0")}
          ></option>
          <option
            children="Freelance"
            value="FREELANCE"
            {...getOverrideProps(overrides, "purposesoption1")}
          ></option>
          <option
            children="Entrepreneurship"
            value="ENTREPRENEURSHIP"
            {...getOverrideProps(overrides, "purposesoption2")}
          ></option>
          <option
            children="Side job"
            value="SIDE_JOB"
            {...getOverrideProps(overrides, "purposesoption3")}
          ></option>
          <option
            children="Certification"
            value="CERTIFICATION"
            {...getOverrideProps(overrides, "purposesoption4")}
          ></option>
          <option
            children="Learning"
            value="LEARNING"
            {...getOverrideProps(overrides, "purposesoption5")}
          ></option>
        </SelectField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              learningCenterId,
              courseName,
              courseURL,
              couseDetail,
              isAvailableMoneyBack,
              moneyBackDetail,
              isAvailableSubsidy,
              subsidyMemo,
              onSale,
              saleMemo,
              purposes,
              jobTypes: values,
              programmingLanguages,
              frameworks,
              developmentTools,
              paymentOptions,
              attendanceType,
              locationPref,
              locationCity,
              isMadeToOrder,
              especiallyAudiences,
              isDeleted,
            };
            const result = onChange(modelFields);
            values = result?.jobTypes ?? values;
          }
          setJobTypes(values);
          setCurrentJobTypesValue("");
        }}
        currentFieldValue={currentJobTypesValue}
        label={"Job types"}
        items={jobTypes}
        hasError={errors?.jobTypes?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("jobTypes", currentJobTypesValue)
        }
        errorMessage={errors?.jobTypes?.errorMessage}
        setFieldValue={setCurrentJobTypesValue}
        inputFieldRef={jobTypesRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Job types"
          isRequired={false}
          isReadOnly={false}
          value={currentJobTypesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.jobTypes?.hasError) {
              runValidationTasks("jobTypes", value);
            }
            setCurrentJobTypesValue(value);
          }}
          onBlur={() => runValidationTasks("jobTypes", currentJobTypesValue)}
          errorMessage={errors.jobTypes?.errorMessage}
          hasError={errors.jobTypes?.hasError}
          ref={jobTypesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "jobTypes")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              learningCenterId,
              courseName,
              courseURL,
              couseDetail,
              isAvailableMoneyBack,
              moneyBackDetail,
              isAvailableSubsidy,
              subsidyMemo,
              onSale,
              saleMemo,
              purposes,
              jobTypes,
              programmingLanguages: values,
              frameworks,
              developmentTools,
              paymentOptions,
              attendanceType,
              locationPref,
              locationCity,
              isMadeToOrder,
              especiallyAudiences,
              isDeleted,
            };
            const result = onChange(modelFields);
            values = result?.programmingLanguages ?? values;
          }
          setProgrammingLanguages(values);
          setCurrentProgrammingLanguagesValue("");
        }}
        currentFieldValue={currentProgrammingLanguagesValue}
        label={"Programming languages"}
        items={programmingLanguages}
        hasError={errors?.programmingLanguages?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "programmingLanguages",
            currentProgrammingLanguagesValue
          )
        }
        errorMessage={errors?.programmingLanguages?.errorMessage}
        setFieldValue={setCurrentProgrammingLanguagesValue}
        inputFieldRef={programmingLanguagesRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Programming languages"
          isRequired={false}
          isReadOnly={false}
          value={currentProgrammingLanguagesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.programmingLanguages?.hasError) {
              runValidationTasks("programmingLanguages", value);
            }
            setCurrentProgrammingLanguagesValue(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "programmingLanguages",
              currentProgrammingLanguagesValue
            )
          }
          errorMessage={errors.programmingLanguages?.errorMessage}
          hasError={errors.programmingLanguages?.hasError}
          ref={programmingLanguagesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "programmingLanguages")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              learningCenterId,
              courseName,
              courseURL,
              couseDetail,
              isAvailableMoneyBack,
              moneyBackDetail,
              isAvailableSubsidy,
              subsidyMemo,
              onSale,
              saleMemo,
              purposes,
              jobTypes,
              programmingLanguages,
              frameworks: values,
              developmentTools,
              paymentOptions,
              attendanceType,
              locationPref,
              locationCity,
              isMadeToOrder,
              especiallyAudiences,
              isDeleted,
            };
            const result = onChange(modelFields);
            values = result?.frameworks ?? values;
          }
          setFrameworks(values);
          setCurrentFrameworksValue("");
        }}
        currentFieldValue={currentFrameworksValue}
        label={"Frameworks"}
        items={frameworks}
        hasError={errors?.frameworks?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("frameworks", currentFrameworksValue)
        }
        errorMessage={errors?.frameworks?.errorMessage}
        setFieldValue={setCurrentFrameworksValue}
        inputFieldRef={frameworksRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Frameworks"
          isRequired={false}
          isReadOnly={false}
          value={currentFrameworksValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.frameworks?.hasError) {
              runValidationTasks("frameworks", value);
            }
            setCurrentFrameworksValue(value);
          }}
          onBlur={() =>
            runValidationTasks("frameworks", currentFrameworksValue)
          }
          errorMessage={errors.frameworks?.errorMessage}
          hasError={errors.frameworks?.hasError}
          ref={frameworksRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "frameworks")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              learningCenterId,
              courseName,
              courseURL,
              couseDetail,
              isAvailableMoneyBack,
              moneyBackDetail,
              isAvailableSubsidy,
              subsidyMemo,
              onSale,
              saleMemo,
              purposes,
              jobTypes,
              programmingLanguages,
              frameworks,
              developmentTools: values,
              paymentOptions,
              attendanceType,
              locationPref,
              locationCity,
              isMadeToOrder,
              especiallyAudiences,
              isDeleted,
            };
            const result = onChange(modelFields);
            values = result?.developmentTools ?? values;
          }
          setDevelopmentTools(values);
          setCurrentDevelopmentToolsValue("");
        }}
        currentFieldValue={currentDevelopmentToolsValue}
        label={"Development tools"}
        items={developmentTools}
        hasError={errors?.developmentTools?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "developmentTools",
            currentDevelopmentToolsValue
          )
        }
        errorMessage={errors?.developmentTools?.errorMessage}
        setFieldValue={setCurrentDevelopmentToolsValue}
        inputFieldRef={developmentToolsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Development tools"
          isRequired={false}
          isReadOnly={false}
          value={currentDevelopmentToolsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.developmentTools?.hasError) {
              runValidationTasks("developmentTools", value);
            }
            setCurrentDevelopmentToolsValue(value);
          }}
          onBlur={() =>
            runValidationTasks("developmentTools", currentDevelopmentToolsValue)
          }
          errorMessage={errors.developmentTools?.errorMessage}
          hasError={errors.developmentTools?.hasError}
          ref={developmentToolsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "developmentTools")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              learningCenterId,
              courseName,
              courseURL,
              couseDetail,
              isAvailableMoneyBack,
              moneyBackDetail,
              isAvailableSubsidy,
              subsidyMemo,
              onSale,
              saleMemo,
              purposes,
              jobTypes,
              programmingLanguages,
              frameworks,
              developmentTools,
              paymentOptions: values,
              attendanceType,
              locationPref,
              locationCity,
              isMadeToOrder,
              especiallyAudiences,
              isDeleted,
            };
            const result = onChange(modelFields);
            values = result?.paymentOptions ?? values;
          }
          setPaymentOptions(values);
          setCurrentPaymentOptionsValue("");
        }}
        currentFieldValue={currentPaymentOptionsValue}
        label={"Payment options"}
        items={paymentOptions}
        hasError={errors?.paymentOptions?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("paymentOptions", currentPaymentOptionsValue)
        }
        errorMessage={errors?.paymentOptions?.errorMessage}
        getBadgeText={getDisplayValue.paymentOptions}
        setFieldValue={setCurrentPaymentOptionsValue}
        inputFieldRef={paymentOptionsRef}
        defaultFieldValue={""}
      >
        <SelectField
          label="Payment options"
          placeholder="Please select an option"
          isDisabled={false}
          value={currentPaymentOptionsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.paymentOptions?.hasError) {
              runValidationTasks("paymentOptions", value);
            }
            setCurrentPaymentOptionsValue(value);
          }}
          onBlur={() =>
            runValidationTasks("paymentOptions", currentPaymentOptionsValue)
          }
          errorMessage={errors.paymentOptions?.errorMessage}
          hasError={errors.paymentOptions?.hasError}
          ref={paymentOptionsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "paymentOptions")}
        >
          <option
            children="Full"
            value="FULL"
            {...getOverrideProps(overrides, "paymentOptionsoption0")}
          ></option>
          <option
            children="Installments"
            value="INSTALLMENTS"
            {...getOverrideProps(overrides, "paymentOptionsoption1")}
          ></option>
          <option
            children="Subscription"
            value="SUBSCRIPTION"
            {...getOverrideProps(overrides, "paymentOptionsoption2")}
          ></option>
        </SelectField>
      </ArrayField>
      <SelectField
        label="Attendance type"
        placeholder="Please select an option"
        isDisabled={false}
        value={attendanceType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              learningCenterId,
              courseName,
              courseURL,
              couseDetail,
              isAvailableMoneyBack,
              moneyBackDetail,
              isAvailableSubsidy,
              subsidyMemo,
              onSale,
              saleMemo,
              purposes,
              jobTypes,
              programmingLanguages,
              frameworks,
              developmentTools,
              paymentOptions,
              attendanceType: value,
              locationPref,
              locationCity,
              isMadeToOrder,
              especiallyAudiences,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.attendanceType ?? value;
          }
          if (errors.attendanceType?.hasError) {
            runValidationTasks("attendanceType", value);
          }
          setAttendanceType(value);
        }}
        onBlur={() => runValidationTasks("attendanceType", attendanceType)}
        errorMessage={errors.attendanceType?.errorMessage}
        hasError={errors.attendanceType?.hasError}
        {...getOverrideProps(overrides, "attendanceType")}
      >
        <option
          children="Online"
          value="ONLINE"
          {...getOverrideProps(overrides, "attendanceTypeoption0")}
        ></option>
        <option
          children="Offline"
          value="OFFLINE"
          {...getOverrideProps(overrides, "attendanceTypeoption1")}
        ></option>
        <option
          children="Hybrid"
          value="HYBRID"
          {...getOverrideProps(overrides, "attendanceTypeoption2")}
        ></option>
      </SelectField>
      <TextField
        label="Location pref"
        isRequired={false}
        isReadOnly={false}
        value={locationPref}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              learningCenterId,
              courseName,
              courseURL,
              couseDetail,
              isAvailableMoneyBack,
              moneyBackDetail,
              isAvailableSubsidy,
              subsidyMemo,
              onSale,
              saleMemo,
              purposes,
              jobTypes,
              programmingLanguages,
              frameworks,
              developmentTools,
              paymentOptions,
              attendanceType,
              locationPref: value,
              locationCity,
              isMadeToOrder,
              especiallyAudiences,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.locationPref ?? value;
          }
          if (errors.locationPref?.hasError) {
            runValidationTasks("locationPref", value);
          }
          setLocationPref(value);
        }}
        onBlur={() => runValidationTasks("locationPref", locationPref)}
        errorMessage={errors.locationPref?.errorMessage}
        hasError={errors.locationPref?.hasError}
        {...getOverrideProps(overrides, "locationPref")}
      ></TextField>
      <TextField
        label="Location city"
        isRequired={false}
        isReadOnly={false}
        value={locationCity}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              learningCenterId,
              courseName,
              courseURL,
              couseDetail,
              isAvailableMoneyBack,
              moneyBackDetail,
              isAvailableSubsidy,
              subsidyMemo,
              onSale,
              saleMemo,
              purposes,
              jobTypes,
              programmingLanguages,
              frameworks,
              developmentTools,
              paymentOptions,
              attendanceType,
              locationPref,
              locationCity: value,
              isMadeToOrder,
              especiallyAudiences,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.locationCity ?? value;
          }
          if (errors.locationCity?.hasError) {
            runValidationTasks("locationCity", value);
          }
          setLocationCity(value);
        }}
        onBlur={() => runValidationTasks("locationCity", locationCity)}
        errorMessage={errors.locationCity?.errorMessage}
        hasError={errors.locationCity?.hasError}
        {...getOverrideProps(overrides, "locationCity")}
      ></TextField>
      <SwitchField
        label="Is made to order"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isMadeToOrder}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              learningCenterId,
              courseName,
              courseURL,
              couseDetail,
              isAvailableMoneyBack,
              moneyBackDetail,
              isAvailableSubsidy,
              subsidyMemo,
              onSale,
              saleMemo,
              purposes,
              jobTypes,
              programmingLanguages,
              frameworks,
              developmentTools,
              paymentOptions,
              attendanceType,
              locationPref,
              locationCity,
              isMadeToOrder: value,
              especiallyAudiences,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.isMadeToOrder ?? value;
          }
          if (errors.isMadeToOrder?.hasError) {
            runValidationTasks("isMadeToOrder", value);
          }
          setIsMadeToOrder(value);
        }}
        onBlur={() => runValidationTasks("isMadeToOrder", isMadeToOrder)}
        errorMessage={errors.isMadeToOrder?.errorMessage}
        hasError={errors.isMadeToOrder?.hasError}
        {...getOverrideProps(overrides, "isMadeToOrder")}
      ></SwitchField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              learningCenterId,
              courseName,
              courseURL,
              couseDetail,
              isAvailableMoneyBack,
              moneyBackDetail,
              isAvailableSubsidy,
              subsidyMemo,
              onSale,
              saleMemo,
              purposes,
              jobTypes,
              programmingLanguages,
              frameworks,
              developmentTools,
              paymentOptions,
              attendanceType,
              locationPref,
              locationCity,
              isMadeToOrder,
              especiallyAudiences: values,
              isDeleted,
            };
            const result = onChange(modelFields);
            values = result?.especiallyAudiences ?? values;
          }
          setEspeciallyAudiences(values);
          setCurrentEspeciallyAudiencesValue("");
        }}
        currentFieldValue={currentEspeciallyAudiencesValue}
        label={"Especially audiences"}
        items={especiallyAudiences}
        hasError={errors?.especiallyAudiences?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "especiallyAudiences",
            currentEspeciallyAudiencesValue
          )
        }
        errorMessage={errors?.especiallyAudiences?.errorMessage}
        getBadgeText={getDisplayValue.especiallyAudiences}
        setFieldValue={setCurrentEspeciallyAudiencesValue}
        inputFieldRef={especiallyAudiencesRef}
        defaultFieldValue={""}
      >
        <SelectField
          label="Especially audiences"
          placeholder="Please select an option"
          isDisabled={false}
          value={currentEspeciallyAudiencesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.especiallyAudiences?.hasError) {
              runValidationTasks("especiallyAudiences", value);
            }
            setCurrentEspeciallyAudiencesValue(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "especiallyAudiences",
              currentEspeciallyAudiencesValue
            )
          }
          errorMessage={errors.especiallyAudiences?.errorMessage}
          hasError={errors.especiallyAudiences?.hasError}
          ref={especiallyAudiencesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "especiallyAudiences")}
        >
          <option
            children="For elementary students"
            value="FOR_ELEMENTARY_STUDENTS"
            {...getOverrideProps(overrides, "especiallyAudiencesoption0")}
          ></option>
          <option
            children="For junior high students"
            value="FOR_JUNIOR_HIGH_STUDENTS"
            {...getOverrideProps(overrides, "especiallyAudiencesoption1")}
          ></option>
          <option
            children="For high school students"
            value="FOR_HIGH_SCHOOL_STUDENTS"
            {...getOverrideProps(overrides, "especiallyAudiencesoption2")}
          ></option>
          <option
            children="For university students"
            value="FOR_UNIVERSITY_STUDENTS"
            {...getOverrideProps(overrides, "especiallyAudiencesoption3")}
          ></option>
          <option
            children="For housewives"
            value="FOR_HOUSEWIVES"
            {...getOverrideProps(overrides, "especiallyAudiencesoption4")}
          ></option>
          <option
            children="For seniors"
            value="FOR_SENIORS"
            {...getOverrideProps(overrides, "especiallyAudiencesoption5")}
          ></option>
          <option
            children="For people with disabilities"
            value="FOR_PEOPLE_WITH_DISABILITIES"
            {...getOverrideProps(overrides, "especiallyAudiencesoption6")}
          ></option>
        </SelectField>
      </ArrayField>
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
              isAvailableMoneyBack,
              moneyBackDetail,
              isAvailableSubsidy,
              subsidyMemo,
              onSale,
              saleMemo,
              purposes,
              jobTypes,
              programmingLanguages,
              frameworks,
              developmentTools,
              paymentOptions,
              attendanceType,
              locationPref,
              locationCity,
              isMadeToOrder,
              especiallyAudiences,
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
