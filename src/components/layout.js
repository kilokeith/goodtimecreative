/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import { ScreenClassProvider } from 'react-grid-system';
import Header from './header';
import Container from './container';
import Footer from './footer';
import theme from '../styles/theme';
// include global css with normalize.css reset
import { GlobalStyle } from '../styles/global.css.js';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      <ScreenClassProvider>
        <GlobalStyle />
        <div id="outer-container">
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
          <Container>
            <main>{children}</main>

            <Footer />
          </Container>
        </div>
      </ScreenClassProvider>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
