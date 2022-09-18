import React from 'react'

export default function HeaderHome() {
  return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#" aria-current="page">Home <span className="visually-hidden">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Men</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Woman</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Kid</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Sport</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

  )
}
