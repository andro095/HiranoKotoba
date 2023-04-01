import { Navigate, Route, Routes } from "react-router-dom"

export const ResetRouter = () => {
    return (
        <Routes>
            <Route path="/step1" element={ <div>Reset Step 1</div> } />
            <Route path="/step2" element={ <div>Reset Step 2</div> } />
            <Route path="/step3" element={ <div>Reset Step 3</div> } />
            <Route path="/step4" element={ <div>Reset Step 4</div> } />

            <Route path="*" element={ <Navigate to="/auth/reset/step1" /> } />
        </Routes>
    )
}
