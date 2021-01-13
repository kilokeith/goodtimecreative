import React from 'react';
import styled from 'styled-components';
// import { Link } from 'gatsby'
// import { theme } from 'styled-tools';
// import { Row, Col } from 'react-grid-system';

import Layout from '../components/ui/layout';
import HeroSection from '../components/home/hero-section';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <HeroSection />
  </Layout>
);

export default IndexPage;
