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
export declare type BenefitUserCategoryCreateFormInputValues = {
    name?: string;
};
export declare type BenefitUserCategoryCreateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BenefitUserCategoryCreateFormOverridesProps = {
    BenefitUserCategoryCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BenefitUserCategoryCreateFormProps = React.PropsWithChildren<{
    overrides?: BenefitUserCategoryCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BenefitUserCategoryCreateFormInputValues) => BenefitUserCategoryCreateFormInputValues;
    onSuccess?: (fields: BenefitUserCategoryCreateFormInputValues) => void;
    onError?: (fields: BenefitUserCategoryCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BenefitUserCategoryCreateFormInputValues) => BenefitUserCategoryCreateFormInputValues;
    onValidate?: BenefitUserCategoryCreateFormValidationValues;
} & React.CSSProperties>;
export default function BenefitUserCategoryCreateForm(props: BenefitUserCategoryCreateFormProps): React.ReactElement;
