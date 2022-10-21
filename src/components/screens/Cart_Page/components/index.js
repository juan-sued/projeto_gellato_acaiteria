import { useNavigate } from 'react-router-dom';
import { formatPrice } from '../../../../util/format';

import { Container, Total } from './styles';
import styled from 'styled-components';

import requestOrder from './requestOrder';

import { useCart } from '../../../../hooks/useCart';

import copoHome2 from '../../../../assets/copoHome2.jpg';

import ItemProductTable from '../ItemProductTable';
import { useAuth } from '../../../../hooks/useAuth';

export default function Cart({ to, message, isSigned = false }) {
  const { userInfo, signOut } = useAuth();

  const navigate = useNavigate();

  const { cart, setCart } = useCart();

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

  function handleCreateOrder() {
    const products = cart.map(products => {
      return {
        id: products._id,
        name: products.name,
        price: products.price,
        image: products.image,
        amount: products.amount
      };
    });

    const orderData = {
      user: userInfo.email,
      products
    };

    const sucess = () => {
      setCart([]);
      localStorage.removeItem('gellatoCart');
    };

    requestOrder(orderData, signOut, sucess);
  }

  const objctResponseAPI = {
    listMoreOrders: [
      {
        id: 2,
        image: copoHome2,
        title: '700 ml',
        name: 'acaizaum',
        priceFormatted: 'R$ 20,50',
        amount: 2
      },
      {
        id: 3,
        image: copoHome2,
        title: '300ml',
        name: 'acaizaum',
        priceFormatted: 'R$ 20,50',
        amount: 1
      },
      {
        id: 4,
        image: copoHome2,
        title: '500ml',
        name: 'acaizaum',
        priceFormatted: 'R$ 20,50',
        amount: 0
      },
      {
        id: 5,
        image: copoHome2,
        title: '1 Litro',
        name: 'acaizaum',
        priceFormatted: 'R$ 20,50',
        amount: 2
      },
      {
        id: 6,
        image: copoHome2,
        title: '1 Litro',
        name: 'acaizaum',
        priceFormatted: 'R$ 20,50',
        amount: 2
      },
      {
        id: 7,
        image: copoHome2,
        title: '1 Litro',
        name: 'acaizaum',
        priceFormatted: 'R$ 20,50',
        amount: 2
      },
      {
        id: 8,
        image: copoHome2,
        title: '1 Litro',
        name: 'acaizaum',
        priceFormatted: 'R$ 20,50',
        amount: 2
      }
    ]
  };

  return (
    <>
      <Back />
      <Container>
        <TitleContainer>Meu Carrinho</TitleContainer>
        <ProductTable>
          {objctResponseAPI.listMoreOrders.map((product, index) => (
            <ItemProductTable
              key={product.id}
              image={product.image}
              price={product.priceFormatted}
              subTotal={product.priceFormatted}
              description={product.title}
              amount={product.amount}
              id={product.id}
            />
          ))}
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
    </>
  );
}

const Back = styled.div`
  background-color: '#EEEDF4';
  position: fixed;
  min-height: 100%;
  min-width: 100%;
  z-index: -1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  height: 100px;
`;

const ProductTable = styled.div`
  width: 100%;
`;
