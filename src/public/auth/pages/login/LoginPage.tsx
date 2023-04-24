// Librerias de React

// Librerias de Terceros
import { Button } from "primereact/button"

// Archivos propios
import { GoogleButton } from "../../components"
import { MInputText, MPassword, MSubmitButton } from "../../../../components"
import { logInFields, logInSchema } from "../../formik"
import { AuthCardLayout, AuthLayout } from "../../layout"
import { LoginPageStyle as styles } from "../../styles";

// Funcionalidad
import { useMessage } from "../../../../hooks"
import { useFormik } from "formik"

// Assets



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
                <div
                    className="w-full"
                >
                    <form
                        className="w-full flex flex-column align-items-center"
                        onSubmit={formik.handleSubmit}
                    >
                        <div
                            className="w-full flex flex-column gap-4"
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
