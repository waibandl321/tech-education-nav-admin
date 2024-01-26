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
export declare type FrameworkCreateFormInputValues = {
    name?: string;
};
export declare type FrameworkCreateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FrameworkCreateFormOverridesProps = {
    FrameworkCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FrameworkCreateFormProps = React.PropsWithChildren<{
    overrides?: FrameworkCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FrameworkCreateFormInputValues) => FrameworkCreateFormInputValues;
    onSuccess?: (fields: FrameworkCreateFormInputValues) => void;
    onError?: (fields: FrameworkCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FrameworkCreateFormInputValues) => FrameworkCreateFormInputValues;
    onValidate?: FrameworkCreateFormValidationValues;
} & React.CSSProperties>;
export default function FrameworkCreateForm(props: FrameworkCreateFormProps): React.ReactElement;
