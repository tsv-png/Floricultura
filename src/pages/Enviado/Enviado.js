import React from "react";
import "./Enviado.css";
import flower from "../../assets/flower.png";
function Enviado() {
    return(
            <div className="container">
            <div className="logo">
                <img src={flower} alt="logo" />
            </div>
            <div className="form-input">
                <h1 className="title-form">E-mail de recuperação enviado com sucesso!</h1>
                </div>
                <button type="submit" className="btn-recuperar">Tela inicial</button>
            </div>
            
    );
}

export default Enviado;