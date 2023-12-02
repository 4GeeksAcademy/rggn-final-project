import React from "react";
import { Link } from "react-router-dom";



export const Navbar = () => {

	return (
		<nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
		<div className="container-fluid ps-5">
		  <Link className="navbar-brand" to="/">
		  RGGN
		  </Link>
		  <button
			className="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarNav"
			aria-controls="navbarNav"
			aria-expanded="false"
			aria-label="Toggle navigation"
		  >
			<span className="navbar-toggler-icon"></span>
		  </button>
		  <div className="collapse navbar-collapse" id="navbarNav">
			<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
			  <li className="nav-item">
				<Link className="nav-link active custom-margin" to="/">
				  Inicio
				</Link>
			  </li>
			  <li className="nav-item">
				<Link className="nav-link active custom-margin" to="/services">
				  Servicios
				</Link>
			  </li>
			  <li className="nav-item">
				<Link className="nav-link active custom-margin" to="/about">
				  Sobre Nosotros
				</Link>
			  </li>
			  <li className="nav-item">
				<Link className="nav-link active custom-margin" to="/">
				  Contacto
				</Link>
			  </li>
			</ul>
		  </div>
		</div>
	  </nav>
	);
  };

  export default Navbar
