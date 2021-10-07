import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props)
    const { name, img, seller, price, stock, star } = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">

            <img src={img} alt="" />

            <div>
                <h4 className="product-name">{name}</h4>
                <p> <small>By : {seller}</small></p>
                <p>Price : {price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <Rating

                    initialRating={star}
                    emptySymbol="far fa-star golden"
                    fullSymbol="fas fa-star golden"
                    readonly
                ></Rating>
                <br />
                <button onClick={() => props.handleAddToCard(props.product)} className="Bye-button">{element} Add To Card</button>
            </div>
        </div>
    );
};

export default Product;