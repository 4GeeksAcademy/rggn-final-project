import React, { useContext, useState } from "react";
import backgroundsignup from '../../img/backgroundsignup.jpg';
import { Context } from "../store/appContext";
import { Navigate, useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'


export const Login = () => {
  const { actions } = useContext(Context)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let result = await actions.login(formData)
    console.log(formData);
    if (result === 400) {
      Swal.fire({
        title: 'Error!',
        text: 'Credenciales incorrectas',
        icon: 'error',
        confirmButtonText: 'Cool'
      });
    } else if (result === 200) {
      // alert("Bienvenido usuario");
      // navigate(posts)
      Swal.fire({
        title: 'Bienvenido!',
        text: ` Gusto verte viajero!`,
        icon: 'success',
        confirmButtonText: 'Entendido'
      });
    }
  };

  const backgroundStyle = {
    backgroundImage: `url(${backgroundsignup})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    fontFamily: 'Raleway, sans-serif',
    height: '100vh',
  };


  return (
    <div style={backgroundStyle} className="d-flex align-items-center justify-content-center">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="card p-4 bg-dark text-white">
              <h2 className="text-center mb-4">Bienvenido!</h2>
              <p className="text-center text-white mb-4">Aun no estas registrado? <a href="/signup">Entra aqui</a></p>
              <form onSubmit={handleSubmit}>
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

export default Login