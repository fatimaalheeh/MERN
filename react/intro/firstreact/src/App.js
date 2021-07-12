import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import List from './components/List';


function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Header/>
        <List/>

    </div>
  );
}

export default App;
