import { useState } from 'react';

import Loading from '../../shared/Loading';
import ButtonSubmit from '../../shared/ButtonSubmit';
//import components

export default function SignUpForm() {
  const [signUpData, setSignUpdata] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [inputConfirmPassword, setInputConfirmPassword] = useState('');

  const [stateColorButton, setStateCollorButton] = useState('#ffffff');

  const handleChangText = e => {
    setSignUpdata({
      ...signUpData,
      [e.target.name]: e.target.value
    });
  };

  function newRegister(event) {
    event.preventDefault();

    if (inputConfirmPassword !== signUpData.password) {
      setInputConfirmPassword('');
      setStateButton('#e21a27');
      return;
    }

    signIn(signUpData, setStateCollorButton);
  }

  if (
    (stateColorButton === '#e21a27' && signUpData.email.length > 0) ||
    (stateColorButton === '#e21a26' && inputConfirmPassword.length > 0)
  ) {
    setStateCollorButton('#ffffff');
  }
  return (
    <ContainerFormClass>
      <form onSubmit={newRegister}>
        <InputClass
          placeholder="Nome"
          type="text"
          value={signUpData.name}
          onChange={handleChangText}
          required
        />
        <InputClass
          placeholder="E-mail"
          type="email"
          value={signUpData.email}
          onChange={handleChangText}
          required
        />
        <InputClass
          placeholder="Senha"
          type="password"
          value={signUpData.password}
          onChange={handleChangText}
          required
        />
        <InputClass
          placeholder="Confirme a senha"
          type="password"
          value={inputConfirmPassword}
          onChange={handleChangText}
          required
        />
        <ButtonSubmit width={'303px'} backgroundcolor={stateColorButton}>
          {stateColorButton === '#e21a26' ? (
            'Usuário já cadastrado!'
          ) : stateColorButton === '#8a8893' ? (
            <Loading height={20} width={20} />
          ) : stateColorButton === '#e21a26' ? (
            'Senhas diferentes'
          ) : (
            'Cadastrar'
          )}
        </ButtonSubmit>
      </form>
    </ContainerFormClass>
  );
}
