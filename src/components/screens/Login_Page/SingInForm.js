import { useState } from 'react';
//import react

import Loading from '../../shared/Loading';
import ButtonSubmit from '../../shared/ButtonSubmit';
import { useAuth } from '../../../hooks/useAuth';
import { ContainerFormClass, InputClass } from './styles';
//import components

export default function SingInForm() {
  const { signIn } = useAuth();

  const [signInData, setSignInData] = useState({
    email: '',
    password: ''
  });

  const [stateColorButton, setStateCollorButton] = useState('#ffffff');
  const handleChangText = e => {
    setSignInData({
      ...signInData,
      [e.target.name]: e.target.value
    });
  };

  function newLogin(event) {
    event.preventDefault();
    signIn(signInData, setStateCollorButton, setStateMessageButton);
  }

  if (setStateCollorButton === '#e21a27' && signInData.email.length > 0) {
    setStateCollorButton('#ffffff');
  }

  return (
    <ContainerFormClass>
      <form onSubmit={newLogin}>
        <InputClass
          placeholder="E-mail"
          type="email"
          value={signInData.email}
          onChange={handleChangText}
          required
        />
        <InputClass
          placeholder="Senha"
          type="password"
          value={signInData.password}
          onChange={handleChangText}
          required
        />
        <ButtonSubmit width={'303px'} backgroundcolor={stateColorButton} type="submit">
          {stateColorButton === '#e21a26' ? (
            'Email ou senha incorretas!'
          ) : stateColorButton === '#8a8893' ? (
            <Loading height={20} width={20} />
          ) : (
            'Entrar'
          )}
        </ButtonSubmit>
      </form>
    </ContainerFormClass>
  );
}
