/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { ScreenClassProvider } from 'react-grid-system';
import Header from '../header';
import Container from './container';
import Footer from '../footer';
import FullWidthSection from './full-wdth-section';
import theme from '../../styles/theme';
// include global css with normalize.css reset
import { GlobalStyle } from '../../styles/global.css.js';
import { useSiteMetadata } from '../../hooks/use-site-metadata';

const Layout = ({ children }) => {
  const siteMetadata = useSiteMetadata();

  return (
    <ThemeProvider theme={theme}>
      <ScreenClassProvider>
        <GlobalStyle />

        <div id="page-outter-wrapper">
          <Container fluid>
            <Header siteTitle={siteMetadata?.title || `GTC Home`} />
          </Container>

          <Container>
            <main>{children}</main>
          </Container>

          <FullWidthSection style={{ backgroundColor: 'black' }}>
            <Container>
              <Footer />
            </Container>
          </FullWidthSection>
        </div>
      </ScreenClassProvider>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;