import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSection = styled.section``;

const Section = ({ children }) => <StyledSection>{children}</StyledSection>;

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

Section.defaultProps = {};

export default Section;
