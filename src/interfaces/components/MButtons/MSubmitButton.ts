// React Libraries

// Third Party Libraries
import { SerializedStyles } from "@emotion/react";
import { FormikProps } from "formik";

// Interfaces

// Hooks


export interface MSubmitButtonProps {
    label: string;
    formik: FormikProps<any>;
    classname?: string;
    css?: SerializedStyles;
}