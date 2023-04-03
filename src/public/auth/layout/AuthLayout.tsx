import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
}

export const AuthLayout = ( { children } : Props ) => {
    return (
        <div className='w-full surface-section h-full flex justify-content-center'>
            { children }
        </div>
    )
}
