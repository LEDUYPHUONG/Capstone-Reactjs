import React from 'react'

export default function FooterHome() {
  return (
    
    <div className='footer'>
      <div className='footer-top'>
          <div className="container">
            <div className="row container">
              <div className="col-4 footer-gethelp">
                <div className="footer-title">GET HELP</div>
                <ul>
                  <li><a href="#">Home</a></li>   
                  <li><a href="#">Nike</a></li>
                  <li><a href="#">Adidas</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
              <div className="col-4 footer-support">
                <div className="footer-title">SUPPORT</div>
                <ul>
                  <li><a href="#">About</a></li>   
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Help</a></li>
                  <li><a href="#">Phone</a></li>
                </ul>
              </div>
              <div className="col-4 footer-register">
                <div className="footer-title">REGISTER</div>
                <ul>
                  <li><a href="#">register</a></li> 
                  <li><a href="#">login</a></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
      </div>
      <div className="footer-bottom">
        <p className='creator'>© 2022 <a href='https://cybersoft.edu.vn' target='_blank'>Cybersoft</a> All Rights Reserved | Design Theme by <a href='https://cybersoft.edu.vn' target='_blank'>Trương Tấn Khải</a></p>
      </div>
    </div>
  )
}
