import React, { useState } from "react";
import backgroundImage from '../../img/backgroundsignup.jpg';

export const Signup = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    email: '',
    password: '',
    country: '',
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

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
  };

  const countries = ["Venezuela", "Argentina", "Ecuador"]

  console.log(formData)

  return (
    <div style={backgroundStyle} className="d-flex align-items-center justify-content-center">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="card p-4 bg-dark text-white">
              <h2 className="text-center mb-4">Comienza tu aventura!</h2>
              <p className="text-center text-white mb-4">Ya estás registrado? <a href="/login">Inicia sesion aqui</a></p>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="user_name" className="form-label">Nombre de Usuario:</label>
                  <input
                    type="text"
                    className="form-control bg-secondary"
                    id="user_name"
                    name="user_name"
                    value={formData.user_name}
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
                    name="country"
                    onChange={handleChange}
                  >
                    <option value={0} selected>select your country</option>
                    {countries.map((country, index) => {
                      return (<option key={index} value={country}>{country}</option>)
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
                  <button type="submit" className="btn btn-primary w-100">Iniciar sesión</button>
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