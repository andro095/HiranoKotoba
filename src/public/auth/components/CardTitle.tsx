// React Libraries

// Third Party Libraries
import classNames from "classnames"

// Components

// Interfaces
import { CardTitleProps } from "@interfaces";

// Hooks


export const CardTitle = ( { hasBackArrow, title } : CardTitleProps ) => {

    const titleClases : string = classNames(
        'w-full flex justify-content-center text-center',
        { 'mt-2': !hasBackArrow }
    )

    return (
        <div
            className={ titleClases }
        >
            <h2 className="m-0" >{ title }</h2>
        </div>
    )
}
