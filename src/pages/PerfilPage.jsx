{/*import { useContext } from "react";
import AuthContext from "../context/authContext";


const PerfilPage = () => {
  const { user } = useContext(AuthContext);
  return (
  <>
  		<div className="container">
  <div className="content">
    <div className="content__container">
      <p className="content__container__text">
	  {user?.name} 
      </p>
      <ul className="content__container__list">
        <li className="content__container__list__item">bienvenida a Mc!</li>
        <li className="content__container__list__item">welcome to Mc!</li>
        <li className="content__container__list__item">bienvenue dans Mc !</li>
        <li className="content__container__list__item">benvenuto nel Mc!</li>
      </ul>
    </div>
  </div>
</div>
  </>
  )
}

export default PerfilPage*/}

import React, { useState } from "react";

const ExampleComponent = () => {
  // Estado local para almacenar el valor del input
  const [inputValue, setInputValue] = useState("");

  // Función para cambiar el valor del input
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // Función para llenar el input con datos
  const fillInputWithData = () => {
    // Puedes cambiar "Datos de ejemplo" por los datos que desees
    setInputValue("Datos de ejemplo");
  };

  return (
    <div>
      {/* Input controlado por el estado local */}
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Ingrese datos"
      />

      {/* Botón para llenar el input con datos */}
      <button onClick={fillInputWithData}>Llenar con datos</button>
    </div>
  );
};

export default ExampleComponent;
