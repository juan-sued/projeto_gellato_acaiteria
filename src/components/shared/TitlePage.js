import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import arrowright from '../../assets/arrowright.svg';
export default function TitlePage({ to = '/', title, color }) {
  const navigate = useNavigate();

  return (
    <Container>
      <BackPage>
        <button onClick={() => navigate(to)}>
          <img src={arrowright} alt="" />
          <p>voltar</p>
        </button>
      </BackPage>
      <TitleContainer>{title}</TitleContainer>
    </Container>
  );
}

const Container = styled.div``;

const BackPage = styled.div`
  button {
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    margin-top: 20px;
    border: none;
    background-color: red;
    img {
      transform: rotate(180deg);
      width: 25px;
    }
    p {
      font-size: 18px;
      margin-left: 10px;
      font-family: 'Josefin Slab', serif;
    }
  }
`;
const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  height: 140px;
`;
