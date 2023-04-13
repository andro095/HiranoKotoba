// Librerias de Terceros
import { ReactNode } from "react";
import { MenuItem } from "primereact/menuitem";

// Archivos propios
import { NEArray } from "../generic";

// Hooks

// Funcionalidad

// Assets


export type StepperItems = NEArray<MenuItem, 2>;


interface WithStepper {
    hasStepper: true;
    activeIndex: number;
    steps: StepperItems;
}

interface WithoutStepper {
    hasStepper?: false;
    activeIndex?: never;
    steps?: never;
}

type Stepper = WithStepper | WithoutStepper;

interface WithDialog {
    hasDialog: true;
    dialogTitle: string;
}

interface WithoutDialog {
    hasDialog?: false;
    dialogTitle?: never;
}

type Dialog = WithDialog | WithoutDialog;

interface OtherProps {
    children: ReactNode;
    hasSnackbar?: boolean;
}

export type AuthLayoutProps = OtherProps & Stepper & Dialog;