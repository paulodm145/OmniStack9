/**estrutura base de componente vazio */
/**INDEX DA PÁGINA LOGIN */
/** <> </> fragments -> impede a utilização de div */
import React, { useState } from 'react';
import api from '../../services/api';
export default function Login({ history }){

      /**Criando Estados */
  /**ESTADO DOS COMPONENTES */
  /**Toda vez que ocorrer atualização atualiza o valor tb  */
  const[email, setEmail ] = useState('');


  /** Função dentro de função */  
   async function handleSubmit(event){
      event.preventDefault();
      console.log(email);
      const response = await api.post('/sessions',{
        email: email
      });

      const { _id } = response.data;

      console.log(response)

      localStorage.setItem('user', _id);

      history.push('/dashboard');

   };

    return (
    <> 
        <p>
        Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para seu projeto
      </p>
        
      <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-Mail*</label>
          <input 
                id="email" 
                type="email" 
                placeholder="Seu melhor e-mail" 
                value={email}
                onChange = {event => setEmail(event.target.value)}
          />
      <button className="btn" type="submit">Entrar</button>

      </form>
      </>
    );

}