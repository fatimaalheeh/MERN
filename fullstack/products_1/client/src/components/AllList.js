import React from 'react'
import axios from 'axios';
import {Link} from '@reach/router';


const AllList =  (props) => {
    

    return (
        <div>
            {
                props.products.map( (product, index) => {
                        return( 
                            
                            <p key={product._id}>
                                <p>{product.title}</p>
                                <p>--------------</p>
                            </p>
                        )
                })
            }
        </div>
    )
}

export default AllList