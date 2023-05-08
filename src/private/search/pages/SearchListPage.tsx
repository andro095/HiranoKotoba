import { useAppDispatch } from "@hooks"
import { startLogout } from "@store";
import { Button } from "primereact/button"

export const SearchListPage = () => {

    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch( startLogout() )
    }

    return (
        <div>
            <h1>Search List Page</h1>
            <Button label="Logout" onClick={handleLogout} />
        </div>
    )
}
