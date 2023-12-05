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
            <div className="container-fluid position-relative">
                <img
                    src={logoImage}
                    alt="Logotipo"
                    className="fade-up img-fluid position-absolute top-0 mt-3"
                    style={{ maxWidth: '300px', left: '10px' }}
                />
            </div>
            <div className="container">
                <div className="" style={cardStyle}>
                    <div className="card-body">
                        <h1 className="text-center fade-down">
                            DESCUBRE <br /> EXPLORA <br /> VIVE
                        </h1>
                        <p className="text-center fade-left">
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
