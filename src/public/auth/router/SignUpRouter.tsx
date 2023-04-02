// Librerias de React
import { Navigate, Route, Routes } from "react-router-dom"

// Librerias de Terceros

// Archivos propios
import { RegisterStep1Page, RegisterStep2Page } from "../pages"

// Funcionalidad

// Assets



export const SignUpRouter = () => {
    return (
        <Routes>
            <Route path="/step1" element={ <RegisterStep1Page />} />
            <Route path="/step2" element={ <RegisterStep2Page /> } />

            <Route path="*" element={ <Navigate to="/auth/register/step1" /> } />
        </Routes>
    )
}
