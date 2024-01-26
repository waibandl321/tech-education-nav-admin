/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { JobType } from "../API.ts";
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
export declare type JobTypeUpdateFormInputValues = {
    name?: string;
};
export declare type JobTypeUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type JobTypeUpdateFormOverridesProps = {
    JobTypeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type JobTypeUpdateFormProps = React.PropsWithChildren<{
    overrides?: JobTypeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    jobType?: JobType;
    onSubmit?: (fields: JobTypeUpdateFormInputValues) => JobTypeUpdateFormInputValues;
    onSuccess?: (fields: JobTypeUpdateFormInputValues) => void;
    onError?: (fields: JobTypeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: JobTypeUpdateFormInputValues) => JobTypeUpdateFormInputValues;
    onValidate?: JobTypeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function JobTypeUpdateForm(props: JobTypeUpdateFormProps): React.ReactElement;
