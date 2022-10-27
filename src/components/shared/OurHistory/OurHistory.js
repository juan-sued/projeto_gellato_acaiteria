import styled from 'styled-components';
import TitleAndArrow from '../TitleAndArrow';

export default function OurHistory() {
  return (
    <Container>
      <TitleAndArrow
        titleSession={'Nossa História'}
        color={'white'}
        fontWeight={'700'}
        fontSize={'50px'}
        colorLine={'white'}
      />

      <div className="cardsHistory">
        <div className="cardHistory">
          <h1 className="title">O início</h1>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Dolor morbi non arcu risus. Enim
            diam vulputate ut pharetra sit. Facilisis gravida neque convallis a cras
            semper auctor. Nunc pulvinar sapien et ligula ullamcorper. Nunc id cursus
            metus aliquam eleifend mi in nulla posuere. Felis donec et odio pellentesque
            diam volutpat commodo. Quis imperdiet massa tincidunt nunc pulvinar sapien.
            Euismod lacinia at quis risus sed. Venenatis urna cursus eget nunc scelerisque
            viverra mauris in aliquam aaaaaaaaaaaaaaaaaaa. (mesmo tipo de card do feedback
            para abrir e fechar com o título em evidência)
          </p>
        </div>
      </div>

      <div className="developed">Em desenvolvimento por Juan Sued</div>
    </Container>
  );
}
const Container = styled.div`
  height: 500px;
  width: 100%;

  position: relative;
  bottom: 500px;

  .developed {
    width: 100%;
    text-align: center;
    color: white;
    height: 20%;
    font-size: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    color: white;
  }

  .cardsHistory {
    width: 100%;

    padding: 10px;
    margin-top: 80px;

    .cardHistory {
      margin-bottom: 20px;
      width: 100%;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.25);

      background-color: white;
      border-radius: 5px;
      padding: 20px;
      h1 {
        font-size: 35px;
        margin-bottom: 15px;
        font-weight: 500;
      }
      p {
        text-align: justify;
        font-size: 19px;

        word-spacing: 5px;
        line-height: 25px;
      }
      :hover {
        cursor: pointer;
        box-shadow: none;
        transition: all 0.5s ease-out;
      }
    }
  }
`;
