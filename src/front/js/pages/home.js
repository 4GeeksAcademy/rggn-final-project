import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeImage from '../../img/landing.jpg';
import logoImage from '../../img/logotipo.png';
import '../../styles/index.css';

export const Home = () => {
    const handleLogin = () => {
        console.log("Iniciar sesión");
    };

    const handleRegister = () => {
        console.log("Registrarse");
    };

    const cardStyle = {
        position: 'relative',
        backgroundColor: 'transparent',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        fontFamily: 'Unbounded, sans-serif',
        marginTop:'15vh',
        marginRight:'4vh'
    };

    const HomeStyle = {
        backgroundImage: `url(${HomeImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    };

    return (
        <div style={HomeStyle}>
             {/* <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container-fluid ps-5">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-2">
                            <li className="nav-item">
                                <Link className="nav-link active custom-margin" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active custom-margin" to="/">Servicios</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active custom-margin" to="/about">Sobre Nosotros</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active custom-margin" to="/">Contacto</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
            <div className="container-fluid position-relative">
                <img
                    src={logoImage}
                    alt="Logotipo"
                    className="img-fluid position-absolute top-0 mt-3"
                    style={{ maxWidth: '300px', left: '10px' }}
                />
            </div>
            <div className="container">
                <div className="" style={cardStyle}>
                    <div className="card-body">
                        <h1 className="text-center">
                            DESCUBRE <br /> EXPLORA <br /> VIVE
                        </h1>
                        <p className="text-center">
                            Bienvenido a nuestra comunidad de viajeros y aventureros.
                            <br /> En nuestro sitio, te ofrecemos la oportunidad de
                            <br />descubrir destinos emocionantes,
                            <br /> explorar nuevas culturas y vivir experiencias inolvidables.
                            <br /> Únete a nosotros mientras exploramos el mundo juntos!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
