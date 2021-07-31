import React, {useState} from 'react'
import {useEffect} from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import ProductForm from '../components/ProductForm'

const EditProduct = (props) => {
    const {id} = props;
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/'+id)
        .then(res => {
            setProduct(res.data);
            setLoaded(true);
        });        
    }, []);

    const editProduct = (product) => {
        
        axios.put('http://localhost:8000/api/products/'+id, product)
        .then(res => navigate(`/products/${id}`));
    };
    ;

    return (
        <div>
           {loaded && <ProductForm onSubmitProp={editProduct} product={product} />}

        </div>
    )
}

export default EditProduct