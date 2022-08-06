import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Button } from '@mui/material';
import { ProductCard } from '../components/ProductCard';

export const IndividualItem = () => {

    const [product, setProduct] = useState([]);
    const [result, setResult] = useState(false);
    const { id } = useParams();
    const setId = id.substring(1);
    const getData = () => {
        axios({
            method: "get",
            url: "http://localhost:8080/products/"+setId
        }).then(res => setProduct(res.data))
    }
    useEffect(()=>{
        getData();
        console.log(product);
    },[result])
    return (
        <div>
            <Button onClick={()=>setResult(!result)}>See Result</Button>
            <ProductCard item={product} />
        </div>
    )
}
