import { css, createGlobalStyle } from 'styled-components';
import fonts from './fonts.css';
import colors from './colors';
import pinkGrit from '../images/backgrounds/pink-grit-bg.jpg';
import blackGrit from '../images/backgrounds/black-grit-bg.jpg';

// --- UPDATES TO GLOBAL STYLES REQUIRES A PAGE REFRESH ---

// expand normalize.css string into css
export const normalize = css`
  ${fonts}
  body {
    max-width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
    font-size: 16px;
    color: ${colors.black};
  }
`;
// create a global page style
export const GlobalStyle = createGlobalStyle`
  ${normalize}

  .pink-grit-bg {
    background-image: url(${pinkGrit});
    background-color: ${colors.white};
    &,
    &::before,
    &::after {
      background-repeat: repeat;
      background-position: top center;
      background-size: auto;
    }
  }

  .black-grit-bg {
    background-image: url(${blackGrit});
    background-color: ${colors.black};
    &,
    &::before,
    &::after {
      background-repeat: repeat;
      background-position: top center;
      background-size: auto;
    }
  }
`;
