import React from 'react';
import styled from 'styled-components';
import { theme } from 'styled-tools';
import { Hidden } from 'react-grid-system';

import BackgroundImage from 'gatsby-background-image';
import { useBackground } from '@hooks/use-background';
import Container from '../ui/container';
import Row from '../ui/row';
import Col from '../ui/col';
import Headline from '../ui/headline';
import { ReactComponent as OutlineLogo } from '@images/logos/good_time_outline.svg';

const AboutSection = () => {
  const background = useBackground('pink-grit-bg.jpg');

  return (
    <StyledSection
      Tag={'section'}
      fluid={background.node.childImageSharp.fluid}
      id="about"
    >
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

const StyledSection = styled(BackgroundImage)`
  position: relative;
  width: 100%;
  padding: 2rem;

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
