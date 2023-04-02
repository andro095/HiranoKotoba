// Librerias de React
import { Navigate, Route, Routes } from "react-router-dom"

// Librerias de Terceros

// Archivos propios
import { SignUpRouter } from "./SignUpRouter"
import { ResetRouter } from "./ResetRouter"
import { LoginPage } from "../pages"

// Funcionalidad

// Assets


export const AuthRouter = () => {
    return (
        <Routes>
            <Route path="/login" element={ <LoginPage /> } />
            <Route path="/register/*" element={ <SignUpRouter /> } />
            <Route path="/reset/*" element={ <ResetRouter /> } />

            <Route path="*" element={ <Navigate to="/auth/login" /> } />
        </Routes>
    )
}
