import Header from './components/header.js';
import './App.css';

function App() {
  return (
    <div className="App">
    
      <Header firstName={"Jane"} lastName={ "Doe" } age="45" hairColor="Black"/>
      <Header firstName={"Smith"} lastName={ "John" } age="88" hairColor="Brown"/>
      <Header firstName={"Millard"} lastName={ "Fillmore" } age="50" hairColor="Brown"/>
      <Header firstName={"Maria"} lastName={ "Smith" } age="62" hairColor="Brown"/>
    </div>
  );
}

export default App;
