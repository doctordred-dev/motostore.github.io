import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router";
import App from './App.jsx'
import {Provider} from "react-redux";
import store, {persistor} from './store'
import {PersistGate} from "redux-persist/integration/react";


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={<h1>LOADING.......</h1>}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </StrictMode>
)
