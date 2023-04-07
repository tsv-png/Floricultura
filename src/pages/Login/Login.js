import React from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';
import flower from '../../assets/flower.png';

function Login (){
    return(
        <div className="container">
            <div className="logo">
                <img src={flower} alt="logo Flower Admin" />
            </div>
            <div className="login">
                <div className="login__form">
                    
                        <div className="form-input">

                        <div className="form-group">
                            <input type="text" className="form" placeholder="Usuário" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form" placeholder="Senha" />
                        </div>
                        <button type="submit" className="btn-entrar">Entrar</button>
                        </div>
                
                   <span className="esqueceu-senha"> <a href="#">Esqueceu a Senha?</a></span>
                   <br></br>
                   <span className="registre-se">Não tem uma conta? <a href="#">Registre-se</a></span>
                </div>
            </div>
           </div>
    );
}

export default Login;