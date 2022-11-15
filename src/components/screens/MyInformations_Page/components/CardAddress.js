import dayjs from 'dayjs';
import { useState } from 'react';
import styled from 'styled-components';
import InputInfoField from '../../../shared/InputInfoField';

import iconExpandMore from '../../../../assets/iconExpandMore.svg';

import iconExpandLess from '../../../../assets/iconExpandLess.svg';
import requestUpdateAddress from '../../../../util/requests/requestUpdate';
import { returnDayFormated } from '../../../../util/format';
import Loading from '../../../shared/Loading';

export default function CardAddress({
  street,
  number,
  neighborhood,
  state,
  cep,
  createdAt,
  updatedAt
}) {
  const [stateButton, setStateButton] = useState(true);
  const [editToggle, setEditToggle] = useState(false);

  const dayCreatedAt = returnDayFormated(createdAt);
  const dayUpdatedAt = returnDayFormated(updatedAt);

  const [cardHeightToggle, setCardHeightToggle] = useState(true);

  const [updateDataAddress, setUpdateDataAddress] = useState({
    street: '',
    neighborhood: '',
    number: '',
    state: '',
    cep: ''
  });

  const handleChangeText = e => {
    setUpdateDataAddress({ ...updateDataAddress, [e.target.name]: e.target.value });
  };
  const sucess = () => {
    console.log('tudo certo');

    //aparecer uma popup aqui
  };
  function updateAddress(event) {
    event.preventDefault();
    setStateButton('loading');
    requestUpdateAddress(updateDataAddress, setUpdateDataAddress, sucess, setStateButton);

    console.log('entrou');
  }
  console.log(stateButton);
  return (
    <Container>
      <TitleSession>
        <h1>Endereços:</h1>
      </TitleSession>

      <CardAddressStyle cardHeightToggle={cardHeightToggle}>
        <form onSubmit={updateAddress}>
          <section className="street">
            <InputInfoField
              nameInput={'Rua: '}
              editToggle={editToggle}
              placeholder={street}
              name={'street'}
              value={updateDataAddress.street}
              onChange={handleChangeText}
            />

            <button
              className="iconToggle"
              type="button"
              onClick={() => setCardHeightToggle(!cardHeightToggle)}
            >
              <img src={cardHeightToggle ? iconExpandLess : iconExpandMore} alt="" />
            </button>
          </section>

          <section className="neighborhoodAndNumber">
            <InputInfoField
              nameInput={'Bairro: '}
              editToggle={editToggle}
              placeholder={neighborhood}
              marginRight={'10px'}
              name={'neighborhood'}
              value={updateDataAddress.neighborhood}
              onChange={handleChangeText}
            />
            <InputInfoField
              nameInput={'Número: '}
              editToggle={editToggle}
              placeholder={number}
              name={'number'}
              value={updateDataAddress.number}
              onChange={handleChangeText}
            />
          </section>

          <section className="cepAndState">
            <InputInfoField
              nameInput={'Estado: '}
              editToggle={editToggle}
              placeholder={state}
              marginRight={'10px'}
              name={'state'}
              value={updateDataAddress.state}
              onChange={handleChangeText}
            />
            <InputInfoField
              nameInput={'CEP: '}
              editToggle={editToggle}
              placeholder={cep}
              name={'cep'}
              value={updateDataAddress.cep}
              onChange={handleChangeText}
            />
          </section>

          <section className="dateUpdate">
            <InputInfoField
              nameInput={'Criado em: '}
              editToggle={false}
              placeholder={dayCreatedAt}
              marginRight={'10px'}
            />
            <InputInfoField
              nameInput={'Atualizado em: '}
              editToggle={false}
              placeholder={dayUpdatedAt}
              marginRight={'10px'}
            />
          </section>

          <ButtonsSubmit toggle={editToggle} stateButton={stateButton}>
            <button
              className="editButton"
              type="button"
              onClick={() => setEditToggle(!editToggle)}
              disabled={stateButton === 'loading' || stateButton === 'err' ? true : false}
            >
              {stateButton === 'err' ? (
                'Erro ao atualizar'
              ) : stateButton === 'loading' ? (
                <Loading width={'25px'} />
              ) : (
                'EDITAR'
              )}
            </button>
            <button
              className="submitButton"
              type="submit"
              onClick={() => setEditToggle(!editToggle)}
            >
              SALVAR
            </button>
          </ButtonsSubmit>
        </form>
      </CardAddressStyle>
    </Container>
  );
}

const CardAddressStyle = styled.div`
  margin-top: 20px;
  background-color: white;
  width: 100%;

  border-radius: 10px;
  padding: 15px;
  overflow-y: hidden;
  padding-top: 20px;
  height: ${props => (props.cardHeightToggle ? '82px' : '406px')};
  transition: all 0.5s ease-out;

  section {
    display: flex;
    width: 100%;
    justify-content: start;
    align-items: center;
  }

  .iconToggle {
    position: relative;
    bottom: 25px;
    img {
      width: 20px;
      height: 20px;
    }
    border: none;
    background-color: transparent;
  }
`;

const Container = styled.div`
  margin-top: 40px;
`;

const TitleSession = styled.div`
  h1 {
    color: white;
    font-size: 30px;
  }
`;

const ButtonsSubmit = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    border: none;
    height: 40px;
    width: 100%;
    border-radius: 3px;
  }
  .editButton {
    display: ${props => (props.toggle ? 'none' : 'block')};

    border: ${props =>
      props.stateButton === 'err' || props.stateButton === 'loading'
        ? 'none'
        : ' 1px solid purple'};

    background-color: ${props =>
      props.stateButton === 'err' ? '#b71c1c' : 'transparent'};

    color: ${props => (props.stateButton === 'err' ? 'white' : 'purple')};
  }
  .submitButton {
    display: ${props => (props.toggle ? 'block' : 'none')};
    background-color: purple;
    color: white;
  }
`;
