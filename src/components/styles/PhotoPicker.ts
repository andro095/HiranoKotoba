// React Libraries

// Third Party Libraries
import { css } from "@emotion/react";

// Interfaces

// Hooks

// Theme
import { colors } from "@theme";


export const PhotoPickerStyle = {
    container: css({
        borderColor: colors.secondary,
    }),

    cameraWrapper: css({
        height: "40%"
    }),

    camera: (isLittle : boolean) => css({
        fontSize : isLittle? "2rem" : "2.5rem",
        color: colors.secondary,
    }),

    image: css({
        objectFit: "cover",
    }),

    hoverWrapper: css({
        backgroundColor: 'rgba(255,255,255,0.5)'
    })
}