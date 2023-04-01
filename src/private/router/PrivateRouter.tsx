import { Navigate, Route, Routes } from "react-router-dom"

export const PrivateRouter = () => {


    return (
        <Routes>
            <Route path='/search' element={ <h1>Search List</h1> } />
            <Route path='/add' element={ <h1>Add Word</h1> } />
            <Route path='/edit' element={ <h1>Edit Word</h1> } />
            <Route path="*" element={ <Navigate to="/search" /> } />
        </Routes>
    )
}
