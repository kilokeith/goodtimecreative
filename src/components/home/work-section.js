import React from 'react';
import styled from 'styled-components';
import { theme } from 'styled-tools';
import { Row, Col } from 'react-grid-system';
import { graphql, useStaticQuery } from 'gatsby';

import BackgroundImage from 'gatsby-background-image';

const WorkSection = () => {
  const data = useStaticQuery(graphql`
    query {
      bgImage: file(relativePath: { eq: "backgrounds/confetti.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1428) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const imageData = data.bgImage.childImageSharp.fluid;

  return <StyledSection Tag={'section'} fluid={imageData}></StyledSection>;
};

/* STYLED Elements */
const StyledSection = styled(BackgroundImage)`
  background-color: ${theme('colors.red')};
  width: 100%;
  height: 40rem;
  padding: 2rem;
`;

export default WorkSection;
