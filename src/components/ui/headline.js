import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { switchProp } from 'styled-tools';
import { colorStyle } from '@styles/mixins/colors';

const Headline = ({ children, size, color, ...props }) => (
  <StyledHTag as={size} color={color} {...props}>
    {children}
  </StyledHTag>
);

const StyledHTag = styled.h1`
  ${colorStyle};
  text-transform: uppercase;

  ${switchProp('size', {
    h1: css`
      font-size: 4rem;
    `,
    h2: css`
      font-size: 3rem;
    `,
    h3: css`
      font-size: 2rem;
    `,
    h4: css`
      font-size: 1rem;
    `,
  })}
`;

Headline.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
};

Headline.defaultProps = {
  size: 'h1',
  color: 'white',
};

export default Headline;
