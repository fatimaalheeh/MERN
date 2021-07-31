import React from 'react'
import axios from 'axios';
import {Link} from '@reach/router';


const AllList =  (props) => {
    

    return (
        <div>
            {
                props.products.map( (product, index) => {
                        return( 
                            
                            <li key={product._id}>
                            <Link to={`/products/${product._id}`}>
                                {product.title}
                            </Link>
                            
                        </li>
                        )
                })
            }
        </div>
    )
}

export default AllList