import "./Footer.css";

export function Footer() {
  return (
    <footer className="gear-footer">
      {/* Linha decorativa vermelha que combina com o detalhe do seu título */}
      <div className="footer-accent-bar"></div>
      
      <div className="footer-container">
        <div className="footer-brand">
          <h2 className="footer-logo">
            GEAR <span className="logo-highlight">AUTOMATIC</span>
          </h2>
          <p className="footer-description">
            Sua jornada rumo ao carro dos seus sonhos começa aqui. 
            Experiência, confiança e transparência no mercado automotivo.
          </p>
          <div className="footer-socials">
            <a href="#instagram" aria-label="Instagram" className="social-link">
              <span className="social-icon">📸</span> Instagram
            </a>
            <a href="#facebook" aria-label="Facebook" className="social-link">
              <span className="social-icon">👥</span> Facebook
            </a>
          </div>
        </div>

        <div className="footer-links-section">
          <div className="footer-col">
            <h3>Navegação</h3>
            <ul>
              <li><a href="#categorias">Categorias</a></li>
              <li><a href="#financiar">Financiar</a></li>
              <li><a href="#vender">Vender</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Populares</h3>
            <ul>
              <li><a href="#esportivos">Esportivos</a></li>
              <li><a href="#suvs">SUV's</a></li>
              <li><a href="#picapes">Picapes</a></li>
              <li><a href="#super-esportivos">Super Esportivos</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Atendimento</h3>
            <ul>
              <li><a href="#suporte">Suporte ao Cliente</a></li>
              <li><a href="#termos">Termos de Uso</a></li>
              <li><a href="#privacidade">Privacidade</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Gear Automatic. Todos os direitos reservados.</p>
        <p className="dev-credit">Desenvolvido para Apaixonados por Motores</p>
      </div>
    </footer>
  );
}
