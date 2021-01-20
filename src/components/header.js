import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import NavBar from './ui/navbar';

const Header = () => (
  <StyledHeader>
    <NavBar fixed={false} />
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
