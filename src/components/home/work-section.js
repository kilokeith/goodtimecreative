import React from 'react';
import styled from 'styled-components';

import BackgroundImage from 'gatsby-background-image';
import { useBackground } from '@hooks/use-background';

const WorkSection = () => {
  const background = useBackground('confetti.jpg');

  return (
    <StyledSection
      Tag={'section'}
      fluid={background.node.childImageSharp.fluid}
      id="work"
    ></StyledSection>
  );
};

/* STYLED Elements */
const StyledSection = styled(BackgroundImage)`
  width: 100%;
  height: 40rem;
  padding: 2rem;
`;

export default WorkSection;
