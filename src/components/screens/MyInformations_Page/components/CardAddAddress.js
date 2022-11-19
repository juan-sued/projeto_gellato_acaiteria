import { useState } from 'react';
import styled from 'styled-components';
import InputInfoField from '../../../shared/InputInfoField';
import iconExpandMore from '../../../../assets/iconExpandMore.svg';
import iconExpandLess from '../../../../assets/iconExpandLess.svg';
import requestUpdateAddress from '../../../../util/requests/requestUpdateAddress';
import { returnDayFormated } from '../../../../util/format';
import ButtonSubmitHover from '../../../shared/ButtonSubmitHover';
import requestAddAddress from '../../../../util/requests/requestAddAddress';

export default function CardAddAddress({
  requestKey,
  setRequestKey,
  editToggleCard,
  setEditToggleCard
}) {
  const [stateButton, setStateButton] = useState(true);
  const [editToggle, setEditToggle] = useState(true);

  const [createDataAddress, setCreateDataAddress] = useState({
    street: '',
    neighborhood: '',
    number: '',
    state: '',
    cep: ''
  });

  const handleChangeText = e => {
    setCreateDataAddress({ ...createDataAddress, [e.target.name]: e.target.value });
  };

  const sucess = () => {
    setRequestKey(!requestKey);
  };

  function updateAddress(event) {
    event.preventDefault();
    setStateButton('loading');
    requestAddAddress(sucess, setStateButton, createDataAddress, setCreateDataAddress);
  }
  console.log(editToggleCard);
  return (
    <Container displayToggle={editToggleCard}>
      <CardAddressStyle displayToggle={editToggleCard}>
        <form onSubmit={updateAddress}>
          <section className="street">
            <InputInfoField
              nameInput={'Rua: '}
              editToggle={editToggle}
              placeholder={'ex: Rua nazaré'}
              name={'street'}
              value={createDataAddress.street}
              onChange={handleChangeText}
            />
          </section>

          <section className="neighborhoodAndNumber">
            <InputInfoField
              nameInput={'Bairro: '}
              editToggle={editToggle}
              placeholder={'ex: Inhaúma'}
              marginRight={'10px'}
              name={'neighborhood'}
              value={createDataAddress.neighborhood}
              onChange={handleChangeText}
            />
            <InputInfoField
              nameInput={'Número: '}
              editToggle={editToggle}
              placeholder={'ex: 782'}
              name={'number'}
              value={createDataAddress.number}
              onChange={handleChangeText}
            />
          </section>

          <section className="cepAndState">
            <InputInfoField
              nameInput={'Estado: '}
              editToggle={editToggle}
              placeholder={'ex: RJ'}
              marginRight={'10px'}
              name={'state'}
              value={createDataAddress.state}
              onChange={handleChangeText}
            />
            <InputInfoField
              nameInput={'CEP: '}
              editToggle={editToggle}
              placeholder={'ex: 20765-171'}
              name={'cep'}
              value={createDataAddress.cep}
              onChange={handleChangeText}
            />
          </section>
          <ButtonSubmitHover
            stateButton={stateButton}
            editToggle={editToggle}
            setEditToggle={setEditToggle}
          />
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
  height: auto;

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
  margin-top: 10px;
  display: ${props => (props.displayToggle ? 'block' : 'none')};
`;
