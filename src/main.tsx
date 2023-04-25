// React Libraries
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

// Third Party Libraries
import { addLocale } from "primereact/api";

// Components
import App from './App'

// Interfaces

// Hooks

// Store
import { store } from '@store'

// Locale
import { locales } from '@locale';


// Styles
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";                                         
import "primereact/resources/primereact.min.css";
import './index.css';
import "./theme/theme.css";     

import '@fontsource/raleway/300.css';
import '@fontsource/raleway/400.css';
import '@fontsource/raleway/500.css';
import '@fontsource/raleway/700.css';


for (const [key, value] of Object.entries(locales)) {
  addLocale(key, value);
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
