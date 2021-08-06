import "./App.css";
import { Router } from "@reach/router";
import Main from "./views/Main";
import axios from "axios";
import React,{useState,useEffect} from "react";
import AuthrTable from "./components/AuthrTable";
import Update from "./views/Update"
import { Link } from '@reach/router';
function App(props) {
  const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [caption,setCaption] = useState("Quotes By sth sth ")
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
        .then(res => {
            setAuthors(res.data);
            setLoaded(true);
        });
    }, [authors]) 
    //this is to get it once it's renderd 


  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Main path="/new" />
          {
            loaded && <AuthrTable path="/home" authors={authors} setCaption={caption} />
          }
          <Update path="/edit/:id" setCaption={"Edit This Author"}  />
        </Router>
      </header>
    </div>
  );
}

export default App;
