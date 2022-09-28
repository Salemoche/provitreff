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
    ${ props => getFontSize( 'L', props )};
`

export const CalendarTitleStyles = styled('h3')`

    cursor: pointer;
    display: inline-block;
    text-transform: uppercase;
    margin-bottom: ${ props => props.theme.sizes.M }px;
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
    display: flex;
    align-items: flex-end;
    gap: ${ props => props.theme.sizes.S }px;
    
    width: 100%;

    .provi-calendar-container,
    thead {
        width: 70%;

        iframe {
            width: 100%;
        }
    }

    .provi-calendar-tooltips {
        width: 30%;
        /* padding-right: ${ props => props.theme.sizes.S }px; */
        /* flex: 1; */

        .provi-calendar-tooltips__title {
        }

        .provi-calendar-tooltip {
            border: 3px solid black;            
            margin-top: ${ props => props.theme.sizes.S }px;
            padding: ${ props => props.theme.sizes.XXS }px  ${ props => props.theme.sizes.XS }px;

            &.occupied {
                background: rgba(0, 0, 0, 0.5)
            }

            &.reserved {
                background: rgba(0, 0, 0, 0.25)
            }
        }
    }


    @media screen and ( max-width: ${ props => props.theme.breakpoints.M }px) {
        flex-wrap: wrap;

        .provi-calendar-container,
        thead {
            width: 100%;

            iframe {
                width: 100%;
            }
        }

        .provi-calendar-tooltips {

            .provi-calendar-tooltips__title {
                width: 100%;
            }

            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;


            .provi-calendar-tooltip {
                margin-right: ${ props => props.theme.sizes.S }px;
                margin-top: ${ props => props.theme.sizes.XS }px;
                flex: 1;

                &:last-child {
                    margin-right: 0;
                }
            }
        }
    }
`