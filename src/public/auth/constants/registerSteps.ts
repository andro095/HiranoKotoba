import { FormatMessage, StepperItems } from "@interfaces";

export const registerSteps = (formatMessage: FormatMessage) : StepperItems => [
    {
        label: formatMessage('register.steps.step1', 'Datos')
    },
    {
        label: formatMessage('register.steps.step2', 'Confirmación')
    }
]