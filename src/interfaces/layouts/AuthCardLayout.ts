import { ReactNode } from "react";

export interface AuthCardLayoutProps {
    children: ReactNode;
    hasBackArrow?: boolean;
    isSubmitting?: boolean;
    title: string;
}