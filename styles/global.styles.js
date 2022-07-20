import { createGlobalStyle } from "styled-components";

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
    }

    a {
        text-decoration: none;
        color: black;
    }
`