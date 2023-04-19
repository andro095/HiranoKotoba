import { AuthCardLayoutProps } from "../../../interfaces"

import { Card } from 'primereact/card';
import { AuthCardLayoutStyle as styles } from "../styles";
import { ProgressBar } from 'primereact/progressbar';
import { ProgressSpinner } from 'primereact/progressspinner';
import { useBreakpoints } from "../../../hooks";
import { ReactNode } from "react";
import { BackArrow } from "../../../components";
        
        
        

export const AuthCardLayout = ( { title, hasBackArrow = true, isSubmitting = false, children } : AuthCardLayoutProps ) => {

    const { isXs } = useBreakpoints();

    const header : ReactNode = (
        <div
            className="w-full"
        >
            <div 
                className="w-full flex justify-content-center"
                css={styles.headerDiv(isSubmitting, isXs)}
            >
                {
                    isSubmitting && (
                        isXs ? (
                            <ProgressSpinner 
                                className="w-3rem h-3rem mt-3"
                                strokeWidth="4"
                            />
                        ) : (
                            <ProgressBar 
                                className="w-full"
                                mode="indeterminate" 
                                css={styles.progressBar}
                            />
                        )
                    )
                }
            </div>
            <div
                className="w-full"
                css={styles.backArrowDiv(true)}
            >
                {
                    hasBackArrow && (
                        <BackArrow />
                    )
                }

            </div>

        </div>
    )

    const titleElem : ReactNode = (
        <div
            className="w-full flex justify-content-center text-center"
        >
            {
                isXs ? <h1 className="m-0">{ title }</h1> : <h2 className="m-0" >{ title }</h2>
            }
        </div>
    )



    return (
        <div
            className="w-full px-2 flex justify-content-center"
        >
            <Card
                className="overflow-hidden w-full"
                header={ header }
                title={ titleElem }
                css={ styles.card }
            >
                { children }
            </Card>
        </div>
    )
}
