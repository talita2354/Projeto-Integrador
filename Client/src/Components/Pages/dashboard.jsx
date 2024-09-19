import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { getAllProjects } from '../../services/projectService';
import { logout } from './auth';
import Swal from 'sweetalert2';

export default function Dashboard() {
  const ProjectList = () => {
    const [projects, setProjects] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const projectResponse = await getAllProjects();
          setProjects(projectResponse.data);
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Erro!',
            text: 'Erro ao buscar projetos',
          });
        }
      };

      fetchData();
    }, []);

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
              <a href="/professional" className="nav-link">Profissional</a>
              <a href="#" className="nav-link" onClick={openModal}>Registrar</a>
              <a onClick={logout} className="nav-link logout-button">Sair</a>
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

        {/* Seção de Projetos */}
        <section id="projects" className="projects-section">
        <h2>Projetos</h2>
          <div className="projects-container">
           
            <div className="projects-grid">
              {projects.map((project) => (
                <div className="project-card" key={project.id}>
              
                  <h3 className='p1'>Nome: {project.name}</h3>
                  <p>Valor: {project.value}</p>
                  <p>Informação: {project.info}</p>
                  <p>Contato: {project.contact}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      
      </div>
    );
  };

  return <ProjectList />;
}
