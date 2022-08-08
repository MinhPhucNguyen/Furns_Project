import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
//Redux
import { Provider } from 'react-redux';
import store from './redux/store';
//
import App from './App';
import GlobalStyles from './styles/GlobalStyles';
import { AuthProvider } from './Context/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <GlobalStyles>
                    <AuthProvider>
                        <App />
                    </AuthProvider>
                </GlobalStyles>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
);
