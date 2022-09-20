import React from "react";

export default function index() {
 

  return (
    <div className="index">
      <div className="container">
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval={10000}>
              <img src="./img/Giay.png" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Product name</h5>
                <p>
                  Product description ....
                </p>
                <div className="button-carousel">
                  <button className="btn btn-primary">Buy now</button>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval={2000}>
              <img src="./img/Giay.png" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Product name</h5>
                <p>
                  Product description ....
                </p>
                <div className="button-carousel">
                  <button className="btn btn-primary">Buy now</button>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src="./img/Giay.png" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Product name</h5>
                <p>
                  Product description ....
                </p>
                <div className="button-carousel">
                  <button className="btn btn-primary">Buy now</button>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <h3 className="index-ProductFeature-title">Product Feature</h3>
      <div className="index-renderProduct"></div>
    </div>
  );
}
