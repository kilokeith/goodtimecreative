import React from 'react';
import Layout from '../components/ui/layout';
import SEO from '../components/seo';

import HeroSection from '../components/home/hero-section';
import AboutSection from '../components/home/about-section';
import ServicesSection from '../components/home/services-section';
import TeamSection from '../components/home/team-section';
import WorkSection from '../components/home/work-section';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <HeroSection />
    <WorkSection />
    <AboutSection />
    <ServicesSection />
    <TeamSection />
  </Layout>
);

export default IndexPage;
