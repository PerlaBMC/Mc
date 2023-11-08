import { useContext } from "react";
import AuthContext from "../context/authContext";


const PerfilPage = () => {
  const { user } = useContext(AuthContext);
  return (
  <>
  		<div class="container">
  <div class="content">
    <div class="content__container">
      <p class="content__container__text">
	  {user?.name} 
      </p>
      <ul class="content__container__list">
        <li class="content__container__list__item">bienvenida a Mc!</li>
        <li class="content__container__list__item">welcome to Mc!</li>
        <li class="content__container__list__item">bienvenue dans Mc !</li>
        <li class="content__container__list__item">benvenuto nel Mc!</li>
      </ul>
    </div>
  </div>
</div>
  </>
  )
}

export default PerfilPage