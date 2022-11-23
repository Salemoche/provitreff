import styled, { css } from "styled-components";
import { getFontSize } from "../../../lib/helpers";
import { TitleStyles } from "../title/title.styles";

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


        .provi-title {
            margin-top: 0;
            margin-bottom:  ${ props => props.theme.sizes.M }px;
        }

    nav {
        width: ${ props => props.theme.sizes.contentWidth }px;
        max-width: 100%;
        ${ props => getFontSize( 'L', props )};
        position: relative;
        overflow: hidden;
        padding-top: 2px;
        padding-bottom: 2px;
        transition: all .3s;
        
        ul {
            display: flex;
            justify-content: space-between;
            
            .provi-navigation-language-switcher {
                display: none;
            }
        }

        .provi-navigation-info {
            flex-direction: column;
            display: none;
        }
    }

    @media screen and ( max-width: ${ props => props.theme.breakpoints.L }px) {

        padding-left: 0;
        padding-right: 0;

        .provi-title {
            padding-left: ${ props => props.theme.sizes.L }px;
            padding-right: ${ props => props.theme.sizes.L }px;

            .provi-title-image {
                max-width: 100%;
            }

            img.provi-title-image-hover {
                max-width: calc( 100% - 2* ${ props => props.theme.sizes.L }px)
            }
        }

        nav {
            width: 100%;
            padding-left: ${ props => props.theme.sizes.L }px;
            padding-right: ${ props => props.theme.sizes.L }px;
        }
    }

    @media screen and ( max-width: ${ props => props.theme.breakpoints.M }px) {

        max-height: 100vh;
        padding-left: ${ props => props.theme.sizes.S }px;
        padding-right: ${ props => props.theme.sizes.S }px;

        .provi-title {
            padding: 0;
            margin-bottom: 0;

            img.provi-title-image-hover {
                display: none;
            }
        }




        nav {
            ${ props => getFontSize( 'M', props )};
            height: calc( 100vh - 18vw );
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
                        max-height: 100%;
                        padding-bottom:  ${ props => props.theme.sizes.L }px;
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
            
                .provi-navigation-language-switcher {
                    display: inherit;
                }
            }

            .provi-navigation-info {
                margin-top: auto;
                display: flex;
                align-items: center;
                text-align: center;

                .provi-email {
                    order: 1;
                }

                .provi-address {
                    order: 3;
                }

                .provi-number {
                    order: 2;
                }
            }
        }
    }

    @media screen and ( max-width: ${ props => props.theme.breakpoints.S }px) {

        nav {
            height: calc( 100vh - 18vw );
            /* .provi-navigation-info {
                align-items: center;
            } */
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
    width: 18vw;
    height: 18vw;
    position: absolute;
    right: ${ props => props.theme.sizes.S }px;
    top: calc(24px);
    cursor pointer;
    display: none;
    z-index: 1;
    
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
    @media screen and ( max-width: ${ props => props.theme.breakpoints.S }px) {
        
        width: 15vw;
        height: 15vw;
        top: 20px;
    }
`

// export const SiteTitleStyles = styled(TitleStyles)`
    
//     @media screen and ( max-width: ${ props => props.theme.breakpoints.M }px) {
//         justify-content: flex-start;
//         width: 100vw;
// s
//         .provi-title-image {

//             /* max-width: calc( 100% - ${ props => props.theme.sizes.M }px - 11vw) !important; */
//             max-width: calc( 100% - ${ props => props.theme.sizes.M }px - 11vw) !important;
//             width: unset !important;

//         }

//     }
// `
