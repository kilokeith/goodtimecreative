import React from 'react';
import styled, { css } from 'styled-components';
import { theme, switchProp } from 'styled-tools';
import { Link } from 'gatsby';
import { Row, Col } from 'react-styled-flexboxgrid';
import { slide as Menu } from 'react-burger-menu';
import { rem } from 'polished';

import CtaArrow from './ui/buttons/CtaArrow';
import Burger from './ui/icons/Burger';

const StyledRow = styled(Row)`
  button {
    outline: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .bm-burger-button {
    position: relative;
    width: 36px;
    height: 36px;
    display: inline-block;
    outline: none;

    svg path {
      ${switchProp('isDark', {
        true: css`
          fill: ${theme('colors.blue')};
        `,
        false: css`
          fill: ${theme('colors.white')};
        `,
      })}
    }
    :hover svg path {
      fill: ${theme('colors.orange')};
    }
  }

  .bm-cross-button {
    position: absolute;
    width: 36px !important;
    height: 36px !important;
    right: 2rem !important;
    top: 2rem !important;

    .bm-cross {
      background: ${theme('colors.blue')};
      height: 36px !important;
    }
    :hover .bm-cross {
      background: ${theme('colors.orange')};
    }
  }

  .bm-menu-wrap {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: ${theme('colors.white')};
    display: flex;
    align-items: center;
    justify-content: center;

    .bm-menu {
      font-size: ${rem(36)};
      height: auto !important;

      .bm-item-list {
        text-align: left;

        a {
          outline: none;
          color: ${theme('colors.blue')};

          &.active {
            color: ${theme('colors.orange')};
          }
          :hover {
            color: ${theme('colors.orange')};
          }
        }
      }
    }
  }
`;

const NavbarMobile = ({ isDark = true }) => {
  return (
    <StyledRow end={'xs'} style={{ textAlign: 'right' }} isDark={isDark}>
      <Col xs={9} sm={5}>
        <CtaArrow to="/contact">LET'S CHAT</CtaArrow>
      </Col>
      <Col xs={2} sm={2}>
        <Menu
          isOpen={false}
          pageWrapId={'page-wrap'}
          outerContainerId={'outer-container'}
          customBurgerIcon={<Burger />}
          right
          width={'100%'}
          height={'100%'}
        >
          <Link id="home" className="menu-item" activeClassName="active" to="/">
            Home
          </Link>
          <Link
            id="about"
            className="menu-item"
            activeClassName="active"
            to="/about"
          >
            About
          </Link>
          <Link
            id="services"
            className="menu-item"
            activeClassName="active"
            to="/services"
          >
            Services
          </Link>
          <Link
            id="blog"
            className="menu-item"
            activeClassName="active"
            to="/blog"
          >
            Blog
          </Link>
          <Link
            id="contact"
            className="menu-item"
            activeClassName="active"
            to="/contact"
          >
            Contact
          </Link>
        </Menu>
      </Col>
    </StyledRow>
  );
};

export default NavbarMobile;
