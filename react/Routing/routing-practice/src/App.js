import './App.css';
import { Router } from '@reach/router';
import WelcomeComponent from './components/WelcomeComponent'
import NumberComponent from './components/NumberComponent'
import WordComponent from './components/WordComponent'
import ColoredWordComponent from './components/ColoredWordComponent'
function App(){
  return (
    
      <div className="App">
          <Router>
              <WelcomeComponent path="/home" />
              <NumberComponent path="/:id" />
              <WordComponent path="/:word" />
              <ColoredWordComponent path="/:word/:color/:backgroundColor" />
          </Router>
      </div>
  )
}

export default App;
