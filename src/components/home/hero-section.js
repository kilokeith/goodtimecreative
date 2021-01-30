import React from 'react';
import styled from 'styled-components';
import { theme } from 'styled-tools';
import { Row, Col } from 'react-grid-system';

import BackgroundImage from 'gatsby-background-image';
import Logo from '../logos/logo-round-face';
import { useBackground } from '@hooks/use-background';
import Container from '../ui/container';

const HeroSection = () => {
  const background = useBackground('welder.jpg');

  return (
    <StyledSection
      Tag={'section'}
      fluid={background.node.childImageSharp.fluid}
    >
      <Container>
        <Row align="center" justify="center" nogutter nowrap>
          <CenteredCol xs={6} md={3}>
            <StyledLogo
              data-sal="zoom-out"
              data-sal-delay="300"
              data-sal-duration="200"
              data-sal-easing="ease"
            />
          </CenteredCol>
        </Row>
      </Container>
    </StyledSection>
  );
};

/* STYLED Elements */
const StyledLogo = styled(Logo)`
  width: 100%;
  color: ${theme('colors.white')};
`;

const CenteredCol = styled(Col)`
  text-align: center;
`;

const StyledSection = styled(BackgroundImage)`
  background-color: ${theme('colors.red')};
  width: 100%;
  padding: 2rem;
`;

export default HeroSection;
