import React from "react";
import "./Adm.css";
import floweradmin from "../../assets/floweradm.png";
import listadmin from "../../assets/listadm.png";
import useradmin from "../../assets/useradm.png";
import margarida from "../../assets/maragrida.png";

function Adm() {
  return (
    <div className="adm">
      <div className="topnavbar">
        <div className="topnavbar-left">
          <img src={floweradmin} alt="logo" />
        </div>
        <div className="topnavbar-right">
          <img className="useradm" src={useradmin} alt="useradm" />
          <img className="listadm" src={listadmin} alt="listadm" />
        </div>
      </div>
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
