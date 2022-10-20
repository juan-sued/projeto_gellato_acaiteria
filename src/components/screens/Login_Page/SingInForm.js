import { useState } from 'react';
//import react

import Loading from '../../shared/Loading';
import ButtonSubmit from '../../shared/ButtonSubmit';
import { useAuth } from '../../../hooks/useAuth';
import { ContainerFormClass, InputClass } from './styles';
//import components

export default function SingInForm() {
  const { signIn } = useAuth();

  const [signInData, setSignIndata] = useState({
    email: '',
    password: ''
  });

  const [stateColorButton, setStateCollorButton] = useState('#ffffff');

  const handleChangeText = e => {
    setSignIndata({ ...signInData, [e.target.name]: e.target.value });
  };

  function newLogin(event) {
    event.preventDefault();
    signIn(signInData, setStateCollorButton, setSignIndata);
  }

  if (stateColorButton === '#e21a27' && signInData.email.length > 0) {
    console.log(signInData.email.length);

    setStateCollorButton('#ffffff');
  }

  return (
    <ContainerFormClass>
      <form onSubmit={newLogin}>
        <InputClass
          placeholder="E-mail"
          type="email"
          name="email"
          value={signInData.email}
          onChange={handleChangeText}
          required
        />
        <InputClass
          placeholder="Senha"
          type="password"
          name="password"
          value={signInData.password}
          onChange={handleChangeText}
          required
        />
        <ButtonSubmit width={'303px'} backgroundcolor={stateColorButton} type="submit">
          {stateColorButton === '#e21a27' ? (
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
