import React from 'react'
import { NavLink } from 'react-router-dom'

export default function HeaderHome() {
  return (
      <div className='HeaderHome-Container'>
        <div className="HeaderHome">
          <div className="HeaderHome-Header">
            <NavLink to=''><img src="/img/logo-CyberSoft.png" alt="logo-CyberSoft" /></NavLink>
            <div className="Search-Carts-Login-Rigister">
              <NavLink to='search' className='HeaderHome-Search'>
                <img src="./img/iconSearch.png" alt="iconSearch" />
              </NavLink>
              <NavLink to='search' className='HeaderHome-TextSearch'>Search</NavLink>
              <NavLink to='carts' className='HeaderHome-IconGiohang'>
                <img src="./img/giohang.png" alt="giohang" />
              </NavLink>
              <NavLink to='carts' className='HeaderHome-NumberCarts'>(1)</NavLink>
              <NavLink to='login' className='HeaderHome-Login'>Login</NavLink>
              <NavLink to='register' className='HeaderHome-Register'>Register</NavLink>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-sm navbar-white bg-white">
          <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink to='' className="nav-link text-dark active" style={{borderBottom:'1px solid #000'}} href="#" aria-current="page">Home <span className="visually-hidden">(current)</span></NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='' className="nav-link text-dark">Men</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='' className="nav-link text-dark" >Woman</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='' className="nav-link text-dark" >Kid</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='' className="nav-link text-dark" >Sport</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>

  )
}
