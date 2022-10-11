import styled from 'styled-components';

import acai from '../../assets/copoacai.svg';
import CardCarouselProduct from './cardCarouselProduct';

import TitleAndArrow from './TitleAndArrow';

export default function CarouselListProduct() {
  const listMoreOrders = [
    {
      image: acai,
      description: '1 Litro',
      price: '20,00'
    },
    {
      image: acai,
      description: '1 Litro',
      price: '20,00'
    },
    {
      image: acai,
      description: '1 Litro',
      price: '20,00'
    },
    {
      image: acai,
      description: '1 Litro',
      price: '20,00'
    }
  ];

  return (
    <CarouselListContainer>
      <div className="titleAndDescriptionContainer">
        <TitleAndArrow />
      </div>
      <div className="rowOfCardsContainer">
        {listMoreOrders.map((order, index) => (
          <CardCarouselProduct
            image={order.image}
            description={order.description}
            price={order.price}
          />
        ))}
      </div>
    </CarouselListContainer>
  );
}

const CarouselListContainer = styled.div`
  width: 100%;
  min-width: 100%;
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
    margin-right: 0px;
  }
`;
