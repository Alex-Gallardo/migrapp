import React, { Component } from 'react';
import '../css/Perfil.css'
import Chico from '../icons/chico.svg'

class Perfil extends Component {
    state = {
        data: {}
    }
    render() {
        return (
            <div className="cont-perfil">

                <div className="cont-perfil-info container animated fadeInUp">
                    <div className='b-img-perfil'>
                        <img src={Chico} width='100px' alt="chico" className='img-perfil' />
                    </div>
                    <div className="info-personal">
                        <h4>Hi, Alex</h4>
                        <p >Que bueno verte por aqui! Estos datos hemos resuelto por ti...</p>
                    </div>
                    <div className="info-data">
                        <h5>Lugar (Recomendado)</h5>
                        <span className="badge badge-pill badge-info">Península Olympic</span>
                    </div>
                    <div className="info-data">
                        <h5>Animal migratorio</h5>
                        <span className="badge badge-pill badge-info">Búho</span>
                    </div>
                    <div className="info-data">
                        <p>
                    En alta mar, las ballenas, los delfines, los leones marinos, las focas y las nutrias marinas se alimentan en el Océano Pacífico. Invertebrados de innumerables formas, tamaños, colores y texturas habitan las piscinas de mareas.

                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Perfil;