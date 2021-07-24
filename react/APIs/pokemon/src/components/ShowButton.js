import React,{useState}from 'react';
import { useEffect } from 'react';
const Pokemons = () => {
    const [pokemon, setPokemon] = useState([]);
 
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
    }, []);     
    componentDidMount=()=> {
        this.state = {
          show: false
        };
      }
      showTable=()=>{
        this.setState({
          show: true
        });
      }
    return (
        <div>
            <button onclick="showTable()">
  Show Table
</button>
{

<Pokemons/>
}
        </div>
    );
}
export default Pokemons;
