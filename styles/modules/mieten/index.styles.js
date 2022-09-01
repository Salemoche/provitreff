import styled, { css } from 'styled-components';
import { getFontSize } from '../../../lib/helpers';
import { SectionStyles } from "../../global.styles.components";

export const DownloadsStyles = styled(SectionStyles)`
    text-align: center;
    ${ props => getFontSize( 'L', props )};
`

export const CalendarTitlesStyles = styled('div')`
    display: flex;
    justify-content: center;
`

export const CalendarTitleStyles = styled('h3')`

    cursor: pointer;
    display: inline-block;
    text-transform: uppercase;
    margin-bottom: ${ props => props.theme.sizes.S }px;
    transition: .1s;

    &:hover {
        color: transparent;
        -webkit-text-stroke: 2px black;
        text-stroke: 2px black;
    }

    &.provi-calendar-title-culture {
        margin-right: ${ props => props.theme.sizes.S }px;
        
    }

    &.provi-calendar-title-movement {
        margin-left: ${ props => props.theme.sizes.S }px;
        
    }

    ${ props => {

        if (props.active) {
            return css`
                color: transparent;
                -webkit-text-stroke: 2px black;
                text-stroke: 2px black;
            `
        }
    } };
`

export const CalendarContainerStyles = styled('div')`
    /* display: flex; */
    gap: ${ props => props.theme.sizes.S }px;
    
    width: 100%;

    .provi-calendar-container {
        width: 100%;

        iframe {
            width: 100%;
        }
    }

    /* .provi-calendar-tooltips {
        width: 25%;


        .provi-calendar-tooltips__title {
            margin-bottom: ${ props => props.theme.sizes.S }px;
        }

        .provi-calendar-tooltip {
            border: 3px solid black;            
            margin-bottom: ${ props => props.theme.sizes.S }px;
            padding: ${ props => props.theme.sizes.XXS }px  ${ props => props.theme.sizes.XS }px;
        }
    } */
`