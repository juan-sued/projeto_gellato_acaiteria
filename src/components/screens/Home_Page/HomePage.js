import Main from '../../shared/Main';
import styled from 'styled-components';
import Arvore_de_acai from '../../../assets/arvoreacai.svg';

import { ImageArvoreAcai } from './styles';
import TitleStatus from './components/TitleStatus';
import 'material-icons/iconfont/material-icons.css';
import SideBar from './components/sideBar';
import CardOfert from './components/CardOfert';

export default function HomePage() {
  return (
    <>
      <SideBar />
      <TitleStatus />
      <Main margin_top={'150'}>
        <ContainerWellcomeUser>
          <span className="container">
            <h1 className="gooday">Bom dia, Alessandra!</h1>
            <p>Nada melhor que um Gellato para começar o dia cheio de energia.</p>
          </span>
        </ContainerWellcomeUser>
        <CardOfert />
      </Main>

      <ImageArvoreAcai src={Arvore_de_acai} alt="" />
    </>
  );
}

const ContainerWellcomeUser = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;

  .container {
    width: 30%;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    font-family: 'Josefin Slab', serif;
    font-size: 21px;
    font-weight: 400;
    margin-left: 145px;
    line-height: 29px;

    h1 {
      margin-bottom: 30px;
    }
  }
  @media screen and (min-width: 700px) {
    .container {
      margin-top: 100px;
      font-size: 40px;
      width: 50%;
      line-height: 67px;
    }
  }
`;
