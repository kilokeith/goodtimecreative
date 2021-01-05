import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Logo from '../components/full-logo-white'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Logo style={{ width: '100%', color: '#fff' }} />
  </Layout>
)

export default IndexPage
