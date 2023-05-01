// React Libraries

// Third Party Libraries
import classNames from 'classnames';
import { Chip } from 'primereact/chip';

// Components

// Interfaces
import { MobileStepperProps } from '@interfaces';

// Hooks

        

export const MobileStepper = ({ activeStep, label, stepsLength } : MobileStepperProps) => {

    const template = (
        <>
            <span className="bg-primary border-circle w-2rem h-2rem flex align-items-center justify-content-center">
                { activeStep }
            </span>
            <span className="ml-2 font-medium">
                { label }
            </span>
        </>
    );

    const dotsClasses = (index : number) => classNames(
        'border-circle w-1rem h-1rem flex align-items-center justify-content-center',
        {
            'bg-primary': index === activeStep - 1,
            'bg-gray-300': index !== activeStep - 1,
        }
    )


    return (
        <div
            className='mb-4 flex flex-column align-items-center gap-3'
        >
            <Chip className='pl-0 pr-3' template={template} />
            <div
                className='flex gap-2'
            >
                {
                    Array(stepsLength).fill(0).map((_, index) => (
                        <span
                            key={index}
                            className={dotsClasses(index)}
                        >
                        </span>
                    ))
                }
            </div>
        </div>
    )
}
