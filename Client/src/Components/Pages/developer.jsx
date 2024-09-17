import React, { useState } from 'react';
import './developer.css';
import { createDeveloper } from '../../services/developerService';
import Swal from 'sweetalert2';
export default function developer() {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [skills, setSkills] = useState('');
  // const [info, setInfo] = useState('');
  const [education, setEducation] = useState('');
  const [contact, setContact] = useState('');

  // Função para enviar o formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('value', value);
      formData.append('skills', skills);
      // formData.append('info', info);
      formData.append('education', education);
      formData.append('contact', contact);

      console.log(formData);

      await createDeveloper(formData);
      Swal.fire('Sucesso', 'Desenvolvedor cadastrado com sucesso!', 'success');
      // Limpar o estado após o envio
      setName('');
      setValue('');
      setSkills('');
      // setInfo('');
      setEducation((''));
      setContact('');
    } catch (error) {
      Swal.fire('Erro', 'Erro ao cadastrar Desenvolvedor', 'error');
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite seu nome"
            required
          />

          <label htmlFor="skills">Habilidades:</label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="Digite suas habilidades"
            required
          />

          {/* <label htmlFor="info">Informações Adicionais:</label>
          <textarea
            style={{ resize: 'none' }}
            type="info"
            id="info"
            name="info"
            value={info}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Adicione informações relevantes sobre o projeto"
            required
          /> */}

          <label htmlFor="education">Formação:</label>
          <input
            type="text"
            id="education"
            name="education"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            placeholder="Digite sua formação acadêmica"
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
