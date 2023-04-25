// React Libraries

// Third Party Libraries
import classNames from "classnames";
import { Password } from 'primereact/password';

// Components

// Interfaces
import { MPasswordProps } from "@interfaces";

// Hooks
import { useBreakpoints } from "@hooks";

        

export const MPassword = ({ name, label, hasFeedback = false, className, css, formik } : MPasswordProps) => {
    
    const { isXs, isSm, isMd, isLg, isXl } = useBreakpoints();

    const inputClassName : string = classNames(
        `w-full ${className}`,
        { 'p-invalid': formik.errors[name] && formik.touched[name] },
        { 'p-inputtext-sm': isXs || isSm },
        { 'p-inputtext-md': isMd || isLg || isXl }
    )


    const labelClassName : string = classNames(
        { 'p-error': formik.errors[name] && formik.touched[name] }
    )
    
    return (
      <div
        className='w-full flex flex-column gap-2'
      >
        <span
            className='p-float-label'
        >
            <Password 
                id={name}
                name={name}
                feedback={hasFeedback}
                value={formik.values[name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={ inputClassName }
                inputClassName="w-full"
                css={css}            
            />
            <label 
                htmlFor={name}
                className={ labelClassName }
            >
                { label }
            </label>
        </span>
        {
            (formik.errors[name] && formik.touched[name]) && (
                <small className='p-error ml-2' >{ formik.errors[name] as string }</small>
            )
        }
      </div>
    )
}
