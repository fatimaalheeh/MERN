import React,{useState,useEffect} from 'react'
import axios from 'axios';
import BtnDelete from  './BtnDelete';
import {Link} from '@reach/router';
const AllList =  (props) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then(res=>setProducts(res.data))
    }, [])
    
    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId))
    }
    return (
        <div>
            {
                props.products.map( (product, index) => {
                        return( 
                            
                            <li key={product._id}>
                            <Link to={`/products/${product._id}`}>
                                {product.title}
                                
                            </Link>
                            {/* <button onClick={(e)=>{deleteProduct(product._id)}}>delete</button> */}
                            {/* <Link to={"/products/" + product._id + "/edit"}>Edit</Link> */}
                            <BtnDelete productId={product._id} successCallback={()=>removeFromDom(product._id)}/>

                            
                        </li>
                        )
                })
            }
        </div>
    )
}

export default AllList