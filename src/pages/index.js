import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/ui/layout';
import SEO from '../components/seo';

import HeroSection from '../components/home/hero-section';
import AboutSection from '../components/home/about-section';
import ServicesSection from '../components/home/services-section';
import TeamSection from '../components/home/team-section';
import WorkSection from '../components/home/work-section';
import ContactSection from '../components/home/contact-section';

const IndexPage = () => {
  const { cardImage } = useStaticQuery(graphql`
    query {
      cardImage: file(relativePath: { eq: "logos/logo-full-large.jpg" }) {
        childImageSharp {
          resize(width: 1200) {
            src
            height
            width
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Home" image={cardImage?.childImageSharp?.resize} />

      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ServicesSection />
      <TeamSection />
      <ContactSection />
    </Layout>
  );
};

export default IndexPage;
