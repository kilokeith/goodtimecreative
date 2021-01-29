import React from 'react';
import styled from 'styled-components';
import { theme } from 'styled-tools';
import { Row, Col } from 'react-grid-system';
import Container from '../ui/container';
import Headline from '../ui/headline';

import BackgroundImage from 'gatsby-background-image';
import { useBackground } from '@hooks/use-background';

const ServicesSection = () => {
  const background = useBackground('pink-grit-bg.jpg');

  return (
    <StyledSection
      Tag={'section'}
      fluid={background.node.childImageSharp.fluid}
      id="services"
    >
      <Container>
        <Headline size="h3" color={'black'} center>
          Let's Work Together
        </Headline>
        <Row align="start" justify="center">
          <CenteredCol xs={6} md={2}>
            <h3>Brand Experience</h3>
            <ul>
              <li>Experience Design & Concept Development</li>
              <li>Mobile Experiences</li>
              <li>Pop-Up Installations</li>
              <li>Product Launches</li>
              <li>Temporary Interior Installations</li>
            </ul>
          </CenteredCol>
          <CenteredCol xs={6} md={2}>
            <h3>Trade Show Exhibits</h3>
            <ul>
              <li>Custom Exhibits</li>
              <li>Modular & Fabric Exhibits</li>
              <li>Portable Exhibits</li>
              <li>Fabrication</li>
              <li>3D Creative Design</li>
              <li>Graphic Design</li>
              <li>Graphic Production</li>
              <li>Detailing & Engineering</li>
            </ul>
          </CenteredCol>
          <CenteredCol xs={6} md={2}>
            <h3>Interior Installations</h3>
            <ul>
              <li>Space Planning</li>
              <li>3D Design Renderings</li>
              <li>Fabrication</li>
              <li>Signage & Graphics Production</li>
              <li>Demo & Installation</li>
            </ul>
          </CenteredCol>
          <CenteredCol xs={6} md={2}>
            <h3>Labor & Logistics Services</h3>
            <ul>
              <li>Installation & Dismantle Services</li>
              <li>Show Order Managment</li>
              <li>Show Site Supervision</li>
              <li>Logistics</li>
              <li>Storage</li>
            </ul>
          </CenteredCol>
          <CenteredCol xs={6} md={2}>
            <h3>Virtual Event Experiences</h3>

            <ul>
              <li>Virtual Trade Shows & Experiences</li>
              <li>Sales Meetings & Conferences</li>
              <li>Webinars & E-learning</li>
              <li>Product Launches</li>
              <li>
                Hybrid Events (live streaming paired with a virtual platform)
              </li>
            </ul>
          </CenteredCol>
        </Row>
      </Container>
    </StyledSection>
  );
};

/* STYLED Elements */
const CenteredCol = styled(Col)`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  text-align: center;

  h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4rem;
    margin: 4rem 0 0 0;
    padding: 1em 0.5em 1em 0.5em;
    background-color: ${theme('colors.red')};
    color: ${theme('colors.white')};
    font-size: 1rem;
    text-transform: capitalize;
    line-height: 1.25rem;
    text-align: center;
  }

  ul {
    margin: 2rem 0 0 0;
    padding: 0;
    list-style: none;

    li {
      margin: 0;
      padding: 0 0 1rem 0;
      list-style: none;
    }
  }
`;

const StyledSection = styled(BackgroundImage)`
  background-color: ${theme('colors.red')};
  width: 100%;
  padding: 2rem;
`;

export default ServicesSection;
