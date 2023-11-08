import { useContext, useEffect } from "react";
import ProductContext from "../context/productContext";
import { NavLink, useParams } from "react-router-dom";
import { Link } from "react-router-dom"

const ShoesProductPage = () => {

const {getProductShoes, product, addProductShoes} = useContext(ProductContext);
const {id} = useParams();
//console.log (id)

const handleAddProduct = (id) => {
  addProductShoes(id)
}


useEffect(() => {
getProductShoes(id)
console.log(getProductShoes)
}, [getProductShoes, id])


  return (
		<>
			<div
				className="container"
				style={{ paddingTop: "20px", paddingBottom: "20px" }}
			>
				<section className="row">
					<article className="col">
						{product && (
							<div className="card mb-3" style={{ maxWidth: "100%" }}>
								<div className="row g-0">
									<div className="col-md-4">
										<div id="carouselExample" className="carousel slide ">
											<div className="carousel-inner">
												<div className="carousel-item active img1">
													<img
														src={product.image}
														className="img-fluid rounded-start"
														alt={product.productName}
														style={{ height: "100%" }}
													/>
												</div>
												<div className="carousel-item img2">
													<img
														src={product.image2}
														className="img-fluid rounded-start"
														alt={product.productName}
														style={{ height: "100%" }}
													/>
												</div>
											</div>
											<button
												className="carousel-control-prev"
												type="button"
												data-bs-target="#carouselExample"
												data-bs-slide="prev"
											>
												<span
													className="carousel-control-prev-icon"
													aria-hidden="true"
												/>
												<span className="visually-hidden">Previous</span>
											</button>
											<button
												className="carousel-control-next"
												type="button"
												data-bs-target="#carouselExample"
												data-bs-slide="next"
											>
												<span
													className="carousel-control-next-icon"
													aria-hidden="true"
												/>
												<span className="visually-hidden">Next</span>
											</button>
										</div>
									</div>

									<div
										className="col-md-8"
										style={{
											textAlign: "center",
											paddingTop: "50px",
											paddingBottom: "50px",
										}}
									>
										<h1 className="card-title">{product.productName}</h1>
										<br />
										<h3 className="card-text">${product.productPrice} MXN</h3>
										<h6 className="card-text">
											<small className="text-body-secondary">
												{product.description}
											</small>
										</h6>{" "}
										<br />
										<br />
										<div class="container text-center">
											<div class="row">
												<div class="col">
													<Link onClick={() => handleAddProduct(product.id)}>
														<button
															class="btnHeard"
															style={{
																display: "block",
																marginLeft: "auto",
																marginRight: "auto",
															}}
														>
															<svg
																viewBox="0 0 17.503 15.625"
																height="20.625"
																width="20.503"
																xmlns="http://www.w3.org/2000/svg"
																class="icon"
															>
																<path
																	transform="translate(0 0)"
																	d="M8.752,15.625h0L1.383,8.162a4.824,4.824,0,0,1,0-6.762,4.679,4.679,0,0,1,6.674,0l.694.7.694-.7a4.678,4.678,0,0,1,6.675,0,4.825,4.825,0,0,1,0,6.762L8.752,15.624ZM4.72,1.25A3.442,3.442,0,0,0,2.277,2.275a3.562,3.562,0,0,0,0,5l6.475,6.556,6.475-6.556a3.563,3.563,0,0,0,0-5A3.443,3.443,0,0,0,12.786,1.25h-.01a3.415,3.415,0,0,0-2.443,1.038L8.752,3.9,7.164,2.275A3.442,3.442,0,0,0,4.72,1.25Z"
																	id="Fill"
																></path>
															</svg>
														</button>
													</Link>
												</div>
												<div class="col">
													<NavLink to="/ShoesColection">
														{" "}
														<button className="btnProduct">
															<span className="btnProduct-content">Back</span>
														</button>
													</NavLink>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						)}
					</article>
				</section>
			</div>
		</>
	);
}

export default ShoesProductPage