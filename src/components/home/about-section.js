import React from 'react';
import styled from 'styled-components';
import { theme } from 'styled-tools';
import { Hidden } from 'react-grid-system';

import FullWidthSection from '../ui/full-wdth-section';
import Container from '../ui/container';
import Row from '../ui/row';
import Col from '../ui/col';
import Headline from '../ui/headline';
import { ReactComponent as OutlineLogo } from '@images/logos/good_time_outline.svg';

const AboutSection = () => {
  return (
    <StyledSection id="about">
      <StyledLogo />

      <Container>
        <Row align="center" justify="center">
          <CenteredCol xs={12} md={6}>
            <Headline size="h3" color="black" center>
              What We Do
            </Headline>
            <p>
              Good Time Creative is an extension of your brand.{' '}
              <Hidden sm md>
                <br />
              </Hidden>
              We create engaging experiences that tell your brand's story{' '}
              <Hidden xs sm md>
                <br />
              </Hidden>
              through various creative channels.
            </p>
          </CenteredCol>
        </Row>
      </Container>
    </StyledSection>
  );
};

/* STYLED Elements */
const CenteredCol = styled(Col)`
  text-align: center;

  h1 {
    margin: 6rem 0 6rem 0;
  }
`;

const StyledSection = styled(FullWidthSection).attrs({
  className: 'pink-grit-bg',
})`
  position: relative;
  width: 100%;
  padding: 2rem;
  &,
  &::before,
  &::after {
    background-repeat: repeat;
    background-position: top center;
    background-size: auto;
  }

  ${Container}, ${Row} {
    min-height: 50vh;
  }
`;

const StyledLogo = styled(OutlineLogo)`
  position: absolute;
  bottom: -5vw;
  left: 0;
  right: 0;
  z-index: -1;
  color: ${theme('colors.pink')};
  opacity: 0.3;
  width: 100vw;
`;

export default AboutSection;
