/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { LearningCenter } from "../API.ts";
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
export declare type LearningCenterUpdateFormInputValues = {
    name?: string;
    memo?: string;
    operatingCompany?: string;
    headquartersLocation?: string;
    websiteURL?: string;
    logoImageURL?: string;
    establishmentYear?: number;
    representative?: string;
};
export declare type LearningCenterUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    memo?: ValidationFunction<string>;
    operatingCompany?: ValidationFunction<string>;
    headquartersLocation?: ValidationFunction<string>;
    websiteURL?: ValidationFunction<string>;
    logoImageURL?: ValidationFunction<string>;
    establishmentYear?: ValidationFunction<number>;
    representative?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LearningCenterUpdateFormOverridesProps = {
    LearningCenterUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    memo?: PrimitiveOverrideProps<TextFieldProps>;
    operatingCompany?: PrimitiveOverrideProps<TextFieldProps>;
    headquartersLocation?: PrimitiveOverrideProps<TextFieldProps>;
    websiteURL?: PrimitiveOverrideProps<TextFieldProps>;
    logoImageURL?: PrimitiveOverrideProps<TextFieldProps>;
    establishmentYear?: PrimitiveOverrideProps<TextFieldProps>;
    representative?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LearningCenterUpdateFormProps = React.PropsWithChildren<{
    overrides?: LearningCenterUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    learningCenter?: LearningCenter;
    onSubmit?: (fields: LearningCenterUpdateFormInputValues) => LearningCenterUpdateFormInputValues;
    onSuccess?: (fields: LearningCenterUpdateFormInputValues) => void;
    onError?: (fields: LearningCenterUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LearningCenterUpdateFormInputValues) => LearningCenterUpdateFormInputValues;
    onValidate?: LearningCenterUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LearningCenterUpdateForm(props: LearningCenterUpdateFormProps): React.ReactElement;
