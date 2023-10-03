import { NavLink} from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/authContext";
import ProductContext from "../context/productContext";


const PublicNavbar = () => {

  const { user ,logout} = useContext(AuthContext);
  const {cart} = useContext(ProductContext)


  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark"> 
      <div className="container">
        <NavLink className="navbar-brand" to="/home">
        <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1696200171/Disen%CC%83o_sin_ti%CC%81tulo_oehb5v.png" alt="Logo" style={{width: "150px"}}/>
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
                to="/about"
              >
                About
              </NavLink>
            </li>
            {/*<li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                aria-current="page"
                to="/products"
              >
                Products
              </NavLink>
              </li>*/}
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                aria-current="page"
                to="/colection"
              >
                Colecciones
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
                Carrito {cart.length}
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

              { user?.name ? (
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
                  <button className="dropdown-item" type="button" onClick={logout}>
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
              ) }
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default PublicNavbar;