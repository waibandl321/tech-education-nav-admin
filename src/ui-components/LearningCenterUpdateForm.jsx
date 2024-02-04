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
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getLearningCenter } from "../graphql/queries";
import { updateLearningCenter } from "../graphql/mutations";
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
export default function LearningCenterUpdateForm(props) {
  const {
    id: idProp,
    learningCenter: learningCenterModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    memo: "",
    operatingCompany: "",
    headquartersLocation: "",
    websiteURL: "",
    logoImageURL: "",
    establishmentYear: "",
    representative: "",
    admissionFee: "",
    cancelPolicy: "",
    paymentOptions: [],
    creditCards: [],
    isDeleted: false,
  };
  const [name, setName] = React.useState(initialValues.name);
  const [memo, setMemo] = React.useState(initialValues.memo);
  const [operatingCompany, setOperatingCompany] = React.useState(
    initialValues.operatingCompany
  );
  const [headquartersLocation, setHeadquartersLocation] = React.useState(
    initialValues.headquartersLocation
  );
  const [websiteURL, setWebsiteURL] = React.useState(initialValues.websiteURL);
  const [logoImageURL, setLogoImageURL] = React.useState(
    initialValues.logoImageURL
  );
  const [establishmentYear, setEstablishmentYear] = React.useState(
    initialValues.establishmentYear
  );
  const [representative, setRepresentative] = React.useState(
    initialValues.representative
  );
  const [admissionFee, setAdmissionFee] = React.useState(
    initialValues.admissionFee
  );
  const [cancelPolicy, setCancelPolicy] = React.useState(
    initialValues.cancelPolicy
  );
  const [paymentOptions, setPaymentOptions] = React.useState(
    initialValues.paymentOptions
  );
  const [creditCards, setCreditCards] = React.useState(
    initialValues.creditCards
  );
  const [isDeleted, setIsDeleted] = React.useState(initialValues.isDeleted);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = learningCenterRecord
      ? { ...initialValues, ...learningCenterRecord }
      : initialValues;
    setName(cleanValues.name);
    setMemo(cleanValues.memo);
    setOperatingCompany(cleanValues.operatingCompany);
    setHeadquartersLocation(cleanValues.headquartersLocation);
    setWebsiteURL(cleanValues.websiteURL);
    setLogoImageURL(cleanValues.logoImageURL);
    setEstablishmentYear(cleanValues.establishmentYear);
    setRepresentative(cleanValues.representative);
    setAdmissionFee(cleanValues.admissionFee);
    setCancelPolicy(cleanValues.cancelPolicy);
    setPaymentOptions(cleanValues.paymentOptions ?? []);
    setCurrentPaymentOptionsValue("");
    setCreditCards(cleanValues.creditCards ?? []);
    setCurrentCreditCardsValue("");
    setIsDeleted(cleanValues.isDeleted);
    setErrors({});
  };
  const [learningCenterRecord, setLearningCenterRecord] = React.useState(
    learningCenterModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getLearningCenter.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getLearningCenter
        : learningCenterModelProp;
      setLearningCenterRecord(record);
    };
    queryData();
  }, [idProp, learningCenterModelProp]);
  React.useEffect(resetStateValues, [learningCenterRecord]);
  const [currentPaymentOptionsValue, setCurrentPaymentOptionsValue] =
    React.useState("");
  const paymentOptionsRef = React.createRef();
  const [currentCreditCardsValue, setCurrentCreditCardsValue] =
    React.useState("");
  const creditCardsRef = React.createRef();
  const validations = {
    name: [],
    memo: [],
    operatingCompany: [],
    headquartersLocation: [],
    websiteURL: [],
    logoImageURL: [],
    establishmentYear: [],
    representative: [],
    admissionFee: [],
    cancelPolicy: [],
    paymentOptions: [],
    creditCards: [],
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
          name: name ?? null,
          memo: memo ?? null,
          operatingCompany: operatingCompany ?? null,
          headquartersLocation: headquartersLocation ?? null,
          websiteURL: websiteURL ?? null,
          logoImageURL: logoImageURL ?? null,
          establishmentYear: establishmentYear ?? null,
          representative: representative ?? null,
          admissionFee: admissionFee ?? null,
          cancelPolicy: cancelPolicy ?? null,
          paymentOptions: paymentOptions ?? null,
          creditCards: creditCards ?? null,
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
            query: updateLearningCenter.replaceAll("__typename", ""),
            variables: {
              input: {
                id: learningCenterRecord.id,
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
      {...getOverrideProps(overrides, "LearningCenterUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              memo,
              operatingCompany,
              headquartersLocation,
              websiteURL,
              logoImageURL,
              establishmentYear,
              representative,
              admissionFee,
              cancelPolicy,
              paymentOptions,
              creditCards,
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
        label="Memo"
        isRequired={false}
        isReadOnly={false}
        value={memo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              memo: value,
              operatingCompany,
              headquartersLocation,
              websiteURL,
              logoImageURL,
              establishmentYear,
              representative,
              admissionFee,
              cancelPolicy,
              paymentOptions,
              creditCards,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.memo ?? value;
          }
          if (errors.memo?.hasError) {
            runValidationTasks("memo", value);
          }
          setMemo(value);
        }}
        onBlur={() => runValidationTasks("memo", memo)}
        errorMessage={errors.memo?.errorMessage}
        hasError={errors.memo?.hasError}
        {...getOverrideProps(overrides, "memo")}
      ></TextField>
      <TextField
        label="Operating company"
        isRequired={false}
        isReadOnly={false}
        value={operatingCompany}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              memo,
              operatingCompany: value,
              headquartersLocation,
              websiteURL,
              logoImageURL,
              establishmentYear,
              representative,
              admissionFee,
              cancelPolicy,
              paymentOptions,
              creditCards,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.operatingCompany ?? value;
          }
          if (errors.operatingCompany?.hasError) {
            runValidationTasks("operatingCompany", value);
          }
          setOperatingCompany(value);
        }}
        onBlur={() => runValidationTasks("operatingCompany", operatingCompany)}
        errorMessage={errors.operatingCompany?.errorMessage}
        hasError={errors.operatingCompany?.hasError}
        {...getOverrideProps(overrides, "operatingCompany")}
      ></TextField>
      <TextField
        label="Headquarters location"
        isRequired={false}
        isReadOnly={false}
        value={headquartersLocation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              memo,
              operatingCompany,
              headquartersLocation: value,
              websiteURL,
              logoImageURL,
              establishmentYear,
              representative,
              admissionFee,
              cancelPolicy,
              paymentOptions,
              creditCards,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.headquartersLocation ?? value;
          }
          if (errors.headquartersLocation?.hasError) {
            runValidationTasks("headquartersLocation", value);
          }
          setHeadquartersLocation(value);
        }}
        onBlur={() =>
          runValidationTasks("headquartersLocation", headquartersLocation)
        }
        errorMessage={errors.headquartersLocation?.errorMessage}
        hasError={errors.headquartersLocation?.hasError}
        {...getOverrideProps(overrides, "headquartersLocation")}
      ></TextField>
      <TextField
        label="Website url"
        isRequired={false}
        isReadOnly={false}
        value={websiteURL}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              memo,
              operatingCompany,
              headquartersLocation,
              websiteURL: value,
              logoImageURL,
              establishmentYear,
              representative,
              admissionFee,
              cancelPolicy,
              paymentOptions,
              creditCards,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.websiteURL ?? value;
          }
          if (errors.websiteURL?.hasError) {
            runValidationTasks("websiteURL", value);
          }
          setWebsiteURL(value);
        }}
        onBlur={() => runValidationTasks("websiteURL", websiteURL)}
        errorMessage={errors.websiteURL?.errorMessage}
        hasError={errors.websiteURL?.hasError}
        {...getOverrideProps(overrides, "websiteURL")}
      ></TextField>
      <TextField
        label="Logo image url"
        isRequired={false}
        isReadOnly={false}
        value={logoImageURL}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              memo,
              operatingCompany,
              headquartersLocation,
              websiteURL,
              logoImageURL: value,
              establishmentYear,
              representative,
              admissionFee,
              cancelPolicy,
              paymentOptions,
              creditCards,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.logoImageURL ?? value;
          }
          if (errors.logoImageURL?.hasError) {
            runValidationTasks("logoImageURL", value);
          }
          setLogoImageURL(value);
        }}
        onBlur={() => runValidationTasks("logoImageURL", logoImageURL)}
        errorMessage={errors.logoImageURL?.errorMessage}
        hasError={errors.logoImageURL?.hasError}
        {...getOverrideProps(overrides, "logoImageURL")}
      ></TextField>
      <TextField
        label="Establishment year"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={establishmentYear}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              memo,
              operatingCompany,
              headquartersLocation,
              websiteURL,
              logoImageURL,
              establishmentYear: value,
              representative,
              admissionFee,
              cancelPolicy,
              paymentOptions,
              creditCards,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.establishmentYear ?? value;
          }
          if (errors.establishmentYear?.hasError) {
            runValidationTasks("establishmentYear", value);
          }
          setEstablishmentYear(value);
        }}
        onBlur={() =>
          runValidationTasks("establishmentYear", establishmentYear)
        }
        errorMessage={errors.establishmentYear?.errorMessage}
        hasError={errors.establishmentYear?.hasError}
        {...getOverrideProps(overrides, "establishmentYear")}
      ></TextField>
      <TextField
        label="Representative"
        isRequired={false}
        isReadOnly={false}
        value={representative}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              memo,
              operatingCompany,
              headquartersLocation,
              websiteURL,
              logoImageURL,
              establishmentYear,
              representative: value,
              admissionFee,
              cancelPolicy,
              paymentOptions,
              creditCards,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.representative ?? value;
          }
          if (errors.representative?.hasError) {
            runValidationTasks("representative", value);
          }
          setRepresentative(value);
        }}
        onBlur={() => runValidationTasks("representative", representative)}
        errorMessage={errors.representative?.errorMessage}
        hasError={errors.representative?.hasError}
        {...getOverrideProps(overrides, "representative")}
      ></TextField>
      <TextField
        label="Admission fee"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={admissionFee}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              memo,
              operatingCompany,
              headquartersLocation,
              websiteURL,
              logoImageURL,
              establishmentYear,
              representative,
              admissionFee: value,
              cancelPolicy,
              paymentOptions,
              creditCards,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.admissionFee ?? value;
          }
          if (errors.admissionFee?.hasError) {
            runValidationTasks("admissionFee", value);
          }
          setAdmissionFee(value);
        }}
        onBlur={() => runValidationTasks("admissionFee", admissionFee)}
        errorMessage={errors.admissionFee?.errorMessage}
        hasError={errors.admissionFee?.hasError}
        {...getOverrideProps(overrides, "admissionFee")}
      ></TextField>
      <TextField
        label="Cancel policy"
        isRequired={false}
        isReadOnly={false}
        value={cancelPolicy}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              memo,
              operatingCompany,
              headquartersLocation,
              websiteURL,
              logoImageURL,
              establishmentYear,
              representative,
              admissionFee,
              cancelPolicy: value,
              paymentOptions,
              creditCards,
              isDeleted,
            };
            const result = onChange(modelFields);
            value = result?.cancelPolicy ?? value;
          }
          if (errors.cancelPolicy?.hasError) {
            runValidationTasks("cancelPolicy", value);
          }
          setCancelPolicy(value);
        }}
        onBlur={() => runValidationTasks("cancelPolicy", cancelPolicy)}
        errorMessage={errors.cancelPolicy?.errorMessage}
        hasError={errors.cancelPolicy?.hasError}
        {...getOverrideProps(overrides, "cancelPolicy")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              memo,
              operatingCompany,
              headquartersLocation,
              websiteURL,
              logoImageURL,
              establishmentYear,
              representative,
              admissionFee,
              cancelPolicy,
              paymentOptions: values,
              creditCards,
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
        setFieldValue={setCurrentPaymentOptionsValue}
        inputFieldRef={paymentOptionsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Payment options"
          isRequired={false}
          isReadOnly={false}
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
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              memo,
              operatingCompany,
              headquartersLocation,
              websiteURL,
              logoImageURL,
              establishmentYear,
              representative,
              admissionFee,
              cancelPolicy,
              paymentOptions,
              creditCards: values,
              isDeleted,
            };
            const result = onChange(modelFields);
            values = result?.creditCards ?? values;
          }
          setCreditCards(values);
          setCurrentCreditCardsValue("");
        }}
        currentFieldValue={currentCreditCardsValue}
        label={"Credit cards"}
        items={creditCards}
        hasError={errors?.creditCards?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("creditCards", currentCreditCardsValue)
        }
        errorMessage={errors?.creditCards?.errorMessage}
        setFieldValue={setCurrentCreditCardsValue}
        inputFieldRef={creditCardsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Credit cards"
          isRequired={false}
          isReadOnly={false}
          value={currentCreditCardsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.creditCards?.hasError) {
              runValidationTasks("creditCards", value);
            }
            setCurrentCreditCardsValue(value);
          }}
          onBlur={() =>
            runValidationTasks("creditCards", currentCreditCardsValue)
          }
          errorMessage={errors.creditCards?.errorMessage}
          hasError={errors.creditCards?.hasError}
          ref={creditCardsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "creditCards")}
        ></TextField>
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
              name,
              memo,
              operatingCompany,
              headquartersLocation,
              websiteURL,
              logoImageURL,
              establishmentYear,
              representative,
              admissionFee,
              cancelPolicy,
              paymentOptions,
              creditCards,
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
          isDisabled={!(idProp || learningCenterModelProp)}
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
              !(idProp || learningCenterModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
