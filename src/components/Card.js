import React from 'react'

const Card = (props) => {

    let option = props.option;
    let price_options = Object.keys(option || {});

    return (
        <>
            <div className="card mt-3" style={{ "width": "17.5rem", "maxHeight": "360px" }}>
                <img src={props.imgSrc} className="card-img-top" alt="..." style={{ 'height': '170px', 'objectFit': 'fill' }} />
                <div className="card-body">
                    <h5 className="card-title">{props.food_name}</h5>
                    {/* <p className="card-text">{props.description}</p> */}
                    <div className="container w-100">

                        {/* Number of food items */}
                        <select className="m-2 h-100 rounded bg-success">
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}> {i + 1} </option>
                                )
                            })}
                        </select>


                        {/* size of food */}
                        <select className="m-2 h-100 rounded bg-success">
                            {
                                price_options.map((data) => {
                                    return (
                                        <option key={data} value={data} >{data}</option>
                                    )
                                })
                            }
                        </select>

                        {/* price for the food */}
                        <div className="d-inline h-100 fs-5">Total Price</div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;