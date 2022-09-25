import React from 'react'

export default function Search() {
  return (
    <div className='container-search'>
      <div className="search-SearchArea">
        <div className="container-search-area">
          <p className='search-text'>Search</p>
          <div className="search-menu">
            <div className="input-default">
              <input type="text" placeholder='product name...'/>
            </div>
            <div className="search-button">
              <button>SEARCH</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-search-result">
      <div className="search-result-table">
        <div className="search-title">
          <img src="./img/daymauindex.png" alt="..." />
          <p className='search-title-text'>Search result</p>
        </div>
        <div className="container">
          <div className="search-price">
            <p className='search-price-title'>Price</p>
            <div className="input-default">
              <input type="text" placeholder='decrease'/>
              <div className="icon-decrease"><i class="fa-solid fa-caret-down"></i></div>
            </div>
            <div className="input-default search-input-ascending">
              <input type="text" placeholder='ascending'/>
              <div className="icon-ascending"><i class="fa-solid fa-caret-down"></i></div>
            </div>
          </div>
          <div className="render-product-search">
            <div className="container">
              <div className="item-product">
                <div className="item-product-inner">
                  <div className="product-img">
                    <img src="./img/Giay.png" alt="..." />
                  </div>
                  <div className="product-name">
                    <p className="name">Adidas Prophere</p>
                  </div>
                  <div className="product-description">
                    <p className="description">short descript</p>
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
              </div>
              <div className="item-product">
                <div className="item-product-inner">
                  <div className="product-img">
                    <img src="./img/Giay.png" alt="..." />
                  </div>
                  <div className="product-name">
                    <p className="name">Adidas Prophere</p>
                  </div>
                  <div className="product-description">
                    <p className="description">short descript</p>
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
              </div>
              <div className="item-product">
                <div className="item-product-inner">
                  <div className="product-img">
                    <img src="./img/Giay.png" alt="..." />
                  </div>
                  <div className="product-name">
                    <p className="name">Adidas Prophere</p>
                  </div>
                  <div className="product-description">
                    <p className="description">short descript</p>
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
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
