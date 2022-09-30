import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Product({product}) {
    
  return (
    <>
        <div className="item-product-inner">
            <div className="product-img">
                <img src={product.image} alt={product.image} />
            </div>
            <div className="product-name">
                <p className="name">{product.name}</p>
            </div>
            <div className="product-description">
                <p className="description">{product.description}</p>
            </div>
            <div className="icon-heart">
                <i className="fa-solid fa-heart"></i>
                <i className="fa-regular fa-heart" style={{display:'none'}}></i>
            </div>
            <div className="buton-buynow-price">
                <div className="button-buynow">
                    <button className='button-buy-now'><NavLink  to={`/detail/${product.id}`}>Buy now</NavLink></button>
                </div>
                <div className="button-price">
                    <button>{product.price}$</button>
                </div>
            </div>
        </div>
    </>
  )
}
