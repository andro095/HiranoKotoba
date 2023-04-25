// React Libraries
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IntlProvider } from 'react-intl';

// Third Party Libraries
import { locale } from "primereact/api";

// Components

// Interfaces
import { RootState } from '@interfaces';

// Hooks

// Router
import { AppRouter } from '@router';

// Locale
import { locales } from '@locale';


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
