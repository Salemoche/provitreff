import React, { useRef } from 'react'
import { TitleStyles } from './title.styles';
import { motion } from 'framer-motion';

function TitleComponent({ url }) {

    const imageRef = useRef(null);

    // useEffect()

    return ( 
        <TitleStyles className="provi-title">
            <motion.img
                whileHover={{ width: '100%' }}     
                ref={imageRef}
                src={ url } alt="" 
            />
        </TitleStyles>
    )
}

export default TitleComponent