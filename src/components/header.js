import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navbar from './ui/navbar';

const Header = () => (
  <StyledHeader>
    <Navbar fixed={false} />
  </StyledHeader>
);

const StyledHeader = styled.header`
  padding: 2rem 2rem 2rem 2rem;
`;

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// };

// Header.defaultProps = {
//   siteTitle: ``,
// };

export default Header;
