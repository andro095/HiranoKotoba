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
    })
}