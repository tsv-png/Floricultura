import React from "react";
import { useNavigate } from "react-router-dom";
import './Cadastroadm.css';
import flower from '../../assets/flower.png';


function Cadastroadm (){
    return(
        <div className="container">
            <div className="logo">
                <img src={flower} alt="logo Flower redefinição" />
            </div>
            <div className="form-input">
            <h1 className="title-form">Formulário de cadastro de administrador</h1>
            <div className="form-cadastro">
                <input type="text" id="nome" name="nome" placeholder="Nome" />
            </div>
            <div className="form-cadastro">
            <input type="email" id="Email" name="Email" placeholder="E-mail" />
            </div>
            <div className="form-cadastro">
            <input type="password" id="Password" name="Password" placeholder="Senha" />
            </div>
            <div className="form-cadastro">
            <input type="password" id="Password" name="Password" placeholder="Confirmar senha" />
            </div>
            <button type="submit" className="btn-cadastrar">Cadastre-se</button>
            </div>
                
            </div>
        
    );
}

export default Cadastroadm;