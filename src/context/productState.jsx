import {useReducer, useCallback} from "react";
import ProductContext from "./productContext";
import productReducer from "./productReducer";
import PropTypes from "prop-types"
import Swal from "sweetalert2"

import { getProdusctsService, 
          getProductService, 
          postPedido,
          getProductShoesService, 
          getProductShoesIDService, 
          getProductCloseService, 
          getProductCloseIDService} from "../services/productservices"


const initialState = {
    products: [],
    product: {},
    cart: [],
    pedido: {}
}                           

const ProductState = ({children}) => {
    const  [globalState, dispatch] = useReducer(productReducer, initialState)


    //COLECCIÓN JOYERÍA--------------------

    const getProducts = useCallback(async()=>{
      try {
        const response = await getProdusctsService();
        //console.log (response.data.data)

        dispatch({
            type: "OBTENER_PRODUCTOS",
            payload: response.data.data,
        })
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error al agregar producto al carrito",
          showCancelButton: false,
          timer: 1000
        });
      }
    }, []);
    
    const getProduct = useCallback(async(id)=>{
      try {
        const response = await getProductService(id);
        //console.log (response.data.data)

        dispatch({
            type: "OBTENER_PRODUCTO",
            payload: response.data.data,
        })
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error al agregar producto al carrito",
          showCancelButton: false,
          timer: 1000
        });
      }
    }, []);

    const addProduct = async (id) => {
        try {
          const response = await getProductService(id);
          dispatch({
            type: "AGREGAR_PRODUCTO",
            payload: response.data.data,
          });

          Swal.fire({
            icon: "success",
            title: "Producto agregado al carrito",
            showConfirmButton: false,
            timer: 2000,
          });


        } catch (error) {
          //console.log(error)
          Swal.fire({
            icon: "error",
            title: "Error en la peticion",
            showConfirmButton: false,
            timer: 2000,
          });    
        }
      }

      //COLECCIÓN ZAPATOS
      const getProductsShoes = useCallback(async()=>{
        try {
          const response = await getProductShoesService();
          //console.log (response.data.data)
  
          dispatch({
              type: "OBTENER_PRODUCTOS",
              payload: response.data.data,
          })
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Error al agregar producto al carrito",
            showCancelButton: false,
            timer: 1000
          });
        }
      }, []);
      
      const getProductShoes = useCallback(async(id)=>{
        try {
          const response = await getProductShoesIDService(id);
          //console.log (response.data.data)
  
          dispatch({
              type: "OBTENER_PRODUCTO",
              payload: response.data.data,
          })
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Error al agregar producto al carrito",
            showCancelButton: false,
            timer: 1000
          });
        }
      }, []);
  
      const addProductShoes = async (id) => {
          try {
            const response = await getProductShoesIDService(id);
            dispatch({
              type: "AGREGAR_PRODUCTO",
              payload: response.data.data,
            });
  
            Swal.fire({
              icon: "success",
              title: "Producto agregado al carrito",
              showConfirmButton: false,
              timer: 2000,
            });
  
  
          } catch (error) {
            //console.log(error)
            Swal.fire({
              icon: "error",
              title: "Error en la peticion",
              showConfirmButton: false,
              timer: 2000,
            });    
          }
        }
  
//COLECCIÓN ROPA
const getProductsClose = useCallback(async()=>{
  try {
    const response = await getProductCloseService();
    //console.log (response.data.data)

    dispatch({
        type: "OBTENER_PRODUCTOS",
        payload: response.data.data,
    })
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error al agregar producto al carrito",
      showCancelButton: false,
      timer: 1000
    });
  }
}, []);

const getProductClose = useCallback(async(id)=>{
  try {
    const response = await getProductCloseIDService(id);
    //console.log (response.data.data)

    dispatch({
        type: "OBTENER_PRODUCTO",
        payload: response.data.data,
    })
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error al agregar producto al carrito",
      showCancelButton: false,
      timer: 1000
    });
  }
}, []);

const addProductClose = async (id) => {
    try {
      const response = await getProductCloseIDService(id);
      dispatch({
        type: "AGREGAR_PRODUCTO",
        payload: response.data.data,
      });

      Swal.fire({
        icon: "success",
        title: "Producto agregado al carrito",
        showConfirmButton: false,
        timer: 2000,
      });


    } catch (error) {
      //console.log(error)
      Swal.fire({
        icon: "error",
        title: "Error en la peticion",
        showConfirmButton: false,
        timer: 2000,
      });    
    }
  }

        const deleteCartProduct = (id) => {
            try {
              dispatch({
                type: "ELIMINAR_PRODUCTO",
                payload: id,
              });
             /* Swal.fire({
                icon: "error",
                title: "Producto eliminado",
                showCancelButton: false,
                timer: 1000
              });*/
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: "Error al agregar producto al carrito",
                    showCancelButton: false,
                    timer: 1000
                  });
            }
          };

          const AddProdcut = (id) => {
            dispatch({
              type: "ENCONTRAR_PRODUCTO",
              payload: id
            })
          }

          const registrarPedido = async (form) => {
            try {
              const resp = await postPedido(form);
        
              dispatch({
                type: "AGREGAR_PEDIDO",
                payload: resp.data.data,
              });
              Swal.fire({
                icon: "success",
                title: "Pedido registrado",
                showConfirmButton: false,
                timer: 2000,
              });  
        
              console.log(resp.data.data)

            } catch (error) {
              console.log(error.response.data);
              Swal.fire({
                icon: "error",
                title: "Email registrado",
                showConfirmButton: false,
                timer: 2000,
              });  
            }
          };
          

    return (
    <ProductContext.Provider value={{
    products: globalState.products,
    product: globalState.product,
    cart: globalState.cart,
    pedido: globalState.pedido,
    getProducts,
    getProduct,
    addProduct,
    AddProdcut,
    deleteCartProduct,
    registrarPedido,
    getProductsShoes,
    getProductShoes,
    addProductShoes,
    getProductsClose,
    getProductClose,
    addProductClose
    }}>
    {children}
    </ProductContext.Provider>
    )
}

ProductState.propTypes = {
 children: PropTypes.node,
}

export default ProductState;