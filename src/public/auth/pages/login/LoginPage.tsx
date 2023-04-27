// React Libraries

// Third Party Libraries
import { Button } from "primereact/button"
import { useFormik } from "formik"

// Components
import { MInputText, MPassword, MSubmitButton } from "@components";
import { AuthDialog, GoogleButton } from "../../components"

// Interfaces

// Hooks
import { useMessage } from "@hooks";

// Layouts
import { AuthCardLayout, AuthLayout } from "../../layout"

// Styles
import { LoginPageStyle as styles } from "../../styles";

// Formik
import { logInFields, logInSchema } from "../../formik"


export const LoginPage = () => {

    const formatMessage = useMessage()

    const formik = useFormik({
        initialValues: logInFields,
        validationSchema: logInSchema(formatMessage),
        onSubmit: (values, { setSubmitting }) => {
            console.log(values)

            setTimeout(() => {
                setSubmitting(false)
            }, 2000);
            // setSubmitting(false)
        }
    })

    const goToRegister = () => {
        console.log('Go to register')
    }

    const goToForgotPassword = () => {
        console.log('Go to forgot password')
    }

    return (
        <AuthLayout>
            <AuthCardLayout
                title={formatMessage('login.title', 'Iniciar Sesión')}
                isSubmitting={formik.isSubmitting}
            >
                <AuthDialog
                    dialogTitle="Error al iniciar sesión"
                    setSubmitting={formik.setSubmitting}
                />
                <div
                    className="w-full"
                >
                    <form
                        className="w-full flex flex-column align-items-center"
                        onSubmit={formik.handleSubmit}
                    >
                        <div
                            className="w-full flex flex-column gap-4 mt-2"
                        >
                            <MInputText
                                name="email"
                                label={ formatMessage('login.email', 'Correo electrónico') }
                                type="email"
                                formik={formik}
                            />

                            <MPassword 
                                name="password"
                                label={ formatMessage('login.password', 'Contraseña') }
                                formik={formik}
                            />
                        </div>
                        <div
                            className="flex flex-column align-items-center gap-2 mt-4"
                            css={styles.buttonDiv}
                        >
                            <MSubmitButton 
                                label={ formatMessage('login.submit', 'Ingresar') }
                                formik={ formik }
                                classname="w-full"
                            />
                            <GoogleButton />
                        </div>
                        <div
                            className="flex flex-column align-items-center mt-4"
                        >
                            <Button 
                                link
                                className="py-1"
                                css={ styles.buttonLink }
                                onClick={ goToForgotPassword }
                                label={ formatMessage('login.forgotPassword', 'He olvidado mi contraseña') }
                            />
                            <Button 
                                link
                                className="py-1"
                                css={ styles.buttonLink }
                                onClick={ goToRegister }
                                label={ formatMessage('login.newUser', '¿No tienes una cuenta? Registrate') }
                            />
                        </div>
                    </form>
                </div>
            </AuthCardLayout>
        </AuthLayout>
    )
}
