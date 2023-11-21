import { useContext, useState, useEffect } from "react";
import ProductContext from "../context/productContext";
import AuthContext from "../context/authContext";
import { Link} from "react-router-dom";

{/*const initForm = {
  user_name: "",
  productName:"",
  productID: "",
  especificaciones: "",
  precio: "",
  cantidad: "", 
  proveedor: ""
};*/}



const CartPage = () => {
	const { cart, deleteCartProduct, registrarPedido  } = useContext(ProductContext);
	const { user } = useContext(AuthContext);
	const [ammount, setAmmount] = useState(0);
	const handleDeleteProduct = (id) => {
		deleteCartProduct(id);
	};






	const initForm = {
		user_name: user.name,
		productName: "",
		productID: "",
		especificaciones: "",
		precio: "",
		cantidad: "", 
		proveedor: ""
	  };
console.log(initForm.productName)

	useEffect(() => {
		setAmmount(cart.reduce((acc, item) => acc + item.productPrice, 0));
	}, [cart]);


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
			<main className="row">
				<article className="col">
					<div className="container">
						<div className="content">
							<div className="content__container">
								<p className="content__container__text">{user?.name}</p>
								<ul className="content__container__list">
									<li className="content__container__list__item">
										bienvenida a Mc!
									</li>
									<li className="content__container__list__item">
										welcome to Mc!
									</li>
									<li className="content__container__list__item">
										bienvenue dans Mc !
									</li>
									<li className="content__container__list__item">
										benvenuto nel Mc!
									</li>
								</ul>
							</div>
						</div>
					</div>
					<form onSubmit={handleSubmit}>
						{cart.map((product) => (
							<div key={product.id} className="card mb-3 cardCart">
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
										<div className="card-body" >
											<h3 className="card-title" id="inputProductName">
												{product.productName}
											</h3>
											<h5 className="card-text" id="inputProductPrice">
												$ {product.productPrice} MXN
											</h5>
											<p
												className="card-text"
												id="inputProductID"
												style={{ color: "white" }}
											>
												{product.productID}
											</p>
											{/*Requisito formulario nombre de usuario*/}
											<input
												className="form-control"
												type="hidden"
												value={form.user_name}
												readonly
											></input>
											{/*Requisito formulario nombre de producto*/}
											<input
												className="form-control"
												type="hidden"
												id="nombreProducto"
												name="inputProductName"
												value={(form.productName = product.productName)}
												readonly
											></input>
											{/*Requisito formulario id de producto*/}
											<input
												type="hidden"
												id="inputProductID"
												name="productID"
												value={(form.productID = product.productID)}
												onChange={handleChange}
											/>
											<select
												className="form-select"
												id="inputEspecificaciones"
											>
												<option selected>Selecciona tu mejor opción</option>
												<option
													value={
														(form.especificaciones = product.productSize.type1)
													}
												>
													{product.productSize.type1}
												</option>
												<option
													value={
														(form.especificaciones = product.productSize.type2)
													}
												>
													{product.productSize.type2}
												</option>
												<option
													value={
														(form.especificaciones = product.productSize.type3)
													}
												>
													{" "}
													{product.productSize.type3}
												</option>
												<option
													value={
														(form.especificaciones = product.productSize.type4)
													}
												>
													{product.productSize.type4}
												</option>
												<option
													value={
														(form.especificaciones = product.productSize.type5)
													}
												>
													{product.productSize.type5}
												</option>
												<option
													value={
														(form.especificaciones = product.productSize.type6)
													}
												>
													{product.productSize.type6}
												</option>
											</select>
											{/*Requisito formulario precio*/}
											<input
												type="hidden"
												id="inputPrecio"
												name="precio"
												value={(form.precio = product.productPrice)}
												onChange={handleChange}
											/>
											
											
											{/*<label htmlFor="inputProveedor">Proveedor</label>
											<select
												className="form-select"
												id="inputProveedorName"
												onChange={handleChange}
											>
												<option selected>Choose...</option>
												<option value={(form.proveedor = "ana")}>Ana</option>
												<option value={form.proveedor}>Gaby</option>
												<option>Cristina Chavarria</option>
											</select>
											{/*<input type="text" name="proveedor" id="proveedor"  value={form.proveedor =  prov1} onChange={handleChange}/>*/}
											<br />
											{/*<label htmlFor="inputCantidad">Cantidad</label>
											<input
												type="number"
												id="inputCantidad"
												name="cantidad"
												value={form.cantidad}
												onChange={handleChange}
												/>*/}
											
											<div
												style={{
													display: "flex",
													justifyContent: "space-between",
												}}
											>
												{/*<button type="submit" className="btn btn-success">
													<i className="bi bi-box2-heart-fill"> </i> Confirmar
											</button>*/}

												<button
													type="button"
													className="btn btn-danger"
													onClick={() => handleDeleteProduct(product.id)}
												>
													<i className="bi bi-trash-fill"></i> Eliminar
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</form>
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

									

										{/*<form onSubmit={handleSubmit}>	
<table className="table">
  <thead>
    <tr>
      <th scope="col">Nombre de producto</th>
      <th scope="col">Precio</th>
	  <th scope="col">Id</th>
      <th scope="col">Talla</th>
      <th scope="col">Cantidad</th>
	  <th scope="col">Proveedor</th>
    </tr>
  </thead>
  {cart.map((product) => (
  <tbody>
    <tr>
      <th scope="row" id="inputProductName">
		<input type="text" value={form.productName} />
		</th>
      <td><input type="text" value={form.precio} /></td>
	  <td><input type="text" value={form.productID} /></td>
	  <td><input type="text" value={form.especificaciones}/></td>

      <td>
   <select className="form-select" id="inputEspecificaciones">
    <option >{product.productSize.type1}</option>
    <option >{product.productSize.type2}</option>
	<option> {product.productSize.type3}</option>
	<option >{product.productSize.type4}</option>
	<option >{product.productSize.type5}</option>
	<option >{product.productSize.type6}</option>
</select>
	  </td>
	  <td>
	  <select className="form-select" id="inputEspecificaciones">
    <option >1</option>
    <option >2</option>
	<option> 3</option>
	<option >4</option>
	<option >5</option>

</select>
	  </td>

	  <td>
	  <select className="form-select" id="inputEspecificaciones">
    <option >Ana</option>
    <option >Gaby</option>
	<option> Camila</option>
	<option >Miriam</option>
	<option >Melisa</option>

</select>
	  </td>
    </tr>
  </tbody>
 ))}		


<div style={{display: "flex", justifyContent: "space-between"}}>
<button type="submit" className="btn btn-success"><i className="bi bi-box2-heart-fill"> </i> Confirmar</button>
	
	<button
											  type="button"
											  className="btn btn-danger"
											  onClick={() => handleDeleteProduct(product.id)}
										  >
										  <i className="bi bi-trash-fill"></i> Eliminar
										  </button>
</div>

</table>
</form>
			








										{/*<label htmlFor="inputProveedorName">
											Selecciona a tu proveedor
										</label>
										<br /> <br />
										<div className="InputContainer">
											<select
												className="form-select inputProov"
												id="inputProveedorName"
											>
												<option value="1">Ana Cornejo</option>
												<option value="2">Cristina Chavarria</option>
												<option value="3">Dariana Chavarria</option>
												<option value="4">Erika Maca</option>
												<option value="5">Melissa Segovia</option>
												<option value="6">Vania Chavarria</option>
											</select>
										</div>
										<br /> <br />
										<main className="row">
											<article className="col">
												<button className="cta"  type="submit">
													<span>Confirmar compra</span>
													<svg viewBox="0 0 13 10" height="10px" width="15px">
														<path d="M1,5 L11,5"></path>
														<polyline points="8 1 12 5 8 9"></polyline>
													</svg>
							</button>
											</article>
							</main> */}
								<div className="infoCart container">
<img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1700451473/4_gvwink.png" alt="" />

</div>
									</div>{" "}
									<br />
								</>
							) : (
								<>
									<Link to="/login" className="btn SizeDropdown" style={{margin: "40px"}}>
										{" "}
										Iniciar Sesión{" "}
									</Link>
									<br /> <br />
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
