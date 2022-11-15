import styled from 'styled-components';

export default function InputInfoField({
  placeholder,
  nameInput,
  editToggle,
  marginRight
}) {
  return (
    <InputInfoFieldStyle className="phone" border={editToggle} marginRight={marginRight}>
      <h1>{nameInput} </h1>
      <input
        className="inputPhone"
        type="text"
        placeholder={placeholder}
        disabled={!editToggle}
      />
    </InputInfoFieldStyle>
  );
}

const InputInfoFieldStyle = styled.div`
  margin-bottom: 20px;

  width: 100%;
  margin-right: ${props => props.marginRight};

  h1 {
    font-weight: 500;
    margin-bottom: 5px;
  }

  input {
    border: none;
    font-size: 17px;
    background-color: transparent;
    height: 40px;
    border-radius: 5px;
    box-shadow: ${props =>
      props.border ? 'inset 0px 0px 4px rgba(0, 0, 0, 0.25)' : 'none'};
    padding-left: 10px;
    padding-right: 5px;
    color: red;
    width: 100%;

    margin-right: 10px;
  }
`;
