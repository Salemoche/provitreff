import styled, { css } from "styled-components";

export const CalendarEventStyles = styled('div')`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    aspect-ratio: 2/3;
    padding: ${ props => props.theme.sizes.XXS }px  ${ props => props.theme.sizes.XS }px;
    padding-top: 30%;
    /* z-index: -1; */

    ${ props => {
        return props.isReserved ? 'background: rgba(0, 0, 0, 0.25)' :  'background: rgba(0, 0, 0, 0.5)'
    }}

    
`