import { Route, Routes } from "react-router-dom";
import { PrivateRouter } from "../private";
import { PublicRouter } from "../public";

export const AppRouter = () => {
    
    // Hook to check if the user is authenticated
    const status : string = 'not-authenticated';


    return (
        <Routes>
            {
                status === 'authenticated' 
                    ? <Route path='/*' element={ <PrivateRouter /> } />
                    : <Route path='/*' element={ <PublicRouter /> } />
            }
        </Routes>
    )
}
