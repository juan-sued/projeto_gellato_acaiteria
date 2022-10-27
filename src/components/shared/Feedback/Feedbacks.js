import styled from 'styled-components';
import TitleAndArrow from '../TitleAndArrow';
import { useState } from 'react';
import CardFeedback from './CardFeedback';

export default function FeedBacks({ titleSession }) {
  const arrayFeedbacks = [
    {
      name: 'Alessandra Meireles',
      points: '1,0',
      feedback: 'Açaí muito bom, dei um só pra ver como fica só com uma estrelinha'
    },
    {
      name: 'Ronaldinho Fenômeno',
      points: '5,0',
      feedback: 'A RAZÃO DE EU TER SAÍDO DE CAMPO!!'
    },
    {
      name: 'Rogério Siena',
      points: '3,0',
      feedback: 'Melhor que agarrar pro São Paulo, mas dei 3 pq sou calvo'
    },
    {
      name: 'Silvio Santos',
      points: '2,5',
      feedback:
        ' MAOOOEEEH Colocaria mais calda de petróleo da próxima vez MAAAOOEEH O AVIÃOZINHO'
    }
  ];

  return (
    <Container>
      <TitleAndArrow titleSession={titleSession} />
      <FeedBacksContainer>
        {arrayFeedbacks.map((feedback, index) => (
          <CardFeedback
            key={index}
            name={feedback.name}
            points={feedback.points}
            feedback={feedback.feedback}
          />
        ))}
      </FeedBacksContainer>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 70px;
  width: 100%;
`;

const FeedBacksContainer = styled.div`
  margin-top: 50px;
  width: 100%;
  padding: 10px;
`;
