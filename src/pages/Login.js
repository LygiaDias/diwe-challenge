/* eslint-disable max-lines-per-function */
import { Redirect } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import image from '../images/login.jpeg';
import '../styles/login.css';

const Login = () => {
  const [emails, setEmails] = useState('');
  const [passwords, setPasswords] = useState('');
  const [isLogged, setIsLogged] = useState(false);

  const login = async (email, password) => {
    try {
      const request = axios.post('https://contacts-api.prd.parceirodaconstrucao.com.br/auth/login',
        { email, password });
      const { data } = await request;
      setIsLogged(true);
      return data.token;
    } catch (error) {
      console.log(error);
      // eslint-disable-next-line no-alert
      alert('Email ou senha incorretos!');
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const response = await login(emails, passwords);
    localStorage.setItem('token', response);
  };

  if (isLogged) return <Redirect to="/contacts" />;

  return (

    <>
      <img src={ image } alt="login imagem" className="login-imagem" />
      <h1 className="p"> Bem-vindo!  </h1>
      <h2>Faça login para acessar nossa plataforma</h2>

      <form className="form-login">
        <label className="label" htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            data-testid="email-input"
            value={ emails }
            className="email"
            placeholder="Digite seu email"
            onChange={ ({ target: { value } }) => setEmails(value) }
            required="true"
          />
        </label>

        <label className="label" htmlFor="password">
          Senha:
          <input
            type="password"
            name="senha"
            data-testid="password-input"
            value={ passwords }
            className="senha"
            placeholder="Digite sua senha"
            onChange={ ({ target: { value } }) => setPasswords(value) }
            required="true"
          />
        </label>

        <button
          type="submit"
          onClick={ handleClick }
          className="button"
          data-testid="login-button"

        >
          Entrar
        </button>

      </form>

    </>
  );
};

export default Login;
