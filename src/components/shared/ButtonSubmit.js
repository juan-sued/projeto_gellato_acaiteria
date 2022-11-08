import styled from 'styled-components';

export default function ButtonSubmit({ backgroundcolor, children, width }) {
  return (
    <ButtonSubmitStyle backgroundcolor={backgroundcolor} width={width} type="submit">
      {children}
    </ButtonSubmitStyle>
  );
}

const ButtonSubmitStyle = styled.button`
  width: ${props => props.width};
  height: 55px;
  background: ${props => props.backgroundcolor};
  border: none;
  font-size: 25px;
  font-weight: 500;
  color: ${props => (props.backgroundcolor === '#ffffff' ? '#1c1c1c' : 'white')};
  font-family: 'Josefin Slab', serif;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  min-height: 55px;

  :hover {
    cursor: pointer;
  }
`;
