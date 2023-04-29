// React Libraries

// Third Party Libraries
import { Button } from "primereact/button"
import { useFormik } from "formik"

// Components
import { MInputText, MPassword, MSubmitButton } from "@components";
import { GoogleButton } from "../../components"

// Interfaces

// Hooks
import { useMessage } from "@hooks";

// Layouts
import { AuthCardLayout, AuthLayout } from "../../layout"

// Styles
import { LoginPageStyle as styles } from "../../styles";

// Formik
import { logInFields, logInSchema } from "../../formik"
import { useNavigate } from "react-router-dom";


export const LoginPage = () => {

    const formatMessage = useMessage();
    const navigate = useNavigate();

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
        navigate('/auth/register/step1')
    }

    const goToForgotPassword = () => {
        navigate('/auth/reset/step1')
    }

    return (
        <AuthLayout
            hasDialog
            dialogTitle={formatMessage('login.error', 'Error al iniciar sesión')}
        >
            <AuthCardLayout
                title={formatMessage('login.title', 'Iniciar Sesión')}
                isSubmitting={formik.isSubmitting}
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
                            <MInputText
                                name="email"
                                label={ formatMessage('auth.email', 'Correo electrónico') }
                                type="email"
                                formik={formik}
                            />

                            <MPassword 
                                name="password"
                                label={ formatMessage('auth.password', 'Contraseña') }
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
