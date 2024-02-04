/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { DevelopmentProduct } from "../API.ts";
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
export declare type DevelopmentProductUpdateFormInputValues = {
    name?: string;
    memo?: string;
};
export declare type DevelopmentProductUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    memo?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DevelopmentProductUpdateFormOverridesProps = {
    DevelopmentProductUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    memo?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DevelopmentProductUpdateFormProps = React.PropsWithChildren<{
    overrides?: DevelopmentProductUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    developmentProduct?: DevelopmentProduct;
    onSubmit?: (fields: DevelopmentProductUpdateFormInputValues) => DevelopmentProductUpdateFormInputValues;
    onSuccess?: (fields: DevelopmentProductUpdateFormInputValues) => void;
    onError?: (fields: DevelopmentProductUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DevelopmentProductUpdateFormInputValues) => DevelopmentProductUpdateFormInputValues;
    onValidate?: DevelopmentProductUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DevelopmentProductUpdateForm(props: DevelopmentProductUpdateFormProps): React.ReactElement;
