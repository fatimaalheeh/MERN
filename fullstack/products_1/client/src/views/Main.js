import React, {useState, useEffect} from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import AllList from '../components/AllList';


function Main() {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then(res => {//res is convintion
            setProducts(res.data);
            setLoaded(true);
        });
    }, [])

    const creteProduct = (product) => {
        axios.post('http://localhost:8000/api/products', product)
        .then(res => setProducts([...products, res.data]))
        .catch(err => console.log(err));
    } //add what we got in form to the db so the list will be able to show it

    return (
        <div>
            <ProductForm onSubmitProp={creteProduct} product={{title:"", price:0, description:""}} />
            <hr/>
            
            <h1>All Products:</h1>
            {loaded && <AllList products={products} />}
        </div>
    )
}

export default Main