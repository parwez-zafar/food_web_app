import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart, useCart } from './ContextReducer';

const Card = (props) => {
    let dispatch = useDispatchCart();
    let data = useCart();
    const priceRef = useRef();

    const [size, setSize] = useState("");
    const [qty, setQty] = useState(1);

    let option = props.option;
    let price_options = Object.keys(option || {});
    // let food_item = props.food_item;


    const handleAddToCart = async () => {

        let food = [];
        for (const item of data) {
            if (item.id === props.food_item._id) {
                food = item;
                break;
            }
        }

        if (food !== []) {
            if (food.size === size) {
                await dispatch(
                    { type: "UPDATE", id: props.food_item._id, price: total_price, qty: qty }
                )

            }
            else if (food.size !== size) {
                await dispatch(
                    { type: "ADD", id: props.food_item._id, name: props.food_item.name, price: total_price, qty: qty, size: size, img: props.food_item.img }
                )

            }

        }
        else {

            await dispatch(
                { type: "ADD", id: props.food_item._id, name: props.food_item.name, price: total_price, qty: qty, size: size, img: props.food_item.img }
            )
            // console.log(data);
        }
        // setQty(1);
        alert('added successfully')
    }

    let total_price = qty * parseInt(option[size]);

    useEffect(() => {
        setSize(priceRef.current.value);
    }, [])
    return (
        <>
            <div className="card mt-3" style={{ "width": "17.5rem", "maxHeight": "360px" }}>
                <img src={props.food_item.img} className="card-img-top" alt="..." style={{ 'height': '160px', 'objectFit': 'fill' }} />
                <div className="card-body">
                    <h5 className="card-title">{props.food_item.name}</h5>
                    {/* <p className="card-text">{props.food_item.description}</p> */}
                    <div className="container w-100">

                        {/* Number of food items */}
                        <select className="m-2 h-100 rounded bg-success" onChange={(e) => { setQty(e.target.value) }}>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}> {i + 1} </option>
                                )
                            })}
                        </select>


                        {/* size of food */}
                        <select className="m-2 h-100 rounded bg-success" ref={priceRef} onChange={(e) => { setSize(e.target.value) }}>
                            {
                                price_options.map((data) => {
                                    return (
                                        <option key={data} value={data} >{data}</option>
                                    )
                                })
                            }
                        </select>

                        {/* price for the food */}
                        <div className="d-inline h-100 fs-5">₹{total_price}/-</div>
                        <hr />

                        <button className='btn btn-success btn-sm ms-2 text-white justify-center' onClick={handleAddToCart}>Add to Cart</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;