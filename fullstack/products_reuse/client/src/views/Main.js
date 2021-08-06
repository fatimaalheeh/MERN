import React, {useState, useEffect} from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import AllList from '../components/AllList';



function Main(props) {
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
    // const removeFromDom = productId => {
    //     setProducts(products.filter(product => product._id !== productId));//only changes in frontend/ presentation
    // }//better use navigate('location')



     const { removeFromDom } = props;
    // const deleteProduct = (productId) => {
    //     axios.delete('http://localhost:8000/api/products/' + productId)
    //         .then(res => {
    //             removeFromDom(productId)
    //         })
    // }//this is good, deletes from db
    return (
        <div>
            <ProductForm onSubmitProp={creteProduct} product={{title:"", price:0, description:""}} />
            <hr/>
            
            <h1>All Products:</h1>
            {loaded && <AllList products={products} removeFromDom={removeFromDom}/>}
        </div>
    )
}

export default Main