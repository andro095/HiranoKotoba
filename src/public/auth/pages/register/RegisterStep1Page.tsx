// React Libraries

// Third Party Libraries
import { useFormik } from "formik"

// Components

// Interfaces

// Hooks
import { useBreakpoints, useMessage } from "@hooks"

// Layouts
import { AuthCardLayout, AuthLayout } from "../../layout"

// Constants
import { registerSteps } from "../../constants"
import { registerFields, registerSchema } from "../../formik"
import { MInputText, MPassword, MSubmitButton } from "@components"
import classNames from "classnames"

export const RegisterStep1Page = () => {

    const formatMessage = useMessage();
    const { isXs, isSm } = useBreakpoints();

    const twoColumnsStyle = classNames(
        'w-full flex gap-1',
        {
            'flex-column gap-3': isXs || isSm
        }
    )

    const formik = useFormik({
        initialValues: registerFields,
        validationSchema: registerSchema(formatMessage),
        onSubmit: (values, { setSubmitting }) => {
            console.log(values)

            setTimeout(() => {
                setSubmitting(false)
            }, 2000);
            // setSubmitting(false)
        },
    })

    return (
        <AuthLayout
            hasDialog
            hasStepper
            hasSnackbar
            activeIndex={0}
            steps={registerSteps(formatMessage)}
            dialogTitle={formatMessage('register.dialogTitle', 'Error al registrar tu cuenta')}
        >
            <AuthCardLayout
                hasBackArrow
                isSubmitting={formik.isSubmitting}
                title={formatMessage('register.title', 'Nuevo usuario')}
            >
                <div 
                    className="w-full"
                >
                    <form
                        className="w-full flex flex-column align-items-center"
                        onSubmit={formik.handleSubmit}
                    >
                        <div
                            className="w-full flex flex-column gap-3"
                        >
                            <div
                                className={twoColumnsStyle}
                            >
                                <MInputText 
                                    name="name"
                                    label={formatMessage('register.name', 'Nombres')}
                                    formik={formik}
                                />
                                <MInputText 
                                    name="lastname"
                                    label={formatMessage('register.lastName', 'Apellidos')}
                                    formik={formik}
                                />
                            </div>
                            <MInputText 
                                name="email"
                                type="email"
                                label={formatMessage('auth.email', 'Correo electrónico')}
                                formik={formik}
                            />
                            <div
                                className={twoColumnsStyle}
                            >
                                <MPassword 
                                    hasFeedback
                                    name="password"
                                    label={formatMessage('auth.password', 'Contraseña')}
                                    formik={formik}
                                />
                                <MPassword 
                                    name="passwordConfirm"
                                    label={formatMessage('auth.confirmPassword', 'Confirmar contraseña')}
                                    formik={formik}
                                />
                            </div>
                        </div>
                        <MSubmitButton 
                            label={formatMessage('register.submit', 'Continuar')}
                            formik={formik}
                            classname="mt-3"
                        />
                    </form>
                </div>
            </AuthCardLayout>
        </AuthLayout>
    )
}
