import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getArrProductAfterDelete, postProductCartsOrder,setInfoOrder } from "../../redux/reducers/productReducer";


export default function Carts() {
  const { arrProductCarts } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  const renderProductCarts = () =>{
    return arrProductCarts.map((product,index) =>{
      return <table className='table-default mb-5' key={index}>
      <thead className='title-table'>
       <tr>
        <th className='icon-check'><i className="fa-solid fa-square-check"></i></th>
        <th className='id'>id</th>
        <th className='img'>img</th>
        <th className='name'>name</th>
        <th className='price'>price</th>
        <th className='quantity'>quantity</th>
        <th className='total'>total</th>
        <th>action</th>
       </tr>
      </thead>
      <tbody className='row-table'>
        <tr>
          <td className='checkbox'><span className='checkbox-out'><input type="checkbox" id="checkbox" name="nameproduct" value="Shoes"/></span></td>
          <td className='id-product'>{product.id}</td>
          <td className='img-product'>
            <img widtd={75} height={75} src={product.image} alt="..." />
          </td>
          <td className='name-product'>{product.name}</td>
          <td className='price-product'>{product.price}</td>
          <td className='quantity-product'>
            <button className='btn btnDown' type='button'>-</button>
            <button className='btn btn-primary' type='button'>
              {product.quantity}
            </button>
            <button className='btn btnUp' type='button'>+</button>
          </td>
          <td className='total-product'>{product.price * product.quantity}</td>
          <td className='action-button'>
            <button className='btn btnEdit' type='button'>EDIT</button>
            <button className='btn btnDelete' type='button' onClick={() =>{
              {
                console.log(product);
                console.log(arrProductCarts);
                const arrProductCartsNew = arrProductCarts.filter((prod) => prod.id !== product.id)
                console.log(arrProductCartsNew);
                dispatch(getArrProductAfterDelete(arrProductCartsNew))
                // dispatch(setInfoOrder({
                //   "orderDetail": [
                //     {
                //       "productId": '',
                //       "quantity": 0
                //     }
                //   ],
                //   "email": ""
                // }))
              }
            }}>DELETE</button>
          </td>
        </tr>
      </tbody>
      
    </table>
    })
  }
  return (
    <div>
      <div className="carts">
        <div className="carts-container">
          <div className="carts-title">
            <p className="carts-title-text">Carts</p>
          </div>
          <div className="horizontal-line"></div>
          <form className='item-table'>
            <p className='time-order'></p>
             {renderProductCarts()}
            <div className="Submit-oder">
              <button className='btn btnSubmitOder' type='submit' onClick={()=>{
                console.log(arrProductCarts);
                // postProductCartsOrder(arrProductCarts)
                // console.log(123);
              }}>SUBMIT ODER</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
