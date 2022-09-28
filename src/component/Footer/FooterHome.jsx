import React from 'react'
import { NavLink } from 'react-router-dom'

export default function FooterHome() {
  return (
    
    <div className='footer'>
      <div className='footer-top'>
          <div className="container">
            <div className="row container">
              <div className="col-4 footer-gethelp">
                <div className="footer-title">GET HELP</div>
                <ul>
                  <li><NavLink to=''>Home</NavLink></li>   
                  <li><NavLink to=''>Nike</NavLink></li>
                  <li><NavLink to=''>Adidas</NavLink></li>
                  <li><NavLink to=''>Contact</NavLink></li>
                </ul>
              </div>
              <div className="col-4 footer-support">
                <div className="footer-title">SUPPORT</div>
                <ul>
                  <li><NavLink to=''>About</NavLink></li>   
                  <li><NavLink to=''>Contact</NavLink></li>
                  <li><NavLink to=''>Help</NavLink></li>
                  <li><NavLink to=''>Phone</NavLink></li>
                </ul>
              </div>
              <div className="col-4 footer-register">
                <div className="footer-title">REGISTER</div>
                <ul>
                  <li><NavLink to='register'>register</NavLink></li> 
                  <li><NavLink to='login'>login</NavLink></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
      </div>
      <div className="footer-bottom">
        <p className='creator'>© 2022 <a href='https://cybersoft.edu.vn' target='_blank' rel="noreferrer">Cybersoft</a> All Rights Reserved | Design Theme by <a href='https://cybersoft.edu.vn' rel="noreferrer" target='_blank'>Trương Tấn Khải</a></p>
      </div>
    </div>
  )
}
