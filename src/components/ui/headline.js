import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { switchProp, ifProp } from 'styled-tools';
import { colorStyle } from '@styles/mixins/colors';

const Headline = ({ children, size, color, ...props }) => (
  <StyledHTag as={size} color={color} {...props}>
    {children}
  </StyledHTag>
);

const StyledHTag = styled.h1`
  ${colorStyle};
  text-transform: uppercase;
  ${ifProp(
    'left',
    css`
      text-align: left;
    `
  )}
  ${ifProp(
    'center',
    css`
      text-align: center;
    `
  )}
  ${ifProp(
    'right',
    css`
      text-align: right;
    `
  )}

  ${switchProp('size', {
    h1: css`
      font-size: 4rem;
      font-weight: bold;
    `,
    h2: css`
      font-size: 3rem;
      font-weight: bold;
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
  left: PropTypes.bool,
  center: PropTypes.bool,
  right: PropTypes.bool,
};

Headline.defaultProps = {
  size: 'h1',
  color: 'white',
  left: false,
  center: false,
  right: false,
};

export default Headline;
