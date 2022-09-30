import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
export default function HeaderHome() {


  const {userLogin} = useSelector(state => state.userReducer)
  const {quantityCarts} = useSelector (state => state.productReducer)
  const renderLoginNavItem = () => {
    console.log(userLogin);
    if (!userLogin) {
      return (<NavLink to='login' className='HeaderHome-Login'>Login</NavLink>)
    }else {
      return <>
              <NavLink to='carts' className='HeaderHome-IconGiohang'>
                  <i className="fa-solid fa-cart-shopping iconGioHang"></i>
              </NavLink>
              <NavLink to='carts' className='HeaderHome-NumberCarts'>({quantityCarts}) Hello {userLogin.name}</NavLink>
          </>
    }
    
  }

//   const host = window.location.protocol + '//' + window.location.host
// <img src={`${host}./img/iconSearch.png`} alt="iconSearch" />
  return (
      <div className='HeaderHome-Container'>
        <div className="HeaderHome">
          <div className="HeaderHome-Header">
            <NavLink to=''><img src="/img/logo-CyberSoft.png" alt="logo-CyberSoft" /></NavLink>
            <div className="Search-Carts-Login-Rigister">
              <NavLink to='search' className='HeaderHome-Search'>
                <i className="fa-solid fa-magnifying-glass iconSearch"></i>
              </NavLink>
              <NavLink to='search' className='HeaderHome-TextSearch'>Search</NavLink>
              {renderLoginNavItem()}
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
