import React, { useState } from 'react';
import './developer.css';
import { createProject } from '../../services/projectService';
import Swal from 'sweetalert2';

export default function project() {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [info, setInfo] = useState('');
  const [contact, setContact] = useState('');

  // Função para enviar o formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const formData = new FormData();
      // formData.append('name', name);
      // formData.append('description', description);
      // formData.append('capacity', capacity);
      // formData.append('location', location);
      // formData.append('photo', photo); // Adiciona o arquivo de imagem ao FormData
      // formData.append('hourlyRate', hourlyRate);
      // await createProduct(formData);
      // await createPaymentCondition(name, description);

      const formData = {
        name,
        value,
        info,
        contact,
      };

      console.log('Front', formData);

      await createProject(formData);
      Swal.fire('Sucesso', 'Projeto cadastrado com sucesso!', 'success');
      // Limpar o estado após o envio
      setName('');
      setValue('');
      setInfo('');
      setContact('');
    } catch (error) {
      Swal.fire('Erro', 'Erro ao cadastrar projeto', 'error');
    }
  };

  return (
    <div className="developer-register">
      {/* Navbar Fixa */}
      <header className="navbar fixed-navbar">
        <div className="navbar-container">
          <div className="logo">DevMatch</div>
          <nav className="nav-links">
            <a href="/dashboard" className="nav-link">Projetos</a>
            <a href="/professional" className="nav-link">Profissional</a>
            <a href="/developer" className="nav-link">Registrar Desenvolvedor</a>
            <a href="/logout" className="nav-link logout-button">Sair</a>
          </nav>
        </div>
      </header>

      {/* Formulário de Registro */}
      <div className="dregister-container">
        <form onSubmit={handleSubmit} className="dregister-form">
          <h2>Registrar projeto</h2>
          <label htmlFor="name">Nome do projeto:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite o nome do projeto..."
            required
          />

          <label htmlFor="value">Valor a pagar:</label>
          <input
            type="text"
            id="value"
            name="value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Digite seu orçamento"
            required
          />

          <label htmlFor="info">Informações Adicionais:</label>
          <textarea
            style={{ resize: 'none' }}
            type="text"
            id="info"
            name="info"
            value={info}
            onChange={(e) => setInfo(e.target.value)}
            placeholder="Adicione informações relevantes sobre o projeto"
            required
          />

          <label htmlFor="contact">Contato:</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Digite seu e-mail ou telefone"
            required
          />

          <button type="submit" className="ctad-button">Registrar</button>
        </form>
      </div>
    </div>
  );
}
