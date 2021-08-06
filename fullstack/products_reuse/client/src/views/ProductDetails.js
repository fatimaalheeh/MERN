import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, navigate } from '@reach/router';


const ProductDetails =  (props) => {
    const [product, setProduct] = useState({});

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
               navigate("/products");
            })
    }
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props.id}`)
        .then(res => setProduct(res.data))
        .catch(err => setProduct(err))
    }, []);
   
    // const deleteProduct = (productId) => {
    //     axios.delete('http://localhost:8000/api/products/' + productId)
    //         .then(res => {
    //             removeFromDom(productId)
    //         })
    // }
    return (
        <div>
            <h1>{product.title}</h1>
            <table>
                <tr><td>Price </td><td> {product.price}</td></tr>
                <tr><td>Description </td><td> {product.description}</td></tr>
                {/* <tr><td></td><td><button onClick={(e)=>{deleteProduct(product._id)}}>delete</button></td></tr> */}
                <tr><td></td><td><Link to={"/products/" + product._id + "/edit"}>Edit</Link></td></tr>
                {/* <tr><td></td><td><Link to={"/products/" + product._id + "/delete"}>Delete</Link></td></tr> */}
                <tr><td></td><td><button onClick={(e)=>{deleteProduct(product._id)}}>delete</button></td></tr>
                
    
            </table>
            <h1></h1>
            <p></p>
            <p></p>
           
            
        </div>
    )
}

export default ProductDetails