import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import PublicNavbar from "../components/navBar";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProductsPage from "../pages/ProductsPage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";
import PerfilPage from "../pages/PerfilPage";
import ColeccionesPage from "../pages/ColeccionesPage";
import ShoesPage from "../pages/ShoesPage";
import ClosePage from "../pages/ClosePage";
import Footer from "../components/Footer";

import { useContext,useEffect} from "react";
import AuthContext from "../context/authContext";
import ShoesProductPage from "../pages/ShoesProductPage";
import CloseProductPage from "../pages/CloseProductPage";



const AppRouter = () => {

const { renewToken, user } = useContext(AuthContext)

useEffect(() => {
renewToken();
}, [renewToken])

  return (
   <>
   <Router>
    <PublicNavbar/>
    <div>
    <Routes>
       <Route path="/" element = {<HomePage/>} />
       <Route path="/about" element = {<AboutPage/>} />
       <Route path="/products" element = {<ProductsPage/>}/>
       <Route path="/products/:id" element= {<ProductPage/>}/>
       <Route path="/productShoes/:id" element= {<ShoesProductPage/>}/>
       <Route path="/cart" element= {<CartPage/>}/>
       <Route path="/colection" element={<ColeccionesPage/>}/>
       <Route path="/ShoesColection" element={<ShoesPage/>}/>
       <Route path="/CloseColection" element={<ClosePage/>}/>
       <Route path="/productClose/:id" element= {<CloseProductPage/>}/>
      {user.name ? (
      <>
      <Route path="/perfil" element={<PerfilPage/>}/>
      </>
      ):(
      <>
      <Route path="/login" element = {<LoginPage/>} />
      <Route path="/register" element={<RegisterPage/>}/> 
      </>  
      )
    }


       <Route path="/*" element={<Navigate to="/" replace/>}/>
       </Routes>
    </div>
    <Footer/>
   </Router>
   </>
  )
}

export default AppRouter