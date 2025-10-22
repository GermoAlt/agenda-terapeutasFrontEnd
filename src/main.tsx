import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/App.tsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import {UserContextProvider} from "./context/userContext.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <GoogleOAuthProvider clientId="29441997048-c2q7sq1o1incpgfphr81d1b5q4mj5fi5.apps.googleusercontent.com">
            <UserContextProvider>
                <App />
            </UserContextProvider>
        </GoogleOAuthProvider>
    </React.StrictMode>
);
