/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ProgrammingLanguage } from "../API.ts";
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
export declare type ProgrammingLanguageUpdateFormInputValues = {
    name?: string;
};
export declare type ProgrammingLanguageUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProgrammingLanguageUpdateFormOverridesProps = {
    ProgrammingLanguageUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProgrammingLanguageUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProgrammingLanguageUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    programmingLanguage?: ProgrammingLanguage;
    onSubmit?: (fields: ProgrammingLanguageUpdateFormInputValues) => ProgrammingLanguageUpdateFormInputValues;
    onSuccess?: (fields: ProgrammingLanguageUpdateFormInputValues) => void;
    onError?: (fields: ProgrammingLanguageUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProgrammingLanguageUpdateFormInputValues) => ProgrammingLanguageUpdateFormInputValues;
    onValidate?: ProgrammingLanguageUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProgrammingLanguageUpdateForm(props: ProgrammingLanguageUpdateFormProps): React.ReactElement;
