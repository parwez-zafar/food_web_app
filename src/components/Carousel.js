import React from 'react'

const Carousel = () => {
    return (
        <>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: 'contain !important' }}>
                <div className="carousel-inner" id='carousel'>
                    <div className="carousel-caption d-none d-md-block" style={{ zIndex: '10' }}>
                        <div className="input-group ">
                            <input type="search" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                            <button type="button" className="btn btn-outline-primary text-white bg-success border-success">search</button>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/900x300/?burger" className="d-block w-100" alt="..." style={{ filter: 'brightness(30%)' }} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900x300/?pizza" className="d-block w-100" alt="..." style={{ filter: 'brightness(30%)' }} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900x300/?cake" className="d-block w-100" alt="..." style={{ filter: 'brightness(30%)' }} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </>
    )
}

export default Carousel