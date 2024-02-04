/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Qualification } from "../API.ts";
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
export declare type QualificationUpdateFormInputValues = {
    name?: string;
};
export declare type QualificationUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type QualificationUpdateFormOverridesProps = {
    QualificationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type QualificationUpdateFormProps = React.PropsWithChildren<{
    overrides?: QualificationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    qualification?: Qualification;
    onSubmit?: (fields: QualificationUpdateFormInputValues) => QualificationUpdateFormInputValues;
    onSuccess?: (fields: QualificationUpdateFormInputValues) => void;
    onError?: (fields: QualificationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: QualificationUpdateFormInputValues) => QualificationUpdateFormInputValues;
    onValidate?: QualificationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function QualificationUpdateForm(props: QualificationUpdateFormProps): React.ReactElement;
