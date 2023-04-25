// React Libraries

// Third Party Libraries
import { Navigate, Route, Routes } from "react-router-dom"

// Components

// Interfaces

// Hooks

// Pages
import { ResetStep1Page, ResetStep2Page, ResetStep3Page, ResetStep4Page } from "../pages"



export const ResetRouter = () => {
    return (
        <Routes>
            <Route path="/step1" element={ <ResetStep1Page /> } />
            <Route path="/step2" element={ <ResetStep2Page /> } />
            <Route path="/step3" element={ <ResetStep3Page /> } />
            <Route path="/step4" element={ <ResetStep4Page /> } />

            <Route path="*" element={ <Navigate to="/auth/reset/step1" /> } />
        </Routes>
    )
}
