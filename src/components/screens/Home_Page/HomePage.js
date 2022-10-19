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
        description: '1 Litro',
        price: '20,00'
      },
      {
        image: copoHome,
        description: '1 Litro',
        price: '20,00'
      },
      {
        image: copoHome,
        description: '1 Litro',
        price: '20,00'
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
          title={'Mais pedidos'}
          margin_top={'0'}
        />
        <CarouselListProduct
          objctResponseAPI={objctResponseAPI.listMyFavoriteds}
          title={'Meus favoritos'}
          margin_top={'0'}
        />
      </Main>

      <ImageArvoreAcai src={Arvore_de_acai} alt="" />
    </>
  );
}
