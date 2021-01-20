import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from 'styled-tools';

const Footer = () => (
  <StyledFooter>
    © {new Date().getFullYear()},{' '}
    <a href="https://goodtimecreative.com">Good Time Creative, LLC</a>
  </StyledFooter>
);

const StyledFooter = styled.footer`
  padding: 8rem 2rem 2rem 2rem;
  color: ${theme('colors.white')};
`;

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
