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
        <h3 id="inputUserName">{user?.name}</h3>
					{cart.map((product) => (
						<div
							key={product.id}
							className="card mb-3"
							style={{ maxWidth: 540 }}
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
										<h5 className="card-title" id="inputProductName">
											{product.productName}
										</h5>
										<p className="card-text" id="inputProductPrice">
											$ {product.productPrice} MXN
										</p>
										<p className="card-text" id="inputProductID">
											<small className="text-body-secondary">
												{product.productID}
											</small>
										</p>
                    <div>
                    <select
										className="form-select"
                    id="inputProductEspecificaciones"
										>
										<option value="1">{product.productSize.type1}</option>
										<option value="2">{product.productSize.type2}</option>
										<option value="3">{product.productSize.type3}</option>
										</select>
                    </div> <br />
                    <div>
                    <select
										className="form-select"
                    id="inputProductCantidad"
										>
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										</select>
                    </div> <br />
										<button
											type="button"
											className="btn btn-danger"
											onClick={() => handleDeleteProduct(product.id)}
										>
											Eliminar producto
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
									<p className="fs-1">Total</p>
									<p className="fs-2" id="compraTotal">
										{" "}
										$ {ammount} MXN{" "}
									</p>
                  <div>
                    <select
										className="form-select"
                    id="inputProveedorName"
										>
										<option value="1">One</option>
										<option value="2">Two</option>
										<option value="3">Three</option>
										</select>
                    </div> <br />

									<main className="row">
										<article className="col">
											<button type="btn" className="btn btn-primary">
												Confirmar compra
											</button>
										</article>
									</main>
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
