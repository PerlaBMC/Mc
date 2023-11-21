import { NavLink} from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/authContext";
import ProductContext from "../context/productContext";


const PublicNavbar = () => {

  const { user ,logout} = useContext(AuthContext);
  const {cart} = useContext(ProductContext)


  return (
		<nav className="navbar navbar-expand-lg bg-dark navbar-dark">
			<div className="container ">
				<NavLink className="navbar-brand" to="/home">
					<img
						src="https://res.cloudinary.com/dujrua0vo/image/upload/v1696200171/Disen%CC%83o_sin_ti%CC%81tulo_oehb5v.png"
						alt="Logo"
						style={{ width: "150px" }}
					/>
				</NavLink>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink
								className={({ isActive }) =>
									isActive ? "nav-link active" : "nav-link"
								}
								aria-current="page"
								to="/products"
							>
								Joyería
							</NavLink>
						</li>

						<li className="nav-item">
							<NavLink
								className={({ isActive }) =>
									isActive ? "nav-link active" : "nav-link"
								}
								aria-current="page"
								to="/ShoesColection"
							>
								Zapatos
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className={({ isActive }) =>
									isActive ? "nav-link active" : "nav-link"
								}
								aria-current="page"
								to="/CloseColection"
							>
								Ropa
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className={({ isActive }) =>
									isActive ? "nav-link active" : "nav-link"
								}
								aria-current="page"
								to="/cart"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-cart"
									viewBox="0 0 16 16"
								>
									<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
								</svg>
								{cart.length}
							</NavLink>
						</li>
					</ul>
					<ul className="navbar-nav mb-2 mb-lg-0">
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="/"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								{user.name ? user.name : "Cuenta"}
							</a>
							<ul className="dropdown-menu dropdown-menu-end">
								{user?.name ? (
									<>
										<li>
											<NavLink
												className={({ isActive }) =>
													isActive ? "dropdown-item active" : "dropdown-item"
												}
												to="/perfil"
											>
												Perfil
											</NavLink>
										</li>
										<li>
											<button
												className="dropdown-item"
												type="button"
												onClick={logout}
											>
												Logout
											</button>
										</li>
									</>
								) : (
									<>
										<li>
											<NavLink
												className={({ isActive }) =>
													isActive ? "dropdown-item active" : "dropdown-item"
												}
												to="/login"
											>
												Login
											</NavLink>
										</li>
										<li>
											<NavLink
												className={({ isActive }) =>
													isActive ? "dropdown-item active" : "dropdown-item"
												}
												to="/register"
											>
												Registro
											</NavLink>
										</li>
									</>
								)}
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default PublicNavbar;