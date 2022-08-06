import React, { useState } from 'react'
import { useEffect } from 'react';
import { ProductCard } from '../components/ProductCard';
import axios from 'axios';

export const Cart = () => {
    const [product, setProduct] = useState([]);
    const getData = () => {
        axios({
            method: "get",
            url: "http://localhost:8080/cart"
        }).then(res => setProduct(res.data))
    }
    useEffect(() => {
        getData();
        console.log(product);
    }, [])
    return (
        <div>
            <h2>Cart</h2>
            {product.map((el) => {
                return (
                    <div key={el.id} className='productCard'>
                        <ProductCard item={el} />
                    </div>
                )
            })
            }
        </div>
    )
}
