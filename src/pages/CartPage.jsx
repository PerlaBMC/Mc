import { useContext, useState, useEffect } from "react";
import axios from "axios";
import ProductContext from "../context/productContext";
import AuthContext from "../context/authContext";
import { Link } from "react-router-dom";

const initForm = {
  user_name: "",
  productName:"",
  productID: "",
  especificaciones: "",
  precio: "",
  cantidad: "", 
  proveedor: ""
};

/*const inputProductName = document.getElementById("nombreProducto");
const inputProductID= document.getElementById("inputProductID");
const inputProductPrice= document.getElementById("inputProductPrice");
const inputProductEspecificaciones= document.getElementById("inputProductEspecificaciones");
const inputProductCantidad= document.getElementById("inputProductCantidad");
const inputProveedorName=document.getElementById("inputProveedorName")
const inputUserName= document.getElementById("inputUserName")*/

const CartPage = () => {
	const { cart, deleteCartProduct, registrarPedido } =
  useContext(ProductContext);
	const { user } = useContext(AuthContext);
	const [ammount, setAmmount] = useState(0);
	const handleDeleteProduct = (id) => {
		deleteCartProduct(id);
	};

	useEffect(() => {
		setAmmount(cart.reduce((acc, item) => acc + item.productPrice, 0));
	}, [cart]);

	{/*const postPedido = async () => {
		const resp = await axios.post("http://localhost:4001/api/pedido");
		body: JSON.stringify({
      user_name: inputUserName.value,
      productName: inputProductName,
      productID: inputProductID.value,
      especificaciones: inputProductEspecificaciones.value,
      precio: inputProductPrice.value,
      cantidad: inputProductCantidad.value, 
      proveedor: inputProveedorName.value,
		});

		const datos = await resp.json();
		console.log(datos);
	};*/}

	const [form, setForm] = useState(initForm)
  
    const handleChange = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = async (e) => {
    e.preventDefault();
    await registrarPedido(form)

  
  setForm (initForm)
  }

	return (
		<>
			<main className="row" onSubmit={handleSubmit}>
				<article className="col">
					<div class="container">
						<div class="content">
							<div class="content__container">
								<p class="content__container__text">{user?.name}</p>
								<ul class="content__container__list">
									<li class="content__container__list__item">
										bienvenida a Mc!
									</li>
									<li class="content__container__list__item">welcome to Mc!</li>
									<li class="content__container__list__item">
										bienvenue dans Mc !
									</li>
									<li class="content__container__list__item">
										benvenuto nel Mc!
									</li>
								</ul>
							</div>
						</div>
					</div>

					{cart.map((product) => (
						<div
							key={product.id}
							className="card mb-3 cardCart"
						>
							<div className="row g-0">
								<div className="col-md-4">
									<img
										src={product.image}
										className="img-fluid rounded-start"
										alt={product.productName}
										id="imagenProducto"
									/>
								</div>
								<div className="col-md-8">
									<div className="card-body">
										<h3 className="card-title" id="inputProductName">
											{product.productName}
										</h3>
										<h5 className="card-text" id="inputProductPrice">
											$ {product.productPrice} MXN
										</h5>
										
										<p className="card-text" id="inputProductID" style={{color:"white"}}>
												{product.productID}
										</p>
										<div>
											<div>
											<label htmlFor="inputProductCantidad">Modelo</label>
											<select
												className="form-select"
											>
												<option value="1">{product.productSize.type1}</option>
												<option value="2">{product.productSize.type2}</option>
												<option value="3">{product.productSize.type3}</option>
											</select>
										</div>{" "}
										<br />
										<div>
											<label htmlFor="inputProductCantidad">Cantidad</label>
											<select className="form-select" id="inputProductCantidad">
												<option value="1">1</option>
												<option value="2">2</option>
												<option value="3">3</option>
											</select>
										</div>{" "}
										</div>
										<br />
										<button
											type="button"
											className="btn btn-danger"
											onClick={() => handleDeleteProduct(product.id)}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												class="bi bi-trash3-fill"
												viewBox="0 0 16 16"
											>
												<path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
											</svg>
										</button>
									</div>
								</div>
							</div>
						</div>
					))}
				</article>
			</main>
			<section className="row">
				<article className="col">
					{cart.length > 0 ? (
						<>
							{user.name ? (
								<>
									<div className="container spaceAmount">
									<p className="fs-1">Total</p>
									<p className="fs-2" id="compraTotal">
										{" "}
										$ {ammount} MXN{" "}
									</p>
									<label htmlFor="inputProveedorName">Selecciona a tu proveedor</label><br /> <br />
									<div className="InputContainer">
										<select className="form-select inputProov" id="inputProveedorName">
											<option value="1">One</option>
											<option value="2">Two</option>
											<option value="3">Three</option>
										</select>
									</div>{" "}
									<br />
									<main className="row">
										<article className="col">
										<button class="cta">
  <span>Confirmar compra</span>
  <svg viewBox="0 0 13 10" height="10px" width="15px">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
</button>
										</article>
									</main>
									</div> <br />
								</>
							) : (
								<>
									<Link to="/login" className="btn btn-success">
										{" "}
										Iniciar Sesión{" "}
									</Link>
								</>
							)}
						</>
					) : (
						<>
							<p> No hay productos en el carrito </p>
						</>
					)}
				</article>
			</section>
		</>
	);
};

export default CartPage;
