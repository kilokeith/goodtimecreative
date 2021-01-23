import React from 'react';
// import PropTypes from 'prop-types';
import Obfuscate from 'react-obfuscate';
import styled from 'styled-components';
import { theme } from 'styled-tools';
import { Row, Col } from 'react-grid-system';
import Headline from './ui/headline';
import { useSiteMetadata } from '@hooks/use-site-metadata';

const Footer = () => {
  const { contactEmail, contactAddress } = useSiteMetadata();

  return (
    <StyledFooter>
      <Row justify="start">
        <Col xs={12} sm={10} md={6}>
          <Headline size="h1" color={'white'}>
            Let's Work Together
          </Headline>
          <p>{contactAddress}</p>
          <p>
            <Obfuscate
              email={contactEmail}
              headers={{
                subject: 'GTC Site Contact',
              }}
            />
          </p>
        </Col>
      </Row>
      © {new Date().getFullYear()},{' '}
      <a href="https://goodtimecreative.com">Good Time Creative, LLC</a>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 4rem 2rem 4rem 2rem;
  color: ${theme('colors.white')};
  p {
    white-space: pre-line;
    line-height: 0.75em;
  }
`;

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
