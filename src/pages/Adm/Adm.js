import React from "react";
import {useNavigate, Link} from 'react-router-dom';
import './Adm.css';
import floweradmin from "../../assets/floweradm.png";
import listadmin from "../../assets/listadm.png";
import useradmin from "../../assets/useradm.png";
function Adm(){
    return(
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
                    <h1>alguma coisa aq</h1>
                </div>
                <div className="adm-content-right">
                        <h1 className="adm-title">Adicionar produto no site</h1>
                <div clasName="form-input">
                            <div clasName="form-group">
                        <input type="text" className="form" placeholder="Nome do produto" />
                    </div>
                            <div clasName="form-group">
                        <input type="text" className="form" placeholder="Descrição do produto" />
                    </div>
                            <div clasName="form-group">
                        <input type="text" className="form" placeholder="Preço do produto" />
                    </div>
                            <div clasName="form-group">
                        <input type="number" className="form" placeholder="Quantidade do produto" />
                    </div>
                    </div>
                    <button type="submit" className="btn-cadastrar-produto">Adicionar produto</button>
                </div>
            </div>
            </div>
        
    );
}


export default Adm;