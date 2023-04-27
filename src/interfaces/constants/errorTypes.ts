// Enums
import { AuthResponseEnum } from "@enums";

export type ErrorTypes = {
    [key in AuthResponseEnum]?: string;
};