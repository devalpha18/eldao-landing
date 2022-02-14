import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
/* @font-face {
  font-family: Elianto;
  src: url(/assets/fonts/elinato/Elianto-Regular.ttf);
}
@font-face {
  font-family: Product Sans;
  src: url(/assets/fonts/product-sans/Product-Sans-Regular.ttf);
} */
  html,
  body {
    padding: 0;
    margin: 0;
    background: black;
    overflow-x: hidden !important;
    scroll-behavior: smooth;
    
  }

  html {
    text-rendering: optimizeLegibility;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 450;
  }

  p, span,br {
    margin: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }
  ::-webkit-scrollbar {
    display: none !important;
  }
  ul,
  ol {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  #root {
    height: 100%;
    display: flex;
    flex-direction: column;

    > * {
      flex-shrink: 0;
    }
  }

  table, tr, th, td {
    font-weight:500 !important;
    border-color: rgb(68, 113, 196) !important;
  }
`;

export default GlobalStyle;
