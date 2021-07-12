import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Hello Dojo
        </h1>
        <h3>Things I need to do</h3>
        
          <ul>
          <li>Learn React</li>
          <li>Climb Mount Everest</li>
          <li>Run a Marathon</li>
          <li>Feed the Dogs</li>
          </ul>
          

      </header> 
    </div>
  );
}

export default App;
