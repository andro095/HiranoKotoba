// React Libraries
import { Navigate, Route, Routes } from "react-router-dom"
import { SearchListPage } from "../search"

// Third Party Libraries

// Components

// Interfaces

// Hooks


export const PrivateRouter = () => {


    return (
        <Routes>
            <Route path='/search' element={ <SearchListPage /> } />
            <Route path='/add' element={ <h1>Add Word</h1> } />
            <Route path='/edit' element={ <h1>Edit Word</h1> } />
            <Route path="*" element={ <Navigate to="/search" /> } />
        </Routes>
    )
}
