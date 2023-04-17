import flor from "./../../assets/flor.png";
import "./ProdutoPage.css";
const ProdutoPage = () => {
  return (
    <div className="produto-page-content">
      <div className="produto-description">
        <img src={flor} alt="" className="produto-description-image" />
        <div className="produto-description-content">
          <h1 className="produto-description-content-title">Girassol</h1>
          <h3 className="produto-description-content-price">R$ 80,00</h3>
          <span className="caption">À vista no pix até (5%OFF)</span>
          <span className="caption">ou 2x de R$40,00 sem juros</span>
          <div className="produto-description-form">
            <input
              placeholder="Inserir CEP"
              className="cep-input"
              type="text"
            />
            <button className="botao-comprar">Comprar agora</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdutoPage;
