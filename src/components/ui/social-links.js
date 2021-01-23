import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme, prop } from 'styled-tools';

import { ReactComponent as Instagram } from '@images/icons/instagram.svg';
import { ReactComponent as Facebook } from '@images/icons/facebook.svg';
import { ReactComponent as Twitter } from '@images/icons/twitter.svg';
import { ReactComponent as LinkedIn } from '@images/icons/linkedin.svg';
import { ReactComponent as Pinterest } from '@images/icons/pinterest.svg';

import { useSiteMetadata } from '@hooks/use-site-metadata';
import { colorStyle } from '@styles/mixins/colors';

const SocialLink = ({ platform, size, color, ...props }) => {
  const { social } = useSiteMetadata();
  // grab icon and url
  let Icon, url;
  switch (platform) {
    case 'instagram':
      Icon = Instagram;
      url = social.instagram;
      break;
    case 'facebook':
      Icon = Facebook;
      url = social.facebook;
      break;
    case 'twitter':
      Icon = Twitter;
      url = social.twitter;
      break;
    case 'linkedin':
      Icon = LinkedIn;
      url = social.linkedIn;
      break;
    case 'pinterest':
      Icon = Pinterest;
      url = social.pinterest;
      break;
    default:
      Icon = Instagram;
      url = social.instagram;
      break;
  }

  return (
    <StyledLink href={url} target="_blank" size={size} color={color} {...props}>
      <Icon />
    </StyledLink>
  );
};

const StyledLink = styled.a`
  ${colorStyle};
  display: inline-block;
  font-size: ${prop('size')}px;
  transition: color 0.3s;
  &:hover {
    color: ${theme('colors.white')};
  }
  svg {
    width: ${prop('size')}px;
    height: ${prop('size')}px;
  }
`;

SocialLink.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  platform: PropTypes.oneOf([
    'instagram',
    'facebook',
    'twitter',
    'linkedin',
    'pinterest',
  ]).isRequired,
};

SocialLink.defaultProps = {
  size: 32,
  color: 'red',
  platform: 'instagram',
};

export default styled(SocialLink)``;
