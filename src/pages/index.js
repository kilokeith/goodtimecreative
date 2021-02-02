import React from 'react';
import Layout from '../components/ui/layout';
import SEO from '../components/seo';

import HeroSection from '../components/home/hero-section';
import AboutSection from '../components/home/about-section';
import ServicesSection from '../components/home/services-section';
import TeamSection from '../components/home/team-section';
import WorkSection from '../components/home/work-section';
import ContactSection from '../components/home/contact-section';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <HeroSection />
    <AboutSection />
    <WorkSection />
    <ServicesSection />
    <TeamSection />
    <ContactSection />
  </Layout>
);

export default IndexPage;
