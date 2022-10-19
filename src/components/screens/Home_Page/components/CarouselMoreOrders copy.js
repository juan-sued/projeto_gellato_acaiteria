import CardCarouselProduct from '../../../shared/CardCarouselProduct';
import CarouselListProduct from '../../../shared/CarouselListProduct';
import acai from '../../../../assets/copoHome.png';
import CardCarouselOrdersAndFavoriteds from './CardCarouselOrdersAndFavoriteds';
export default function CarouselMoreOrders() {
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
    <CarouselListProduct title={'Mais pedidos'} margin_top={'0'}>
      {listMoreOrders.map((order, index) => (
        <CardCarouselOrdersAndFavoriteds
          key={index}
          image={order.image}
          description={order.description}
          price={order.price}
        />
      ))}
    </CarouselListProduct>
  );
}
