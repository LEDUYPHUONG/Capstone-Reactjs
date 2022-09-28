import React from 'react';
import { Carousel } from 'react-responsive-carousel';


export default function CarouselIndex() {
    return (
        <>
            <Carousel
            autoPlay
            infiniteLoop
            showArrows={true}
            showThumbs={false}    
            >
                <div className="index-carousel">
                    <div className="index-carousel-inner">
                    <div className="container d-flex justify-content-center align-items-center">
                        <div className="carousel-img w-75">
                            <div className="carousel-img-iner">
                                <img src="./img/Giay.png" alt="..." />
                            </div>
                        </div>
                        <div className="carousel-info w-25">
                            <div className="product-name">
                                <p className="product-name-text">Product name</p>
                            </div>
                            <div className="product-description">
                                <div className="product-description-text">Product description </div>
                            </div>
                        <button className="btn btn-primary button-carousel">Buy now</button>
                        </div>
                    </div>
                </div>
                </div>
                <div className="index-carousel">
                    <div className="index-carousel-inner">
                    <div className="container d-flex justify-content-center align-items-center">
                        <div className="carousel-img w-75">
                            <div className="carousel-img-iner">
                                <img src="./img/Giay.png" alt="..." />
                            </div>
                        </div>
                        <div className="carousel-info w-25">
                            <div className="product-name">
                                <p className="product-name-text">Product name</p>
                            </div>
                            <div className="product-description">
                                <div className="product-description-text">Product description </div>
                            </div>
                        <button className="btn btn-primary button-carousel">Buy now</button>
                        </div>
                    </div>
                </div>
                </div>
                <div className="index-carousel">
                    <div className="index-carousel-inner">
                    <div className="container d-flex justify-content-center align-items-center">
                        <div className="carousel-img w-75">
                            <div className="carousel-img-iner">
                                <img src="./img/Giay.png" alt="..." />
                            </div>
                        </div>
                        <div className="carousel-info w-25">
                            <div className="product-name">
                                <p className="product-name-text">Product name</p>
                            </div>
                            <div className="product-description">
                                <div className="product-description-text">Product description </div>
                            </div>
                        <button className="btn btn-primary button-carousel">Buy now</button>
                        </div>
                    </div>
                </div>
                </div>
                
            </Carousel>
        </>
    );
}
