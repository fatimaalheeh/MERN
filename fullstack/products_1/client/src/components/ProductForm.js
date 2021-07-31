  
import React, {useState} from 'react'

const ProductForm = ({onSubmitProp, product}) => {
    const [title, setTitle] = useState(product.title);
    const [price, setPrice] = useState(product.price);
    const [description, setDescription] = useState(product.description);

    const handleSubmit = e => {
        e.preventDefault();
        onSubmitProp({title, price, description});
        setTitle("")
        setPrice(0);
        setDescription("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <table>
                <thead>
                    <tr>
                        <td>Product Manager</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><label>Title</label></td>
                        <td><input type="text" value={title} onChange={(e) => setTitle(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td><label>Price</label></td>
                        <td><input type="text" value={price} onChange={(e) => setPrice(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td><label>Description</label></td>
                        <td><input type="text" value={description} onChange={(e) => setDescription(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td><input type="submit" value="Create" /></td>
                    </tr>
                </tbody>
            </table>
        </form>
    )
}

export default ProductForm