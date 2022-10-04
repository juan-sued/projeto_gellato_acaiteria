import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
//import react

import Loading from '../../shared/Loading';
import ButtonSubmit from '../../shared/ButtonSubmit';
//import components

import UserContext from '../../contexts/UserContext';

export default function InputLogin() {
  const { objLoginResponse, setObjLoginResponse } = useContext(UserContext);

  const navigate = useNavigate();

  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [objNewLogin, setObjNewLogin] = useState({
    email: '',
    password: ''
  });

  const URL = 'htpp://localhost:5000';

  const [stateButton, setStateButton] = useState('habilitado');

  function newLogin(event) {
    event.preventDefault();

    setStateButton('loading');
    // ===
    objNewLogin.email = inputEmail;
    objNewLogin.password = inputPassword;
    // ===

    setObjNewLogin({ ...objNewLogin });
    console.log(objNewLogin);
    const promise = axios.post(URL, objNewLogin);

    promise.then(() => {
      setObjLoginResponse(promise.data);

      navigate('../home', { replace: true });
    });
    promise.catch(err => {
      console.log('esse é o erro:', err);
      setStateButton('err'); //asd
    });
    setInputEmail('');
    setInputPassword('');
  }

  if (stateButton === 'err' && inputEmail.length > 0) {
    setStateButton('habilitado');
  }

  return (
    <ContainerFormClass>
      <form onSubmit={newLogin}>
        <InputClass
          placeholder="E-mail"
          type="email"
          value={inputEmail}
          onChange={e => setInputEmail(e.target.value)}
          required
        />
        <InputClass
          placeholder="Senha"
          type="password"
          value={inputPassword}
          onChange={e => setInputPassword(e.target.value)}
          required
        />
        <ButtonSubmit
          width={'303px'}
          backgroundcolor={
            stateButton === 'err'
              ? '#e21a27'
              : stateButton === 'loading'
              ? '#8a8893'
              : '#ffffff'
          }
          type="submit"
        >
          {stateButton === 'err' ? (
            'Email ou senha incorretas!'
          ) : stateButton === 'loading' ? (
            <Loading height={20} width={20} />
          ) : (
            'Entrar'
          )}
        </ButtonSubmit>
      </form>
    </ContainerFormClass>
  );
}

const ContainerFormClass = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 15%;

  @media screen and (min-width: 413px) {
    margin-top: 100px;
  }

  form {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 200px;
  }
`;

const InputClass = styled.input`
  font-size: 20px;
  width: 100%;
  height: 50px;

  border: 1px solid #d4d4d4;
  font-family: 'Jost', sans-serif;
  border-radius: 4px;
  padding-left: 10px;
  background: #ffffff;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);

  color: #000000;
  ::placeholder {
    color: #0004;
  }
`;
