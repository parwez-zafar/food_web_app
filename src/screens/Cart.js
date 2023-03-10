import React from 'react';
import { useCart, useDispatchCart } from '../components/ContextReducer';
// import Delete from '@material-ui/icons/Delete';
// import trahs from '../trahs.svg';

const Cart = () => {

    let data = useCart();
    let dispatch = useDispatchCart();
    if (data.length === 0) {
        return (
            <>
                <div className="m-5 w-100 text-center fs-3">The Cart is Empty</div>
            </>
        )
    }
    let total_price = data.reduce((total, food) => total + food.price, 0)

    return (
        <div>
            <div className="container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md">
                <table className="table table-hover">
                    <thead className="text-white fs-4">
                        <th scope='col' >#</th>
                        <th scope='col' >Name</th>
                        <th scope='col' >Quantity</th>
                        <th scope='col' >Option</th>
                        <th scope='col' >Amount</th>
                        <th scope='col' ></th>
                    </thead>
                    <tbody>
                        {
                            data.map((food, index) => {

                                return (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{food.name}</td>
                                        <td>{food.qty}</td>
                                        <td>{food.size}</td>
                                        <td>{food.price}.00</td>
                                        <td>
                                            <button type="button" className="btn p-0">
                                                {/* <Delete onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /> */}

                                                <i class="material-icons" onClick={() => {
                                                    dispatch({ type: "REMOVE", index: index })
                                                }}>
                                                    delete
                                                </i>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <div>
                    <h1 className="fs-2">
                        Total Price : {total_price}.00
                    </h1>
                </div>
                <div className="btn btn-secondary mt-5">Check Out</div>
            </div>
        </div>
    )
}

export default Cart;