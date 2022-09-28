import styled from 'styled-components';
import { SectionStyles } from "../../../styles/global.styles.components";
import { getFontSize } from '../../../lib/helpers';

export const ContentStyles = styled('div')`

    /* margin-bottom: ${ props => props.isOnlyTitle ? '0' : props.theme.sizes.XL }px; */

    h2 {
        /* margin-bottom: ${ props => props.theme.sizes.L }px; */
    }

    
    @media screen and ( max-width: ${ props => props.theme.breakpoints.M }px) {
        /* margin-bottom: ${ props => props.isOnlyTitle ? '0' : props.theme.sizes.L }px; */

        h2 {
            /* margin-bottom: ${ props => props.theme.sizes.M }px; */
        }
    }
`