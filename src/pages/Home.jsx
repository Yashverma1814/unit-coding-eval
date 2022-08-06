import axios from 'axios'
import { useDispatch } from 'react-redux'
import { products } from '../Redux/action'
import React, { useEffect, useState } from 'react'
import { ProductCard } from '../components/ProductCard'
import { Button } from '@mui/material'


export const Home = () => {
    const [product, setProduct] = useState([])
    const [page, setPage] = useState(1)
    const [sort, setSort] = useState("");
    const dispatch = useDispatch();
    useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:8080/products?_page=" + page + "&_sort=price&_order=" + sort
        }).then(res => setProduct(res.data))
    }, [page, sort])
    dispatch(products(product));
    return (
        <div>
            <h2>Products</h2>
            <Button variant="contained" onClick={() => setSort("asc")}>ASC</Button>
            <Button variant="contained" onClick={() => setSort("desc")}>DESC</Button>
            <Button variant='contained' onClick={() => setSort("")}>Clear</Button>
            <div className='product-cards'>
                {product.map((el) => {
                    return (
                        <div key={el.id} className='productCard'>
                            <ProductCard item={el} />
                        </div>
                    )
                })
                }
            </div>

            <Button variant='outlined' disabled={page === 1} onClick={() => setPage(page - 1)}>prev</Button>
            {page}
            <Button variant='outlined' disabled={page === 25} onClick={() => setPage(page + 1)}>next</Button>
        </div>
    )
}
