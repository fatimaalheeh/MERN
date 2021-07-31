import React from 'react'
import axios from 'axios';
import {Link} from '@reach/router';



const AllList =  (props) => {
    
   // const { removeFromDom } = props;
   const { removeFromDom } = props;

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)//not so good
                //navigate("/products");//to totally delete

            })
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
                            <button onClick={(e)=>{deleteProduct(product._id)}}>delete</button>
                            <Link to={"/products/" + product._id + "/edit"}>Edit</Link>

                            
                        </li>
                        )
                })
            }
        </div>
    )
}

export default AllList