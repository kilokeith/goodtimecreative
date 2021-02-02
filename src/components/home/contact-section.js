import React from 'react';
import styled from 'styled-components';
import Container from '../ui/container';
import Row from '../ui/row';
import Col from '../ui/col';
import useScript from '@hooks/use-script';

const floFormId = '601838a177357063844bf7d8';
const floFormElmId = `fd-form-${floFormId}`;

const ContactSection = () => {
  useScript(
    `https://assets.flodesk.com/universal.js?v=${new Date().getTime()}`,
    true,
    () => {
      // check for div with id
      const interval = setInterval(() => {
        if (
          document.getElementById(floFormElmId) &&
          window &&
          typeof window.fd === 'function'
        ) {
          // call the floform setup
          window.fd('form', {
            formId: floFormId,
            containerEl: `#${floFormElmId}`,
          });
          // stop interval from checking
          clearInterval(interval);
        }
      }, 200);
    }
  );

  return (
    <StyledSection id="contact">
      <Container>
        <Row align="center" justify="center">
          <Col xs={12}>
            <div id={floFormElmId}></div>
          </Col>
        </Row>
      </Container>
    </StyledSection>
  );
};

/* STYLED Elements */
const StyledSection = styled.section``;

export default ContactSection;
