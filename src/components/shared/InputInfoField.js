import styled from 'styled-components';

export default function InputInfoField({
  placeholder,
  nameInput,
  editToggle,
  marginRight,
  name,
  value,
  onChange,
  maxWidht,
  type = 'text'
}) {
  return (
    <InputInfoFieldStyle
      className="phone"
      border={editToggle}
      marginRight={marginRight}
      maxWidht={maxWidht}
    >
      <h1>{nameInput} </h1>
      <input
        className="inputPhone"
        type={type}
        placeholder={placeholder}
        disabled={!editToggle}
        name={name}
        value={value}
        onChange={onChange}
        min={0}
      />
    </InputInfoFieldStyle>
  );
}

const InputInfoFieldStyle = styled.div`
  margin-bottom: 20px;
  width: 100%;
  margin-right: ${props => props.marginRight};

  max-width: ${props => props.maxWidht};
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

    width: 100%;

    margin-right: 10px;
  }
`;
