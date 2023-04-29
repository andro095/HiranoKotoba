// React Libraries
import { ReactNode } from "react";

// Third Party Libraries

// Interfaces

// Hooks


export interface AuthCardLayoutProps {
    bigCard?: boolean;
    children: ReactNode;
    hasBackArrow?: boolean;
    isSubmitting?: boolean;
    title: string;
}