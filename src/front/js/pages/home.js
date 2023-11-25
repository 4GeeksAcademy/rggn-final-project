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
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        fontFamily: 'Unbounded, sans-serif',
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
                    <div className="card-body mt-5 pt-5">
                        <h1 className="text-center mb-4">
                            DESCUBRE <br /> EXPLORA <br /> VIVE
                        </h1>
                        <p className="text-center mb-4">
                            Bienvenido a nuestra comunidad de viajeros y aventureros.
                            <br /> En nuestro sitio, te ofrecemos la oportunidad de
                            <br />descubrir destinos emocionantes,
                            <br /> explorar nuevas culturas y vivir experiencias inolvidables.
                            <br /> Únete a nosotros mientras exploramos el mundo juntos.
                        </p>
                    </div>
                    <div className="card-footer">
                        <div className="d-flex flex-column justify-content-between mb-5">
                            <Link to="/signup" className="btn btn-dark mb-3 text-warning btn-lg">Registrarse</Link>
                            <Link to="/login" className="btn btn-dark mb-3 text-warning btn-lg">Iniciar sesión</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}