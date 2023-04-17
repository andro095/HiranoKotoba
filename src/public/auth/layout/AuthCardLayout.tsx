import { AuthCardLayoutProps } from "../../../interfaces"

import { Card } from 'primereact/card';
import { AuthCardLayoutStyle as styles } from "../styles";
import { ProgressBar } from 'primereact/progressbar';
import { ProgressSpinner } from 'primereact/progressspinner';
        
        
        

export const AuthCardLayout = ( { title, hasBackArrow = false, isSubmitting = false, children } : AuthCardLayoutProps ) => {

    const Progress = (
        <ProgressBar 
            mode="indeterminate" 
            css={styles.progressBar}
        />
    )

    const MobileProgress = (
        <ProgressSpinner 
            
        />
    )

    const header = (
        <div></div>
    )

    return (
        <div
            className="w-full px-2 flex justify-content-center"
        >
            <Card
                className="overflow-hidden w-full"
                header={ header }
                css={styles.card}
            >
                { children }
            </Card>
        </div>
    )
}
