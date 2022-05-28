import { render, screen } from  '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import Contacts from '../pages/Contacts';



    it('Testa se a página possui o título h1', () => {
      render(<Contacts />);
        const h1 = screen.getByTestId('h1-contact');
        expect(h1).toBeInTheDocument();
      });
    
      test('Testa se a página possui o botão de adicionar contato', () => {
        
        const button = screen.getByTestId('add-button');
        
        expect(button).toBeInTheDocument();
      });
    
    
      test('Testa se a página possui o botão de editar contato', () => {
        render(<Contacts />);
        const button = screen.getByTestId('edit-btn');
        
        expect(button).toBeInTheDocument();
      });
    
      test('Testa se a página possui o botão de deletar contato', () => {
        render(<Contacts />);
        const button = screen.getByTestId('delete-btn');
        
        expect(button).toBeInTheDocument();
      });
    
      test('Testa se a página possui uma tabela de contatos', () => {
        render(<Contacts />);
        const button = screen.getByTestId('table');
        
        expect(button).toBeInTheDocument();
      });
    
    
  

