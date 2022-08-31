import { createGlobalStyle } from "styled-components";
import { getFontSize } from "../lib/helpers";

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

    html,
    body {
        margin: 0;
        padding: 0;
        font-family: 'Rodger';
        ${ props => getFontSize( 'M', props )}
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

    a {
        text-decoration: none;
        color: black;
    }

    /* React Calendar */
    html {
    overflow-wrap: inherit;
    }

    .unselectable {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    }

    .calendar-navigate {
    padding: 10px;
    opacity: 0.5;
    }

    .calendar-navigate:hover {
    cursor: pointer;
    opacity: 0.9;
    }

    .calendar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    }

    .calendar-title {
    margin-top: 0.83em;
    margin-bottom: 0.83em;
    }

    .calendar-body {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, minmax(40px, 1fr));
    grid-template-rows: 50px;
    grid-auto-rows: minmax(120px, auto);
    }

    .calendar-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    }

    .day {
    text-align: right;
    padding: 14px 0px;
    font-size: 14px;
    border-bottom: 1px solid;
    border-right: 1px solid;
    border-color: lightgray;
    display: flex;
    flex-direction: column;
    }

    @media only screen and (min-width: 601px) {
    .day {
        padding: 14px 20 px 20 px 0px;
    }
    }

    .innerDay {
    display: flex;
    flex-direction: column; 
    width: 100%;
    }

    .day:nth-of-type(7n) {
    border-right: none;
    }

    .day-name {
    font-size: 16px;
    text-transform: uppercase;
    text-align: center;
    border-bottom: 1px solid;
    border-top: 1px solid;
    line-height: 50px;
    font-weight: 500;
    }

    .event {
    box-sizing: border-box;
    margin: 1px 0px;
    font-size: 15px;
    height: 26px;
    }

    .below {
    z-index: -1;
    }

    .details {
    display : flex;
    font-size: 14px;
    align-items: center;
    margin-top: 12px;
    margin-bottom: 12px;
    }

    .display-linebreak {
    white-space: pre-line;
    }

`