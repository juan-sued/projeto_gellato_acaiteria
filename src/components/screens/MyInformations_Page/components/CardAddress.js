import dayjs from 'dayjs';
import { useState } from 'react';
import styled from 'styled-components';
import InputInfoField from '../../../shared/InputInfoField';

import iconExpandMore from '../../../../assets/iconExpandMore.svg';

import iconExpandLess from '../../../../assets/iconExpandLess.svg';

export default function CardAddress({
  street,
  number,
  neighborhood,
  state,
  cep,
  createdAt,
  updatedAt
}) {
  const [editToggle, setEditToggle] = useState(false);

  const dayCreatedAt = returnDayFormated(createdAt);
  const dayUpdatedAt = returnDayFormated(updatedAt);

  const [cardHeightToggle, setCardHeightToggle] = useState(false);

  function returnDayFormated(date) {
    return dayjs(date).format('DD-MM-YYYY');
  }
  console.log(cardHeightToggle);
  return (
    <Container>
      <TitleSession>
        <h1>Endereços:</h1>
      </TitleSession>

      <CardAddressStyle cardHeightToggle={cardHeightToggle}>
        <section className="street">
          <InputInfoField
            nameInput={'Rua: '}
            editToggle={editToggle}
            placeholder={street}
          />

          <button
            className="iconToggle"
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
          />
          <InputInfoField
            nameInput={'Número: '}
            editToggle={editToggle}
            placeholder={number}
          />
        </section>

        <section className="cepAndState">
          <InputInfoField
            nameInput={'Estado: '}
            editToggle={editToggle}
            placeholder={state}
            marginRight={'10px'}
          />
          <InputInfoField nameInput={'CEP: '} editToggle={editToggle} placeholder={cep} />
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

        <ButtonsSubmit toggle={editToggle}>
          <button className="editButton" onClick={() => setEditToggle(!editToggle)}>
            EDITAR
          </button>
          <button className="submitButton" onClick={() => setEditToggle(!editToggle)}>
            SALVAR
          </button>
        </ButtonsSubmit>
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
    background-color: transparent;
    border: 1px solid purple;
    color: purple;
  }
  .submitButton {
    display: ${props => (props.toggle ? 'block' : 'none')};
    background-color: purple;
    color: white;
  }
`;
