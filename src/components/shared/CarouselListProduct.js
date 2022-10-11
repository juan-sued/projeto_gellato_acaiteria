import styled from 'styled-components';

import acai from '../../assets/copoacai.svg';
import CardCarouselProduct from './cardCarouselProduct';

import TitleAndArrow from './TitleAndArrow';

export default function CarouselListProduct() {
  return (
    <CarouselListContainer>
      <div className="titleAndDescriptionContainer">
        <TitleAndArrow />
      </div>
      <div className="rowOfCardsContainer">
        <CardCarouselProduct />
      </div>
    </CarouselListContainer>
  );
}

const CarouselListContainer = styled.div`
  width: 100%;
  height: 400px;

  .rowOfCardsContainer {
    margin-top: 40px;
    width: 100%;
    height: 450px;
    display: flex;
    justify-content: start;
    align-items: center;
    overflow-y: scroll;
    padding-left: 20px;
  }
`;
