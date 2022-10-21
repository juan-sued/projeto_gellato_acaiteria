import styled from 'styled-components';
import TitleAndArrow from '../TitleAndArrow';

import CardFeedback from './CardFeedback';
export default function FeedBacks({ titleSession }) {
  return (
    <Container>
      <TitleAndArrow titleSession={titleSession} />
      <FeedBacksContainer>
        <CardFeedback />
        <CardFeedback />
        <CardFeedback />
      </FeedBacksContainer>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 70px;
`;

const FeedBacksContainer = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 200px;

  padding: 10px;
`;
