import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html {
        background-color: ${props => props.theme.global.background};
    }

    body {
      margin: 0;
      font-family: 'Anonymous Pro', 'Inconsolata', monospace;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    div, h1, h2, h3, h4, h5, h6, span, sup {
        color: ${props => props.theme.global.textColor};
    }

    a {
        color: ${props => props.theme.global.linkColor};

      &:hover {
          color: ${props => props.theme.global.linkColorHover};
      }
    }

    html.color-theme-in-transition,
    html.color-theme-in-transition *,
    html.color-theme-in-transition *:before,
    html.color-theme-in-transition *:after {
      transition: all 750ms !important;
      transition-delay: 0 !important;
    }



    // table {
    //   // Bulma override - assumes our tables are _always_ in a card
    //   background-color: var(--card-background) !important;
    // }

    // table td, table th {
    //   // Bulma override
    //   border-bottom: 1px solid var(--border-color) !important;
    // }

    // // No border on bottom rows
    // .table tbody tr:last-child td,
    // .table tbody tr:last-child th {
    //   border-bottom: none !important;
    // }

    // // Bulma override
    // .hnscan-link {
    //   color: var(--text-color-link) !important;

    //   // &:visited { color: var(--text-color-link--visited) !important }
    //   &:hover { color: var(--text-color-link--hover) !important; }
    // }

    // .pagination-link,
    // .pagination-previous,
    // .pagination-next {
    //   color: var(--text-color-normal);
    //   background-color: var(--background);
    //   margin: 0 10px;
    //   &:hover {
    //     color: var(--text-color-normal);
    //     cursor: pointer;
    //     &:disabled {
    //       cursor: not-allowed;
    //     }
    //   }
    //   &:focus {
    //     border-color: var(--border-color);
    //   }
    // }
`;

export default GlobalStyles;
