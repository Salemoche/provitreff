import React, { useRef, useEffect, useState } from 'react'
import { TitleStyles } from './title.styles';
import { motion } from 'framer-motion';
import { loadSVGasXML } from '../../../lib/helpers';
import { useRouter } from 'next/router';

function TitleComponent({ url, hoverUrl, link = null, isMain = false }) {

    const imageRef = useRef(null);
    const router = useRouter();
    // const [svg, setSvg] = useState(null)

    // useEffect(() => {
    //     setSvg(loadSVGasXML( imageRef, url ));
    //     // console.log(loadSVGasXML( imageRef, url ))
    // }, [])
    
    const scrollToTitle = () => {

        const offset = window.innerWidth > 678 ? '240' : window.innerHeight * 0.2;
        console.log(offset, window.innerWidth)

        if ( link ) router.push(link);
        document.querySelector('html').scroll({top: imageRef.current.offsetTop - offset, behavior: 'smooth' });
    }

    return ( 
        <TitleStyles className="provi-title" isMain={isMain}>
            <motion.img
                // initial={{ width: 'auto'}}
                whileHover={{ opacity: 0 }}
                transition={{ duration: 1 }}
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