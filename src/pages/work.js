import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/ui/layout';
import SEO from '../components/seo';

const WorkPage = () => (
  <Layout>
    <SEO title="Featured Work" />
    <h1>Featured Work</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default WorkPage;
