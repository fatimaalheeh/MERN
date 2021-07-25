import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Info = (props) => {
    const { category, id } = props;
    const [result, setResult] = useState("");
    const fetchAxios = (category, id) => {
        axios.get("https://swapi.dev/api/" + category + "/" + id)
            .then(res => setResult(res.data))
            .catch(reject => setResult({ error: "Not Found" }))//,window.alert(<img src="https://static.wikia.nocookie.net/star-wars-memes/images/e/e4/NotTheDroids.png/revision/latest?cb=20200707002606" />)
    }


    useEffect(() => {
        fetchAxios(category, id);

    }, [category, id])
    //----------------------------------
    //-----------Important--------------
    //useEffect alone won't work, we need the function to pass the category and the id to the
    //rout, while useEffect will map the result
    // useEffect(()=>{
    //     axios.get("https://swapi.dev/api/"+category+"/"+id)
    //         .then(res=>setResult(res.data))
    //         .catch(reject=>setResult({error:"Not Found"}))
    // },[category,id])
    //----------------------------------



    if (category == "people") {
        return (
            <div>
                <h1><h3>{result.name}</h3><h3>{result.title}</h3></h1>
                <div>
                    <h3>Height: {result.height}</h3>
                    <h3>Mass: {result.mass}</h3>
                    <h3>Hair Color: {result.hair_color}</h3>
                    <h3>Skin Color: {result.skin_color}</h3>
                </div>
            </div>
        );
    }
    else if (category == "films") {
        return (
            <div>
                <h1><h3>{result.name}</h3><h3>{result.title}</h3></h1>
                <div>
                    <h3>Release Date: {result.release_date}</h3>
                    <h3>Director: {result.director}</h3>
                    <h3>Producer: {result.producer}</h3>
                    <h3>Opening Crawl:<br></br> {result.opening_crawl}</h3>
                </div>
            </div>
        )
    }
    else if (category == "planets") {
        return (
            <div>
                <h1><h3>{result.name}</h3><h3>{result.title}</h3></h1>
                <div>
                    <h3>Climate: {result.climate}</h3>
                    <h3>Terrain: {result.terrain}</h3>
                    <h3>Surface Water: {result.surface_water}</h3>
                    <h3>Population: {result.population}</h3>
                </div>
            </div>
        )
    }
    else {
        return (
            <img src="https://th.bing.com/th/id/OIP.7w8jxC1ufE4hbZ_MGImdqQAAAA?pid=ImgDet&rs=1" />
        )
    }
}




export default Info;