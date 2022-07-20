// Base
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// Data
import { state} from '../lib/state';
import { proxy, useSnapshot } from 'valtio';


// Styling
import theme from '../styles/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/global.styles';

// Animation
import { AnimatePresence } from 'framer-motion'

// Helpers
// import { alwaysScripts } from '../lib/helpers';
import { useDeviceDetector } from '../lib/hooks';
// import '../i18n';
import { useCurrentColor } from '../lib/hooks';


function MyApp({ Component, pageProps }) {
    const route = useRouter().route;
    const snap = useSnapshot( state );

    const alwaysScripts = () => {
    }

    useDeviceDetector();
    useCurrentColor( route, snap );

    useEffect(() => {

        alwaysScripts();
        window.addEventListener( 'resize', alwaysScripts);
        
        return () => {
            window.removeEventListener( 'resize', alwaysScripts);
        }
    }, [])
    

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <AnimatePresence>
                <Component {...pageProps} key={route}/>
            </AnimatePresence>
        </ThemeProvider>
    )
}

export default MyApp

const getInitialProps = async (appContext) => {
    locale = appContext.router.locale || process.env.NEXT_LOCALE;
}