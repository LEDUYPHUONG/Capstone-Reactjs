import React from 'react'

export default function Product({product}) {
  return (
    <>
        <div className="item-product-inner">
            <div className="product-img">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="product-name">
                <p className="name">{product.name}</p>
            </div>
            <div className="product-description">
                <p className="description">{product.description}</p>
            </div>
            <div className="icon-heart">
                <img src="./img/heart.png" alt="..." />
            </div>
            <div className="buton-buynow-price">
                <div className="button-buynow">
                <button>Buy now</button>
                </div>
                <div className="button-price">
                <button>85$</button>
                </div>
            </div>
        </div>
    </>
  )
}
