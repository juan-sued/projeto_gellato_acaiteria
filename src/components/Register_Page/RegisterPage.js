import Main from '../../shared/Main';
import InputsRegister from './InputsRegister';
import ButtonOnlyWords from '../../shared/ButtonOnlyWords.js';
import logo from '../../assets/logo.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Background from '../../shared/Background.js';
import imageBoxIceCream from '../../assets/imageboxicecream.webp';

export default function Register_Page() {
  return (
    <>
      <Background
        backgroundColor={'#1C2156'}
        colorGradient={'#482D5F'}
        percentBackground={'15.5'}
        backgroundColorGrand={'#1C2156'}
      >
        <ImageBoxIceCream src={imageBoxIceCream} alt="" />
        <Main margin_top={'90'}>
          <Logo src={logo} alt="" />
          <InputsRegister />
          <Link to="/">
            <ButtonOnlyWords>Já possui cadastro? Faça login!</ButtonOnlyWords>
          </Link>
        </Main>
      </Background>
    </>
  );
}

const ImageBoxIceCream = styled.img`
  width: 100%;
  max-width: 500px;
  max-height: 400px;
  margin-bottom: 10px;
  position: fixed;
  z-index: 0;
  bottom: 0;
  right: 0;
  margin-bottom: 0;
`;

const Logo = styled.img`
  min-width: 145px;
  width: 20%;
  max-width: 200px;
`;
