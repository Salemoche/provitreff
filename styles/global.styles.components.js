import styled from 'styled-components';
import { getFontSize } from '../lib/helpers';

export const ContentStyles = styled('div')`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: ${ props => props.theme.sizes.navPadding }px;
    padding-bottom: ${ props => props.theme.sizes.L }px;
    

    > * {
        max-width: 100%;
        width: ${props => props.theme.sizes.contentWidth}px;

        &.provi-title {
            width: 100%;
        }
    }


    @media screen and ( max-width: ${ props => props.theme.breakpoints.L }px) {
        padding-left: ${ props => props.theme.sizes.L }px;
        padding-right: ${ props => props.theme.sizes.L }px;
        padding-bottom: ${ props => props.theme.sizes.XL }px;
        padding-top: 28vw;
        width: unset;
        max-width: 100%;

        > * {
            width: 100%;
        }
    }

    @media screen and ( max-width: ${ props => props.theme.breakpoints.M }px) {
        padding-left: ${ props => props.theme.sizes.S }px;
        padding-right: ${ props => props.theme.sizes.S }px;
        padding-bottom: ${ props => props.theme.sizes.S }px;
        padding-top: 8vw;
    }
`

export const SectionStyles = styled('div')`
    /* margin-bottom: ${ props => props.theme.sizes.L }px; */

    &:last-child {
        margin-bottom: 0;
    }
`

export const TableStyles = styled('div')`

    h3 {
        /* margin-bottom: ${ props => props.theme.sizes.M }px; */
        ${ props => getFontSize( 'M', props )};

    }

    table {
        margin-bottom: ${ props => props.theme.sizes.M }px;
        width: 100%;

        td {
            border: none;
        }
    }
`