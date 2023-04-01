import { Navigate, Route, Routes } from "react-router-dom"

export const SignUpRouter = () => {
    return (
        <Routes>
            <Route path="/step1" element={ <div>Sign Up Step 1</div> } />
            <Route path="/step2" element={ <div>Sign Up Step 2</div> } />

            <Route path="*" element={ <Navigate to="/auth/register/step1" /> } />
        </Routes>
    )
}
