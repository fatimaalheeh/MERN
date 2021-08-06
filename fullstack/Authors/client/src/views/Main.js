import React, {useState, useEffect} from 'react'
import axios from 'axios';
import AuthrForm from '../components/AuthrForm';
import AuthrTable from '../components/AuthrTable';
import { Link } from '@reach/router';
function Main(props) {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [caption,setCaption] = useState("Quotes By sth sth ")
    const[errors,setErrors]=useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
        .then(res => {
            setAuthors(res.data);
            setLoaded(true);
        });
    }, [authors])
    
    const createAuthr = author =>{
        axios.post('http://localhost:8000/api/authors', author)
        .then(res=>setAuthors([...authors,res.data]))
        .catch(err=>{
            const errorResponse = err.response.data.errors; 
            const errorArr = []; 
            for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
            }
            console.log(errorArr);
            setErrors(errorArr);
        })
        }
    
    return (
        <div>
            <Link to="/home">Home</Link>
            
            
            <h1>Favorite Authors</h1>
            {
            loaded && <AuthrForm  errorsS={errors}  onSubmitProp={createAuthr} initialName={""} setCaption={"Add Author"}/>
            }
            <hr/>
            

        </div>
    )
}
export default Main