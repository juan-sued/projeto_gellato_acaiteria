import Main from '../../shared/Main';

import ButtonOnlyWords from '../../shared/ButtonOnlyWords.js';
import logo from '../../assets/logo.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Background from '../../shared/Background.js';
import imageBoxIceCream from '../../assets/imageboxtemaclaro.webp';
import invertida from '../../assets/imageboxtemaclaroinvertida.webp';
import InputLogin from './InputLogin';
import imageBoxIceCreamVideo from '../../assets/dairystore.mp4';
export default function Login_Page() {
  return (
    <>
      <Background
        backgroundColor={'#5645B7'}
        colorGradient={'#D782D2'}
        percentBackground={'15'}
        backgroundColorGrand={'#513ab3'}
      >
        <ImageBoxIceCream src={imageBoxIceCream} alt="" />
        <InvertidaBoxIceCream src={invertida} alt="" />
        <ContainerVideo>
          <video className="videoWrapper" autoPlay muted>
            <source src={imageBoxIceCreamVideo} type="video/mp4" />
          </video>
        </ContainerVideo>

        <Main margin_top={'90'}>
          <Logo src={logo} alt="" />
          <InputLogin />
          <Link to="/sign-up">
            <ButtonOnlyWords>Não possui cadastro? Clique aqui!</ButtonOnlyWords>
          </Link>
        </Main>
      </Background>
    </>
  );
}

const ContainerVideo = styled.div`
  width: 100%;
  max-height: 400px;
  margin-bottom: 10px;
  position: fixed;
  z-index: 0;
  bottom: 0;
  right: 0;
  margin-bottom: 0;

  video {
    max-width: 100%;
  }

  @media screen and (min-width: 450px) {
    display: none;
  }
`;

const ImageBoxIceCream = styled.img`
  width: 100%;
  max-width: 50.1%;
  max-height: 400px;
  margin-bottom: 10px;
  position: fixed;
  z-index: 0;
  bottom: 0;
  right: 0;
  margin-bottom: 0;

  @media screen and (max-width: 450px) {
    display: none;
  }
`;
const InvertidaBoxIceCream = styled.img`
  width: 100%;
  max-width: 50.1%;
  max-height: 400px;
  margin-bottom: 10px;
  position: fixed;
  z-index: 0;
  bottom: 0;
  left: 0;
  margin-bottom: 0;

  @media screen and (max-width: 450px) {
    display: none;
  }
`;

const Logo = styled.img`
  min-width: 145px;
  width: 20%;
  max-width: 200px;
`;
