import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link,navigate } from "@reach/router";
import DelBtn from "./DelBtn";
const AuthrTable = (props) => {
const { setCaption, authors } = props;
const [authorsB, setAuhtors] = useState([]);
useEffect(() => {
    axios
        .get("http://localhost:8000/api/authors")
        .then((res) => setAuhtors(res.data));
}, [authors]);
return (
    <div>
      <div>{setCaption}</div>
      {props.authors.map((author, index) => {
        return (
          <><div>
            <Link to="/new">Create</Link>
            </div>
          <table>
          
              
            
            <tr>
              <thead>Author's Name </thead>
              <thead>Actions</thead>
            </tr>
            <tr>
                <tbody key={author._id}>
                <Link to={`/authors/${author._id}`}>{author.name}</Link>
                </tbody>
                <tbody>
                    <button>
                {" "}
                    <Link to={`/edit/${author._id}`}> Edit </Link>
                    </button>
                    <DelBtn
                    authorId={author._id}
                    successCallback={()=>navigate("/home")}
                    />
            </tbody>
            </tr>
        </table>
        </>
        );
    })}
    </div>
);
};

export default AuthrTable;
