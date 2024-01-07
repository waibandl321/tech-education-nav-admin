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
export declare type CourseReviewCreateFormInputValues = {
    userDisplayId?: string;
    userEmail?: string;
    userGender?: string;
    userAge?: string;
    userPrefecture?: string;
    learningCenterId?: string;
    learningCenterCourseId?: string;
    reviewTitle?: string;
    reviewDetail?: string;
    rating?: number;
    isPublished?: boolean;
    isDeleted?: boolean;
};
export declare type CourseReviewCreateFormValidationValues = {
    userDisplayId?: ValidationFunction<string>;
    userEmail?: ValidationFunction<string>;
    userGender?: ValidationFunction<string>;
    userAge?: ValidationFunction<string>;
    userPrefecture?: ValidationFunction<string>;
    learningCenterId?: ValidationFunction<string>;
    learningCenterCourseId?: ValidationFunction<string>;
    reviewTitle?: ValidationFunction<string>;
    reviewDetail?: ValidationFunction<string>;
    rating?: ValidationFunction<number>;
    isPublished?: ValidationFunction<boolean>;
    isDeleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CourseReviewCreateFormOverridesProps = {
    CourseReviewCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userDisplayId?: PrimitiveOverrideProps<TextFieldProps>;
    userEmail?: PrimitiveOverrideProps<TextFieldProps>;
    userGender?: PrimitiveOverrideProps<TextFieldProps>;
    userAge?: PrimitiveOverrideProps<TextFieldProps>;
    userPrefecture?: PrimitiveOverrideProps<TextFieldProps>;
    learningCenterId?: PrimitiveOverrideProps<TextFieldProps>;
    learningCenterCourseId?: PrimitiveOverrideProps<TextFieldProps>;
    reviewTitle?: PrimitiveOverrideProps<TextFieldProps>;
    reviewDetail?: PrimitiveOverrideProps<TextFieldProps>;
    rating?: PrimitiveOverrideProps<TextFieldProps>;
    isPublished?: PrimitiveOverrideProps<SwitchFieldProps>;
    isDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type CourseReviewCreateFormProps = React.PropsWithChildren<{
    overrides?: CourseReviewCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CourseReviewCreateFormInputValues) => CourseReviewCreateFormInputValues;
    onSuccess?: (fields: CourseReviewCreateFormInputValues) => void;
    onError?: (fields: CourseReviewCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CourseReviewCreateFormInputValues) => CourseReviewCreateFormInputValues;
    onValidate?: CourseReviewCreateFormValidationValues;
} & React.CSSProperties>;
export default function CourseReviewCreateForm(props: CourseReviewCreateFormProps): React.ReactElement;
