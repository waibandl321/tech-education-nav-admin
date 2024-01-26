/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { LearningCenterCourse } from "../API.ts";
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
export declare type LearningCenterCourseUpdateFormInputValues = {
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
    paymentOptions?: string[];
    attendanceType?: string;
    locationPref?: string;
    locationCity?: string;
    isMadeToOrder?: boolean;
    especiallyAudiences?: string[];
    isDeleted?: boolean;
};
export declare type LearningCenterCourseUpdateFormValidationValues = {
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
    paymentOptions?: ValidationFunction<string>;
    attendanceType?: ValidationFunction<string>;
    locationPref?: ValidationFunction<string>;
    locationCity?: ValidationFunction<string>;
    isMadeToOrder?: ValidationFunction<boolean>;
    especiallyAudiences?: ValidationFunction<string>;
    isDeleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LearningCenterCourseUpdateFormOverridesProps = {
    LearningCenterCourseUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
    purposes?: PrimitiveOverrideProps<TextFieldProps>;
    jobTypes?: PrimitiveOverrideProps<TextFieldProps>;
    programmingLanguages?: PrimitiveOverrideProps<TextFieldProps>;
    frameworks?: PrimitiveOverrideProps<TextFieldProps>;
    paymentOptions?: PrimitiveOverrideProps<SelectFieldProps>;
    attendanceType?: PrimitiveOverrideProps<SelectFieldProps>;
    locationPref?: PrimitiveOverrideProps<TextFieldProps>;
    locationCity?: PrimitiveOverrideProps<TextFieldProps>;
    isMadeToOrder?: PrimitiveOverrideProps<SwitchFieldProps>;
    especiallyAudiences?: PrimitiveOverrideProps<TextFieldProps>;
    isDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type LearningCenterCourseUpdateFormProps = React.PropsWithChildren<{
    overrides?: LearningCenterCourseUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    learningCenterCourse?: LearningCenterCourse;
    onSubmit?: (fields: LearningCenterCourseUpdateFormInputValues) => LearningCenterCourseUpdateFormInputValues;
    onSuccess?: (fields: LearningCenterCourseUpdateFormInputValues) => void;
    onError?: (fields: LearningCenterCourseUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LearningCenterCourseUpdateFormInputValues) => LearningCenterCourseUpdateFormInputValues;
    onValidate?: LearningCenterCourseUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LearningCenterCourseUpdateForm(props: LearningCenterCourseUpdateFormProps): React.ReactElement;
