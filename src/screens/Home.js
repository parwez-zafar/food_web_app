import React, { useState, useEffect } from 'react'
import Card from '../components/Card';
// import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


const Home = () => {
    const [food_cat, setFood_cat] = useState([]);
    const [food_item, setFood_item] = useState([]);
    const [search, setSearch] = useState("");

    const loadData = async () => {


        try {
            let response = await fetch("http://localhost:8000/api/foodData", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            response = await response.json();
            console.log(response[0], response[1]);
            setFood_item(response[0]);
            setFood_cat(response[1]);
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        console.log(localStorage.getItem("login_token"));
        loadData();
    }, [])



    return (
        <>
            <div style={{}}><Navbar /></div>
            <div style={{}}>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: 'contain !important' }}>
                    <div className="carousel-inner" id='carousel'>
                        <div className="carousel-caption d-none d-md-block" style={{ zIndex: '10' }}>
                            <div className="d-flex justify-content-center">
                                <input type="search" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="search-addon" value={search} onChange={(e) => {
                                    setSearch(e.target.value)
                                }} />
                                {/* <button type="button" className="btn btn-outline-primary text-white bg-success border-success">search</button> */}
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
            </div>



            <div className='container'>
                {

                    food_cat !== []
                        ? food_cat.map((data) => {
                            return (
                                <div className='row mb-3 '>
                                    <div key={data._id} className="fs-3 m-3" >
                                        {data.CategoryName}
                                    </div>
                                    <hr />
                                    {
                                        food_item !== []
                                            ? food_item.filter((item) => ((item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase()))))
                                                .map((filter_food_item) => {
                                                    return (
                                                        <div key={filter_food_item._id} className="col-12 col-md-6 col-lg-3 ">

                                                            <Card
                                                                food_name={filter_food_item.name}
                                                                option={filter_food_item.options
                                                                [0]}
                                                                imgSrc={filter_food_item.img}
                                                                description={filter_food_item.description}
                                                            />
                                                        </div>
                                                    )
                                                })
                                            : <div>No such Data Found</div>
                                    }
                                </div>
                            )
                        })
                        : ''
                }

            </div>



            <div> <Footer /> </div >
        </>
    )
}

export default Home;