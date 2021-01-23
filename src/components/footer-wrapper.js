import React from 'react';
import styled from 'styled-components';
import { theme } from 'styled-tools';
import { Hidden } from 'react-grid-system';
import FullWidthSection from './ui/full-wdth-section';
import FooterSmileImage from '@images/logos/gtc-footer-smile.png';

const FooterWrapper = ({ children, ...props }) => {
  return (
    <StyledWrapper {...props}>
      <Hidden xs sm>
        <FooterSmile src={FooterSmileImage} />
      </Hidden>
      {children}
    </StyledWrapper>
  );
};

const StyledWrapper = styled(FullWidthSection).attrs({
  className: 'black-grit-bg',
})`
  position: relative;
  overflow: hidden;
  background-color: ${theme('colors.black')};
  box-shadow: 0 50vh 0 50vh ${theme('colors.black')};
`;

const FooterSmile = styled.img`
  position: absolute;
  top: -40px;
  right: 0;
  z-index: 1;
`;

export default FooterWrapper;
