// React Libraries

// Third Party Libraries
import { css } from "@emotion/react";

// Interfaces

// Hooks

// Theme
import { imp, mq } from "@theme";


export const AuthCardLayoutStyle = {
    card: (bigCard : boolean) => css({
        [mq.sm]: {
            width: ( bigCard? "30rem" : "25rem" ) + imp,
        }
    }),
}