import  axios  from "axios"

const URL_ROOT = "http://localhost:4001/api/auth"
//const URL_ROOT = "https://mc-full-backend.onrender.com/api/auth"

const loginService = async (form) => {
    const resp = await axios.post(`${URL_ROOT}/login`, form);
    return resp;
  };

  const registerService = async (form) => {
    const resp = await axios.post(`${URL_ROOT}/registrar`, form);
    return resp;
  };

  const renewtokenService = async () => {
    const resp = await axios.get(`${URL_ROOT}/renew`, {
      headers: {
       "x-token": localStorage.getItem("token")
      }
    });
    return resp;
  };

  export { loginService, registerService, renewtokenService};