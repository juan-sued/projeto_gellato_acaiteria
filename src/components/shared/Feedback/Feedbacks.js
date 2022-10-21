import styled from 'styled-components';
import TitleAndArrow from '../TitleAndArrow';

import CardFeedback from './CardFeedback';
export default function FeedBacks({ titleSession }) {
  const arrayFeedbacks = [
    {
      name: 'Mariana',
      points: '1,0',
      feedback:
        'Muito legal! Muito bom mesmo!!! Realmente incrível esse açaí é pftttttt!!'
    },
    {
      name: 'Mariana',
      points: '1,5',
      feedback:
        'Muito legal! Muito bom mesmo!!! Realmente incrível esse açaí é pftttttt!!'
    },
    {
      name: 'Mariana',
      points: '3,0',
      feedback:
        'Muito legal! Muito bom mesmo!!! Realmente incrível esse açaí é pftttttt!!'
    },
    {
      name: 'Mariana',
      points: '2,5',
      feedback:
        'Muito legal! Muito bom mesmo!!! Realmente incrível esse açaí é pftttttt!!'
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
  height: 200px;

  padding: 10px;
`;
