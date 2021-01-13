/**
 * Layout component that uses the react-grid-system Container
 * See: https://sealninja.github.io/react-grid-system/
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container as GridContainer } from 'react-grid-system';

const StyledContainer = styled(GridContainer)``;

const Container = ({ children, ...props }) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
