
import { useContext, useState, useEffect } from "react";
import AuthContext from "../context/authContext";

const PerfilPage = () => {
  const { user } = useContext(AuthContext);
  return (
  <>
 <div className="profile">
<div className="textContainer"> <br />
<h2>Bienvenida</h2>
    <h1>{user?.name}</h1>
    <h3><strong>Tú</strong> eres tu propia <strong>moda</strong></h3>
</div>
 </div>
  </>
  )
}

export default PerfilPage
