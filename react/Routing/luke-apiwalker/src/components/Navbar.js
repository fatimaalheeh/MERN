import React, { useState } from 'react';
import { Link } from "@reach/router";

function Navbar() {
    //initial values for Id and category
    const [id, setId] = useState();
    const [category, setCategory] = useState("people");//"people", without it : routed to /undefined

    //handlers for the input fields in the form
    const categoryHandler = (e) => {
        setCategory(e.target.value);
    }
    const idHandler = (e) => {
        setId(e.target.value);
    }

    return (
        <div>
            <form onSubmit>
            <span>Search for: </span>
            <span>
                <select value={category} onChange={categoryHandler}>
                    <option value="people">People</option>
                    <option value="films">Films</option>
                    {/* <option value="starships">Starships</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="species">Species</option> */}
                    <option value="planets">Planets</option>
                </select>
            </span>
            <span>ID: </span>
            <span>
                <input value={id} onChange={idHandler} />
            </span>
            <span>
                <Link to={"/"+category+"/"+id}>Search</Link>

            </span>
            
            </form>
        </div>
        
    )
}

export default Navbar