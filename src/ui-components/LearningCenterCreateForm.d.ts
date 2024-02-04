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
export declare type LearningCenterCreateFormInputValues = {
    name?: string;
    memo?: string;
    operatingCompany?: string;
    headquartersLocation?: string;
    websiteURL?: string;
    logoImageURL?: string;
    establishmentYear?: number;
    representative?: string;
    admissionFee?: number;
    cancelPolicy?: string;
    paymentOptions?: string[];
    creditCards?: string[];
    isDeleted?: boolean;
};
export declare type LearningCenterCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    memo?: ValidationFunction<string>;
    operatingCompany?: ValidationFunction<string>;
    headquartersLocation?: ValidationFunction<string>;
    websiteURL?: ValidationFunction<string>;
    logoImageURL?: ValidationFunction<string>;
    establishmentYear?: ValidationFunction<number>;
    representative?: ValidationFunction<string>;
    admissionFee?: ValidationFunction<number>;
    cancelPolicy?: ValidationFunction<string>;
    paymentOptions?: ValidationFunction<string>;
    creditCards?: ValidationFunction<string>;
    isDeleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LearningCenterCreateFormOverridesProps = {
    LearningCenterCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    memo?: PrimitiveOverrideProps<TextFieldProps>;
    operatingCompany?: PrimitiveOverrideProps<TextFieldProps>;
    headquartersLocation?: PrimitiveOverrideProps<TextFieldProps>;
    websiteURL?: PrimitiveOverrideProps<TextFieldProps>;
    logoImageURL?: PrimitiveOverrideProps<TextFieldProps>;
    establishmentYear?: PrimitiveOverrideProps<TextFieldProps>;
    representative?: PrimitiveOverrideProps<TextFieldProps>;
    admissionFee?: PrimitiveOverrideProps<TextFieldProps>;
    cancelPolicy?: PrimitiveOverrideProps<TextFieldProps>;
    paymentOptions?: PrimitiveOverrideProps<TextFieldProps>;
    creditCards?: PrimitiveOverrideProps<TextFieldProps>;
    isDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type LearningCenterCreateFormProps = React.PropsWithChildren<{
    overrides?: LearningCenterCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LearningCenterCreateFormInputValues) => LearningCenterCreateFormInputValues;
    onSuccess?: (fields: LearningCenterCreateFormInputValues) => void;
    onError?: (fields: LearningCenterCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LearningCenterCreateFormInputValues) => LearningCenterCreateFormInputValues;
    onValidate?: LearningCenterCreateFormValidationValues;
} & React.CSSProperties>;
export default function LearningCenterCreateForm(props: LearningCenterCreateFormProps): React.ReactElement;
