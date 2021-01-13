import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Row, Col, Visible, Hidden } from 'react-grid-system';
import { up, between } from 'styled-breakpoints';
// import { theme } from 'styled-tools';
import NavBar from './ui/navbar';

const StyledHeader = styled.header`
  padding: 2rem 2rem 2rem 2rem;
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <NavBar fixed={false} />
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
