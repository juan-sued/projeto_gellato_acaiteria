import Main from '../../shared/Main';

import Arvore_de_acai from '../../../assets/arvoreacai.svg';

import { ImageArvoreAcai } from './styles';
import TitleStatus from './components/TitleStatus';

import SideBar from './components/sideBar';
import CardOfert from './components/CardOfert';
import WellcomeUser from './components/WellcomeUser';
import Divider from '../../shared/Divider';
import PlaceMyOrderButton from './components/PlaceMyOrderButton';

import CarouselListProduct from '../../shared/CarouselListProduct';

import copoHome2 from '../../../assets/copoHome2.jpg';
import copoHome3 from '../../../assets/copoHome3.jpg';

import FeedBacks from '../../shared/Feedback/Feedbacks';

import SocialsButtons from '../../shared/SocialsButtons/SocialsButtons';
import OurHistory from '../../shared/OurHistory/OurHistory';
import { useEffect, useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import requestHomeContent from '../../../util/requests/requestHomeContent.js';

export default function HomePage() {
  const { userInfo, signOut } = useAuth();

  const [objHomeResponseAPI, setObjHomeResponseAPI] = useState([]);

  useEffect(() => {
    requestHomeContent(objHomeResponseAPI, setObjHomeResponseAPI, signOut);
  }, []);

  const objctResponseAPITest = {
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
        image: copoHome3,
        description: '500 ml',
        price: '20.60',
        favorited: true
      },
      {
        image: copoHome3,
        description: '1 Litro',
        price: '20,00'
      },
      {
        image: copoHome3,
        description: '1 Litro',
        price: '20,00',
        favorited: true
      },
      {
        image: copoHome3,
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
        <WellcomeUser userInfo={userInfo} />
        <CardOfert objHomeResponseAPI={objHomeResponseAPI} />
        <Divider />
        <PlaceMyOrderButton />
        <Divider />

        <CarouselListProduct
          objctResponseAPI={objHomeResponseAPI}
          titleSession={'Mais pedidos'}
          margin_top={'50'}
        />
        <CarouselListProduct
          objctResponseAPI={objHomeResponseAPI}
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
