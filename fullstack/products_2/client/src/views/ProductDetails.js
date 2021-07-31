import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from '@reach/router';


const ProductDetails =  ({id}) => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res => setProduct(res.data))
        .catch(err => setProduct(err))
    }, []);

    return (
        <div>
            <h1>{product.title}</h1>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            
        </div>
    )
}

export default ProductDetails