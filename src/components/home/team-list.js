import React from 'react';
import styled from 'styled-components';
import { theme } from 'styled-tools';
import { Row, Col } from 'react-grid-system';
import TeamMember from './team-member';

const teamBios = [
  {
    id: 'marissa',
    name: 'Marissa Hohner',
    title: 'Founder & CEO',
    bio:
      'Marissa has over 10 years’ experience in sales, marketing, and operations management. Marissa found her home when she entered the exhibit and event industry. She lives by her color coded calendar, finds complex excel files to be a thing of beauty, and always has a hot cup of coffee nearby.',
  },
  {
    id: 'grace',
    name: 'Grace Pastore',
    title: 'Creative Director',
    bio:
      'Grace has over 20 years of design, production, and creative development experience. Her eye for detail is impeccable, she has a drive unmatched by others, and her ability to manage fifteen tasks at once without missing a beat is true magic.',
  },
  {
    id: 'brittney',
    name: 'Brittney De Mik',
    title: 'Graphic Designer',
    bio:
      'Britt has 10 years’ graphic design experience and she is also a photographer. Britt’s infectious energy is something that keeps the team (and the party) going! She enjoys true crime documentaries, Dunkin’ Donuts coffee, and essential oils. The soundtrack to her life is: anything by Lizzo.',
  },
];

const TeamList = () => {
  return (
    <Row justify="center">
      {teamBios &&
        teamBios.map(member => {
          return (
            <Col xs={12} md={6} lg={4} key={`team-member-profile-${member.id}`}>
              <TeamMember {...member} />
            </Col>
          );
        })}
    </Row>
  );
};

/* STYLED Elements */

export default TeamList;
