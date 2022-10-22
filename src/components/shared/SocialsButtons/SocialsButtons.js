import { useState } from 'react';
import AnimateHeight from 'react-animate-height';
import styled from 'styled-components';
import * as utils from '../../../util/utilsFunctions.js';
import iconwhatsapp from '../../../assets/iconwhatsapp.svg';
import iconinstagram from '../../../assets/iconinstagram.svg';
import iconfacebook from '../../../assets/iconfacebook.svg';
import CardSocials from './CardSocials.js';
import TitleAndArrow from '../TitleAndArrow';
export default function SocialsButtons() {
  const listIconsSocial = [
    {
      icon: iconwhatsapp,
      contact: '(21) 98498-0723',
      messageButton: 'ENVIAR MENSAGEM',
      link: 'https://wa.me/5521984980723?text=Boa%20tarde,%20Juan!%0AVoc%C3%AAs%20entregam%20em%20Iraj%C3%A1?%20Obrigado!',
      introduction: 'Olá, sou a Adriana, como posso ajudá-lo?',
      text: 'Horário de atendimento: \n Segunda à Sexta de 9:00 às 18:00. \n Finais de Semana de 10:00 às 20:00.'
    },
    {
      icon: iconinstagram,
      contact: '@_gellatoacaiteria',
      messageButton: 'SEGUIR',
      link: 'https://www.instagram.com/_gellatoacaiteria/',
      introduction: 'Oi! Segue a gente no insta que tem sempre novidade!',
      text: 'Lá você encontra: \n Promoções imperdíveis. \n Avisos importantes e Sorteios!'
    },
    {
      icon: iconfacebook,
      contact: 'Gellato Acaiteria',
      messageButton: 'ADICIONAR',
      link: 'https://wa.me/5521984980723?text=Boa%20tarde,%20Juan!%0AVoc%C3%AAs%20entregam%20em%20Iraj%C3%A1?%20Obrigado!',
      introduction: 'Olá, sou a Adriana, como posso ajudá-lo?',
      text: 'Em breve'
    }
  ];

  return (
    <Container>
      <TitleAndArrow titleSession={'Redes sociais'} />
      <SocialButtons>
        <div className="container">
          {listIconsSocial.map((socialButton, index) => (
            <CardSocials
              key={index}
              icon={socialButton.icon}
              contact={socialButton.contact}
              messageButton={socialButton.messageButton}
              link={socialButton.link}
              index={index}
              introduction={socialButton.introduction}
              text={socialButton.text}
            />
          ))}
        </div>
      </SocialButtons>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 100px;
  min-width: 100%;
`;

const SocialButtons = styled.div`
  width: 100%;
  padding: 10px 20px 10px 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin-top: 50px;
  .container {
    height: 400px;
    width: 100%;
  }
`;
