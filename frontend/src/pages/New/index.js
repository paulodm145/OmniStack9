/** INDEX DA PÁGINA NEW */
import React, { useState, useMemo } from 'react';

import camera from '../../assets/camera.svg';

import './style.css';

export default function New(){

    const[thumbnail, setThumbnail ] = useState(null);
    const[company, setCompany ] = useState('');
    const[techs, setTechs ] = useState('');
    const[price, setPrice ] = useState('');


    /**cria preview da imagem */
    const preview = useMemo(() => {
            return thumbnail ? URL.createObjectURL(thumbnail) : null;
        },[thumbnail])

    function handleSubmit() {
        
    }

    return(
        <form onSubmit={handleSubmit}>

           <label id="thumbnail" style={{ backgroundImage: 'url(${preview})'}} >
               <input type="file" onChange={event => setThumbnail(event.target.files[0])} />
               <img src={camera} alt='Select IMG' />
           </label>


           <label htmlFor="company">EMPRESA</label>
           <input
                id="company"
                placeholder="Sua empresa INCRÍVEL"
                value={company}
                onChange={event => setCompany(event.target.value)}
            />

            <label htmlFor="techs">TECNOLOGIAS * <span>(separadas por virgula)</span></label>
            <input
                    id="techs"
                    placeholder="Quais tecnologias usam?"
                    value={techs}
                    onChange={event => setTechs(event.target.value)}
            />

            
            <label htmlFor="techs">Valor da Diária * <span>(Em branco para GRATUITO)</span></label>
            <input
                    id="price"
                    placeholder="Valor"
                    value={price}
                    onChange={event => setPrice(event.target.value)}
            />

        <button className="btn" type="submit">Cadastrar</button>

        </form>
    )

}