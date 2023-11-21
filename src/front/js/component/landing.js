import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Landing = () => {
    const handleLogin = () => {
        console.log("Iniciar sesión");
    };

    const handleRegister = () => {
        console.log("Registrarse");
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <h1>Bienvenido</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit....</p>
                </div>
                <div className="col-md-6">
                    <div className="d-flex flex-column align-items-end">
                        <button className="btn btn-primary mb-3" onClick={handleLogin}>Iniciar sesión</button>
                        <button className="btn btn-success" onClick={handleRegister}>Registrarse</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;