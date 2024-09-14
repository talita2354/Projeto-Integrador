import React, { useState } from 'react';
import './developer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Developer() {
  const [formData, setFormData] = useState({
    name: '',
    skills: '',
    info: '',
    education: '',
    contact: '',
  });

  // Função para lidar com mudanças nos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Função para enviar o formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Adicionar lógica para enviar os dados ao backend
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
            value={formData.name}
            onChange={handleChange}
            placeholder="Digite o nome do projeto..."
            required
          />
          <label htmlFor="name">Nome do cliente:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Digite nome do cliente"
            required
          />

          <label htmlFor="skills">volor a pagar:</label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="digite seu seu orçamento"
            required
          />

          <label htmlFor="info">Informações Adicionais:</label>
          <textarea
           type="info"
            id="info"
            name="info"
            value={formData.info}
            onChange={handleChange}
            placeholder="Adicione informações relevantes sobre o projeto"
            required
          />

          <label htmlFor="contact">Contato:</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Digite seu e-mail ou telefone"
            required
          />

          <button type="submit" className="ctad-button">Registrar</button>
        </form>
      </div>
    </div>
  );
}
