// React Libraries
import { useNavigate } from "react-router-dom"

// Third Party Libraries
import { useFormik } from "formik"
import classNames from "classnames"

// Components
import { MInputText, MPassword, MSubmitButton, PhotoPicker } from "@components"

// Interfaces

// Hooks
import { useAppDispatch, useBreakpoints, useMessage } from "@hooks"

// Layouts
import { AuthCardLayout, AuthLayout } from "../../layout"

// Constants
import { registerSteps } from "../../constants"

// Formik
import { registerFields, registerSchema } from "../../formik"
import { IRegister } from "@interfaces"
import { startRegisterWithEmailPassword } from "@store"

export const RegisterStep1Page = () => {

    const formatMessage = useMessage();
    const { isXs, isSm } = useBreakpoints();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const twoColumnsStyle = classNames(
        'w-full flex gap-1',
        {
            'flex-column gap-3': isXs || isSm
        }
    )

    const formik = useFormik({
        initialValues: registerFields,
        validationSchema: registerSchema(formatMessage),
        onSubmit: async(values, { setSubmitting }) => {
            
            const user : IRegister = {
                name: values.name,
                lastName: values.lastname,
                email: values.email,
                password: values.password,
                image: values.image || undefined
            }

            await dispatch( startRegisterWithEmailPassword(user) )
            

            setSubmitting(false)
            
            // console.log(values)

            // setTimeout(() => {
            //     setSubmitting(false);
            //     navigate('/auth/register/step2', { state: { email: values.email } })
            // }, 2000);
            // setSubmitting(false)
            // navigate('/auth/register/step2', { state: { email: values.email } })
        },
    })

    return (
        <AuthLayout
            hasDialog
            hasStepper
            activeIndex={0}
            steps={registerSteps(formatMessage)}
            dialogTitle={formatMessage('register.dialogTitle', 'Error al registrar tu cuenta')}
        >
            <AuthCardLayout
                hasBackArrow
                bigCard
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
                                className="w-full flex justify-content-center pb-2"
                            >
                                <PhotoPicker 
                                    image={formik.values.image}
                                    setImage={(image) => formik.setFieldValue('image', image)}
                                />
                            </div>
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
