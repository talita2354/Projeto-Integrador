import React, { useState, useEffect } from 'react';
import './professional.css';
import { getAllDeveloper } from '../../services/developerService';
import { logout } from './auth';
import Swal from 'sweetalert2';

export default function professional() {

  const DeveloperList = () => {
    const [developer, setDeveloper] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const developerResponse = await getAllDeveloper();
          setDeveloper(developerResponse.data);
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Erro!',
            text: 'Erro ao buscar desenvolvedores',
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

        {/* Seção de Desenvolvedores */}
        <section id="developers" className="developers-section">
        <h2>Desenvolvedores</h2>
          <div className="developers-container">
       
            <div className="developers-grid">
              {developer.map((dev) => (
                <div className="developer-card" key={dev.id}>
                  
                  <h3 >Nome: {dev.name}</h3>
                  <p>habilidades : {dev.skills}</p>
                  <p>formação: {dev.education}</p>
                  <p>contato: {dev.contact}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

  
      </div>
    );
  };

  return <DeveloperList />;
}
