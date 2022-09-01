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

            ul {
                height: calc( 100vh - 110px );
                max-height: 0;
                padding-bottom: 0;
                opacity: 0;
                overflow: hidden;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                transition: .3s;
                
                li {
                    margin-bottom:  ${ props => props.theme.sizes.M }px;
                }

                ${ props => {
                    if ( props.active ) {
                        return css`
                            opacity: 1;
                            max-height: calc( 100vh - 110px );
                            padding-bottom:  ${ props => props.theme.sizes.S }px;
                        `
                    }
                }}
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
    background: green;
    position: absolute;
    right: ${ props => props.theme.sizes.S }px;
    top: ${ props => props.theme.sizes.S }px;
    cursor pointer;
    

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