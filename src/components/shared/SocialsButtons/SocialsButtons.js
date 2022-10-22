import { useState } from 'react';
import AnimateHeight from 'react-animate-height';
import styled from 'styled-components';
import * as utils from '../../../util/utilsFunctions.js';
import iconwhatsapp from '../../../assets/iconwhatsapp.svg';
export default function SocialsButtons() {
  const [stateCardSocialButtons, setStateCardSocialButtons] = useState(false);

  return (
    <SocialButtons>
      <div className="container">
        <CardSocialsStyle
          onClick={() =>
            utils.increaseCardSizeToggle(
              setStateCardSocialButtons,
              stateCardSocialButtons
            )
          }
          stateCardSocialButtons={stateCardSocialButtons}
        >
          <div className="columnIcon">
            <div className="iconBackground">
              <img src={iconwhatsapp} alt="" />
            </div>
          </div>
          <div className="columnContent">
            <h1>(21) 98498-0723</h1>

            <div className="message">
              <p>Olá, sou a Adriana, como posso ajudá-lo?</p>
              <p className="hoursOn">Horário de atendimento:</p>
              <p className="hoursOn">Segunda à Sexta de 9:00 às 18:00.</p>
              <p className="hoursOn">Finais de Semana de 10:00 às 20:00.</p>
            </div>
            <div className="containerSendMessage">
              <button className="sendMessage">ENVIAR MENSAGEM</button>
            </div>
          </div>
        </CardSocialsStyle>
      </div>
    </SocialButtons>
  );
}

const SocialButtons = styled.div`
  width: 100%;
  padding: 10px 20px 10px 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  .container {
    height: 400px;
    width: 100%;
  }
`;

const CardSocialsStyle = styled.div`
  background-color: #1c2156;
  padding: 15px;
  border-radius: 8px;
  display: flex;
  width: ${props => (props.stateCardSocialButtons ? '100%' : '27%')};

  padding: 15px 10px 15px 10px;
  font-weight: 500;
  color: white;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.25);
  height: ${props => (props.stateCardSocialButtons ? '100%' : '25%')};
  transition: height 0.5s 0.6s, width 0.5s;
  overflow: hidden;
  :hover {
    cursor: pointer;

    box-shadow: none;
  }

  .message {
    width: 210px;

    word-wrap: break-word;
    line-height: 21px;
    font-weight: 500;
    font-size: 18px;
    white-space: ${props => (props.stateCardSocialButtons ? 'normal' : 'nowrap')};
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 30px;

    .hoursOn {
      margin-top: 20px;
    }
  }

  .containerSendMessage {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    .sendMessage {
      height: 50px;
      border-radius: 3px;
      border: solid 1px #07ef1e;
      font-size: 16px;
      font-family: 'Jost', sans-serif;
      width: 100%;
      border-radius: 4px;
      color: #07ef1e;
      background-color: transparent;

      :hover {
        cursor: pointer;
        color: #1c2156;
        border: solid 1px #1c2156;
        background-color: #07ef1e;
      }
    }
  }

  .columnContent {
    h1 {
      margin-bottom: 10px;
      font-weight: 600;
      font-size: 30px;
      margin-top: 30px;
    }
  }

  .columnIcon {
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 70px;
    }
  }
`;
