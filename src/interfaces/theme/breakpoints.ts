import { breakpoints } from "../../theme";

export type BreakpointTypes = keyof typeof breakpoints

export type MediaQueries = {
    [key in BreakpointTypes]: string;
}