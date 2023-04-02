// Librerias de React
import { useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';

// Librerias de Terceros
import { locale } from "primereact/api";

// Archivos propios
import { AppRouter } from './router';
import { RootState } from './interfaces';

// Funcionalidad

// Assets
import { locales } from './locale/locales';


function App() {

  const { language } = useSelector(( state: RootState ) => state.config);

  useEffect(() => {

    locale(language);

  }, [language]);
  

  return (
    <IntlProvider
      defaultLocale='es'
      locale={language}
      messages={locales[language]}
    >
      <AppRouter />
    </IntlProvider>
  )
}

export default App
