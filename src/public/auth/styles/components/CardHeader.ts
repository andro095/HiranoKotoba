// React Libraries
import { SerializedStyles, css } from "@emotion/react";

// Third Party Libraries

// Interfaces

// Hooks


export const CardHeaderStyle = {
    progressBar: css({
        height: "0.375rem",
    }),

    headerDiv: (isSubmitting : boolean, isXs: boolean) : SerializedStyles => css({
        height: isSubmitting ? undefined : isXs ? "0rem" : "0.375rem",
    }),

    backArrowDiv: (isMobile: boolean) : SerializedStyles => css({
        paddingLeft: !isMobile ? "0.375rem" : undefined,
        marginTop: !isMobile ? "0.375rem" : undefined,
    })
}