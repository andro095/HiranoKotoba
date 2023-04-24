// Librerias de React

// Librerias de Terceros
import classNames from "classnames"

// Archivos propios
import { CardTitleProps } from "../../../interfaces"

// Funcionalidad
import { useBreakpoints } from "../../../hooks"

// Assets


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
