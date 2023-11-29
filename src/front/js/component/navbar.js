import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg fixed-top">
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
	</nav>
	);
};
