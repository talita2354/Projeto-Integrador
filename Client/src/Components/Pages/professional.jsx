import React, { useState } from 'react';
import './professional.css';

export default function Dashboard() {
  // Estado para controlar o modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Função para abrir o modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="dashboard">
      {/* Navbar Fixa */}
      <header className="navbar fixed-navbar">
        <div className="navbar-container">
          <div className="logo">DevMatch</div>
          <nav className="nav-links">
            <a href="/dashboard" className="nav-link">Projetos</a>
            <a href="professional" className="nav-link">Profissional</a>
            <a href="#" className="nav-link" onClick={openModal}>Registrar</a>
            <a href="/logout" className="nav-link logout-button">Sair</a>
          </nav>
        </div>
      </header>

        {/* Modal de Registro */}
        {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            {/* Ícone de Fechar no Canto Superior Direito */}
            <span className="modal-close-icon" onClick={closeModal}>&times;</span>
            <h2>Registrar</h2>
            <p>Escolha uma das opções abaixo para continuar:</p>
            <div className="modal-options">
              <a href="/developer" className="modal-option-button">Registrar Desenvolvedor</a>
              <a href="/project" className="modal-option-button">Registrar Projeto</a>
            </div>
          </div>
        </div>
      )}


      {/* Seção de Projetos Disponíveis */}
      <section id="projects" className="projects-section">
        <div className="projects-container">
          <h2>Projetos Disponíveis</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Plataforma de E-commerce</h3>
              <p>Projeto de desenvolvimento full-stack para uma startup de e-commerce. Tecnologias: React, Node.js, MongoDB.</p>
              <a href="/project/1" className="project-link">Ver Detalhes</a>
            </div>
            <div className="project-card">
              <h3>Aplicativo Mobile de Saúde</h3>
              <p>Desenvolva uma aplicação mobile para monitoramento de atividades físicas. Tecnologias: Flutter, Firebase.</p>
              <a href="/project/2" className="project-link">Ver Detalhes</a>
            </div>
            <div className="project-card">
              <h3>Sistema de Gestão Financeira</h3>
              <p>Projeto de backend para um sistema financeiro. Tecnologias: Java, Spring Boot, MySQL.</p>
              <a href="/project/3" className="project-link">Ver Detalhes</a>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Perfil
      <section id="profile" className="profile-section">
        <div className="profile-container">
          <h2>Meu Perfil</h2>
          <p>Nome: João Silva</p>
          <p>E-mail: joao@devmatch.com</p>
          <p>Skills: React, Node.js, Express, MongoDB</p>
          <a href="/profile/edit" className="cta-button">Editar Perfil</a>
        </div>
      </section> */}

      {/* Footer */}
      <footer>
        <p>&copy; 2024 DevMatch. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

