/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
    isDeleted?: boolean;
};
export declare type LearningCenterCourseCreateFormValidationValues = {
    learningCenterId?: ValidationFunction<string>;
    courseName?: ValidationFunction<string>;
    courseURL?: ValidationFunction<string>;
    couseDetail?: ValidationFunction<string>;
    isDeleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LearningCenterCourseCreateFormOverridesProps = {
    LearningCenterCourseCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    learningCenterId?: PrimitiveOverrideProps<TextFieldProps>;
    courseName?: PrimitiveOverrideProps<TextFieldProps>;
    courseURL?: PrimitiveOverrideProps<TextFieldProps>;
    couseDetail?: PrimitiveOverrideProps<TextFieldProps>;
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
