import styled from 'styled-components';

import TitleAndArrow from './TitleAndArrow';

export default function CarouselListProduct({ title, children, margin_top }) {
  console.log(title);

  return (
    <CarouselListContainer margin_top={margin_top}>
      {title ? <TitleAndArrow>{title}</TitleAndArrow> : ''}
      <div className="rowOfCardsContainer">{children}</div>
    </CarouselListContainer>
  );
}

const CarouselListContainer = styled.div`
  margin-top: 100px;
  width: 100%;
  min-width: 100%;
  height: 400px;

  margin-right: 0;

  .rowOfCardsContainer {
    margin-top: ${props => props.margin_top}px;
    width: 100%;
    height: 450px;
    display: flex;
    justify-content: start;
    align-items: center;
    overflow-x: scroll;
    padding-left: 13px;
    margin-right: 0px;
  }
`;
