import React, { Component } from 'react';
import '../css/Navegacion.css'
import { Link } from 'react-router-dom';
import Menu from "../icons/menu.svg";
import Chico from '../icons/chico.svg'

class Navegacion extends Component {
    render() {
        return (
            <div className='container cont'>
                <img src={Menu} alt="Menu" width="30px" />
                <Link to='/perfil'><img src={Chico} width="35px" alt="Chico" /></Link>
            </div>
        );
    }
}

export default Navegacion;