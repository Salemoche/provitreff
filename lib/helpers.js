// export const onLoadScripts() {

import { css } from "styled-components";
import * as DOMPurify from 'dompurify';

    
// }

// export const alwaysScripts() {
//     console.log('always')
// }

export const getFontSize = ( size, props ) => {
    const { theme } = props

    return css`
        font-size: ${theme.fontSizes[size][0]}px;
        line-height: ${theme.fontSizes[size][1]};
    `
}

export const cleanHTML = ( html ) => {
    // return DOMPurify.sanitize(html);
    if (!DOMPurify.sanitize) {
        console.error('DOMPurify missing')
        return html
    }
    return DOMPurify.sanitize(html)
}

// export const addTab = ( content ) => {
//     return content.replace('*tab*', '<span class="tab"><span/>')
// }

export const loadSVGasXML = ( url ) => {
    // var SVGFile = url;
    // var loadXML = new XMLHttpRequest;
    // let svgTag;

    // const handler = () => {
    //     if(loadXML.readyState == 4 &&loadXML.status == 200){
    //            imageRef.current.innerHTML=loadXML.responseText
    //         //    mySvgValue.value= svgDiv.innerHTML
    //         svgTag = loadXML.responseText;
    //     }
    // }
    // if (loadXML != null){
    //     loadXML.open("GET", SVGFile, true);
    //     loadXML.onreadystatechange = handler;
    //     loadXML.send();
    // }

    // return svgTag
}