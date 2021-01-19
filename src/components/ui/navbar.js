import React from 'react';
import styled, { css } from 'styled-components';
import { Row, Col, Visible, Hidden } from 'react-grid-system';
import { up, between } from 'styled-breakpoints';
import { theme, ifProp } from 'styled-tools';
import { Link } from 'gatsby';
import TextLogo from '../logos/text-logo';

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
              <Col md={8} lg={8}>
                <MenuItems>
                  <li>
                    <MenuLink to="/">Home</MenuLink>
                  </li>
                  <li>
                    <MenuLink to="/work">Work</MenuLink>
                  </li>
                  <li>
                    <MenuLink to="/about">About</MenuLink>
                  </li>
                  <li>
                    <MenuLink to="/contact">Work with us</MenuLink>
                  </li>
                </MenuItems>
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

const MenuLink = styled(Link)`
  font-size: 17px;
  font-weight: 500;
  text-transform: uppercase;
  transition: color 0.3s;
  color: ${theme('colors.black')};

  &.active {
    color: ${theme('colors.red')};
  }
  &:hover {
    color: ${theme('colors.red')};
  }
`;

const MenuItems = styled.ul`
  text-align: right;
  list-style: none;
  li {
    display: inline-block;
    list-style: none;
    margin-left: 1rem;
    margin-right: 1rem;
    &:last-of-type {
      margin-right: 0;
    }
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
      color: ${theme('colors.black')};
    }
  }
`;

const Logo = styled(TextLogo)`
  color: ${theme('colors.black')};
  width: 14rem;
`;

export default Navbar;
