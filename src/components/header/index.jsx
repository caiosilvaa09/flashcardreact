import React from 'react';

import './style.css';

export default function Header(){
    return (
        <header>
            <ul>
                <Link to="/courses" className="link">
                    <a>Home</a>
                </Link>
                {/* <li>home</li> */}
                <li>|</li>

                <Link to="/courses" className="link">
                    <a>Cursos</a>
                </Link>
                {/* <li>cursos</li> */}
                <li>|</li>

                <Link to="/cadastro" className="link">
                    <a>Cadastrar Curso</a>
                </Link>
                {/* <li>cadastrar curso</li> */}
            </ul>
        </header>
    )
}
