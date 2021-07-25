import {Router} from '@reach/router';
import Info from './components/Info';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
     <center>
     <Navbar />
      <Router>
        <Info path="/:category/:id" />
      </Router>
     </center>
    </div>
  );
}

export default App;