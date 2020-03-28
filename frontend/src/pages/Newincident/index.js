import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './styles.css';

import logoImg from '../../assets/logo.svg';
//import heroesImg from '../../assets/heroes.png';

export default function Newincident(){
    return(
       <div className="register-container">
           <div className="content">
               <section>
                   <img src={logoImg} alt="Be The Hero" />
                   <h1>Cadastrar novo caso</h1>
                   <p>
                       Descreva o caso detalhadamente para 
                       encontrar um heroi para resaolver isso.
                   </p>
                   <Link className="back-link" to="/profile">
                    <FiArrowLeft size={16} color="e02041" />
                   Voltar para home
                </Link>
               </section>
               <form>
                    <input placeholder="Título do caso" />
                    <textarea  placeholder="E-Mail" />
                    <input placeholder="Valor em reais" />
                    
                    <button className="button" type="submit">
                        Cadastrar
                    </button>

               </form>
           </div>
       </div>
    );
}