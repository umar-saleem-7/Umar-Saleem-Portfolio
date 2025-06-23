// GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #121212;
    color: #fff;
  }

  @media (max-width: 768px) {
    header, main, section {
      padding: 20px 10px !important;
    }

    main {
      flex-direction: column !important;
    }

    .project-list {
      grid-template-columns: 1fr !important;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    .project-list {
      grid-template-columns: repeat(2, 1fr) !important;
    }
  }
`;

export default GlobalStyle;
