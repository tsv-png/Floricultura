import React from "react";
import { useNavigate } from "react-router-dom";
import './Redefinicao.css';
import flower from '../../assets/flower.png';


function Redefinicao (){
    return(
        <div className="container">
            <div className="logo">
                <img src={flower} alt="logo" />
            </div>
            <div className="form-input">
            <h1 className="title-form">Formulário de recuperação de senha</h1>
            <div className="form-recupera">
                <input type="email" id="email" name="email" placeholder="E-mail" />
            </div>
                <button type="submit" className="btn-recuperar">Recuperar senha</button>
            </div>
            

            </div>
        
    );
}

export default Redefinicao;