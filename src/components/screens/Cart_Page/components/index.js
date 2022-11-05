import { useNavigate } from 'react-router-dom';
import { formatPrice } from '../../../../util/format';

import { Container, Total } from './styles';
import styled from 'styled-components';

import requestOrder from './requestOrder';

import { useCart } from '../../../../hooks/useCart';

import ItemProductTable from '../ItemProductTable';
import { useAuth } from '../../../../hooks/useAuth';

import TitlePage from '../../../shared/TitlePage';

export default function Cart({ to, message, isSigned = false }) {
  const { userInfo, signOut } = useAuth();

  let navigate = useNavigate();

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
    const order = cart.map(products => {
      return {
        id: products._id,
        name: products.name,
        price: products.price,
        image: products.image,
        amount: products.amount
      };
    });

    const orderData = {
      user: userInfo.idUser,
      order
    };

    const sucess = () => {
      setCart([]);
      localStorage.removeItem('gellatoCart');
    };

    requestOrder(orderData, signOut, sucess);
  }

  return (
    <>
      <Back />
      <Container>
        <TitlePage title={'Meu Carrinho'} to={'/'} />
        <ProductTable>
          {cartFormatted.map((product, index) => (
            <ItemProductTable
              key={product.id}
              image={product.image}
              price={product.priceFormatted}
              subTotal={product.subTotal}
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
            <button type="button" onClick={() => navigate('/')}>
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

const ProductTable = styled.div`
  width: 100%;
`;
