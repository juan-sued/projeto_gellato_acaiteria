import Main from '../../shared/Main';
import styled from 'styled-components';
import Arvore_de_acai from '../../../assets/arvoreacai.svg';
import { ImageArvoreAcai } from './styles';
import TitleStatus from './components/TitleStatus';
import 'material-icons/iconfont/material-icons.css';
import SideBar from './components/sideBar';

export default function HomePage() {
  return (
    <>
      <SideBar />
      <ImageArvoreAcai src={Arvore_de_acai} alt="" />
    </>
  );
}

/*
<TitleStatus />
<SideBar>
  <span class="material-icons">menu_open</span>
</SideBar>


const SideBar = styled.button`
  background-color: #1c2156;
  height: 88px;
  width: 88px;
  position: fixed;
  right: 0;
  top: 0;
  border-radius: 0 0 0 10px;
  border: 0;
  box-shadow: -0px 0px 10px 1px rgba(0, 0, 0, 0.5);

  .material-icons {
    color: white;
    font-size: 50px;
  }
`;
*/
