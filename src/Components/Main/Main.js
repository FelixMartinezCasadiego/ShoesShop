import React from "react";
import '../Main/Main.css';

const Main = () =>{
    return(
        <>
        <div id="carouselExampleDark" class="carousel carousel-dark slide mt-4" data-bs-ride="carousel">
            <h3>Commercial Zone</h3>
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                    <iframe width="80%" height="450" src="https://www.youtube.com/embed/1Wa5RpV1STg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div class="carousel-caption d-none d-md-block">
                        <h5 className="ColorBackFont">How Michael Jordan Changed Sneaker Culture in Chicago</h5>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <iframe width="80%" height="450" src="https://www.youtube.com/embed/_NoH413CM74" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div class="carousel-caption d-none d-md-block">
                        <h5 className="ColorBackFont">Pharrell Goes Sneaker Shopping </h5>
                    </div>
                </div>
                <div class="carousel-item">
                    <iframe width="80%" height="450" src="https://www.youtube.com/embed/kaSvGVhtszo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div class="carousel-caption d-none d-md-block">
                        <h5 className="ColorBackFont">Tinker Hatfield: Footwear Design</h5>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        <h3 className='SubTitle'>Featured Product</h3>
        </>
        
    )
}

export default Main;