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
    cancelPolicy?: string;
    isAvailableMoneyBack?: boolean;
    moneyBackDetail?: string;
    isAvailableSubsidy?: boolean;
    subsidyMemo?: string;
    onSale?: boolean;
    saleMemo?: string;
    isMadeToOrder?: boolean;
    madeToOrderDetail?: string;
    isJobIntroductionAvailable?: boolean;
    jobIntroductionDetail?: string;
    isJobHuntingSupport?: boolean;
    jobHuntingSupportDetail?: string;
    purposes?: string[];
    jobTypes?: string[];
    programmingLanguages?: string[];
    frameworks?: string[];
    developmentTools?: string[];
    paymentOptions?: string[];
    creditCards?: string[];
    attendanceType?: string;
    locationPref?: string;
    locationCity?: string;
    especiallyAudiences?: string[];
    isDeleted?: boolean;
};
export declare type LearningCenterCourseUpdateFormValidationValues = {
    learningCenterId?: ValidationFunction<string>;
    courseName?: ValidationFunction<string>;
    courseURL?: ValidationFunction<string>;
    couseDetail?: ValidationFunction<string>;
    cancelPolicy?: ValidationFunction<string>;
    isAvailableMoneyBack?: ValidationFunction<boolean>;
    moneyBackDetail?: ValidationFunction<string>;
    isAvailableSubsidy?: ValidationFunction<boolean>;
    subsidyMemo?: ValidationFunction<string>;
    onSale?: ValidationFunction<boolean>;
    saleMemo?: ValidationFunction<string>;
    isMadeToOrder?: ValidationFunction<boolean>;
    madeToOrderDetail?: ValidationFunction<string>;
    isJobIntroductionAvailable?: ValidationFunction<boolean>;
    jobIntroductionDetail?: ValidationFunction<string>;
    isJobHuntingSupport?: ValidationFunction<boolean>;
    jobHuntingSupportDetail?: ValidationFunction<string>;
    purposes?: ValidationFunction<string>;
    jobTypes?: ValidationFunction<string>;
    programmingLanguages?: ValidationFunction<string>;
    frameworks?: ValidationFunction<string>;
    developmentTools?: ValidationFunction<string>;
    paymentOptions?: ValidationFunction<string>;
    creditCards?: ValidationFunction<string>;
    attendanceType?: ValidationFunction<string>;
    locationPref?: ValidationFunction<string>;
    locationCity?: ValidationFunction<string>;
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
    cancelPolicy?: PrimitiveOverrideProps<TextFieldProps>;
    isAvailableMoneyBack?: PrimitiveOverrideProps<SwitchFieldProps>;
    moneyBackDetail?: PrimitiveOverrideProps<TextFieldProps>;
    isAvailableSubsidy?: PrimitiveOverrideProps<SwitchFieldProps>;
    subsidyMemo?: PrimitiveOverrideProps<TextFieldProps>;
    onSale?: PrimitiveOverrideProps<SwitchFieldProps>;
    saleMemo?: PrimitiveOverrideProps<TextFieldProps>;
    isMadeToOrder?: PrimitiveOverrideProps<SwitchFieldProps>;
    madeToOrderDetail?: PrimitiveOverrideProps<TextFieldProps>;
    isJobIntroductionAvailable?: PrimitiveOverrideProps<SwitchFieldProps>;
    jobIntroductionDetail?: PrimitiveOverrideProps<TextFieldProps>;
    isJobHuntingSupport?: PrimitiveOverrideProps<SwitchFieldProps>;
    jobHuntingSupportDetail?: PrimitiveOverrideProps<TextFieldProps>;
    purposes?: PrimitiveOverrideProps<SelectFieldProps>;
    jobTypes?: PrimitiveOverrideProps<TextFieldProps>;
    programmingLanguages?: PrimitiveOverrideProps<TextFieldProps>;
    frameworks?: PrimitiveOverrideProps<TextFieldProps>;
    developmentTools?: PrimitiveOverrideProps<TextFieldProps>;
    paymentOptions?: PrimitiveOverrideProps<TextFieldProps>;
    creditCards?: PrimitiveOverrideProps<TextFieldProps>;
    attendanceType?: PrimitiveOverrideProps<SelectFieldProps>;
    locationPref?: PrimitiveOverrideProps<TextFieldProps>;
    locationCity?: PrimitiveOverrideProps<TextFieldProps>;
    especiallyAudiences?: PrimitiveOverrideProps<SelectFieldProps>;
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
