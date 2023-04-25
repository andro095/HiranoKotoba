// React Libraries

// Third Party Libraries
import { Navigate, Route, Routes } from "react-router-dom"

// Components

// Interfaces

// Hooks

// Pages
import { RegisterStep1Page, RegisterStep2Page } from "../pages"


export const SignUpRouter = () => {
    return (
        <Routes>
            <Route path="/step1" element={ <RegisterStep1Page />} />
            <Route path="/step2" element={ <RegisterStep2Page /> } />

            <Route path="*" element={ <Navigate to="/auth/register/step1" /> } />
        </Routes>
    )
}
