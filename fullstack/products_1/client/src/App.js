// ES6 Modules
import React from 'react';
import {Router} from '@reach/router';

//Styles
import './App.css';

// Views
import Main from './views/Main'
// import Detail from './views/Detail';
// import Update from './views/Update';

//
function App() {
  return (
    <div className="App">
      <Router>
        <Main path="products" />
      </Router>
    </div>
  );
}

export default App;