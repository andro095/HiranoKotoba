// React Libraries

// Third Party Libraries
import { useIntl } from 'react-intl'

// Interfaces

// Hooks


export const useMessage = () => {

    const intl = useIntl();

    const formatMessage = ( id: string, defaultMessage?: string, description?: string | object ) : string => {
        return intl.formatMessage({ id, defaultMessage, description })
    }

    
    return formatMessage
}
