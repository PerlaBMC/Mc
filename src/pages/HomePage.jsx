
import { NavLink} from "react-router-dom";



const HomePage = () => {
	return (
		<>
			<main className="row">
				<article className="col">
					<div className="container text-center">
						<div className="row row-cols-2 row-cols-sm-2">
							<div className="col" id="divHome1">
								<img
									src="https://res.cloudinary.com/dujrua0vo/image/upload/v1700708051/logo-MC-negro_JPG_uirtkr.jpg"
									alt=""
									className="animate__animated animate__fadeInUp"
								/>
							</div>

							<div className="col" id="divHome2">
								<div className="z-4 position-absolute p-5 rounded-3">
									<span>
										<img
											src="https://res.cloudinary.com/dujrua0vo/image/upload/v1696989204/9_vnzl3h.png"
											alt="6/6"
											className="animate__animated animate__backInRight"
										/>
									</span>
								</div>
								<div className="z-3 position-absolute p-5 rounded-3">
									<span>
										<img
											src="https://res.cloudinary.com/dujrua0vo/image/upload/v1696989206/8_eg73ni.png"
											alt="5/6"
											className="animate__animated animate__backInLeft"
										/>
									</span>
								</div>
								<div className="z-2 position-absolute p-5 rounded-3">
									<span>
										<img
											src="https://res.cloudinary.com/dujrua0vo/image/upload/v1696989206/7_x2pjul.png"
											alt="4/6"
											className="animate__animated animate__backInRight"
										/>
									</span>
								</div>
								<div className="z-1 position-absolute p-5 rounded-3">
									<span>
										<img
											src="https://res.cloudinary.com/dujrua0vo/image/upload/v1696989204/5_llgthm.png"
											alt="3/6"
											className="animate__animated animate__backInLeft"
										/>
									</span>
								</div>
								<div className="z-0 position-absolute p-5 rounded-3">
									<span>
										<img
											src="https://res.cloudinary.com/dujrua0vo/image/upload/v1696989203/4_yb2cjd.png"
											alt="2/6"
											className="animate__animated animate__backInRight"
										/>
									</span>
								</div>
								<div className="z-n1 position-absolute p-5 rounded-3">
									<span>
										<img
											src="https://res.cloudinary.com/dujrua0vo/image/upload/v1696989201/3_mmeoz3.png"
											alt="1/6"
											className="animate__animated animate__backInLeft"
										/>
									</span>
								</div>
							</div>
						</div>
					</div>

					<div className="container">
						<div id="myDIVJoyeria">
							<div className="item1R">
								<div className="container1">
									<img
										src="https://res.cloudinary.com/dujrua0vo/image/upload/v1697053195/4_atlasg.png"
										alt="CollageJoyería"
										className="image"
									/>
									<div className="overlay">
										<div className="text">
											<NavLink to={"/products"}>
												<img
													src="https://res.cloudinary.com/dujrua0vo/image/upload/v1697061654/12_srukis.png"
													alt="LogoJoyeria"
												/>
											</NavLink>
										</div>
									</div>
								</div>
							</div>
							<div className="item2">
								<img
									src="https://res.cloudinary.com/dujrua0vo/image/upload/v1697062776/InicialesZirconias_aowsc9.jpg"
									alt="CollageJoyería 1/6"
									className="animate__animated animate__flash"
								/>
							</div>
							<div className="item3">
								<img
									src="https://res.cloudinary.com/dujrua0vo/image/upload/v1697062790/CA60068_yqfcth.jpg"
									alt="CollageJoyería 2/6"
									className="animate__animated animate__flash"
								/>
							</div>
							<div className="item4">
								<img
									src="https://res.cloudinary.com/dujrua0vo/image/upload/v1695084778/samples/animals/MC/CTB-0834-O_xuqj3n.jpg"
									alt="CollageJoyería 3/6"
									className="animate__animated animate__flash"
								/>
							</div>
							<div className="item5">
								<img
									src="https://res.cloudinary.com/dujrua0vo/image/upload/v1697062778/Nombre-Lisa_lcu9nv.jpg"
									alt="CollageJoyería 4/6"
									className="animate__animated animate__flash"
								/>
							</div>
							<div className="item6">
								<img
									src="https://res.cloudinary.com/dujrua0vo/image/upload/v1697062802/CTB0921_xshahs.jpg"
									alt="CollageJoyería 5/6"
									className="animate__animated animate__flash"
								/>
							</div>
							<div className="item6">
								<img
									src="https://res.cloudinary.com/dujrua0vo/image/upload/v1697062789/1-1_obyb6k.jpg"
									alt="CollageJoyería 6/6"
									className="animate__animated animate__flash"
								/>
							</div>
						</div>

						<div id="myDIVRopa">
							<div className="item1">
								<img
									src="https://res.cloudinary.com/dujrua0vo/image/upload/v1699191728/WhatsApp_Image_2023-10-30_at_21.42.05_3_tfzfia.jpg"
									alt="CollageRopa 1/6"
								/>
							</div>
							<div className="item2">
								<img
									src="https://res.cloudinary.com/dujrua0vo/image/upload/v1697065777/6_pgndwh.png"
									alt="CollageRopa 2/6"
								/>
							</div>
							<div className="item3">
								<img
									src="https://res.cloudinary.com/dujrua0vo/image/upload/v1699191728/WhatsApp_Image_2023-10-30_at_21.42.20_1_mrnyco.jpg"
									alt="CollageRopa 3/6"
								/>
							</div>

							<div className="item4R">
								<div className="container1">
									<img
										src="https://res.cloudinary.com/dujrua0vo/image/upload/v1697053609/6_nch34q.png"
										alt="CollageRopa"
										className="image"
									/>
									<div className="overlay">
										<div className="text">
											<NavLink to={"/CloseColection"}>
												<img
													src="https://res.cloudinary.com/dujrua0vo/image/upload/v1697061657/13_oryuux.png"
													alt="LogoRopa"
												/>
											</NavLink>
										</div>
									</div>
								</div>
							</div>
							<div className="item5">
								<img
									src="https://res.cloudinary.com/dujrua0vo/image/upload/v1697065770/2_hqwqes.png"
									alt="CollageRopa 4/6"
								/>
							</div>
							<div className="item6">
								<img
									src="https://res.cloudinary.com/dujrua0vo/image/upload/v1699191725/WhatsApp_Image_2023-10-30_at_21.41.04_pqecwb.jpg"
									alt="CollageRopa 5/6"
								/>
							</div>
							<div className="item6">
								<img
									src="https://res.cloudinary.com/dujrua0vo/image/upload/v1697065772/3_kvyome.png"
									alt="CollageRopa 6/6"
								/>
							</div>
						</div>

						<div id="myDIVJoyeria">
							<div className="item1R container">
								{" "}
								<div className="container1">
									<img
										src="https://res.cloudinary.com/dujrua0vo/image/upload/v1697053595/11_adgowm.png"
										alt="CollageZapatos"
										className="image"
									/>
									<div className="overlay">
										<div className="text">
											<NavLink to={"/ShoesColection"}>
												<img
													src="https://res.cloudinary.com/dujrua0vo/image/upload/v1697061659/14_dpggyj.png"
													alt="LogoZapatos"
												/>
											</NavLink>
										</div>
									</div>
								</div>
							</div>
							<div className="item2">
								<img
									src="https://gabrielas.com.mx/cdn/shop/files/BOTASLUNA5777.4CM.png?v=1699133358&width=1000"
									alt="CollageZapatos 1/6"
								/>
							</div>
							<div className="item3">
								<img
									src="https://gabrielas.com.mx/cdn/shop/files/BOTASAURA21.png?v=1696704208&width=1000"
									alt="CollageZapatos 2/6"
								/>
							</div>
							<div className="item4">
								<img
									src="https://gabrielas.com.mx/cdn/shop/files/BOTASYEPEZ616.png?v=1696704563&width=1000"
									alt="CollageZapatos 3/6"
								/>
							</div>
							<div className="item5">
								<img
									src="https://gabrielas.com.mx/cdn/shop/files/ZAPATILLASYEPEZ609.png?v=1696017255&width=1000"
									alt="CollageZapatos 4/6"
								/>
							</div>
							<div className="item6">
								<img
									src="https://gabrielas.com.mx/cdn/shop/files/TENISMALI56.png?v=1695425615&width=1000"
									alt="CollageZapatos 5/6"
								/>
							</div>
							<div className="item6">
								<img
									src="https://gabrielas.com.mx/cdn/shop/files/MULESLATI2167.png?v=1691876372&width=1080"
									alt="CollageZapatos 6/6"
								/>
							</div>
						</div>
					</div>
				</article>
			</main>
		</>
	);
};

export default HomePage;