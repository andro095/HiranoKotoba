// Librerias de Terceros
import { SerializedStyles } from "@emotion/react";
import { FormikProps } from "formik";

// Archivos propios

// Hooks

// Funcionalidad

// Assets


export interface MPasswordProps {
    name: string;
    label: string;
    hasFeedback?: boolean;
    className?: string;
    css?: SerializedStyles;
    formik: FormikProps<any>;
}