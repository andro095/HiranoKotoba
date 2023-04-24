// Librerias de Terceros
import { useIntl } from 'react-intl'

// Archivos propios

// Hooks

// Funcionalidad

// Assets


export const useMessage = () => {

    const intl = useIntl();

    const formatMessage = ( id: string, defaultMessage?: string, description?: string | object ) : string => {
        return intl.formatMessage({ id, defaultMessage, description })
    }

    
    return formatMessage
}
