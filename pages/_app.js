// Base
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// Data
import { state } from '../lib/state';
import { proxy, useSnapshot } from 'valtio';


// Styling
import theme from '../styles/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/global.styles';
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";


import "swiper/css";
import "./styles.css";

// Animation
import { AnimatePresence } from 'framer-motion'

// Helpers
// import { alwaysScripts } from '../lib/helpers';
// import { useDeviceDetector } from '../lib/hooks';
// import '../i18n';
import { useCurrentColor } from '../lib/hooks';
import DeviceDetector from 'device-detector-js';


function MyApp({ Component, pageProps }) {
    const route = useRouter().route;
    const snap = useSnapshot( state );

    const alwaysScripts = () => {
        
    }

    // const deviceDetector = useDeviceDetector();
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