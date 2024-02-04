/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { BenefitUserCategory } from "../API.ts";
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
export declare type BenefitUserCategoryUpdateFormInputValues = {
    name?: string;
};
export declare type BenefitUserCategoryUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BenefitUserCategoryUpdateFormOverridesProps = {
    BenefitUserCategoryUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BenefitUserCategoryUpdateFormProps = React.PropsWithChildren<{
    overrides?: BenefitUserCategoryUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    benefitUserCategory?: BenefitUserCategory;
    onSubmit?: (fields: BenefitUserCategoryUpdateFormInputValues) => BenefitUserCategoryUpdateFormInputValues;
    onSuccess?: (fields: BenefitUserCategoryUpdateFormInputValues) => void;
    onError?: (fields: BenefitUserCategoryUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BenefitUserCategoryUpdateFormInputValues) => BenefitUserCategoryUpdateFormInputValues;
    onValidate?: BenefitUserCategoryUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BenefitUserCategoryUpdateForm(props: BenefitUserCategoryUpdateFormProps): React.ReactElement;
