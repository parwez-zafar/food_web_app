import React from 'react'

const Card = () => {
    return (
        <div><div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Pizza</p>
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
                        <option value="half">Half</option>
                        <option value="half">Full</option>
                    </select>

                    {/* price for the food */}
                    <div className="d-inline h-100 fs-5">Total Price</div>

                </div>
            </div>
        </div></div>
    )
}

export default Card