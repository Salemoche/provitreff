import React from 'react'
import { TitleStyles } from './title.styles';

function TitleComponent({ url }) {
    return ( 
        <TitleStyles>
            <img src={ url } alt="" />
        </TitleStyles>
    )
}

export default TitleComponent