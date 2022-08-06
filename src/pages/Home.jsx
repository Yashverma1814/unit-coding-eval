import axios from 'axios'
import { useDispatch } from 'react-redux'
import { products } from '../Redux/action'
import React, { useEffect, useState } from 'react'
import { ProductCard } from '../components/ProductCard'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'


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
            <marquee>You can get more detail of item by clicing on view,add to cart functionality is not added,Changing Page Functionality Also Added</marquee>
            <Button variant="contained" onClick={() => setSort("asc")}>ASC</Button>
            <Button variant="contained" onClick={() => setSort("desc")}>DESC</Button>
            <Button variant='contained' onClick={() => setSort("")}>Clear</Button>
            <Link to={"/cart"}><Button variant='contained'>Cart</Button></Link>
            <marquee behavior="" direction="">it is already in ascending form</marquee>
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
