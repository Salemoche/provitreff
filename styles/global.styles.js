import { createGlobalStyle } from "styled-components";
import { getFontSize } from "../lib/helpers";
import arrowRight from '/public/assets/img/arrow-right.svg'
import arrowLeft from '/public/assets/img/arrow-right.svg'

export default createGlobalStyle`
    @font-face {
        font-family: 'Rodger';
        font-weight: 300;
        font-style: 'regular';
        src: url('/fonts/Rodger-Bold.otf') format('woff'),
            url('/fonts/Rodger-Bold.woff') format('woff'),
            url('/fonts/Rodger-Bold.woff2') format('woff2');
    }

    @font-face {
        font-family: 'Rodger';
        font-weight: 300;
        font-style: 'italic';
        src: url('/fonts/Rodger-Bold.otf') format('woff'),
            url('/fonts/Rodger-Bold.woff') format('woff'),
            url('/fonts/Rodger-Bold.woff2') format('woff2');
    }

    * {
        box-sizing: border-box;
    }

    html,
    body {
        margin: 0;
        padding: 0;
        font-family: 'Rodger';
    }

    body {
        ${ props => getFontSize( 'M', props )}

        @media screen and ( max-width: ${ props => props.theme.breakpoints.M }px) {
            ${ props => getFontSize( 'XS', props )};
        }
    }

    ul, 
    ol,
    li {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    main {
        min-height: 100vh;
    }

    h1 {
        margin: 0;
    }

    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
        ${ props => getFontSize( 'L', props )}
    }

    p {
        margin: 0;
        margin-bottom: ${ props => props.theme.sizes.S }px;

        &:last-of-type {
            margin-bottom: 0;
        }
    }

    pre {
        font-family: inherit;
    }

    a {
        text-decoration: none;
        color: black;
    }

    p a {

        color: transparent;
        -webkit-text-stroke: 2px black;
        text-stroke: 2px black;
        transition: .1s;

        &:hover {
            text-decoration: none;
            color: black;
            -webkit-text-stroke: 2px transparent;
            text-stroke: 2px transparent;
        }
    }

    figure {
        margin: 0;
        padding: 0;
        margin-bottom: ${ props => props.theme.sizes.M }px;

        img {
            width: 100%;
        }
    }

    button,
    .button,
    input[type=submit] {

        font-family: 'Rodger';
        ${ props => getFontSize( 'M', props )}
        border: 4px solid black;            
        padding: ${ props => props.theme.sizes.XXS }px  ${ props => props.theme.sizes.XS }px;
        background: none;
        color: black;
        -webkit-text-stroke: 2px transparent;
        text-stroke: 2px transparent;
        cursor: pointer;

        &:disabled {
            ${'' /* border: none; */}
        }

        transition: .1s;

        &:hover {
            ${'' /* transition: .1s; */}
            color: transparent;
            -webkit-text-stroke: 2px black;
            text-stroke: 2px black;
            ${'' /* background: black; */}
        }
    }

    html::-webkit-scrollbar {
        display: none;
    }

    html {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    .provi-hover-text {

        transition: .6s;

        &:hover {
            transition: .1s;
            color: transparent;
            -webkit-text-stroke: 2px black;
            text-stroke: 2px black;
        }
    }

    .provi-gap {
        height: 1em;
    }


    @media screen and ( max-width: ${ props => props.theme.breakpoints.L }px) {

        ${ props => getFontSize( 'XS', props )};

        .fc-toolbar:nth-of-type(1) {
            width: calc( 100vw - (2 * ${ props => props.theme.sizes.L }px));
        }

        .fc-view-harness {
            table {
                tr {
                    height: calc( 75vw / 10.5 );
                }
            }

        }
    }

    @media screen and ( max-width: ${ props => props.theme.breakpoints.M }px) {

        .fc-toolbar:nth-of-type(1) {
            width: calc( 100vw - (2 * ${ props => props.theme.sizes.S }px));
        }
    }

    @media screen and ( max-width: ${ props => props.theme.breakpoints.M }px) {

        h2,
        h3,
        h4,
        h5,
        h6 {
            margin: 0;
            ${ props => getFontSize( 'M', props )}
            line-height: 1;
        }
    }
`