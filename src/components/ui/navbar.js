import React from 'react';
import styled from 'styled-components';
import { Row, Col, Visible, Hidden } from 'react-grid-system';
import { theme, ifProp } from 'styled-tools';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import NavbarMobile from './navbar-mobile';
import TextLogo from '../logos/text-logo';

const Navbar = ({ fixed = true }) => {
  return (
    <StyledNav role="navigation" aria-label="main-navigation" fixed={fixed}>
      <Hidden xs sm>
        <Row justify="start">
          <Col md={2}>
            <AnchorLink to="/">
              <Logo />
            </AnchorLink>
          </Col>
          <Col md={10}>
            <Row align="center" justify="end">
              <Col md={8} lg={8}>
                <MenuItems>
                  <li>
                    <MenuLink to="/" activeClassName="active">
                      Home
                    </MenuLink>
                  </li>
                  <li>
                    <MenuLink to="/#work" activeClassName="active">
                      Work
                    </MenuLink>
                  </li>
                  <li>
                    <MenuLink to="/#about" activeClassName="active">
                      About
                    </MenuLink>
                  </li>
                  <li>
                    <MenuLink to="/#contact" activeClassName="active">
                      Work with us
                    </MenuLink>
                  </li>
                  <li>
                    <MenuLink
                      href={'https://goodtimecreative.wixsite.com/blog'}
                      target="_blank"
                      as={OutboundLink}
                    >
                      Blog
                    </MenuLink>
                  </li>
                </MenuItems>
              </Col>
            </Row>
          </Col>
        </Row>
      </Hidden>

      <Visible xs sm>
        <Row align="center" justify="end" nogutter>
          <Col xs={2}>
            <AnchorLink to="/">
              <Logo />
            </AnchorLink>
          </Col>
          <Col xs={10}>
            <NavbarMobile />
          </Col>
        </Row>
      </Visible>
    </StyledNav>
  );
};

const MenuLink = styled(AnchorLink)`
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  transition: color 0.3s;
  color: ${theme('colors.black')};

  &.active,
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
`;

const Logo = styled(TextLogo)`
  color: ${theme('colors.black')};
  width: 14rem;
`;

export default Navbar;
