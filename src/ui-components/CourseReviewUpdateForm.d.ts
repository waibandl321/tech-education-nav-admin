/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { CourseReview } from "../API.ts";
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
export declare type CourseReviewUpdateFormInputValues = {
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
export declare type CourseReviewUpdateFormValidationValues = {
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
export declare type CourseReviewUpdateFormOverridesProps = {
    CourseReviewUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type CourseReviewUpdateFormProps = React.PropsWithChildren<{
    overrides?: CourseReviewUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    courseReview?: CourseReview;
    onSubmit?: (fields: CourseReviewUpdateFormInputValues) => CourseReviewUpdateFormInputValues;
    onSuccess?: (fields: CourseReviewUpdateFormInputValues) => void;
    onError?: (fields: CourseReviewUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CourseReviewUpdateFormInputValues) => CourseReviewUpdateFormInputValues;
    onValidate?: CourseReviewUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CourseReviewUpdateForm(props: CourseReviewUpdateFormProps): React.ReactElement;
