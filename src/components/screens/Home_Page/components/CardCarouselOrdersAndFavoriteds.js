import styled from 'styled-components';

export default function CardCarouselOrdersAndFavoriteds({ image, description, price }) {
  return (
    <CardOfProduct>
      <img src={image} alt="" />

      <h1 className="title">{description}</h1>
      <div className="priceProductContainer">
        <p className="priceProduct">R$ {price}</p>
      </div>
    </CardOfProduct>
  );
}

const CardOfProduct = styled.div`
  height: 250px;
  width: 165px;
  max-width: 175px;
  background-color: #8e1c5a;
  border-radius: 10px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 19px 19px 19px;
  color: white;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.3);

  .title {
    font-size: 40px;
    margin-bottom: 20px;
    font-weight: 700;
  }

  .priceProductContainer {
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    p {
      font-size: 20px;
      font-weight: 600;
    }
  }

  img {
    max-width: 100%;
    max-width: 175px;
    border-radius: 10px 10px 59px 59px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;
