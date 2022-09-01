import React, { useRef, useEffect, useState } from 'react'
import { TitleStyles } from './title.styles';
import { motion } from 'framer-motion';
import { loadSVGasXML } from '../../../lib/helpers';
import { useRouter } from 'next/router';

function TitleComponent({ url, link = null, isMain = false }) {

    const imageRef = useRef(null);
    const router = useRouter();
    // const [svg, setSvg] = useState(null)

    // useEffect(() => {
    //     setSvg(loadSVGasXML( imageRef, url ));
    //     // console.log(loadSVGasXML( imageRef, url ))
    // }, [])
    
    const scrollToTitle = () => {
        if ( link ) router.push(link);
        document.querySelector('html').scroll({top: imageRef.current.offsetTop - 240, behavior: 'smooth' });
    }

    return ( 
        <TitleStyles className="provi-title" isMain={isMain}>
            <motion.img
                // initial={{ width: '20px'}}
                whileHover={{ width: '100%' }}     
                ref={imageRef}
                src={ url } alt="" 
                onClick={scrollToTitle}
            />
            <div ref={imageRef}></div>
        </TitleStyles>
    )
}

export default TitleComponent