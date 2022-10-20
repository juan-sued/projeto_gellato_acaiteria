import { useNavigate } from 'react-router-dom';
import { formatPrice } from '../../../util/format';

import { Container, Total } from './styles';
import styled from 'styled-components';

import requestOrder from './requestOrder';
import { useAuth } from '../../../hooks/useAuth';
import { useCart } from '../../../hooks/useCart';

import copoHome2 from '../../../assets/copoHome2.png';
import iconremove from '../../../assets/iconremove.svg';

import iconpencil from '../../../assets/iconpencil.svg';
import { useState } from 'react';

export default function Cart({ to, message, isSigned = false }) {
  const { userInfo, signOut } = useAuth();

  let navigate = useNavigate();

  const { cart, updateProductAmount, removeProduct, setCart } = useCart();

  const cartFormatted = cart.map(product => ({
    ...product,
    priceFormatted: formatPrice(product.price),
    subTotal: formatPrice(product.price * product.amount)
  }));
  const total = formatPrice(
    cart.reduce((sumTotal, product) => {
      return sumTotal + product.price * product.amount;
    }, 0)
  );

  function handleProductIncrement(product) {
    updateProductAmount({ productId: product._id, amount: product.amount + 1 });
  }

  function handleProductDecrement(product) {
    updateProductAmount({ productId: product._id, amount: product.amount - 1 });
  }

  function handleRemoveProduct(productId) {
    removeProduct(productId);
  }
  function handleCreateOrder() {
    const books = cart.map(books => {
      return {
        id: books._id,
        name: books.name,
        price: books.price,
        image: books.image,
        amount: books.amount
      };
    });

    const orderData = {
      user: userInfo.email,
      books
    };
    const sucess = () => {
      setCart([]);
      localStorage.removeItem('gellatoCart');
    };

    requestOrder(orderData, signOut, sucess);
  }

  const objctResponseAPI = {
    listMyFavoriteds: [
      {
        id: 2,
        image: copoHome2,
        title: '1 Litro',
        name: 'acaizaum',
        priceFormatted: '20.50'
      },
      {
        id: 2,
        image: copoHome2,
        title: '1 Litro',
        price: '20,00'
      },
      {
        image: copoHome2,
        description: '1 Litro',
        price: '20,00'
      },
      {
        image: copoHome2,
        description: '1 Litro',
        price: '20,00'
      }
    ],
    listMoreOrders: [
      {
        id: 2,
        image: copoHome2,
        title: '1 Litro',
        name: 'acaizaum',
        priceFormatted: '20.50'
      },
      {
        id: 3,
        image: copoHome2,
        title: '1 Litro',
        name: 'acaizaum',
        priceFormatted: '20.50'
      },
      {
        id: 4,
        image: copoHome2,
        title: '1 Litro',
        name: 'acaizaum',
        priceFormatted: '20.50'
      },
      {
        id: 5,
        image: copoHome2,
        title: '1 Litro',
        name: 'acaizaum',
        priceFormatted: '20.50'
      }
    ]
  };
  const [inputQtd, setInputQtd] = useState(1);

  const atualiza = e => {
    setInputQtd(e.target.value);
  };

  return (
    <Container>
      <ProductTable>
        <div className="itemTable">
          <img src={copoHome2} alt="" />
          <div className="column">
            <div className="nameColumn">Preço</div>
            <p className="value"> R$ 20,60</p>
          </div>
          <div className="column">
            <div className="nameColumn">Qtd.</div>
            <input
              type="number"
              name="qtd"
              className="inputQntd"
              value={inputQtd}
              onChange={atualiza}
              required
              disabled={true}
              min={1}
            />
          </div>
          <div className="column">
            <div className="nameColumn">SubTotal</div>
            <p className="value">R$ 20,60</p>
          </div>
          <div className="column buttons">
            <img src={iconremove} alt="" />
            <img src={iconpencil} alt="" />
          </div>
        </div>
      </ProductTable>

      <footer>
        {isSigned ? (
          <button type="button" onClick={handleCreateOrder}>
            Finalizar Compra
          </button>
        ) : (
          <button type="button" onClick={() => navigate(to)}>
            Fazer login
          </button>
        )}
        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}
export const ProductTable = styled.div`
  width: 100%;
  display: flex;

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

      .inputQntd {
        font-size: 18px;
        width: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #d4d4d4;
        font-family: 'Jost', sans-serif;
        border-radius: 4px;
        padding-left: 6px;

        background: #ffffff;
        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);

        color: #000000;
      }
    }

    img {
      height: 50px;
    }
  }
`;
