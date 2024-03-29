import styled, { css } from 'styled-components';
import { getFontSize } from '../../../lib/helpers';
import { SectionStyles } from "../../global.styles.components";

export const DownloadsStyles = styled(SectionStyles)`
    text-align: center;
    ${ props => getFontSize( 'L', props )};

    a {
        display: block;
        margin-bottom: ${ props => props.theme.sizes.M }px;
    }
    
    @media screen and ( max-width: ${ props => props.theme.breakpoints.M }px) {
        a {
            ${ props => getFontSize( 'M', props )}
        margin-bottom: ${ props => props.theme.sizes.S }px;
        }
    }
`

export const CalendarTitlesStyles = styled('div')`
    display: flex;
    justify-content: center;
    ${ props => getFontSize( 'L', props )};
    flex-wrap: wrap;
    
    @media screen and ( max-width: ${ props => props.theme.breakpoints.M }px) {
        ${ props => getFontSize( 'M', props )};
        margin-bottom: ${ props => props.theme.sizes.M }px;
        line-height: 30px;

        span {
            display: inline-block;
            margin-top: -3px;
        }
    }
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
        font-weight: 300;
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
                font-weight: 300;
            `
        }
    } };

    
    @media screen and ( max-width: ${ props => props.theme.breakpoints.M }px) {
        margin-bottom: ${ props => props.theme.sizes.XS }px;

        &:hover {
            color: transparent;
            -webkit-text-stroke: 2px black;
            text-stroke: 2px black;
            font-weight: 300;
        }



        ${ props => {

            if (props.active) {
                return css`
                    color: transparent;
                    -webkit-text-stroke: 2px black;
                    text-stroke: 2px black;
                    font-weight: 300;
                `
            }
        } };
    }
`

export const CalendarContainerStyles = styled('div')`
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    /* gap: ${ props => props.theme.sizes.S }px; */
    position: relative;
    
    width: 100%;

    .provi-calendar-container,
    thead {
        width: 100%;

        iframe {
            width: 100%;
        }
    }

    &:hover {
        .provi-calendar-tooltips {
            opacity: 1;
        }
    }

    .provi-calendar-tooltips {
        width: 30%;
        position: absolute;
        left: calc( 100% + ${ props => props.theme.sizes.S }px);
        opacity: 0;
        transition: .3s;
        position: static;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        opacity: 1;
        margin-top: ${ props => props.theme.sizes.M }px;

        .provi-calendar-tooltips__title {
            width: 100%;
        }

        .provi-calendar-tooltip {
            border: 4px solid black;            
            margin-top: ${ props => props.theme.sizes.S }px;
            padding: ${ props => props.theme.sizes.XXS }px  ${ props => props.theme.sizes.XS }px;
                margin-right: ${ props => props.theme.sizes.S }px;
                margin-top: ${ props => props.theme.sizes.XS }px;
                flex: 1;

            &.occupied {
                background: rgba(0, 0, 0, 0.5)
            }

            &.reserved {
                background: rgba(0, 0, 0, 0.25)
            }

            &:last-child {
                margin-right: 0;
            }
        }
    }


    /* @media screen and ( max-width: ${ props => props.theme.breakpoints.M }px) {

        .provi-calendar-container,
        thead {
            width: 100%;

            iframe {
                width: 100%;
            }
        }

    } */
`