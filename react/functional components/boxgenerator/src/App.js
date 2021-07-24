import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Generator from './components/generator';
import ShowBox from './components/boxes';

function App() {

  const [formInfo, setFormInfo] = useState({
    boxColor: "",
    boxHeight: "",
    boxWidth: "",

})//    default values of the variables

const [allBoxes, setAllBoxes ] = useState([]);//list

const changeHandler = (e)=>{ //for forms
  setFormInfo({
      ...formInfo,
      [e.target.name]: e.target.value//value from input field, see form hooks
  })

}
const submitHandler = (e)=>{//on submit
  e.preventDefault()//prevent bubbling//bubbling phase?

  setAllBoxes([...allBoxes, formInfo])//spread pass formInfo
  setFormInfo({
    boxColor: "",
    boxHeight: "",
    boxWidth: "",

  })//set to new values
}

  return (
    <div className="App">
      <Generator submitHandler= {submitHandler} changeHandler={changeHandler} formInfo= {formInfo}></Generator>
      <ShowBox allBoxes= {allBoxes} setAllBoxes={setAllBoxes}></ShowBox>

    </div>
  );
}

export default App;