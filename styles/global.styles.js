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
        ${ props => getFontSize( 'M', props )}

        @media screen and ( max-width: ${ props => props.theme.breakpoints.M }px) {
            ${ props => getFontSize( 'XS', props )};
        }
    }

    body {
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

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
    }

    p {
        margin: 0;
        margin-bottom: ${ props => props.theme.sizes.S }px
    }

    pre {
        font-family: inherit;
    }

    a {
        text-decoration: none;
        color: black;
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
        border: 3px solid black;            
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

    ${'' /* FullCalendar */}

    .fc-toolbar-title {
        margin-bottom: ${ props => props.theme.sizes.XS }px;
    }

    .fc-toolbar-chunk, .fc-button-group {
        display: flex;
        align-items: center;
    }

    .fc-today-button {
        margin-right: ${ props => props.theme.sizes.XS }px;
    }

    .fc-next-button,
    .fc-prev-button {
        ${'' /* padding: ${ props => props.theme.sizes.XS }px; */}
        margin-right: ${ props => props.theme.sizes.XS }px;
        ${'' /* margin-bottom: ${ props => props.theme.sizes.XS }px; */}
        cursor: pointer;
        padding: ${ props => props.theme.sizes.XXS }px  ${ props => props.theme.sizes.S }px;
    }

    .fc-prev-button {
        ${'' /* background-image: url(${ arrowLeft }); */}
        ${'' /* background: green; */}

        &:before {
            content: '<'
        }
    }

    .fc-next-button {
        ${'' /* background-image: url(${ arrowLeft }); */}
        ${'' /* background: green; */}

        &:before {
            content: '>'
        }
    }

    .fc-view-harness {

        margin-top: ${ props => props.theme.sizes.XS }px;

        table {
            width: 100%;
            table-layout: fixed;
            border-collapse: collapse;

            th {
                text-align: left;
            }

            td {
                border: 3px solid black;
                vertical-align: baseline;

                &[role=presentation] {
                    border: none;
                }

                > div {
                    aspect-ratio: 2/1;
                }
            }
        }

    }
`