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
      'Donec commodo faucibus mauris, eu gravida lectus finibus in. Aliquam pulvinar suscipit sapien, a ultricies magna porta sed. Fusce purus lorem, eleifend ut facilisis quis, aliquam eu sapien. Nam pellentesque lectus vel tortor faucibus rhoncus. Donec feugiat vel dolor eu tempor. ',
  },
  {
    id: 'grace',
    name: 'Grace Pastore',
    title: 'Creative Director',
    bio:
      'Donec commodo faucibus mauris, eu gravida lectus finibus in. Aliquam pulvinar suscipit sapien, a ultricies magna porta sed. Fusce purus lorem, eleifend ut facilisis quis, aliquam eu sapien. Nam pellentesque lectus vel tortor faucibus rhoncus. Donec feugiat vel dolor eu tempor. ',
  },
  {
    id: 'brittney',
    name: 'Brittney DeMilk',
    title: 'Graphic Designer',
    bio:
      'Donec commodo faucibus mauris, eu gravida lectus finibus in. Aliquam pulvinar suscipit sapien, a ultricies magna porta sed. Fusce purus lorem, eleifend ut facilisis quis, aliquam eu sapien. Nam pellentesque lectus vel tortor faucibus rhoncus. Donec feugiat vel dolor eu tempor.',
  },
];

const TeamList = () => {
  return (
    <Row align="center" justify="center" nogutter nowrap>
      {teamBios &&
        teamBios.map(member => {
          return (
            <Col>
              <TeamMember {...member} />
            </Col>
          );
        })}
    </Row>
  );
};

/* STYLED Elements */

export default TeamList;
