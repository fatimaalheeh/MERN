import React, { useState } from 'react';
import axios from 'axios';
const AxiosPokemons = () => {
    const [Axios, setAxios] = useState([]);
    const fetchAxios = () => {//try it with useEffect '.../id'   useEffect ....(=>,[id]) to rerender on every change on the id
        axios.get(
            'https://pokeapi.co/api/v2/pokemon?limit=807'
            )
        .then(
            response => setAxios(
                response.data.results
                )
            )
        }
    return (
        <div>
            <button onClick={fetchAxios}>Pokemons Axios API</button>
            <div style={{textAlign:"left", display:"flex", justifyContent:"center"}}>
                <ul>{Axios.map((pokemon, Idx) => {   return <li key={Idx}> {pokemon.name}</li>   })}</ul>
            </div>
        </div>
    );
}

export default AxiosPokemons;