import React from 'react';

import './style.css';

export default function Card(props) {
    return(
        <div className='card-container' >
            <h1>{props.title}</h1>
            <div className='card-img' />
            <div className='card-content' >
            <p>{props.descricao}</p>
            </div>
        </div>
    );
}
