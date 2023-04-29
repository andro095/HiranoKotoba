// React Libraries

// Third Party Libraries
import classNames from 'classnames';
import { InputText } from 'primereact/inputtext';

// Components

// Interfaces
import { MInputTextProps } from '@interfaces';

// Hooks
import { useBreakpoints } from '@hooks';
      

export const MInputText = ({ name, label, type = "text", className, css, formik } : MInputTextProps) => {
    
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
                <InputText 
                    id={name}
                    name={name}
                    type={type}
                    value={formik.values[name]}
                    onChange={formik.handleChange}  
                    onBlur={formik.handleBlur}  
                    className={ inputClassName }  
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
