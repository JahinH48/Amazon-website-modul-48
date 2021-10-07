import React from 'react';
// import Product from '../Product/Product';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.cart)
    const { cart } = props;

    // const total = cart.reduce((previous, product) => previous + product.price, 0)

    let totalQuantity = 0;
    let total = 0;

    for (const product of cart) {
        // product.quantity = product.quantity ? 1 : product.quantity
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const Shipping = 20;
    const tax = (total + Shipping) / 10;
    const grandtotal = total + Shipping + tax;

    return (
        <div>
            <h3>Order Summary </h3>
            <h5>Items Ordered : {totalQuantity} </h5>
            <p>total : {total.toFixed(2)}</p>
            <p>Shipping : {Shipping}</p>
            <p>tax : {tax.toFixed(2)}</p>
            <p>Grand Total : {grandtotal.toFixed(2)}</p>

        </div>
    );
};

export default Cart;