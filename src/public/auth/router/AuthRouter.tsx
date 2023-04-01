import { Navigate, Route, Routes } from "react-router-dom"
import { SignUpRouter } from "./SignUpRouter"
import { ResetRouter } from "./ResetRouter"

export const AuthRouter = () => {
    return (
        <Routes>
            <Route path="/login" element={ <div>Login</div> } />
            <Route path="/register/*" element={ <SignUpRouter /> } />
            <Route path="/reset/*" element={ <ResetRouter /> } />

            <Route path="*" element={ <Navigate to="/auth/login" /> } />
        </Routes>
    )
}
