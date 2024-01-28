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
export declare type DevelopmentToolCreateFormInputValues = {
    name?: string;
};
export declare type DevelopmentToolCreateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DevelopmentToolCreateFormOverridesProps = {
    DevelopmentToolCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DevelopmentToolCreateFormProps = React.PropsWithChildren<{
    overrides?: DevelopmentToolCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DevelopmentToolCreateFormInputValues) => DevelopmentToolCreateFormInputValues;
    onSuccess?: (fields: DevelopmentToolCreateFormInputValues) => void;
    onError?: (fields: DevelopmentToolCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DevelopmentToolCreateFormInputValues) => DevelopmentToolCreateFormInputValues;
    onValidate?: DevelopmentToolCreateFormValidationValues;
} & React.CSSProperties>;
export default function DevelopmentToolCreateForm(props: DevelopmentToolCreateFormProps): React.ReactElement;
