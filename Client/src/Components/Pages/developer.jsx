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
            <a href="/project" className="nav-link">Registrar projeto</a>
            <a href="/logout" className="nav-link logout-button">Sair</a>
          </nav>
        </div>
      </header>

      {/* Formulário de Registro */}
      <div className="dregister-container">
      
        <form onSubmit={handleSubmit} className="dregister-form">
        <h2>Registrar como Desenvolvedor</h2>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Digite seu nome"
            required
          />

          <label htmlFor="skills">Habilidades:</label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="Digite suas habilidades"
            required
          />

          <label htmlFor="info">Informações Adicionais:</label>
          <textarea
           type="info"
            id="info"
            name="info"
            value={formData.info}
            onChange={handleChange}
            placeholder="Adicione informações relevantes sobre você"
            required
          />

          <label htmlFor="education">Formação:</label>
          <input
            type="text"
            id="education"
            name="education"
            value={formData.education}
            onChange={handleChange}
            placeholder="Digite sua formação acadêmica"
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
