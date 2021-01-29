import React from 'react';
import styled from 'styled-components';
import { theme } from 'styled-tools';
import { Row, Col } from 'react-grid-system';
import { graphql, useStaticQuery } from 'gatsby';

import BackgroundImage from 'gatsby-background-image';
import Logo from '../logos/logo-round-face';

const TeamSection = () => {
  const data = useStaticQuery(graphql`
    query {
      bgImage: file(relativePath: { eq: "backgrounds/welder.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1428) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const imageData = data.bgImage.childImageSharp.fluid;

  return (
      id="team"
        <CenteredCol xs={6} md={3}>
          <StyledLogo />
        </CenteredCol>
      </Row>
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

export default TeamSection;
