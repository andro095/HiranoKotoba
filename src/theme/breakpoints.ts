import { Breakpoints, MediaQueries } from "../interfaces";

export const breakpoints: Breakpoints = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
}

export const imp : string = " !important";

export const mq : MediaQueries = Object.fromEntries(Object.entries(breakpoints).map(([key, value]) => [key, `@media screen and (min-width: ${value}px)`]));
