import React from 'react'

export default function HeaderHome() {
  return (
      <div className='HeaderHome-Container'>
        <div className="HeaderHome">
          <div className="HeaderHome-Header">
            <a href="https://cybersoft.edu.vn/" target='_blank'><img src="/img/logo-CyberSoft.png" alt="logo-CyberSoft" /></a>
            <div className="Search-Carts-Login-Rigister">
              <span className='HeaderHome-Search'>
                <img src="./img/iconSearch.png" alt="iconSearch" />
              </span>
              <span className='HeaderHome-TextSearch'>Search</span>
              <span className='HeaderHome-IconGiohang'>
                <img src="./img/giohang.png" alt="giohang" />
              </span>
              <span className='HeaderHome-NumberCarts'>(1)</span>
              <span className='HeaderHome-Login'>Login</span>
              <span className='HeaderHome-Register'>Register</span>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-sm navbar-white bg-white">
          <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link text-dark active" style={{borderBottom:'1px solid #000'}} href="#" aria-current="page">Home <span className="visually-hidden">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">Men</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">Woman</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">Kid</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">Sport</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

  )
}
