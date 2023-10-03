import { useReducer, useCallback } from "react"
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import PropTypes from "prop-types";
import Swal from "sweetalert2"


import { loginService, registerService , renewtokenService} from "../services/authService"

const initialState = {
    user: {},
}

const AuthState = ({children}) => {

  const [ globalState, dispatch ] = useReducer(authReducer, initialState);

  const iniciarSesion = async (form) => {
    try {
        const resp = await loginService(form);
        dispatch({
            type: "INICIAR_SESION",
            payload: resp.data.data
        })
        localStorage.setItem ("token", resp.data.token)
            
      } catch (error) {
        console.log(error.response.data)
        Swal.fire({
          icon: "error",
          title: "Usuario o password incorrecto",
          showConfirmButton: false,
          timer: 2000,
        });  
      }
  };

  const registrarUsuario = async (form) => {
    try {
      const resp = await registerService(form);

      dispatch({
        type: "INICIAR_SESION",
        payload: resp.data.data,
      });

      localStorage.setItem("token", resp.data.token);
    } catch (error) {
      console.log(error.response.data);
      Swal.fire({
        icon: "error",
        title: "Email registrado",
        showConfirmButton: false,
        timer: 2000,
      });  
    }
  };

  const renewToken = useCallback(async () => {
    try {
      const resp = await renewtokenService();

      dispatch({
        type: "INICIAR_SESION",
        payload: resp.data.data,
      });

      localStorage.setItem("token", resp.data.token)

    } catch (error) {
      console.log("error");
    }
  }, [])
  

  const logout = () => {
    dispatch({
        type: "LOGOUT",
        payload: {}
    });

    localStorage.removeItem("token")
  }


  return (
   <AuthContext.Provider value={{user: globalState.user, iniciarSesion, logout, registrarUsuario, renewToken}}>
    {children}
   </AuthContext.Provider>
  )
}

AuthState.propTypes = {
    children: PropTypes.node,
}

export default AuthState