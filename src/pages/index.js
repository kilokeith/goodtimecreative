import React from 'react';
import styled from 'styled-components';
// import { Link } from 'gatsby'
import { theme } from 'styled-tools';

import Layout from '../components/layout';
import Logo from '../images/logos/logo-full-large.jpg';
import SEO from '../components/seo';

const StyledLogo = styled.img`
  width: 100%;
  color: ${theme('colors.black')};
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StyledLogo src={Logo} alt="Good Time Creative" />
  </Layout>
);

export default IndexPage;
