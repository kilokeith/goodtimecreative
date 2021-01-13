import React from 'react';
import styled from 'styled-components';
import { theme } from 'styled-tools';
import { Row, Col } from 'react-grid-system';

import Logo from '../logos/logo-round-face';
import Section from '../ui/section';

const HeroSection = () => (
  <StyledSection>
    <Row align="center" justify="center" nogutter nowrap>
      <CenteredCol xs={6} md={3}>
        <StyledLogo />
      </CenteredCol>
    </Row>
  </StyledSection>
);

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
