import React from 'react'

export default function Register() {
  return (
    <div className="register">
      <div className="register-container">
        <div className="register-title">
          <p className="register-title-text">Register</p>
        </div>
        <div className="horizontal-line"></div>
        <div className='register-container'>
          <div className='register-avata'></div>
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
                  <p className='form-item-title'>Password confirm</p>
                  <div className="input-default">
                    <input type="text" placeholder='password confirm'/>
                    <div className="eye-input">
                      <div className="eye-open"><i className="fa-solid fa-eye"></i></div>
                      <div className="eye-closed"><i className="fa-regular fa-eye-slash"></i></div>
                    </div>
                    <div className="span-danger">
                      <span className='text-err'></span>
                    </div>
                  </div>
                </div>
                <div className="register-gender">
                  <p className='Gender-title'>Gender</p>
                  <div className="male-option">
                    <input type="radio" name='gender' value="male"/>
                    <label htmlFor='css'>Male</label>
                  </div>
                  <div className="female-option">
                    <input type="radio" name='gender' value="Female" />
                    <label htmlFor="css">Female</label>
                  </div>
                </div>
                <div className="form-item">
                  
                </div>
                <div className="submit-button">
                    <button className='button-submit'>Submit</button>
                  </div>
              </div>
              
              
            </form>
          </div>          
        </div>
      </div>
    </div>
  )
}
