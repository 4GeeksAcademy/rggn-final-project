import React, { useState, useContext } from "react";
import {Context} from "../store/appContext.js";
import backgroundImage from '../../img/backgroundsignup.jpg';

export const Signup = () => {

  const { store, actions } = useContext(Context)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    countries: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
  };

  const signupClick = async (e) => {
    e.preventDefault()
    const respuesta = await actions.signup(formData.name, formData.email, formData.password, formData.countries)
    console.log(respuesta)
  }

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    fontFamily: 'Raleway, sans-serif',
    fontSize:'13px'
  };

  const countries = ["Venezuela", "Argentina", "Ecuador"]

  console.log(formData)

  return (
    <div style={backgroundStyle} className="d-flex align-items-center justify-content-center">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="card p-2 px-3 bg-dark text-white">
              <h2 className="text-center mb-4">Comienza tu aventura!</h2>
              <p className="text-center text-white mb-4">Ya estás registrado? <a href="/login">Inicia sesion aqui</a></p>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Nombre de Usuario:</label>
                  <input
                    type="text"
                    className="form-control bg-secondary"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Correo Electrónico:</label>
                  <input
                    type="email"
                    className="form-control bg-secondary"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="country" className="form-label">Pais:</label>
                  <select
                    className="form-select"
                    name="countries"
                    onChange={handleChange}
                  >
                    <option value={0} selected>select your country</option>
                    {countries.map((countries, index) => {
                      return (<option key={index} value={countries}>{countries}</option>)
                    })}
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Contraseña:</label>
                  <div className="input-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control bg-secondary"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={handleTogglePassword}
                    >
                      {showPassword ? "Ocultar" : "Mostrar"}
                    </button>
                  </div>
                </div>

                <div className="mb-3">
                  <button onClick={signupClick} className="btn btn-primary w-100">Registrarme</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup