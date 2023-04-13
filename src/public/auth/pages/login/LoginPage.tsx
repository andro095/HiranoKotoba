import { AuthLayout } from "../../layout"
import { StepperItems } from "../../../../interfaces"

const msteps: StepperItems = [
    {
        label: 'Paso 1'
    },
    {
        label: 'Paso 2'
    },
    {
        label: 'Paso 3'
    },
]

export const LoginPage = () => {
    return (
        <AuthLayout
            hasStepper
            activeIndex={0}
            steps={msteps}
        >
            <div>LoginPage</div>
        </AuthLayout>
    )
}
