import { BreakpointTypes } from "../theme";

export type isBreakpointTypes = `is${Capitalize<BreakpointTypes>}`

export type IsBreakpoint = {
    [key in isBreakpointTypes]: boolean;
}

