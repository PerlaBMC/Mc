import { useContext, useEffect } from "react";
import ProductContext from "../context/productContext";
import { useParams } from "react-router-dom";

const ProductPage = () => {

const {getProduct, product} = useContext(ProductContext);
const {id} = useParams();
//console.log (id)



useEffect(() => {
getProduct(id)
console.log(getProduct)
}, [getProduct, id])


  return (
    <>
 
    <section className="row">
    <article className="col">
    {
      product && (
        <div className="card mb-3" style={{maxWidth: 540}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={product.image} className="img-fluid rounded-start" alt={product.productName}/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.productName}</h5>
              <p className="card-text">{product.productPrice}</p>
              <p className="card-text"><small className="text-body-secondary">{product.description}</small></p>
            </div>
          </div>
        </div>
        </div>
      )
    }
    </article>
    </section>

    </>
  )
}

export default ProductPage