import React from 'react';
// import PropTypes from 'prop-types';
import Obfuscate from 'react-obfuscate';
import styled from 'styled-components';
import { theme } from 'styled-tools';
import { Row, Col } from 'react-grid-system';
import Headline from './ui/headline';
import SocialLink from './ui/social-links';
import { useSiteMetadata } from '@hooks/use-site-metadata';

const Footer = () => {
  const { contactEmail, contactAddress, siteUrl } = useSiteMetadata();

  return (
    <StyledFooter>
      <Row justify="start">
        <Col xs={12} sm={10} md={6}>
          <Headline size="h3" color={'white'}>
            Let's Work Together
          </Headline>

          <p>{contactAddress}</p>

          <SocialsRow>
            <li>
              <SocialLink platform="instagram" size={32} />
            </li>
            <li>
              <SocialLink platform="facebook" size={32} />
            </li>
            <li>
              <SocialLink platform="twitter" size={32} />
            </li>
            <li>
              <SocialLink platform="linkedin" size={32} />
            </li>
            <li>
              <SocialLink platform="pinterest" size={32} />
            </li>
          </SocialsRow>

          <p>
            <Obfuscate
              email={contactEmail}
              headers={{
                subject: 'GTC Site Contact',
              }}
            />
          </p>
        </Col>
      </Row>
      © {new Date().getFullYear()},{' '}
      <a href={siteUrl}>Good Time Creative, LLC</a>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 4rem 2rem 4rem 2rem;
  color: ${theme('colors.white')};
  p {
    white-space: pre-line;
    line-height: 0.75em;
  }
`;

const SocialsRow = styled.ul`
  list-style: none;
  display: inline-block;
  margin: 0;
  padding: 0;
  li {
    list-style: none;
    display: inline-block;
    margin-right: 1rem;
    &::last-of-type {
      margin-right: 0;
    }

    ${SocialLink} {
      &:hover {
        color: ${theme('colors.white')};
      }
    }
  }
`;

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
