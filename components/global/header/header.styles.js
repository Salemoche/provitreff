import styled, { css } from "styled-components";
import { getFontSize } from "../../../lib/helpers";

export const HeaderStyles = styled('header')`
    width: 100%;
    max-width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${ props => props.backgroundColor };
    padding:  ${ props => props.theme.sizes.S }px;
    z-index: 10;

    nav {
        width: ${ props => props.theme.sizes.contentWidth }px;
        max-width: 100%;
        ${ props => getFontSize( 'L', props )};
        position: relative;
        
        ul {
            display: flex;
            justify-content: space-between;
        }

        .provi-navigation-info {
            flex-direction: column;
            display: none;
        }
    }

    @media screen and ( max-width: ${ props => props.theme.breakpoints.M }px) {

        .provi-title {
            margin-bottom: 0;

            img {
                max-width: calc( 100% - ${ props => props.theme.sizes.M }px - 40px)
            }
        }

        nav {
            ${ props => getFontSize( 'M', props )};
            height: calc( 100vh - 90px );
            max-height: 0;
            opacity: 0;
            transition: .3s;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            ${ props => {
                if ( props.active ) {
                    return css`
                        opacity: 1;
                        max-height: calc( 100vh - 90px );
                        padding-bottom:  ${ props => props.theme.sizes.S }px;
                    `
                }
            }}

            ul {
                padding-bottom: 0;
                overflow: hidden;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;    
                margin-top: auto;

                li {
                    margin-bottom:  ${ props => props.theme.sizes.M }px;
                }
            }

            .provi-navigation-info {
                margin-top: auto;
                display: flex;
                align-items: center;
            }
        }
    }

`

export const MenuItemStyles = styled('a')`

    text-transform: uppercase;
    transition: .1s;

    &:hover {
        color: transparent;
        -webkit-text-stroke: 2px black;
        text-stroke: 2px black;
    }

    ${ props => {
        if (props.currentMenuItem) {
            return css`
                color: transparent;
                -webkit-text-stroke: 2px black;
                text-stroke: 2px black;
            `
        }
    } };
`

export const BurgerStyles = styled('div')`

    width: 35px;
    height: 40px;
    position: absolute;
    right: ${ props => props.theme.sizes.S }px;
    top: ${ props => props.theme.sizes.S }px;
    cursor pointer;
    display: none;
    

    ${ props => {
        if (props.currentMenuItem) {
            return css`
                color: transparent;
                -webkit-text-stroke: 2px black;
                text-stroke: 2px black;
            `
        }
    } };

    @media screen and ( max-width: ${ props => props.theme.breakpoints.M }px) {
        display: inherit;
    }
`