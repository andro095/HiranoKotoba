import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRouter } from "../auth"

export const PublicRouter = () => {
    return (
        <Routes>
            <Route path="/auth/*" element={ <AuthRouter /> } />

            <Route path="*" element={ <Navigate to="/auth" /> } />
        </Routes>
    )
}
