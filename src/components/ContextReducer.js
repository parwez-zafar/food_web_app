import React, { createContext, useContext, useReducer } from 'react';
const cartStateContext = createContext();
const cartDispatchContext = createContext();
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            let arr0 = [...state, { id: action.id, name: action.name, qty: action.qty, size: action.size, price: action.price, img: action.img }]
            // alert('added')
            return arr0;
        // break;
        case "REMOVE":
            let arr1 = [...state];
            arr1.splice(action.index, 1);
            return arr1;
        // break;
        case "UPDATE":
            let arr2 = [...state];
            arr2.find((food, index) => {
                if (food.id === action.id) {
                    arr2[index] = { ...food, qty: parseInt(action.qty) + food.qty, price: action.price + food.price }
                }
            })
            // alert('added')
            return arr2;
        // break;
        default:
            console.log("Error in reducer");
    }
}

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, [])
    return (
        <cartDispatchContext.Provider value={dispatch} >
            <cartStateContext.Provider value={state} >
                {children}
            </cartStateContext.Provider>
        </cartDispatchContext.Provider>
    )
}

export default CartProvider;
export const useCart = () => useContext(cartStateContext);
export const useDispatchCart = () => useContext(cartDispatchContext);