// Librerias de React
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// Librerias de Terceros
import { Provider } from 'react-redux'
import { addLocale } from "primereact/api";

// Archivos propios
import App from './App'

// Funcionalidad
import { store } from './store'

// Assets
import "./theme/theme.css";     
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";                                         
import './index.css'
import { locales } from './locale';

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
