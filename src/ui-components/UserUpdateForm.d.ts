/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { User } from "../API.ts";
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
export declare type UserUpdateFormInputValues = {
    cognitoSub?: string;
    displayId?: string;
    name?: string;
    nameKana?: string;
    gender?: string;
    birthYear?: number;
    birthMonth?: number;
    birthDate?: number;
    prefecture?: string;
    previousJob?: string;
    isRegisterUserInfo?: boolean;
    isDeleted?: boolean;
};
export declare type UserUpdateFormValidationValues = {
    cognitoSub?: ValidationFunction<string>;
    displayId?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    nameKana?: ValidationFunction<string>;
    gender?: ValidationFunction<string>;
    birthYear?: ValidationFunction<number>;
    birthMonth?: ValidationFunction<number>;
    birthDate?: ValidationFunction<number>;
    prefecture?: ValidationFunction<string>;
    previousJob?: ValidationFunction<string>;
    isRegisterUserInfo?: ValidationFunction<boolean>;
    isDeleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserUpdateFormOverridesProps = {
    UserUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    cognitoSub?: PrimitiveOverrideProps<TextFieldProps>;
    displayId?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    nameKana?: PrimitiveOverrideProps<TextFieldProps>;
    gender?: PrimitiveOverrideProps<TextFieldProps>;
    birthYear?: PrimitiveOverrideProps<TextFieldProps>;
    birthMonth?: PrimitiveOverrideProps<TextFieldProps>;
    birthDate?: PrimitiveOverrideProps<TextFieldProps>;
    prefecture?: PrimitiveOverrideProps<TextFieldProps>;
    previousJob?: PrimitiveOverrideProps<TextFieldProps>;
    isRegisterUserInfo?: PrimitiveOverrideProps<SwitchFieldProps>;
    isDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type UserUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    user?: User;
    onSubmit?: (fields: UserUpdateFormInputValues) => UserUpdateFormInputValues;
    onSuccess?: (fields: UserUpdateFormInputValues) => void;
    onError?: (fields: UserUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserUpdateFormInputValues) => UserUpdateFormInputValues;
    onValidate?: UserUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserUpdateForm(props: UserUpdateFormProps): React.ReactElement;
