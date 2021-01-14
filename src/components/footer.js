import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from 'styled-tools';

const StyledFooter = styled.footer`
  margin-top: 2rem;
  padding: 4rem 2rem 2rem 2rem;
  background-color: ${theme('colors.black')};
  color: ${theme('colors.white')};
`;

const Footer = () => (
  <StyledFooter>
    © {new Date().getFullYear()},{' '}
    <a href="https://goodtimecreative.com">Good Time Creative, LLC</a>
  </StyledFooter>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
