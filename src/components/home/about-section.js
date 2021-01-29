import React from 'react';
import styled from 'styled-components';
import { Row, Col, Hidden } from 'react-grid-system';

import BackgroundImage from 'gatsby-background-image';
import { useBackground } from '@hooks/use-background';
import Container from '../ui/container';
import Headline from '../ui/headline';

const AboutSection = () => {
  const background = useBackground('pink-grit-bg.jpg');

  return (
    <StyledSection
      Tag={'section'}
      fluid={background.node.childImageSharp.fluid}
      id="about"
    >
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
  width: 100%;
  padding: 2rem;
`;

export default AboutSection;
