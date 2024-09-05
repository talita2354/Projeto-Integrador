import React, { useEffect } from 'react';
import './Home.css';

export default function Home() {
  useEffect(() => {
    const featuresSection = document.getElementById('features');
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          featuresSection.classList.add('in-view');
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(featuresSection);
  }, []);

  return (
    <div>
      {/* Navbar Fixa */}
      <header className="navbar fixed-navbar">
        <div className="navbar-container">
          <div className="logo">Dev Match</div>
          <nav className="nav-links">
            <a href="#about" className="nav-link">Sobre</a>
            <a href="#about" className="nav-link">Entrar</a>
            <a href="/register" className="nav-link signup-button">Cadastre-se</a>
          </nav>
        </div>
      </header>

      
      {/* Features Section com Animação - Vem após a Fullscreen Hero Section */}
      <section id="features" className="features-section">
        <div className="features-container">
          <h2>O Que Oferecemos</h2>
          <div className="features-grid">
            <div className="feature-item">
              <h3>Desenvolvedores Qualificados</h3>
              <p>Nosso banco de talentos possui os melhores desenvolvedores do mercado.</p>
            </div>
            <div className="feature-item">
              <h3>Projetos Personalizados</h3>
              <p>Trabalhamos com você para encontrar o melhor ajuste para o seu projeto.</p>
            </div>
            <div className="feature-item">
              <h3>Suporte Contínuo</h3>
              <p>Oferecemos suporte durante todo o ciclo de vida do seu projeto.</p>
            </div>
          </div>
        </div>
      </section>

      
      {/* Features Section com Animação - Vem após a Fullscreen Hero Section */}
      <section id="features" className="features-section">
        <div className="features-container">
          <h2>O Que Oferecemos</h2>
          <div className="features-grid">
            <div className="feature-item">
              <h3>Desenvolvedores Qualificados</h3>
              <p>Nosso banco de talentos possui os melhores desenvolvedores do mercado.</p>
            </div>
            <div className="feature-item">
              <h3>Projetos Personalizados</h3>
              <p>Trabalhamos com você para encontrar o melhor ajuste para o seu projeto.</p>
            </div>
            <div className="feature-item">
              <h3>Suporte Contínuo</h3>
              <p>Oferecemos suporte durante todo o ciclo de vida do seu projeto.</p>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />

      {/* Fullscreen Hero Section - Deve estar logo após o Navbar */}
      <section className="fullscreen-hero">
        <div className="overlay">
          <div className="hero-content">
            <h1>Conecte-se com Desenvolvedores de Alto Nível</h1>
            <p>Encontre talentos para impulsionar seu projeto.</p>
            <a href="#signup" className="cta-button">Comece Agora</a>
          </div>
        </div>
      </section>

      {/* Features Section com Animação - Vem após a Fullscreen Hero Section */}
      <section id="features" className="features-section">
        <div className="features-container">
          <h2>O Que Oferecemos</h2>
          <div className="features-grid">
            <div className="feature-item">
              <h3>Desenvolvedores Qualificados</h3>
              <p>Nosso banco de talentos possui os melhores desenvolvedores do mercado.</p>
            </div>
            <div className="feature-item">
              <h3>Projetos Personalizados</h3>
              <p>Trabalhamos com você para encontrar o melhor ajuste para o seu projeto.</p>
            </div>
            <div className="feature-item">
              <h3>Suporte Contínuo</h3>
              <p>Oferecemos suporte durante todo o ciclo de vida do seu projeto.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <h2>Sobre Nós</h2>
          <p>Dev Match é uma plataforma dedicada a conectar empresas com desenvolvedores excepcionais, facilitando a criação de projetos de alta qualidade.</p>
        </div>
      </section>

      {/* Signup Section */}
      <section id="signup" className="signup-section">
        <div className="signup-container">
          <h2>Cadastre-se Hoje</h2>
          <p>Junte-se à nossa comunidade e comece a encontrar os melhores talentos para o seu projeto.</p>
          <a href="#signup-form" className="cta-button">Cadastre-se Agora</a>
        </div>
      </section>

      {/* Footer Minimalista */}
      <footer>
        <p>&copy; 2024 Dev Match. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
