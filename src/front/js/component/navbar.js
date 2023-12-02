import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const { store, actions } = useContext(Context)
	const handleLogout = () => {
		actions.logOut()
	}

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
						{store.token == null ? (
							<>
								<Link to="/signup">
									<button className="btn btn-primary">Register</button>
								</Link>
								<Link to="/login">
									<button className="btn btn-primary mx-2">Login</button>
								</Link>
							</>
						) : <button className="btn btn-danger mx-2" onClick={handleLogout}>logOut</button>}
					</ul>
				</div>
			</div>
		</nav>
	);
};
