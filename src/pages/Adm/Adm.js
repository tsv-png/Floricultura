import React from "react";
import "./Adm.css";
import margarida from "../../assets/maragrida.png";
import Header from "../../components/Header/Header";

function Adm() {
  return (
    <div className="adm">
      <Header isAdm/>
      <div className="adm-content">
        <div className="adm-content-left">
          <img src={margarida} alt=""/>
        </div>
        <div className="adm-content-right">
          <h1 className="adm-title">Adicionar produto no site</h1>
          <div clasName="form">
            <input type="text" placeholder="Nome do produto" />
            <input type="text" placeholder="Preço do produto" />
            <input type="number" placeholder="Quantidade do produto" />
            <input
              type="text"
              placeholder="Descrição do produto"
              className="descricao"
            />
          </div>
          <button type="submit" className="btn-cadastrar-produto">
            Adicionar produto
          </button>
        </div>
      </div>
    </div>
  );
}

export default Adm;
