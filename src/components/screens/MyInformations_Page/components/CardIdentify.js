import { useState } from 'react';
import styled from 'styled-components';
import InputInfoField from '../../../shared/InputInfoField';

export default function CardIdentify({ userAndAddressesInfo }) {
  const [editToggle, setEditToggle] = useState(false);

  return (
    <CardIdentifyStyle>
      <InputInfoField
        nameInput={'Nome: '}
        editToggle={editToggle}
        placeholder={userAndAddressesInfo.user.name}
      />
      <InputInfoField
        nameInput={'Email: '}
        editToggle={editToggle}
        placeholder={userAndAddressesInfo.user.email}
      />
      <InputInfoField
        nameInput={'CPF: '}
        editToggle={editToggle}
        placeholder={
          userAndAddressesInfo.user.cpf ? userAndAddressesInfo.user.cpf : 'não cadastrado'
        }
      />
      <InputInfoField
        nameInput={'Telefone: '}
        editToggle={editToggle}
        placeholder={
          userAndAddressesInfo.user.phone
            ? userAndAddressesInfo.user.phone
            : 'não cadastrado'
        }
      />
      <ButtonsSubmit toggle={editToggle}>
        <button className="editButton" onClick={() => setEditToggle(!editToggle)}>
          EDITAR
        </button>
        <button className="submitButton" onClick={() => setEditToggle(!editToggle)}>
          SALVAR
        </button>
      </ButtonsSubmit>
    </CardIdentifyStyle>
  );
}

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

const CardIdentifyStyle = styled.div`
  background-color: white;
  width: 100%;
  height: auto;
  border-radius: 10px;
  padding: 15px;
`;
