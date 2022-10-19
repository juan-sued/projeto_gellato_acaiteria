import { useState } from 'react';
import styled from 'styled-components';
import CardCarouselOrdersAndProducts from '../screens/Home_Page/components/CardCarouselOrdersAndProducts';
import CardCarouselProduct from './CardCarouselProduct';
import iconExitFavorites from '../../assets/iconExitFavorites.svg';
import iconFavorited from '../../assets/iconFavorited.svg';
import addFavorit from '../../assets/addFavorit.svg';
import TitleAndArrow from './TitleAndArrow';

export default function CarouselListProduct({ title, margin_top, objctResponseAPI }) {
  return (
    <CarouselListContainer margin_top={margin_top}>
      {title ? <TitleAndArrow>{title}</TitleAndArrow> : ''}
      <div className="rowOfCardsContainer">
        {objctResponseAPI.map((order, index) =>
          title === 'Mais pedidos' ? (
            <CardCarouselOrdersAndProducts
              key={index}
              image={order.image}
              description={order.description}
              price={order.price}
              icon={iconFavorited}
            />
          ) : title === 'Meus favoritos' ? (
            <CardCarouselOrdersAndProducts
              key={index}
              image={order.image}
              description={order.description}
              price={order.price}
              icon={iconExitFavorites}
            />
          ) : (
            <CardCarouselProduct
              key={index}
              image={order.image}
              description={order.description}
              price={order.price}
            />
          )
        )}
      </div>
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
