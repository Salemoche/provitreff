import theme from '../styles/theme';
import { useState, useEffect } from 'react';
import DeviceDetector from "device-detector-js";
import { proxy } from 'valtio';
import { state } from './state';


/**========================
*	Sets the global Device variable and returns it
*========================*/

export const useDeviceDetector = () => {

    const [returnDevice, setReturnDevice] = useState({})

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

        setReturnDevice({
            device: device?.device,
            browser: device?.client?.name,
            type: device?.type,
            isMobile: device?.type == 'mobile' || device?.type == 'tablet',
            width,
            height,
            size,
            mode,
        })

        state.device = returnDevice;
    }

    useEffect(() => {

        window?.addEventListener( 'resize', setDevice)

        setDevice();

        return () => {
            window?.removeEventListener( 'resize', setDevice)
        }
    }, [])

    // console.log('The Device Detector Hook detected device is:', returnDevice )

    return returnDevice
}


/**========================
*	Set all global variables
*========================*/

export const useSetGlobals = ({ globalSet: global }) => {

    useEffect( () => {
        state.global.colors.colors = global.colors;
        state.global.proviAddress = global.proviAddress,
        state.global.proviEmail = global.proviEmail,
        state.global.proviLogo = global.proviLogo
    }, [])
}