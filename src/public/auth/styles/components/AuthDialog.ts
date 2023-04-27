import { css } from "@emotion/react";
import { mq } from "@theme";


export const AuthDialogStyle = {
    card: css({
        maxWidth: '100%',
        marginLeft: '1rem',
        marginRight: '1rem',
        [mq.sm]: {
            maxWidth: '500px',
        }
    })
}