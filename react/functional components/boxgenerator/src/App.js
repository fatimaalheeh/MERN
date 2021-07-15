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
})
const [allBoxes, setAllBoxes ] = useState([])

const changeHandler = (e)=>{
  setFormInfo({
      ...formInfo,
      [e.target.name]: e.target.value
  })

}
const submitHandler = (e)=>{
  e.preventDefault()

  setAllBoxes([...allBoxes, formInfo])
  console.log(allBoxes)
  setFormInfo({
    boxColor: "",
    boxHeight: "",
    boxWidth: "",

  })
}

  return (
    <div className="App">
      <Generator submitHandler= {submitHandler} changeHandler={changeHandler} formInfo= {formInfo}></Generator>
      <ShowBox allBoxes= {allBoxes} setAllBoxes={setAllBoxes}></ShowBox>

    </div>
  );
}

export default App;