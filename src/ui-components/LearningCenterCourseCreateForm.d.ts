/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LearningCenterCourseCreateFormInputValues = {
    learningCenterId?: string;
    courseName?: string;
    courseURL?: string;
    couseDetail?: string;
    duration?: number;
    price?: number;
    isAvailableMoneyBack?: boolean;
    moneyBackDetail?: string;
    isAvailableSubsidy?: boolean;
    subsidyMemo?: string;
    onSale?: boolean;
    saleMemo?: string;
    purposes?: string[];
    jobTypes?: string[];
    programmingLanguages?: string[];
    frameworks?: string[];
    developmentTools?: string[];
    paymentOptions?: string[];
    attendanceType?: string;
    locationPref?: string;
    locationCity?: string;
    isMadeToOrder?: boolean;
    especiallyAudiences?: string[];
    isDeleted?: boolean;
};
export declare type LearningCenterCourseCreateFormValidationValues = {
    learningCenterId?: ValidationFunction<string>;
    courseName?: ValidationFunction<string>;
    courseURL?: ValidationFunction<string>;
    couseDetail?: ValidationFunction<string>;
    duration?: ValidationFunction<number>;
    price?: ValidationFunction<number>;
    isAvailableMoneyBack?: ValidationFunction<boolean>;
    moneyBackDetail?: ValidationFunction<string>;
    isAvailableSubsidy?: ValidationFunction<boolean>;
    subsidyMemo?: ValidationFunction<string>;
    onSale?: ValidationFunction<boolean>;
    saleMemo?: ValidationFunction<string>;
    purposes?: ValidationFunction<string>;
    jobTypes?: ValidationFunction<string>;
    programmingLanguages?: ValidationFunction<string>;
    frameworks?: ValidationFunction<string>;
    developmentTools?: ValidationFunction<string>;
    paymentOptions?: ValidationFunction<string>;
    attendanceType?: ValidationFunction<string>;
    locationPref?: ValidationFunction<string>;
    locationCity?: ValidationFunction<string>;
    isMadeToOrder?: ValidationFunction<boolean>;
    especiallyAudiences?: ValidationFunction<string>;
    isDeleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LearningCenterCourseCreateFormOverridesProps = {
    LearningCenterCourseCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    learningCenterId?: PrimitiveOverrideProps<TextFieldProps>;
    courseName?: PrimitiveOverrideProps<TextFieldProps>;
    courseURL?: PrimitiveOverrideProps<TextFieldProps>;
    couseDetail?: PrimitiveOverrideProps<TextFieldProps>;
    duration?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    isAvailableMoneyBack?: PrimitiveOverrideProps<SwitchFieldProps>;
    moneyBackDetail?: PrimitiveOverrideProps<TextFieldProps>;
    isAvailableSubsidy?: PrimitiveOverrideProps<SwitchFieldProps>;
    subsidyMemo?: PrimitiveOverrideProps<TextFieldProps>;
    onSale?: PrimitiveOverrideProps<SwitchFieldProps>;
    saleMemo?: PrimitiveOverrideProps<TextFieldProps>;
    purposes?: PrimitiveOverrideProps<SelectFieldProps>;
    jobTypes?: PrimitiveOverrideProps<TextFieldProps>;
    programmingLanguages?: PrimitiveOverrideProps<TextFieldProps>;
    frameworks?: PrimitiveOverrideProps<TextFieldProps>;
    developmentTools?: PrimitiveOverrideProps<TextFieldProps>;
    paymentOptions?: PrimitiveOverrideProps<SelectFieldProps>;
    attendanceType?: PrimitiveOverrideProps<SelectFieldProps>;
    locationPref?: PrimitiveOverrideProps<TextFieldProps>;
    locationCity?: PrimitiveOverrideProps<TextFieldProps>;
    isMadeToOrder?: PrimitiveOverrideProps<SwitchFieldProps>;
    especiallyAudiences?: PrimitiveOverrideProps<SelectFieldProps>;
    isDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type LearningCenterCourseCreateFormProps = React.PropsWithChildren<{
    overrides?: LearningCenterCourseCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LearningCenterCourseCreateFormInputValues) => LearningCenterCourseCreateFormInputValues;
    onSuccess?: (fields: LearningCenterCourseCreateFormInputValues) => void;
    onError?: (fields: LearningCenterCourseCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LearningCenterCourseCreateFormInputValues) => LearningCenterCourseCreateFormInputValues;
    onValidate?: LearningCenterCourseCreateFormValidationValues;
} & React.CSSProperties>;
export default function LearningCenterCourseCreateForm(props: LearningCenterCourseCreateFormProps): React.ReactElement;
