import flor from "../../assets/flor.png";

const ProdutoPage = () => {
  return (
    <div>
      <div className="produto-head">
        <img src={flor} alt="flor" className="produto-page-imagem" />
        <div className="produto-page-desc">
          <h1 className="produto-page-title">Buquê de Flores</h1>
          <h3 className="produto-page-subtitle">R$ 50,00</h3>
          <p className="desconto-pix">À vista no pix até (5%OFF)</p>
          <p className="desconto-pix">ou 2x de R$40,00 sem juros</p>
          <div className="produto-desc-bottom">
            <input placeholder="Inserir CEP" />
            <button className="botao-comprar">Comprar agora</button>
          </div>
        </div>
        <div className="produto-mais-info">
          <h1 className="produto-mais-info-title">Descrição do produto</h1>
          <p className="produto-mais-info-text">
            O girassol é uma cultura de ampla capacidade de adaptação às
            diversas condições de latitude, longitude e fotoperíodo. Nos últimos
            anos, vem se apresentando como opção de rotação e sucessão de
            culturas nas regiões produtoras de grãos, principalmente após a soja
            na região Centro-Oeste. o sistema radicular profundo que explora
            grande volume de solo e, consequentemente, absorve maior quantidade
            de água e nutrientes. Entretanto, o cultivo de girassol deve ser
            destinado às áreas que, preferencialmente, adotem práticas de manejo
            melhoradoras das características físicas do solo, pois o girassol é
            fisicamente sensível à compactação de solo e quimicamente à acidez.
          </p>
        </div>
        <div className="produto-mais-info">
          <h1 className="produto-mais-info-title">Frete e devolução</h1>
          <ul>
            <li>Entrega para todo Brasil</li>
            <li>
              Você tem 30 dias para devolver seu pedido gratuitamente, sem
              perrengue.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProdutoPage;
