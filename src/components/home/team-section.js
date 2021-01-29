import React from 'react';
import styled from 'styled-components';
import { theme } from 'styled-tools';
import { Row, Col } from 'react-grid-system';

import BackgroundImage from 'gatsby-background-image';
import { useBackground } from '@hooks/use-background';
import Container from '../ui/container';
import Headline from '../ui/headline';
import TeamList from './team-list';

const TeamSection = () => {
  const background = useBackground('pink-grit-bg.jpg');
  console.log('bg', background);

  return (
    <StyledSection
      Tag={'section'}
      fluid={background.node.childImageSharp.fluid}
      id="team"
    >
      <Container>
        <Row align="center" justify="center" nogutter nowrap>
          <CenteredCol xs={12} md={6}>
            <Headline color="black" center>
              Who We Are
            </Headline>
            <p>
              Good Time Creative is made up of a collection of creatives who
              have specialized expertise in the event industry. We Thrive on
              creativity and push the boundaries of experiential development.
              Our commitment to the excellence and dedication to our client's
              success is what keeps us up at night.
            </p>
          </CenteredCol>
        </Row>

        <Headline color="black" center>
          Who We Are
        </Headline>
        <TeamList />
      </Container>
    </StyledSection>
  );
};

/* STYLED Elements */
const CenteredCol = styled(Col)`
  text-align: center;
`;

const StyledSection = styled(BackgroundImage)`
  /* background-color: ${theme('colors.red')}; */
  width: 100vw;
  min-height: 500px;
  padding: 2rem;
`;

export default TeamSection;
