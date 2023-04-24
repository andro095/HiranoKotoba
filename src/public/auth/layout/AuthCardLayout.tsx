// Librerias de React

// Librerias de Terceros
import { Card } from 'primereact/card';

// Archivos propios
import { CardHeader, CardTitle } from "../components";
import { AuthCardLayoutProps } from "../../../interfaces"
import { AuthCardLayoutStyle as styles } from "../styles";

// Funcionalidad

// Assets
        

export const AuthCardLayout = ( { title, hasBackArrow = false, isSubmitting = false, children } : AuthCardLayoutProps ) => {
    
    return (
        <div
            className="w-full px-2 flex justify-content-center"
        >
            <Card
                className="overflow-hidden w-full"
                header={ <CardHeader hasBackArrow={hasBackArrow} isSubmitting={isSubmitting} /> }
                title={ <CardTitle title={title} hasBackArrow={hasBackArrow} /> }
                css={ styles.card }
            >
                { children }
            </Card>
        </div>
    )
}
