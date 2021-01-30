import React from 'react';
import styled from 'styled-components';
import { theme } from 'styled-tools';
import { Row, Col } from 'react-grid-system';
import Container from '../ui/container';
import Headline from '../ui/headline';

import BackgroundImage from 'gatsby-background-image';
import { useBackground } from '@hooks/use-background';

const services = [
  {
    title: 'Brand Experience',
    capabilities: [
      'Experience Design & Concept Development',
      'Mobile Experiences',
      'Pop-Up Installations',
      'Product Launches & Influencer Events',
      'Branded Boxes & Packaging',
      'Influencer Brand Kits & Fulfillment',
    ],
  },
  {
    title: 'Trade Show Exhibits',
    capabilities: [
      'Custom Exhibit Fabrication',
      'Modular & Fabric Exhibits',
      'Portable Exhibits',
      '3D Rendering & Graphic Design',
      'Signage & Large Format Graphics',
      'Detailing & Engineering',
    ],
  },
  {
    title: 'Interior Installations',
    capabilities: [
      'Permanent & Semi-Permanent Installations',
      'Space Planning & 3D Design',
      'Fabrication & Production',
      'Retail Point Of Purchase Displays',
      'Demo & Installation',
    ],
  },
  {
    title: 'Labor & Logistics',
    capabilities: [
      'Installation & Dismantle Labor',
      'Show Order Management',
      'Show Site Supervision',
      'Shipping & Trucking',
      'Storage',
    ],
  },
  {
    title: 'Virtual Experiences',
    capabilities: [
      'Trade Shows & Consumer Events',
      'Sales Conferences & Showrooms',
      'Webinars & E-learning',
      'Product Launches & Influencer Events',
      'Hybrid Events (live event paired with a virtual platform)',
    ],
  },
];

const Service = ({ title, capabilities }) => (
  <CenteredCol xs={6} md={3} lg={2} key={`service-list-${title}`}>
    <h3>{title}</h3>
    <ul>
      {capabilities &&
        capabilities.map(capability => {
          return <li key={`capabilities-list-${capability}`}>{capability}</li>;
        })}
    </ul>
  </CenteredCol>
);

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
          {services &&
            services.map(({ title, capabilities }) => (
              <Service
                title={title}
                capabilities={capabilities}
                key={`services-${title}`}
              />
            ))}
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
    width: 100%;
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
