import { useState } from 'react';
import styled from 'styled-components';

import * as utils from '../../../util/utilsFunctions.js';

export default function CardSocials({
  icon,
  contact,
  link,
  messageButton,
  introduction,
  text,
  index,
  color
}) {
  const [stateCardSocialButtons, setStateCardSocialButtons] = useState(false);

  return (
    <Container index={index}>
      <CardSocialsStyle
        onClick={() =>
          utils.increaseCardSizeToggle(setStateCardSocialButtons, stateCardSocialButtons)
        }
        stateCardSocialButtons={stateCardSocialButtons}
        index={index}
        color={color}
      >
        <div className="columnIcon">
          <div className="iconBackground">
            <img src={icon} alt="" />
          </div>
        </div>
        <div className="columnContent">
          <h1>{contact}</h1>

          <div className="message">
            <p>{introduction}</p>
            <p className="hoursOn">{text}</p>
          </div>
          <div className="containerSendMessage">
            <a href={link}>
              <button className="sendMessage">{messageButton}</button>
            </a>
          </div>
        </div>
      </CardSocialsStyle>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: ${props => (props.index % 2 === 0 ? 'start' : 'end')};
`;

const CardSocialsStyle = styled.div`
  background-color: #1c2156;
  padding: 15px;
  border-radius: 8px;
  display: flex;
  width: ${props => (props.stateCardSocialButtons ? '100%' : '24%')};
  min-width: 90px;
  padding: 15px 10px 15px 10px;
  font-weight: 500;
  color: white;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.25);

  height: ${props => (props.stateCardSocialButtons ? '100%' : '23%')};
  z-index: ${props => (props.stateCardSocialButtons ? '30' : '10')};
  transition: height 0.5s 0.6s, width 0.5s;
  overflow: hidden;
  margin-top: -${props => (props.index === 1 ? '400px' : props.index === 2 ? '493px' : props.index === 3 ? '893px' : '0')};

  margin-bottom: 20px;
  :hover {
    cursor: pointer;

    box-shadow: none;
  }

  @media screen and (min-width: 700px) {
    width: ${props => (props.stateCardSocialButtons ? '100%' : '26%')};
    min-width: 340px;
    .columnContent {
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 100%;
    }
  }

  .message {
    width: 210px;

    word-wrap: break-word;
    line-height: 28px;
    font-weight: 500;
    font-size: 18px;
    white-space: ${props => (props.stateCardSocialButtons ? 'normal' : 'nowrap')};
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 30px;
    min-height: 51%;

    .hoursOn {
      margin-top: 20px;
    }
  }

  .containerSendMessage {
    display: flex;
    justify-content: center;
    align-items: end;
    margin-top: 20px;
    min-height: 18%;

    width: 100%;

    a {
      width: 100%;
    }
    .sendMessage {
      height: 50px;
      border-radius: 3px;
      border: solid 1px ${props => props.color};
      font-size: 16px;
      font-family: 'Jost', sans-serif;
      width: 100%;

      border-radius: 4px;

      color: ${props => props.color};

      background-color: transparent;

      :hover {
        cursor: pointer;
        color: #1c2156;
        background-color: ${props =>
          props.index === 0 ? '#07ef1e' : props.index === 1 ? '#F657E7' : '#5B6BF9'};
      }
    }
  }

  .columnContent {
    h1 {
      font-weight: 600;
      font-size: 170%;
      margin-top: 20px;
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
