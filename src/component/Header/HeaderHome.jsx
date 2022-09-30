import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { clearStore, USER_LOGIN } from '../../util/tools';

export default function HeaderHome() {

  const { userLogin } = useSelector((state) => state.userReducer);
  const { quantityCarts } = useSelector((state) => state.productReducer);
  const renderLoginNavItem = () => {
    if (!userLogin) {
      return (
        <NavLink to="login" className="HeaderHome-Login">
          Login
        </NavLink>
      );
    } else {
      return (
        <>
          <NavLink to="carts" className="HeaderHome-IconGiohang">
              <i class="fa-solid fa-cart-shopping"></i>
              ({quantityCarts})
          </NavLink>
          <NavLink to="profile" className="HeaderHome-NumberCarts">
             Hello, {userLogin.name}{' '}
          </NavLink>
        </>
      );
    }
  };

  const logout = () => {
    clearStore(USER_LOGIN);
    localStorage.clear();
    window.location.reload();
  };
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
              {!userLogin ? (
              <NavLink to="register" className="HeaderHome-Register">
                Register
              </NavLink>
            ) : (
              <button
              style={{
                fontFamily:'Inter',fontWeight:300,fontSize: '16px',lineHeight: '19px',padding:'5px',marginLeft:'10px',border:'none',cursor:'pointer', background:'#F2994A',boxShadow:'(0px 38.4869px 71.4756px rgba(0, 0, 0, 0.07))'
              }}
                onClick={() => logout()}
              >
                Logout
              </button>
            )}
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
