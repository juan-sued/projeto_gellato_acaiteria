import styled from 'styled-components';
import { useState } from 'react';

export default function InputNumber({ stateInput }) {
  const [inputQtd, setInputQtd] = useState(1);
  const atualiza = e => {
    setInputQtd(e.target.value);
  };
  return (
    <InputNumberStyle
      type="number"
      name="qtd"
      className="inputQntd"
      value={inputQtd}
      onChange={atualiza}
      required
      disabled={stateInput}
      min={1}
    />
  );
}

const InputNumberStyle = styled.input`
  font-size: 16px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #d4d4d4;
  font-family: 'Jost', sans-serif;
  border-radius: 4px;
  padding-left: 12px;

  background: ${props => (props.stateInput ? '#E5E5E5' : '#ffffff')};
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);

  color: ${props => (props.stateInput ? '#d4d4d4' : '#000000')};
  @media screen and (min-width: 700px) {
    padding-left: 4px;
  }
`;
