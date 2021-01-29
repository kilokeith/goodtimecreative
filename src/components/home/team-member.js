import React from 'react';
import styled from 'styled-components';
// import { theme } from 'styled-tools';
// import { Row, Col } from 'react-grid-system';
import Image from 'gatsby-image';
import { useTeamAvatar } from '@hooks/use-team-avatar';

const TeamMember = ({ name, title, bio, id }) => {
  const avatars = useTeamAvatar(id);
  console.log(id, avatars);
  const img = avatars.image.node.childImageSharp.fixed;
  const imgHover = avatars.hover.node.childImageSharp.fixed;

  return (
    <TeamProfile>
      <StyledAvatar fixed={img} alt={name} $src={img} $hover={imgHover} />
      <StyledName>{name}</StyledName>
      <StyledTitle>{title}</StyledTitle>
      <StyledBio>{bio}</StyledBio>
    </TeamProfile>
  );
};

/* STYLED Elements */
const StyledAvatar = styled(Image)``;
const StyledName = styled.figcaption``;
const StyledTitle = styled.figcaption``;
const StyledBio = styled.p`
  text-align: left;
`;

const TeamProfile = styled.figure`
  text-align: center;
`;

export default TeamMember;
