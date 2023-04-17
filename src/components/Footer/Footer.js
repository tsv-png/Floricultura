import "./Footer.css";
import Logo from "../../assets/flower.png";
const Footer = () => {
  return (
    <footer className="footer">
      <img src={Logo} className="footer-logo" alt="" />
      <div className="footer-links">
        <div className="footer-links-section">
          <h3 className="footer-links-section-title">Sua conta</h3>
          <ul className="footer-links-section-list">
            <li className="footer-links-section-list-item">Gerenciar perfil</li>
            <li className="footer-links-section-list-item">Conta Flower</li>
          </ul>
        </div>
        <div className="footer-links-section">
          <h3 className="footer-links-section-title">Sobre a Flower</h3>
          <ul className="footer-links-section-list">
            <li className="footer-links-section-list-item">Gerenciar perfil</li>
            <li className="footer-links-section-list-item">Conta Flower</li>
          </ul>
        </div>
        <div className="footer-links-section">
          <h3 className="footer-links-section-title">Descobrir e comprar</h3>
          <ul className="footer-links-section-list">
            <li className="footer-links-section-list-item">Gerenciar perfil</li>
            <li className="footer-links-section-list-item">Conta Flower</li>
          </ul>
        </div>
        <div className="footer-links-section">
          <h3 className="footer-links-section-title">Midias sociais</h3>
          <ul className="footer-links-section-list">
            <li className="footer-links-section-list-item">Gerenciar perfil</li>
            <li className="footer-links-section-list-item">Conta Flower</li>
          </ul>
        </div>
        <div className="footer-links-section">
          <h3 className="footer-links-section-title">Contato</h3>
          <ul className="footer-links-section-list">
            <li className="footer-links-section-list-item">Gerenciar perfil</li>
            <li className="footer-links-section-list-item">Conta Flower</li>
          </ul>
        </div>
      </div>
      <span className="footer-copyright">
        Copyright © 2023 Flower LTDA Todos os direitos reservados. CPNJ:
        00.000.004/0001-05
      </span>
    </footer>
  );
};

export default Footer;
