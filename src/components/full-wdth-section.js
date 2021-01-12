import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from './section';

const StyledSection = styled(Section)`
  width: 100%;
`;

const FullWidthSection = ({ children }) => (
  <StyledSection>{children}</StyledSection>
);

FullWidthSection.propTypes = {
  children: PropTypes.node.isRequired,
};

FullWidthSection.defaultProps = {};

export default FullWidthSection;
