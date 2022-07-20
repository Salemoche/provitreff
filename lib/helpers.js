// export const onLoadScripts() {

import { css } from "styled-components";

    
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