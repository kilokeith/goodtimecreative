import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { useTeamAvatar } from '@hooks/use-team-avatar';

const TeamMember = ({ name, title, bio, id, i }) => {
  const avatars = useTeamAvatar(id);
  const img = avatars.image.node.childImageSharp.fluid;
  const imgHover = avatars.hover.node.childImageSharp.fluid;

  return (
    <TeamProfile>
      <StyledAvatar
        data-sal="zoom-out"
        data-sal-delay={Math.round(200 * i) + 100}
        data-sal-duration="300"
        data-sal-easing="ease"
      >
        <StyledImage>
          <Image fluid={img} alt={name} />
        </StyledImage>
        <StyledImage>
          <Image fluid={imgHover} alt={name} />
        </StyledImage>
      </StyledAvatar>
      <StyledName>{name}</StyledName>
      <StyledTitle>{title}</StyledTitle>
      <StyledBio>{bio}</StyledBio>
    </TeamProfile>
  );
};

/* STYLED Elements */
const StyledImage = styled.div``;
const StyledAvatar = styled.div`
  position: relative;

  ${StyledImage} {
    width: 100%;
    height: auto;

    &:last-of-type {
      position: absolute;
      top: 0;
      left: 0;

      transition: opacity 0.5s;
      opacity: 0;
    }

    img {
      margin: 0;
      padding: 0;
    }
  }

  &:hover {
    ${StyledImage}:last-of-type {
        opacity: 1;
      }
    }
  }
`;
const StyledName = styled.figcaption`
  margin-top: 1rem;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
`;
const StyledTitle = styled.figcaption`
  font-family: 'Gotham Book';
  font-style: italic;
  font-size: 18px;
  line-height: 24px;
`;
const StyledBio = styled.p`
  margin-top: 1rem;
  text-align: left;
  font-size: 16px;
`;

const TeamProfile = styled.figure`
  text-align: center;
`;

export default TeamMember;
