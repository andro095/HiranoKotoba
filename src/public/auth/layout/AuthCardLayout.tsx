// React Libraries

// Third Party Libraries
import { Card } from 'primereact/card';

// Components
import { CardHeader, CardTitle } from "../components";

// Interfaces
import { AuthCardLayoutProps } from '@interfaces';

// Hooks

// Styles
import { AuthCardLayoutStyle as styles } from "../styles";
        

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
