import Main from '../../shared/Main';

import Background from '../../shared/Background.js';

import InputRegisterProduct from './InputsRegisterProduct';
import TitlePage from '../../shared/TitlePage';

export default function AddProductPage() {
  return (
    <>
      <Background
        backgroundColor={'#5645B7'}
        colorGradient={'#D782D2'}
        percentBackground={'30'}
        backgroundColorGrand={'#513ab3'}
      >
        <Main margin_top={'20'}>
          <TitlePage title={'Adicionar produto'} to={'/'} color={'#ffffff'} />
          <InputRegisterProduct />
        </Main>
      </Background>
    </>
  );
}
