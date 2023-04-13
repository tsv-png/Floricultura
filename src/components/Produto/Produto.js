import flor from "../../assets/flor.png";
import "./Produto.css";
const Produto = () => {
  return (
    <div className="produto">
      <img src={flor} className="produto-image" alt="flor" />
      <div className="preco-container">
        <h1 className="produto-nome">Girassol</h1>
        <h3 className="produto-preco">R$ 50,00</h3>
      </div>
      <p className="descricao-produto">
        O girassol significado é “felicidade” e, por conta de sua cor vibrante,
        simboliza calor, vitalidade e energia positiva
      </p>
      <button className="botao-comprar">Comprar agora</button>
    </div>
  );
};

export default Produto;