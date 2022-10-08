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
  font-size: 20.976px;
  color: #1c2156;
  font-family: 'Jost', sans-serif;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;
