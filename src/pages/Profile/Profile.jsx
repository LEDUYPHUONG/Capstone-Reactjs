import React from 'react'

export default function Profile() {
  return (
    <>
      <div className="profile">
        <div className="profile-img">
          <div className="profile-img-out">
            <img src="./img/daymauindex.png" alt="..." />
          </div>
          <p className="profile-text">Profile</p>
        </div>
        <div className='profile-container'>
          <div className='profile-avata'>
            <img src="./img/avataProfile.png" alt="..." />
          </div>
          <div className="form-default">
            <form>
              <div className='form-item-input'>
                <div className="form-item">
                  <p className='form-item-title'>Email</p>
                  <div className="input-default">
                    <input type="text" placeholder='email'/>
                  </div>
                  <div className="span-danger">
                      <span className='text-err'></span>
                    </div>
                </div>
                <div className="form-item">
                  <p className='form-item-title'>Name</p>
                  <div className="input-default">
                    <input type="text" placeholder='name'/>
                    <div className="span-danger">
                      <span className='text-err'></span>
                    </div>
                  </div>
                </div>
                <div className="form-item">
                  <p className='form-item-title'>Phone</p>
                  <div className="input-default">
                    <input type="text" placeholder='phone'/>
                  </div>
                  <div className="span-danger">
                      <span className='text-err'></span>
                    </div>
                </div>
                <div className="form-item">
                  <p className='form-item-title'>Password</p>
                  <div className="input-default">
                    <input type="text" placeholder='password'/>
                    <div className="eye-input">
                      <div className="eye-open"><i className="fa-solid fa-eye"></i></div>
                      <div className="eye-closed"><i className="fa-regular fa-eye-slash"></i></div>
                    </div>
                    <div className="span-danger">
                      <span className='text-err'></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="profile-gender">
                <p className='Gender-title'>Gender</p>
                <div className="male-option">
                  <input type="radio" name='gender' value="male"/>
                  <label htmlFor='css'>Male</label>
                </div>
                <div className="female-option">
                  <input type="radio" name='gender' value="Female" />
                  <label htmlFor="css">Female</label>
                </div>
                <div className="update-button">
                  <button className='button-update'>Update</button>
                </div>
              </div>
              
            </form>
          </div>          
        </div>
        <div className="horizontal-line"></div>
        <div className="container-order-history-favourite">
          <div className="order-history-favourite">
            <div className="line-left-order-history"></div>
            <span className='order-history'>Order history</span>
            <div className="line-between-order-history"></div>
            <span className='favourite'>Favourite</span>
            <div className="line-right-order-history"></div>
          </div>
          <div className="line-under-order-history-favourite"></div>
        </div>
        
        <div className="render-order-history">
          <div className='item-table'>
            <p className='time-order'>+ Orders have been placed on 09 - 19 - 2020</p>
            <table className='table-default'>
              <thead className='title-table'>
               <tr>
                <th className='id'>id</th>
                <th className='img'>img</th>
                <th className='name'>name</th>
                <th className='price'>price</th>
                <th className='quantity'>quantity</th>
                <th className='total'>total</th>
               </tr>
              </thead>
              <tbody className='row-table'>
                <tr>
                  <td className='id-product'>1</td>
                  <td className='img-product'>
                    <img widtd={50} height={50} src="./img/Giay.png" alt="..." />
                  </td>
                  <td className='name-product'>product 1</td>
                  <td className='price-product'>1000</td>
                  <td className='quantity-product'>
                    <button className='btn btn-primary'>1</button>
                  </td>
                  <td className='total-product'>1000</td>
                </tr>
              </tbody>
              
            </table>
          </div>
          <div className='item-table'>
            <p className='time-order'>+ Orders have been placed on 09 - 19 - 2020</p>
            <table className='table-default'>
              <thead className='title-table'>
                <tr>
                  <th className='id'>1</th>
                  <th className='img'>img</th>
                  <th className='name'>name</th>
                  <th className='price'>price</th>
                  <th className='quantity'>quantity</th>
                  <th className='total'>total</th>
                </tr>
              </thead>
              <tbody className='row-table'>
                <tr>
                  <td className='id-product'>id</td>
                  <td className='img-product'>
                    <img widtd={50} height={50} src="./img/Giay.png" alt="..." />
                  </td>
                  <td className='name-product'>product 1</td>
                  <td className='price-product'>1000</td>
                  <td className='quantity-product'>
                    <button className='btn btn-primary'>1</button>
                  </td>
                  <td className='total-product'>1000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="quantity-table">
            <button className='btn prev-icon-table'><i className="fa-solid fa-chevron-left"></i></button>
            <button className='btn number-table'>1</button>
            <button className='btn number-table'>2</button>
            <button className='btn number-table'>...</button>
            <button className='btn number-table'>9</button>
            <button className='btn number-table'>10</button>
            <button className='btn next-icon-table'><i className="fa-solid fa-chevron-right"></i></button>
          </div>
        </div>
      </div>
    </>
  )
}
