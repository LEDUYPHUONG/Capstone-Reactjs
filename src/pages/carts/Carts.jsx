import React from 'react'

export default function Carts() {
  return (
    <div>
      <div className="carts">
        <div className="carts-container">
          <div className="carts-title">
            <p className="carts-title-text">Carts</p>
          </div>
          <div className="horizontal-line"></div>
          <div className='item-table'>
            <p className='time-order'></p>
            <table className='table-default'>
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
                  <td className='id-product'>1</td>
                  <td className='img-product'>
                    <img widtd={50} height={50} src="./img/Giay.png" alt="..." />
                  </td>
                  <td className='name-product'>product 1</td>
                  <td className='price-product'>1000</td>
                  <td className='quantity-product'>
                    <button className='btn btnDown'>-</button>
                    <button className='btn btn-primary'>
                      10
                    </button>
                    <button className='btn btnUp'>+</button>
                  </td>
                  <td className='total-product'>1000</td>
                  <td className='action-button'>
                    <button className='btn btnEdit'>EDIT</button>
                    <button className='btn btnDelete'>DELETE</button>
                  </td>
                </tr>
              </tbody>
              
            </table>
            <div className="Submit-oder">
              <button className='btn btnSubmitOder'>SUBMIT ODER</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
