/* eslint-disable max-lines-per-function */

import React, { useState } from 'react';
import axios from 'axios';
import '../styles/createContact.css';
import { Link } from 'react-router-dom';
import img from '../images/corner.svg';

const CreateContact = () => {
  const [names, setNames] = useState('');
  const [mobiles, setMobiles] = useState('');
  const [emails, setEmails] = useState('');

  const create = (TOKEN, [email, name, mobile]) => {
    try {
      axios.post('https://contacts-api.prd.parceirodaconstrucao.com.br/contacts',
        { name, email, mobile },
        { headers: { authorization: `Bearer ${TOKEN}` } });
      // eslint-disable-next-line no-alert
      alert('Contato criado com sucesso!');
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    create(token, [emails, names, mobiles]);
  };

  return (

    <>
      <Link to="/contacts">
        <button
          type="button"
          data-testid="edit-btn"
          className="button-edit"
        >

          <img src={ img } alt="login imagem" className="edit-imagem" />

        </button>
      </Link>

      <h1 className="h1-create">Cadastre um novo contato</h1>
      <h2 className="h2-create">
        Preencha as informações para cadastrar um novo contato
      </h2>
      <form className="create-form">

        <label htmlFor="name" className="create-label">
          Nome:
          <input
            type="text"
            name="senha"
            className="create-name"
            data-testid="password-input"
            value={ names }
            onChange={ ({ target: { value } }) => setNames(value) }
            placeholder="Digite o nome"
            required="true"
          />
        </label>

        <div className="input-create">
          <label htmlFor="mobile" className="create-label">
            Celular:
            <input
              type="text"
              name="mobile"
              data-testid="password-input"
              value={ mobiles }
              className="create-mobile"
              onChange={ ({ target: { value } }) => setMobiles(value) }
              placeholder="Digite o celular"
              required="true"
            />
          </label>

          <label htmlFor="email" className="create-label">
            Email:
            <input
              type="text"
              name="email"
              data-testid="email-input"
              className="create-email"
              value={ emails }
              onChange={ ({ target: { value } }) => setEmails(value) }
              placeholder="Digite o email"
              required="true"
            />
          </label>
        </div>
        <button
          type="submit"
          onClick={ handleClick }
          className="create-button"

        >
          Cadastrar contato
        </button>

      </form>

    </>
  );
};

export default CreateContact;
