import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, getStoredCart } from '../../utilities/fakedb'
import './Shop.css'

const Shop = () => {
    const [product, setProduct] = useState([]);


    const [cart, setCart] = useState([]);
    const [display, setDisplay] = useState([])

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                setDisplay(data)
            });

    }, []);

    // Add to Local Storage
    useEffect(() => {

        if (product.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                // console.log(key)
                const Addproducts = product.find(product => product.key === key);
                // console.log(key, Addproducts)
                if (Addproducts) {
                    const quantity = savedCart[key];
                    Addproducts.quantity = quantity;
                }
                storedCart.push(Addproducts)

            }
            setCart(storedCart)
        }

    }, [product])

    const handleAddToCard = (product) => {
        // console.log(product)
        const newCart = [...cart, product];
        setCart(newCart)
        addToDb(product.key)//save to local storage


    }

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProduct = product.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        setDisplay(matchedProduct)
        console.log(matchedProduct)
    }
    return (
        <>
            <div className="search-container">
                <input type="text"
                    onChange={handleSearch}
                    placeholder="Search Product" />
            </div>
            <div className="shop-Container">
                <div className="product-Container">
                    <h3>Product : {product.length}</h3>
                    {
                        display.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCard={handleAddToCard}
                        ></Product>)
                    }
                </div>
                <div className="cart-Container">
                    <Cart cart={cart}></Cart>

                </div>
            </div>

        </>
    );
};

export default Shop;