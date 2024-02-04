/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { DevelopmentCategory } from "../API.ts";
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
export declare type DevelopmentCategoryUpdateFormInputValues = {
    name?: string;
    memo?: string;
};
export declare type DevelopmentCategoryUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    memo?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DevelopmentCategoryUpdateFormOverridesProps = {
    DevelopmentCategoryUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    memo?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DevelopmentCategoryUpdateFormProps = React.PropsWithChildren<{
    overrides?: DevelopmentCategoryUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    developmentCategory?: DevelopmentCategory;
    onSubmit?: (fields: DevelopmentCategoryUpdateFormInputValues) => DevelopmentCategoryUpdateFormInputValues;
    onSuccess?: (fields: DevelopmentCategoryUpdateFormInputValues) => void;
    onError?: (fields: DevelopmentCategoryUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DevelopmentCategoryUpdateFormInputValues) => DevelopmentCategoryUpdateFormInputValues;
    onValidate?: DevelopmentCategoryUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DevelopmentCategoryUpdateForm(props: DevelopmentCategoryUpdateFormProps): React.ReactElement;
