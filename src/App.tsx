// Librerias de React
import { useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';

// Librerias de Terceros
import { locale } from "primereact/api";

// Archivos propios
import { AppRouter } from './router';

// Funcionalidad

// Assets
import { locales } from './locale/locales';


const initialLanguage : string = navigator.language.split('-')[0] in locales ? navigator.language.split('-')[0] : 'es';

function App() {

  // Implement function to change language

  const [language, setLanguage] = useState(initialLanguage);

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
