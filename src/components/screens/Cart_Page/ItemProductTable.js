import styled from 'styled-components';
import iconremove from '../../../assets/iconremove.svg';

import iconpencil from '../../../assets/iconpencil.svg';
import { useState } from 'react';
import InputNumber from '../../shared/InputNumber';

function ItemProductTable({ image, price, subTotal, description }) {
  const [stateInput, setStateInput] = useState(true);

  const editQntd = () => {
    setStateInput(false);
  };

  return (
    <ItemProductTableStyle>
      <div className="itemTable">
        <div className="column">
          <img className="productImage" src={image} alt="" />
          <div className="nameColumn description">{description}</div>
        </div>

        <div className="column">
          <div className="nameColumn">Preço</div>
          <p className="value">{price}</p>
        </div>
        <div className="column">
          <div className="nameColumn">Qtd.</div>
          <InputNumber stateInput={stateInput} />
        </div>
        <div className="column">
          <div className="nameColumn">SubTotal</div>
          <p className="value">{subTotal}</p>
        </div>

        <div className="containerDivider">
          <div className="divider"></div>

          <div className="column buttons">
            <button className="iconButton">
              <img src={iconremove} alt="" />
            </button>
            <button className="iconButton" onClick={editQntd}>
              <img src={iconpencil} alt="" />
            </button>
          </div>
        </div>
      </div>
    </ItemProductTableStyle>
  );
}
export const ItemProductTableStyle = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;

  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);

  background-color: #9747ff;
  border-radius: 5px;

  .itemTable {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    padding-top: 14px;
    padding-bottom: 14px;
    color: white;
    font-weight: 700;
    height: 100px;
    align-items: center;

    .containerDivider {
      display: flex;
      height: 100%;
      width: 35px;
      justify-content: space-between;
    }

    .divider {
      height: 100%;
      width: 1px;
      background-color: white;
    }
    .column {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      .nameColumn {
        font-size: 16px;
      }
      img {
        width: 20px;
        height: 20px;
      }

      .value {
        font-size: 16px;
      }
      button {
        background-color: transparent;
        border: none;
        ::hover {
          cursor: pointer;
          box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
      }
    }

    .productImage {
      min-height: 50px;
      min-width: fit-content;
      border-radius: 10px;
    }
    .column .description {
      font-size: 14px;
    }
  }
`;
export default ItemProductTable;
