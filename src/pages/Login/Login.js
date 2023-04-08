import React from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';
import flower from '../../assets/flower.png';
import { Link } from "react-router-dom";
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
                        <button type="submit" className="btn-entrar">ENTRAR</button>
                        </div>
                     <Link className="esqueceu-senha" to='../pages/Redefinicao/Redefinicao.js'>Esqueceu a Senha?</Link>
                   <br></br>
                   <div className="pai">
                     <a className="registra">Não tem uma conta?</a><Link className="registre-se" to='../pages/Cadastroadm/Cadastroadm.js'>Registre-se</Link>
                   </div>
                   
                </div>
            </div>
           </div>
    );
}

export default Login;