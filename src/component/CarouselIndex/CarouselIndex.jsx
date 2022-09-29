import React from 'react';
import { Carousel } from 'react-responsive-carousel';


export default function CarouselIndex({arrProductCarousel}) {
    const renderArrProductCarousel = () => {
        return arrProductCarousel.map((prod,index) => {
            return <div className="index-carousel" key={index}>
                        <div className="index-carousel-inner">
                            <div className="container d-flex justify-content-between align-items-center">
                                <div className="carousel-img">
                                    <div className="carousel-img-iner">
                                        <img src={prod.image} alt="..." />
                                    </div>
                                </div>
                                <div className="carousel-info">
                                    <div className="product-name">
                                        <p className="product-name-text">{prod.name}</p>
                                    </div>
                                    <div className="product-description">
                                        <div className="product-description-text">{prod.description} </div>
                                    </div>
                                    <button className="btn btn-primary button-carousel">Buy now</button>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        )
    }
    return (
        <>
            <Carousel
            // autoPlay
            infiniteLoop
            showArrows={true}
            showThumbs={false}    
            >
                {renderArrProductCarousel()}                
            </Carousel>
        </>
    );
}
