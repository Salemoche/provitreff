import styled, { css } from "styled-components";

export const FooterStyles = styled('footer')`
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    border-top: 3px solid black;
    background: ${ props => props.backgroundColor };
    z-index: 10;

    a {
        transition: .1s;

        &:hover {
            color: transparent;
            -webkit-text-stroke: 2px black;
            text-stroke: 2px black;
        }
    }
    
    
    > div {
        padding: ${ props => props.theme.sizes.XXS }px ${ props => props.theme.sizes.XS }px;
        width: calc(100%/3);

        * {
            margin-bottom: 0;
        }

        &.provi-footer-address {
            text-align: center;
        }

        &.provi-footer-language-switcher {
            text-align: right;
        }
    }


    @media screen and ( max-width: ${ props => props.theme.breakpoints.L }px) {
        padding-left: ${ props => props.theme.sizes.L }px;
        padding-right: ${ props => props.theme.sizes.L }px;
    }

    @media screen and ( max-width: ${ props => props.theme.breakpoints.M }px) {
        display: none;
    }

`


export const LanguageSwitcherStyles = styled('a')`

    margin: 0 ${ props => props.theme.sizes.XS }px;
    cursor: pointer;
    
    &:last-of-type {
        margin-right: 0;
    }

    ${ props => {
        if (props.currentLanguage) {
            return css`
                color: transparent;
                -webkit-text-stroke: 2px black;
                text-stroke: 2px black;
            `
        }
    } };
`

