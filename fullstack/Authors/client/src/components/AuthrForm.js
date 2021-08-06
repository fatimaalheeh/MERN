import React, { useEffect,useState } from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
export default function Main(props) {
    const {errorsS,setCaption,initialName, onSubmitProp} = props;// 
    const [name, setName] = useState(initialName);
    useEffect(() => {
    }, [errorsS]);
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name})
    }
    return (
        <div>
            <div>{setCaption}</div>
            <form onSubmit={onSubmitHandler}>
                {errorsS.map((err, index) => <p key={index}>{err}</p>)}
                <p>
                    <label> Name :</label>
                    <input type="text" 
                    name="name" 
                    onChange={(e) => {setName(e.target.value)}} 
                    value={name}
                    />
                </p>
                <input type="submit" />
                <button>
                {" "}
                    <Link to={`/home`}> Cancel</Link>
                    </button>
            </form>
        </div>
    )
}