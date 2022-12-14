import React, { useRef, useEffect, useState } from 'react'
import { TitleStyles } from './title.styles';
import { motion } from 'framer-motion';
import { loadSVGasXML } from '../../../lib/helpers';
import { useRouter } from 'next/router';
import DeviceDetector from 'device-detector-js';

function TitleComponent({ url, hoverUrl, link = null, isMain = false }) {

    const imageRef = useRef(null);
    const router = useRouter();
    const [isMobile, setIsMobile] = useState(false)
    // const [svg, setSvg] = useState(null)

    // useEffect(() => {
    //     setSvg(loadSVGasXML( imageRef, url ));
    //     // console.log(loadSVGasXML( imageRef, url ))
    // }, [])

    const deviceScript = () => {
        const deviceDetector = new DeviceDetector();
        const userAgent = window.navigator.userAgent;
        const device = deviceDetector.parse(userAgent);

        if ( device.device.type === 'smartphone' || device.device.type === 'tablet' ) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    useEffect(() => {
        deviceScript();
        window.addEventListener( 'resize', deviceScript);
    
        return () => {
            window.removeEventListener( 'resize', deviceScript);
            
        }
    }, [])
    
    const scrollToTitle = () => {

        if ( window.innerWidth < 678 ) return

        const offset = window.innerWidth > 678 ? '240' : window.innerHeight * 0.2;

        if ( link ) router.push(link);
        document.querySelector('html').scroll({top: imageRef.current.offsetTop - offset, behavior: 'smooth' });
    }

    return ( 
        <TitleStyles className="provi-title" isMain={isMain} isMobile={isMobile}>
            <motion.img
                // initial={{ width: 'auto'}}
                whileHover={{ opacity: 0 }}
                transition={{ duration: .3 }}
                ref={imageRef}
                src={ url } alt="" 
                onClick={scrollToTitle}
                className="provi-title-image"
            />
            <img className="provi-title-image provi-title-image-hover" src={ hoverUrl } alt="" />
            <div ref={imageRef}></div>
        </TitleStyles>
    )
}

export default TitleComponent