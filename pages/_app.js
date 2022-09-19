import '../styles/globals.css';
import '../styles/login.css';
import {ProvideAuth} from "/hooks/use-auth";


function MyApp({Component, pageProps}) {
    return (
        <ProvideAuth>
            <Component {...pageProps} />
        </ProvideAuth>
    );
}

export default MyApp;
