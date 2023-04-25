// React Libraries

// Third Party Libraries
import { ProgressBar } from "primereact/progressbar";
import { ProgressSpinner } from "primereact/progressspinner";

// Components
import { BackArrow } from "@components";

// Interfaces
import { CardHeaderProps } from "@interfaces";

// Hooks
import { useBreakpoints } from "@hooks";

// Styles
import { CardHeaderStyle as styles } from "../styles";



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
