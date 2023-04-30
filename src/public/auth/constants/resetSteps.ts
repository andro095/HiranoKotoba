// React Libraries

// Third Party Libraries

// Interfaces
import { FormatMessage, StepperItems } from "@interfaces";

// Hooks


export const resetSteps = (formatMessage: FormatMessage) : StepperItems => [
    {
        label: formatMessage('reset.steps.step1', 'Correo')        
    },
    {
        label: formatMessage('reset.steps.step2', 'Revisa')
    },
    {
        label: formatMessage('reset.steps.step3', 'Nueva contraseña')
    },
    {
        label: formatMessage('reset.steps.step4', 'Contraseña restablecida')
    }
]