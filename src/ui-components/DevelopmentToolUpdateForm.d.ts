/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { DevelopmentTool } from "../API.ts";
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
export declare type DevelopmentToolUpdateFormInputValues = {
    name?: string;
};
export declare type DevelopmentToolUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DevelopmentToolUpdateFormOverridesProps = {
    DevelopmentToolUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DevelopmentToolUpdateFormProps = React.PropsWithChildren<{
    overrides?: DevelopmentToolUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    developmentTool?: DevelopmentTool;
    onSubmit?: (fields: DevelopmentToolUpdateFormInputValues) => DevelopmentToolUpdateFormInputValues;
    onSuccess?: (fields: DevelopmentToolUpdateFormInputValues) => void;
    onError?: (fields: DevelopmentToolUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DevelopmentToolUpdateFormInputValues) => DevelopmentToolUpdateFormInputValues;
    onValidate?: DevelopmentToolUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DevelopmentToolUpdateForm(props: DevelopmentToolUpdateFormProps): React.ReactElement;
