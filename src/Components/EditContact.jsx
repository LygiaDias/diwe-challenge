/* eslint-disable max-lines-per-function */
import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import '../styles/editContact.css';
import { Link } from 'react-router-dom';
import img from '../images/corner.svg';

const UpdateContact = () => {
  const [editName, setEditNames] = useState('');
  const [editMobile, setEditMobile] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const { id } = useParams();

  const update = (TOKEN, [email, name, mobile]) => {
    try {
      axios.put(`https://contacts-api.prd.parceirodaconstrucao.com.br/contacts/${id}`,
        { name, email, mobile },
        { headers: { authorization: `Bearer ${TOKEN}` } });
      // eslint-disable-next-line no-alert
      alert('Contato criado com sucesso!');
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    update(token, [editEmail, editName, editMobile]);
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

      <h1 data-testid="h1-edit" className="h1-edit">Atualizar contato</h1>
      <h2 data-testid="h2-edit" className="h2-edit">
        Preencha as informações para atualizar o contato
      </h2>
      <form className="form-edit">

        <label htmlFor="name" className="edit-label">
          Nome:
          <input
            type="text"
            name="name"
            data-testid="name-input"
            value={ editName }
            className="name"
            onChange={ ({ target: { value } }) => setEditNames(value) }
            placeholder="Digite o nome"
            required="true"
          />
        </label>
        <div className="div-input">

          <label htmlFor="email" className="edit-label">
            Email:
            <input
              type="text"
              name="email"
              data-testid="email-input"
              value={ editEmail }
              placeholder="Digite o email"
              className="email-edit"
              onChange={ ({ target: { value } }) => setEditEmail(value) }
              required="true"
            />
          </label>

          <label htmlFor="mobile" className="edit-label">
            Celular:
            <input
              type="text"
              name="mobile"
              placeholder="Digite o celular"
              data-testid="password-input"
              value={ editMobile }
              className="mobile"
              onChange={ ({ target: { value } }) => setEditMobile(value) }
              required="true"
            />
          </label>

        </div>
        <button
          type="submit"
          onClick={ handleClick }
          className="edit-button"

        >
          Atualizar Contato
        </button>

      </form>

    </>

  );
};

export default UpdateContact;
