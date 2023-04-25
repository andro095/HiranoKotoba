// React Libraries

// Third Party Libraries
import classNames from "classnames"

// Components

// Interfaces
import { CardTitleProps } from "@interfaces";

// Hooks
import { useBreakpoints } from "@hooks";


export const CardTitle = ( { hasBackArrow, title } : CardTitleProps ) => {

    const { isXs } = useBreakpoints();

    const titleClases : string = classNames(
        'w-full flex justify-content-center text-center',
        { 'mt-2': !hasBackArrow }
    )

    return (
        <div
            className={ titleClases }
        >
            {
                isXs ? <h1 className="m-0">{ title }</h1> : <h2 className="m-0" >{ title }</h2>
            }
        </div>
    )
}
