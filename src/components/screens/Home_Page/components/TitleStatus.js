import styled from 'styled-components';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
export default function TitleStatus() {
  const hourCurrent = new Date().getHours();

  const [status, setStatus] = useState('Aberto agora');

  useEffect(() => {
    if (hourCurrent >= 9 && hourCurrent <= 19) {
      console.log('aqui');
      setStatus('Aberto agora');
    } else if ((hourCurrent >= 0 && hourCurrent <= 8) || hourCurrent >= 20) {
      console.log('aqui2');
      setStatus('Fechado agora');
    }
  }, []);

  return (
    <TitleStatusStyle color={status}>
      <p>{status}</p>
      <span></span>
    </TitleStatusStyle>
  );
}

const TitleStatusStyle = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  position: absolute;
  left: 0;
  top: 24px;

  p {
    color: ${props => (props.color === 'Fechado agora' ? '#9e0002' : '#028c10')};
    font-family: 'Josefin Slab', serif;
    font-size: 32px;
    font-weight: 700;
    margin-left: 20px;
  }
  span {
    position: relative;
    margin-top: -7px;
    width: 103%;
    height: 1px;
    background-color: gray;
    z-index: -1;
  }
`;
