// React Libraries
import { Route, Routes } from "react-router-dom";

// Third Party Libraries

// Components

// Interfaces

// Hooks
import { useCheckAuth } from "@hooks";

// Router
import { PrivateRouter } from "@private";
import { PublicRouter } from "@public";

// Enums
import { AuthStatus } from "@enums";


export const AppRouter = () => {
    
    const status = useCheckAuth();

    return (
        <Routes>
            {
                status === AuthStatus.Authenticated
                    ? <Route path='/*' element={ <PrivateRouter /> } />
                    : <Route path='/*' element={ <PublicRouter /> } />
            }
        </Routes>
    )
}
