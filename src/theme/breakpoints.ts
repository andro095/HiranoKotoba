// Librerias de Terceros
import { mapValues } from "lodash";

// Archivos propios
import { MediaQueries } from "../interfaces";

// Hooks

// Funcionalidad

// Assets


export const breakpoints = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
}

export const imp : string = " !important";

export const mq : MediaQueries = mapValues(breakpoints, (value) => `@media screen and (min-width: ${value}px)`);
