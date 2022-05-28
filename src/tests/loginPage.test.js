import { render, screen } from  '@testing-library/react';
import '@testing-library/jest-dom';


import React from 'react';

import Login from '../pages/Login'


test('Teste se a página rendereiza a imagem corretamente:', () => {
    render(<Login />);
    const img = screen.getByRole('img');

    expect(img.src).toBe('http://localhost/login.jpeg');
  });


  test('Testa se a página possui os imputs de email e password:', () => {
    render(<Login />);
    const email = screen.getByTestId('email-input');
    const password = screen.getByTestId('password-input');
    expect(email).toBeInTheDocument();
  });

  test('Testa se a página possui o botão de login', () => {
    render(<Login />);
    const button = screen.getByTestId('login-button');
    
    expect(button).toBeInTheDocument();
  });