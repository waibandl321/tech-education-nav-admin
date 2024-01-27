/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Framework } from "../API.ts";
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
export declare type FrameworkUpdateFormInputValues = {
    programmingLanguageId?: string;
    name?: string;
};
export declare type FrameworkUpdateFormValidationValues = {
    programmingLanguageId?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FrameworkUpdateFormOverridesProps = {
    FrameworkUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    programmingLanguageId?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FrameworkUpdateFormProps = React.PropsWithChildren<{
    overrides?: FrameworkUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    framework?: Framework;
    onSubmit?: (fields: FrameworkUpdateFormInputValues) => FrameworkUpdateFormInputValues;
    onSuccess?: (fields: FrameworkUpdateFormInputValues) => void;
    onError?: (fields: FrameworkUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FrameworkUpdateFormInputValues) => FrameworkUpdateFormInputValues;
    onValidate?: FrameworkUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FrameworkUpdateForm(props: FrameworkUpdateFormProps): React.ReactElement;
