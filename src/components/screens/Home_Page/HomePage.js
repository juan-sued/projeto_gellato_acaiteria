import Main from '../../shared/Main';
import styled from 'styled-components';

import Arvore_de_acai from '../../../assets/arvoreacai.svg';

import { ImageArvoreAcai } from './styles';
import TitleStatus from './components/TitleStatus';

import SideBar from './components/sideBar';
import CardOfert from './components/CardOfert';
import WellcomeUser from './components/WellcomeUser';
import Divider from '../../shared/Divider';
import PlaceMyOrderButton from './components/PlaceMyOrderButton';

import CarouselListProduct from '../../shared/CarouselListProduct';

import copoHome2 from '../../../assets/copoHome2.png';
import copoHome from '../../../assets/copoHome.png';
import { formatPrice } from '../../../util/format';
import FeedBacks from '../../shared/Feedback/Feedbacks';
import TitleAndArrow from '../../shared/TitleAndArrow';
import SocialsButtons from '../../shared/SocialsButtons/SocialsButtons';
import OurHistory from '../../shared/OurHistory/OurHistory';

export default function HomePage() {
  const objctResponseAPI = {
    listMyFavoriteds: [
      {
        image: copoHome2,
        description: '1 Litro',
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
      },
      {
        image: copoHome2,
        description: '1 Litro',
        price: '20,00'
      }
    ],
    listMoreOrders: [
      {
        image: copoHome,
        description: '500 ml',
        price: '20.60',
        favorited: true
      },
      {
        image: copoHome,
        description: '1 Litro',
        price: '20,00'
      },
      {
        image: copoHome,
        description: '1 Litro',
        price: '20,00',
        favorited: true
      },
      {
        image: copoHome,
        description: '1 Litro',
        price: '20,00'
      }
    ]
  };

  return (
    <>
      <SideBar />
      <TitleStatus />
      <Main margin_top={'100'}>
        <WellcomeUser />
        <CardOfert />
        <Divider />
        <PlaceMyOrderButton />
        <Divider />
        <CarouselListProduct
          objctResponseAPI={objctResponseAPI.listMoreOrders}
          titleSession={'Mais pedidos'}
          margin_top={'50'}
        />
        <CarouselListProduct
          objctResponseAPI={objctResponseAPI.listMyFavoriteds}
          titleSession={'Meus favoritos'}
          margin_top={'50'}
        />
        <FeedBacks titleSession={'Feedbacks'} />

        <SocialsButtons />

        <OurHistory />
      </Main>

      <ImageArvoreAcai src={Arvore_de_acai} alt="" />
    </>
  );
}
