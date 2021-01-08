import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeader = styled.footer`
  margin-top: 2rem;
`;

const Footer = () => (
  <StyledHeader>
    © {new Date().getFullYear()},{' '}
    <a href="https://goodtimecreative.com">Good Time Creative, LLC</a>
  </StyledHeader>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
