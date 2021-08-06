// ES6 Modules
import React from 'react';
import {Router} from '@reach/router';

//Styles
import './App.css';

// Views
import Main from './views/Main'
import ProductDetails from './views/ProductDetails';
import EditProduct from './views/EditProduct';
// import Update from './views/Update';

//
function App() {
  return (
    <div className="App-header">
      <Router>
        <Main path="products" />
        <ProductDetails path="products/:id"/>
        <EditProduct path="products/:id/edit" />
      </Router>
    </div>
  );
}

export default App;