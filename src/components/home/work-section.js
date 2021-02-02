import React from 'react';
import styled from 'styled-components';
import { theme } from 'styled-tools';
import BackgroundImage from 'gatsby-background-image';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import { useBackground } from '@hooks/use-background';
import { useSiteMetadata } from '@hooks/use-site-metadata';

import Container from '../ui/container';
import Row from '../ui/row';
import Col from '../ui/col';
import Headline from '../ui/headline';
import { ReactComponent as LinkIcon } from '@images/icons/link.svg';

const WorkSection = () => {
  const { deckUrl } = useSiteMetadata();
  const background = useBackground('confetti.jpg');

  return (
    <StyledSection
      Tag={'section'}
      fluid={background.node.childImageSharp.fluid}
      id="work"
    >
      <Container>
        <Row align="center" justify="center">
          <CenteredCol xs={12} md={6}>
            <Headline size="h3" center animate={true}>
              See Our Capabilities
            </Headline>
            <p>
              We prepared a sample of some of our projects.
              <StyledLink href={deckUrl} target="_blank">
                <LinkIcon size={16} /> Check Out Our Capabilities Deck
              </StyledLink>
            </p>
          </CenteredCol>
        </Row>
      </Container>
    </StyledSection>
  );
};

/* STYLED Elements */
const StyledLink = styled(OutboundLink)`
  display: inline-block;
  transition: color 0.3s;
  color: ${theme('colors.white')};
  &:hover {
    color: ${theme('colors.white')};
    text-shadow: black 1px 0 10px;

    svg {
      text-shadow: black 1px 0 10px;
      filter: drop-shadow(1px 0 4px black);
    }
  }

  svg {
    width: 14px;
    height: 14px;
    vertical-align: middle;
  }
`;

const CenteredCol = styled(Col)`
  text-align: center;
  color: ${theme('colors.white')};
  background-color: ${theme('colors.red')};
  margin: 6rem 0 6rem 0;
  h3 {
    /* text-shadow: black 1px 0 10px; */
  }
`;

const StyledSection = styled(BackgroundImage)`
  width: 100%;
  height: 40rem;

  ${Container}, ${Row} {
    height: 100%;
  }
`;

export default WorkSection;
