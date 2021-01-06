import { css, createGlobalStyle } from 'styled-components';
import typography from './typography.css';
// import colors from './colors';

// --- UPDATES TO GLOBAL STYLES REQUIRES A PAGE REFRESH ---

// expand normalize.css string into css
export const normalize = css`
  ${typography}
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }
`;
// create a global page style
export const GlobalStyle = createGlobalStyle`
  ${normalize}
`;
