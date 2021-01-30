import React from 'react';
import styled from 'styled-components';
import { theme } from 'styled-tools';
import { Row, Col } from 'react-grid-system';

import BackgroundImage from 'gatsby-background-image';
import { useBackground } from '@hooks/use-background';
import Container from '../ui/container';
import Headline from '../ui/headline';
import TeamList from './team-list';

import { ReactComponent as RepeatLogo } from '@images/logos/good_time_repeat.svg';
import { ReactComponent as RoundLogo } from '@images/logos/gtc_full_round.svg';

const TeamSection = () => {
  const background = useBackground('pink-grit-bg.jpg');

  return (
    <StyledSection
      Tag={'section'}
      fluid={background.node.childImageSharp.fluid}
      id="team"
    >
      <StyledRoundLogo />
      <StyledRepeatLogo>
        <RepeatLogo />
        <RepeatLogo />
      </StyledRepeatLogo>

      <Container>
        <Row align="center" justify="center" nogutter nowrap>
          <CenteredCol xs={12} md={6}>
            <Headline size="h3" color="black" center>
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

        <Headline size="h3" color="black" center>
          Our Team
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
  position: relative;
  width: 100vw;
  min-height: 500px;
  padding: 2rem;
`;

const StyledRepeatLogo = styled.div`
  position: absolute;
  top: 10%;
  right: 0;
  z-index: -1;
  color: ${theme('colors.pink')};
  opacity: 0.5;
  width: 20vw;
`;

const StyledRoundLogo = styled(RoundLogo)`
  position: absolute;
  top: 4%;
  left: 9%;
  z-index: -1;
  color: ${theme('colors.pink')};
  opacity: 0.3;
  width: 200px;
  transform: rotate(-20deg);
`;
export default TeamSection;
