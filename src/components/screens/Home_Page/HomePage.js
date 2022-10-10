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

import TitleAndArrow from '../../shared/TitleAndArrow';
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

        <CarouselListContainer>
          <div className="titleAndDescriptionContainer">
            <TitleAndArrow />
          </div>
        </CarouselListContainer>
      </Main>

      <ImageArvoreAcai src={Arvore_de_acai} alt="" />
    </>
  );
}

const CarouselListContainer = styled.div`
  width: 100%;
  height: 400px;
`;
