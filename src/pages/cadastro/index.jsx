import axios from 'axios';
import React, { useState } from 'react';

import './style.css';

export default function CadastroPage(props){

    const api = axios.create({
        baseURL: "https://flashcard-api-mayck.herokuapp.com/api/colecoes"
      });

    const [data, setData] = useState({
        name: '',
        description: ''
    })

    function submit(e) {
        e.preventDefault();
        api.post('/',
            {
                name: data.name,
                description: data.description,
            }
        )
    }

    function handle(e) {
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }

    return (
        <div className="cad-container">
            <form onSubmit={(e) => submit(e)} className='formulario' >
                <label>
                    nome do curso:
                    <input onChange={(e) => handle(e)} id='name' value={data.name} type='text' name='name' />  
                </label>
                <label>
                    descricao: 
                    <input onChange={(e) => handle(e)} id='description' value={data.description} type='text' name='description' />
                </label>
                <button>adicionar</button>
            </form>
        </div>
    )
}
