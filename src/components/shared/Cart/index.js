import { useNavigate } from 'react-router-dom';
import { formatPrice } from '../../../util/format';

import { Container, Total } from './styles';
import styled from 'styled-components';

import requestOrder from './requestOrder';
import { useAuth } from '../../../hooks/useAuth';
import { useCart } from '../../../hooks/useCart';

import copoHome2 from '../../../assets/copoHome2.jpg';

import ItemProductTable from '../../screens/Cart_Page/ItemProductTable';

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
        title: '700 ml',
        name: 'acaizaum',
        priceFormatted: 'R$ 20,50'
      },
      {
        id: 3,
        image: copoHome2,
        title: '300ml',
        name: 'acaizaum',
        priceFormatted: 'R$ 20,50'
      },
      {
        id: 4,
        image: copoHome2,
        title: '500ml',
        name: 'acaizaum',
        priceFormatted: 'R$ 20,50'
      },
      {
        id: 5,
        image: copoHome2,
        title: '1 Litro',
        name: 'acaizaum',
        priceFormatted: 'R$ 20,50'
      },
      {
        id: 5,
        image: copoHome2,
        title: '200ml',
        name: 'acaizaum',
        priceFormatted: 'R$ 20,50'
      },
      {
        id: 5,
        image: copoHome2,
        title: '1 Litro',
        name: 'acaizaum',
        priceFormatted: 'R$ 20,50'
      },
      {
        id: 5,
        image: copoHome2,
        title: '300ml',
        name: 'acaizaum',
        priceFormatted: 'R$ 20,50'
      },
      {
        id: 5,
        image: copoHome2,
        title: '1 Litro',
        name: 'acaizaum',
        priceFormatted: 'R$ 20,50'
      },
      {
        id: 5,
        image: copoHome2,
        title: '1 Litro',
        name: 'acaizaum',
        priceFormatted: 'R$ 20,50'
      },
      {
        id: 5,
        image: copoHome2,
        title: '1 Litro',
        name: 'acaizaum',
        priceFormatted: 'R$ 20,50'
      },
      {
        id: 5,
        image: copoHome2,
        title: '1 Litro',
        name: 'acaizaum',
        priceFormatted: 'R$ 20,50'
      }
    ]
  };

  return (
    <Container>
      <ProductTable>
        {objctResponseAPI.listMoreOrders.map((product, index) => (
          <ItemProductTable
            key={index}
            image={product.image}
            price={product.priceFormatted}
            subTotal={product.priceFormatted}
            description={product.title}
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
  );
}
export const ProductTable = styled.div`
  width: 100%;
`;
