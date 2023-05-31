// React Libraries
import { Navigate, Route, Routes } from "react-router-dom"

// Third Party Libraries

// Components

// Interfaces

// Hooks

// Router
import { SignUpRouter } from "./SignUpRouter"
import { ResetRouter } from "./ResetRouter"

// Pages
import { LoginPage } from "../pages"
import { useCheckAuth } from "@hooks"
import { AuthStatus } from "@enums"
import { AuthLayout } from "../layout"
import { AuthLoader } from "../components"


export const AuthRouter = () => {

    const status = useCheckAuth();

    // if (status === AuthStatus.Checking) {
    //     return (
    //         <AuthLayout>
    //             <AuthLoader />
    //         </AuthLayout>
    //     )
    // }


    return (
        <Routes>
            <Route path="/login" element={ <LoginPage /> } />
            <Route path="/register/*" element={ <SignUpRouter /> } />
            <Route path="/reset/*" element={ <ResetRouter /> } />

            <Route path="*" element={ <Navigate to="/auth/login" /> } />
        </Routes>
    )
}
