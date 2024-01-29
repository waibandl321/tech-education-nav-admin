/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { PaymentMethod } from "../API.ts";
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
export declare type PaymentMethodUpdateFormInputValues = {
    name?: string;
};
export declare type PaymentMethodUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PaymentMethodUpdateFormOverridesProps = {
    PaymentMethodUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PaymentMethodUpdateFormProps = React.PropsWithChildren<{
    overrides?: PaymentMethodUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    paymentMethod?: PaymentMethod;
    onSubmit?: (fields: PaymentMethodUpdateFormInputValues) => PaymentMethodUpdateFormInputValues;
    onSuccess?: (fields: PaymentMethodUpdateFormInputValues) => void;
    onError?: (fields: PaymentMethodUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PaymentMethodUpdateFormInputValues) => PaymentMethodUpdateFormInputValues;
    onValidate?: PaymentMethodUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PaymentMethodUpdateForm(props: PaymentMethodUpdateFormProps): React.ReactElement;
