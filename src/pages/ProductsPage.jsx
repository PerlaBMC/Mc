import { useContext, useEffect } from "react";
import ProductContext from "../context/productContext";
import { Link } from "react-router-dom"

const ProductsPage = () => {
  const { getProducts, products, addProduct } = useContext(ProductContext);


  const handleAddProduct = (id) => {
    addProduct(id)
  }

  useEffect(() => {
   getProducts();
  }, [getProducts])
  
  
  return (
    <>
  <div className="container" style={{paddingTop: "20px", paddingBottom: "20px"}}>
  <div className="row row-cols-1 row-cols-md-4 g-4">
{
products.map ((product)=>(
  <div key={product.id} className="col">
  <div className="card">
    <img src={product.image} className="card-img-top" alt={product.productName} />
    <div className="card-body">
      <h5 className="card-title">{product.productName}</h5>
      <p className="card-text"> $ {product.productPrice} MXN </p>
      <Link 
      onClick={()=>handleAddProduct(product.id)}> <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" style={{backgroundColor:"white", color:"Thistle"}} fill="currentColor" className="bi bi-bag-heart-fill" viewBox="0 0 16 16">
      <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5ZM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1Zm0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
    </svg>  
      </Link>

      <Link 
       to={`/products/${product.id}`}> 
       <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" style={{ backgroundColor: "white", color:"Thistle", float: "right"}} fill="currentColor" className="bi bi-chat-left-heart-fill" viewBox="0 0 16 16">
       <path d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm6 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
        </svg>
       </Link>
                       
    </div>
  </div>
</div>
))

}
</div>
  </div>

    </>
  )
}

export default ProductsPage