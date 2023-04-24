// Librerias de Terceros
import { SerializedStyles } from "@emotion/react";
import { FormikProps } from "formik"

// Archivos propios

// Hooks

// Funcionalidad

// Assets


type InputTypes = "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";

export interface MInputTextProps {
    name: string;
    label: string;
    type?: InputTypes;
    className?: string;
    css?: SerializedStyles;
    formik: FormikProps<any>;
}