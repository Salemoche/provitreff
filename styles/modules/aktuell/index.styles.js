import styled, { css } from 'styled-components';
import { getFontSize } from '../../../lib/helpers';
import { SectionStyles } from "../../global.styles.components";

export const ProgramStyles = styled(SectionStyles)`
    text-align: center;
    margin-bottom: 0;

    .month {
        /* margin-bottom: ${ props => props.theme.sizes.L }px; */
    }

    h2 {
        ${ props => getFontSize( 'L', props )};
        text-transform: uppercase;
        /* margin-bottom: ${ props => props.theme.sizes.M}px; */
    }

    @media screen and ( max-width: ${ props => props.theme.breakpoints.M }px) {
        text-align: left;
        
        h2 {
            ${ props => getFontSize( 'M', props )};
        }
    }
`

export const EventStyles = styled('div')`
    margin-bottom: ${ props => props.theme.sizes.M }px;
    /* ${ props => getFontSize( 'L', props )}; */
    p:last-of-type {
        margin-bottom: 0;
    }
`
