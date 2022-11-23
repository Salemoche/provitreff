import theme from '../styles/theme';
import { useState, useEffect } from 'react';
import DeviceDetector from "device-detector-js";
import { useSnapshot } from 'valtio';
import { state } from './state';


/**========================
*	Sets the global Device variable and returns it
*========================*/

export const useDeviceDetector = () => {

    // const [returnDevice, setReturnDevice] = useState({})

    const setDevice = (e = null) => {
        const deviceDetector = new DeviceDetector();
        const userAgent = window.navigator.userAgent;
        const device = deviceDetector.parse(userAgent);

        const width = window.innerWidth;
        const height = window.innerHeight;

        let size;
        let mode;

        switch (true) {
            case width > theme.breakpoints.XL:
                size = 'extra-large'
                mode = 'desktop'
                break;
            case width > theme.breakpoints.L:
                size = 'large'
                mode = 'desktop'
                break;
            case width > theme.breakpoints.M:
                size = 'medium'
                mode = 'desktop'
                break;
            case width > theme.breakpoints.S:
                size = 'small'
                mode = 'mobile'
                break;
            case width > theme.breakpoints.XS:
                size = 'extra-small'
                mode = 'mobile'
                break;
            default:
                break;
        }
        
        return ({
            device: device?.device,
            browser: device?.client?.name,
            type: device?.type,
            isMobile: device?.type == 'mobile' || device?.type == 'tablet',
            width,
            height,
            size,
            mode,
        })
    }

    // useEffect(() => {

    //     window?.addEventListener( 'resize', setDevice)

    //     return () => {
    //         window?.removeEventListener( 'resize', setDevice)
    //     }
    // }, [])

        // console.log('setting device')
        // console.log('The Device Detector Hook detected device is:', returnDevice )

    return setDevice;
}


/**========================
*	Set all global variables
*========================*/

export const useSetGlobals = ({ globalSet: global }) => {

    useEffect( () => {
        state.global.colors.colors = global.colors.map( colorObject => ( colorObject.color )) || [];
        state.global.proviAddress = global.proviAddress || '',
        state.global.proviNumber = global.proviNumber || '',
        state.global.proviEmail = global.proviEmail || '',
        state.global.proviLogo = global.proviLogo[0].url || ''
        state.global.proviLogoHover = global.proviLogoHover[0].url || ''
        state.global.proviLogoBurger = global.proviLogoBurger[0].url || ''
    }, [])
}


/**========================
*	Change Current Color
*========================*/

export const useCurrentColor = ( route ) => {
    const snap = useSnapshot(state);
    let currentColor = '';

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * snap.global.colors.colors.length);
        currentColor = snap.global.colors.colors[randomIndex];
        state.global.colors.current = currentColor;
        document.querySelector('html').style.background = currentColor;
    }, [route, snap.global.colors.colors ])

    return currentColor
}