import React from 'react';
import styled, { css } from 'styled-components';
import { Row, Col, Visible, Hidden } from 'react-grid-system';
import { up, between } from 'styled-breakpoints';
import { theme, ifProp } from 'styled-tools';
import { Link } from 'gatsby';
import TextLogo from '../logos/text-logo';

const MenuLink = styled(Link)`
  font-size: 17px;
  font-weight: 500;
  text-transform: uppercase;
  transition: color 0.3s;
  &.active {
    color: ${theme('colors.orange')};
  }
`;

const StyledNav = styled.nav`
  position: ${ifProp({ fixed: true }, 'fixed', 'relative')};
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;

  ${MenuLink} {
    &.active {
      color: ${theme('colors.orange')};
    }
  }
`;

const Logo = styled(TextLogo)`
  color: ${theme('colors.black')};
  width: 14rem;
`;

const Navbar = ({ fixed = true }) => {
  return (
    <StyledNav role="navigation" aria-label="main-navigation" fixed={fixed}>
      <Hidden xs sm>
        <Row align="center" justify="start">
          <Col md={2}>
            <Link to="/">
              <Logo />
            </Link>
          </Col>
          <Col md={10}>
            <Row align="center" justify="end">
              <Col md={2} lg={1}>
                <MenuLink to="/">Home</MenuLink>
              </Col>
              <Col md={2} lg={1}>
                <MenuLink to="/work">Work</MenuLink>
              </Col>
              <Col md={2} lg={1}>
                <MenuLink to="/about">About</MenuLink>
              </Col>
              <Col md={3} lg={2}>
                <MenuLink to="/contact">Work with us</MenuLink>
              </Col>
            </Row>
          </Col>
        </Row>
      </Hidden>

      <Visible xs sm>
        <Row align="center" justify="end">
          <Col>{/* BURGER */}</Col>
        </Row>
      </Visible>
    </StyledNav>
  );
};

export default Navbar;
