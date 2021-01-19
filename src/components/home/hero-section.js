import React from 'react';
import styled from 'styled-components';
import { theme } from 'styled-tools';
import { Row, Col } from 'react-grid-system';
import { graphql, useStaticQuery } from 'gatsby';

import BackgroundImage from 'gatsby-background-image';
import Logo from '../logos/logo-round-face';
import Section from '../ui/section';

const HeroSection = () => {
  const data = useStaticQuery(graphql`
    query {
      bgImage: file(relativePath: { eq: "backgrounds/welder.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const imageData = data.bgImage.childImageSharp.fluid;

  return (
    <BackgroundImage Tag={StyledSection} fluid={imageData}>
      <Row align="center" justify="center" nogutter nowrap>
        <CenteredCol xs={6} md={3}>
          <StyledLogo />
        </CenteredCol>
      </Row>
    </BackgroundImage>
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

const StyledSection = styled(Section)`
  background-color: ${theme('colors.red')};
  width: 100%;
  padding: 2rem;
`;

export default HeroSection;
