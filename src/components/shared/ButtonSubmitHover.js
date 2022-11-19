import styled from 'styled-components';
import Loading from './Loading';

export default function ButtonSubmitHover({ stateButton, setEditToggle, editToggle }) {
  return (
    <ButtonSubmitHoverStyle toggle={editToggle} stateButton={stateButton}>
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
    </ButtonSubmitHoverStyle>
  );
}

const ButtonSubmitHoverStyle = styled.div`
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
    border: solid 1px purple;
    font-family: 'Jost', sans-serif;
    color: purple;
    background-color: transparent;

    :hover {
      cursor: pointer;
      color: white;
      border: solid 1px white;
      background-color: purple;
    }
    transition: all 0.5s ease-out;
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
  }
`;
