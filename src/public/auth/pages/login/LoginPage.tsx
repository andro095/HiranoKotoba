import { AuthCardLayout, AuthLayout } from "../../layout"
import { StepperItems } from "../../../../interfaces"
import { useBreakpoints } from "../../../../hooks"
import { useEffect } from "react"

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

    const { isBreakpoints } = useBreakpoints();
    
    useEffect(() => {
      console.log(isBreakpoints)
    }, [isBreakpoints])
    

    return (
        <AuthLayout
            hasStepper
            activeIndex={0}
            steps={msteps}
        >
            <AuthCardLayout
                title="Login"
            >
                <div>LoginPage</div>
            </AuthCardLayout>
        </AuthLayout>
    )
}
