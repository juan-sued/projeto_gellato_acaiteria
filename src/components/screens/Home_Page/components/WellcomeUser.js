import styled from 'styled-components';
export default function WellcomeUser() {
  return (
    <ContainerWellcomeUser>
      <span className="container">
        <h1 className="gooday">Bom dia, Alessandra!</h1>
        <p>Nada melhor que um Gellato para começar o dia cheio de energia.</p>
      </span>
    </ContainerWellcomeUser>
  );
}
const ContainerWellcomeUser = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;

  .container {
    min-width: 260px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    font-family: 'Josefin Slab', serif;
    font-size: 20px;
    font-weight: 400;
    margin-left: 110px;
    line-height: 29px;

    h1 {
      margin-bottom: 30px;
    }
  }
  @media screen and (min-width: 700px) {
    .container {
      font-size: 40px;
      width: 50%;
      line-height: 67px;
    }
  }
`;
