import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { theme } from 'styled-tools';

const StyledHeader = styled.header`
  margin-bottom: 1.45rem;

  > div {
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;

    h1 {
      margin: 0;

      a {
        color: ${theme('colors.white')};
        text-decoration: none;
      }
    }
  }
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
