import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    :root {
        --text-color: black;
        --title-color: black;
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        max-width: 100%;
        scroll-behavior: smooth;
    }

    body {
        background: #F5F5F5;
        -webkit-font-smoothing: antialiased !important;
        color: var(--text-color);
    }

    body html #root {
        height: 100%;
    }

    body, input, button {
        font-family: Roboto, Arial, Helvetica, sans-serif;
    }

    h1, h2, h3, h4, h5, h6 {
        color: var(--title-color);
        font-family: Roboto, Arial, Helvetica, sans-serif;
    }

    @media(max-width: 800px) {
        h1 {
            font-size: 20px;
        }
    }
`;