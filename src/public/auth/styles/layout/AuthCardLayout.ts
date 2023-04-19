import { css } from "@emotion/react";
import { imp, mq } from "../../../../theme";

export const AuthCardLayoutStyle = {
    card: css({
        [mq.sm]: {
            width: "25rem" + imp,
        }
    }),

    progressBar: css({
        height: "0.375rem",
    }),
    
    headerDiv: (isSubmitting : boolean, isXs: boolean) => css({
        height: isSubmitting ? undefined : isXs ? "0rem" : "0.375rem",
    }),

    backArrowDiv: (isMobile: boolean) => css({
        paddingLeft: "0.375rem"
    })
}