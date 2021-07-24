import React,{useState}from 'react';
import { useEffect } from 'react';
const Pokemons = () => {
    const [pokemon, setPokemon] = useState([]);
    const [isChecked, setIsChecked] = useState([false]);
    const checkeded=()=>{
        setIsChecked(true);
        console.log('Im'+ isChecked);

    }
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
            .catch(err => console.log(err));
    }, []);     
 
    return (
        <div>
             <button onClick={ checkeded }>Pokemon Names</button>
            {  isChecked===true?
               pokemon.map((poke, index)=>{
                return (<li key={index}>{poke.name} </li>)
            })
            : ""
        }
        </div>
    );
}
export default Pokemons;

//----------- wiythout useEffect -----------
// import React,{useState}from 'react';
// import { useEffect } from 'react';
// const Pokemons = () => {
//     const [pokemon, setPokemon] = useState([]);
//     const getPoke=() => {
//         fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
//             .then(response => response.json())
//             .then(response => setPokemon(response.results))
//             .catch(err => console.log(err));
//     };     
 
//     return (
//         <div>
//              <button onClick={ getPoke }>Pokemon Names</button>
//             {
//                pokemon.map((poke, index)=>{
//                 return (<li key={index}>{poke.name} </li>)
//             })
//             }
            
//         </div>
//     );
// }
// export default Pokemons;


  
//----------- a toggle -----------
// import React,{useState}from 'react';
// import { useEffect } from 'react';
// const Pokemons = () => {
//     const [pokemon, setPokemon] = useState([]);
//     const [isChecked, setIsChecked] = useState([false]);
//     const checkeded=()=>{
//         setIsChecked(!isChecked);
//         console.log('Im'+ !isChecked);
        
//     }
//     useEffect(() => {
//         fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
//             .then(response => response.json())
//             .then(response => setPokemon(response.results))
//             .catch(err => console.log(err));
//     }, []);     
 
//     return (
//         <div>
//              <button onClick={ checkeded }>Pokemon Names, click twice for first time</button>
//             {
//                isChecked===true?
//                pokemon.map((poke, index)=>{
//                 return (<li key={index}>{poke.name} </li>)
//             })
//             :console.log("empty")
            

//         }
        
//         </div>
//     );
// }
// export default Pokemons;

