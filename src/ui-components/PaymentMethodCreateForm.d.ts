/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type PaymentMethodCreateFormInputValues = {
    name?: string;
};
export declare type PaymentMethodCreateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PaymentMethodCreateFormOverridesProps = {
    PaymentMethodCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PaymentMethodCreateFormProps = React.PropsWithChildren<{
    overrides?: PaymentMethodCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PaymentMethodCreateFormInputValues) => PaymentMethodCreateFormInputValues;
    onSuccess?: (fields: PaymentMethodCreateFormInputValues) => void;
    onError?: (fields: PaymentMethodCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PaymentMethodCreateFormInputValues) => PaymentMethodCreateFormInputValues;
    onValidate?: PaymentMethodCreateFormValidationValues;
} & React.CSSProperties>;
export default function PaymentMethodCreateForm(props: PaymentMethodCreateFormProps): React.ReactElement;
