// React Libraries
import { Navigate, Route, Routes } from "react-router-dom"

// Third Party Libraries

// Components

// Interfaces

// Hooks

// Pages
import { AuthRouter } from "../auth"


export const PublicRouter = () => {
    return (
        <Routes>
            <Route path="/auth/*" element={ <AuthRouter /> } />

            <Route path="*" element={ <Navigate to="/auth" /> } />
        </Routes>
    )
}
