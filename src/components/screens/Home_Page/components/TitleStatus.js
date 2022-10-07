import styled from 'styled-components';

export default function TitleStatus() {
  return (
    <TitleStatusStyle>
      <p>Aberto agora</p>
      <span></span>
    </TitleStatusStyle>
  );
}

const TitleStatusStyle = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  p {
    color: #028c10;
    font-family: 'Josefin Slab', serif;
    font-size: 35px;
    font-weight: 700;
    margin-left: 20px;
  }
  span {
    position: relative;
    margin-top: -9px;
    width: 230px;
    height: 1px;
    background-color: black;
    z-index: -1;
  }
`;
