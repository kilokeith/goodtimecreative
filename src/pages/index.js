import React from 'react';
// import { Link } from 'gatsby'

import Layout from '../components/layout';
import Logo from '../images/logos/logo-full-large.jpg';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <img src={Logo} style={{ width: '100%', color: '#000' }} />
  </Layout>
);

export default IndexPage;
