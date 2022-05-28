/* eslint-disable max-lines-per-function */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/contacts.css';
import { Link } from 'react-router-dom';
import editsvg from '../images/edit.svg';
import deletesvg from '../images/trash .svg';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const token = localStorage.getItem('token');

  const getContacts = async (TOKEN) => {
    const request = axios.get('https://contacts-api.prd.parceirodaconstrucao.com.br/contacts',
      { headers: { authorization: `Bearer ${TOKEN}` } });
    const response = await request;
    setContacts(response.data);
    console.log(response.data);
  };
  const deleteContact = (TOKEN, id) => {
    axios.delete(`https://contacts-api.prd.parceirodaconstrucao.com.br/contacts/${id}`,
      { headers: { authorization: `Bearer ${TOKEN}` } });
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  useEffect(() => {
    getContacts(token);
  }, []);

  return (
    <div className="div-forms">

      <h1 data-testid="h1-contact" className="h1-contact">Listagem de contatos</h1>
      <Link to="/create">
        <button
          type="button"
          className="add-button"
          data-testid="add-button"
        >
          Adicionar novo contato
        </button>
      </Link>

      <table data-testid="table">

        <thead>

          <tr>
            <th> # </th>
            <th> Nome </th>
            <th>Celular</th>
            <th>Email</th>
            <th>Ações</th>

          </tr>
        </thead>

        <tbody>
          {contacts.map(({
            id, mobile, name, email,

          }) => (
            <tr key={ id }>
              <td>{ id }</td>
              <td>{name}</td>
              <td>{mobile}</td>
              <td>{email}</td>

              <td>
                <Link to={ `/contacts/${id}` }>
                  <button
                    type="button"
                    data-testid="edit-btn"
                    className="button-edit"
                  >
                    <img src={ editsvg } alt="login imagem" className="edit-imagem" />
                    Editar
                  </button>
                </Link>

                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => deleteContact(token, id) }
                  className="button-edit"
                >
                  <img src={ deletesvg } alt="login imagem" className="edit-imagem" />

                  Excluir
                </button>

              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default Contacts;
