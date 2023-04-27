// React Libraries
import { useEffect } from 'react';
import { IntlProvider } from 'react-intl';

// Third Party Libraries
import { locale } from "primereact/api";
import { flatten } from 'flat';

// Components

// Interfaces

// Hooks
import { useAppSelector } from '@hooks';

// Router
import { AppRouter } from '@router';

// Locale
import { locales } from '@locale';


function App() {

  const { language } = useAppSelector( state => state.config );


  useEffect(() => {

    locale(language);

  }, [language]);
  

  return (
    <IntlProvider
      defaultLocale='es'
      locale={language}
      messages={flatten(locales[language])}
    >
      <AppRouter />
    </IntlProvider>
  )
}

export default App
