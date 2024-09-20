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
            <a href="login" className="nav-link">Entrar</a>
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
      <br />
      <br />
      <br />

      {/* Fullscreen Hero Section - Deve estar logo após o Navbar */}
      <section className="fullscreen-hero">
        <div className="overlay">
          <div className="hero-content">
            <h1>Conecte-se com Desenvolvedores de Alto Nível</h1>
            <p>Encontre talentos para impulsionar seu projeto.</p>
            <a href="/login" className="cta-button">Comece Agora</a>
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
          <p>A Dev Match é uma plataforma inovadora e focada em criar conexões significativas entre empresas e desenvolvedores talentosos. Nossa missão é simplificar o processo de recrutamento, tornando mais fácil para empresas de todos os tamanhos encontrarem os profissionais certos para cada projeto.

            <br /><br />Vivemos em uma era de inovação tecnológica, onde o sucesso de uma empresa muitas vezes depende da qualidade de seu time de desenvolvimento. Sabemos que encontrar o desenvolvedor ideal, com o conjunto de habilidades certo e que se alinhe com os objetivos e cultura da empresa, pode ser um grande desafio. Foi exatamente para resolver essa dor que a Dev Match foi criada.
            <br /><br /> A Dev Match conta com uma dinâmica simples: você pode se registrar como desenvolvedor ou cadastrar um projeto. Nas páginas da plataforma, você poderá buscar exatamente o que procura. Se houver um match entre o desenvolvedor e o projeto, você terá acesso ao contato para iniciar a comunicação.
            <br /><br />LEMBRE-SE: O DevMacht apenasuma plataforma para aproximar osprogramadores e contratantes, não uma plataforma de emprego
          </p>
        </div>
      </section>

      {/* Signup Section */}
      <section id="signup" className="signup-section">
        <div className="signup-container">
          <h2>Cadastre-se Hoje</h2>
          <p>Junte-se à nossa comunidade e comece a encontrar os melhores talentos para o seu projeto.</p>
          <a href="/register" className="cta-button">Cadastre-se Agora</a>
        </div>
      </section>

      {/* Footer Minimalista */}
      <footer>
        <p>&copy; 2024 Dev Match. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
