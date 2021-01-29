import React from 'react';
import styled from 'styled-components';
import { theme } from 'styled-tools';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { Row, Col } from 'react-grid-system';
import { slide as Menu } from 'react-burger-menu';
import { rem } from 'polished';
import { ReactComponent as Burger } from '@images/icons/menu.svg';

const NavbarMobile = () => {
  return (
    <StyledRow justify="end" style={{ textAlign: 'right' }} nogutter>
      <Col xs={2} sm={2}>
        <Menu
          isOpen={false}
          pageWrapId={'layout-main'}
          outerContainerId={'page-outter-wrapper'}
          customBurgerIcon={<Burger />}
          right
          width={'100%'}
          height={'100%'}
        >
          <AnchorLink
            id="home"
            className="menu-item"
            activeClassName="active"
            to="/"
          >
            Home
          </AnchorLink>
          <AnchorLink
            id="work"
            className="menu-item"
            activeClassName="active"
            to="/#work"
          >
            Work
          </AnchorLink>
          <AnchorLink
            id="about"
            className="menu-item"
            activeClassName="active"
            to="/#about"
          >
            About
          </AnchorLink>
          <AnchorLink
            id="contact"
            className="menu-item"
            activeClassName="active"
            to="/#footer"
          >
            Contact
          </AnchorLink>
        </Menu>
      </Col>
    </StyledRow>
  );
};

const StyledRow = styled(Row)`
  button {
    outline: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .bm-burger-button {
    position: relative;
    width: 2rem;
    height: 2rem;
    display: inline-block;
    outline: none;
  }

  .bm-cross-button {
    position: absolute;
    width: 2rem !important;
    height: 2rem !important;
    right: 2rem !important;
    top: 2rem !important;

    .bm-cross {
      background: ${theme('colors.red')};
      height: 2rem !important;
    }
    :hover .bm-cross {
      background: ${theme('colors.red')};
    }
  }

  .bm-menu-wrap {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: ${theme('colors.black')};
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
          color: ${theme('colors.white')};

          &.active {
            color: ${theme('colors.red')};
          }
          :hover {
            color: ${theme('colors.red')};
          }
        }
      }
    }
  }
`;

export default NavbarMobile;
