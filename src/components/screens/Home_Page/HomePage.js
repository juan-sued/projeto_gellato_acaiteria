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

import CarouselFavoriteds from './components/CarouselFavoriteds';
import CarouselMoreOrders from './components/CarouselMoreOrders ';

export default function HomePage() {
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
        <CarouselMoreOrders />

        <CarouselFavoriteds />
      </Main>

      <ImageArvoreAcai src={Arvore_de_acai} alt="" />
    </>
  );
}
