// Librerias de React

// Librerias de Terceros
import { ProgressBar } from "primereact/progressbar";
import { ProgressSpinner } from "primereact/progressspinner";

// Archivos propios
import { CardHeaderProps } from "../../../interfaces"
import { BackArrow } from "../../../components";
import { CardHeaderStyle as styles } from "../styles";

// Funcionalidad
import { useBreakpoints } from "../../../hooks";

// Assets


export const CardHeader = ( { isSubmitting, hasBackArrow } : CardHeaderProps ) => {

    const { isXs, isSm } = useBreakpoints();

    const showBackArrow = () : boolean => {
        if ((isXs || isSm) && isSubmitting) return false;
        return hasBackArrow;
    }

    return (
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
            {
                showBackArrow() && (
                    <div
                        className="w-full"
                        css={styles.backArrowDiv(isXs || isSm)}
                    >
                        <BackArrow />
                    </div>
                )
            }
        </div>
    )
}
