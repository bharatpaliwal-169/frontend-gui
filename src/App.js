import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import BaseRouter from './route';

function App() {
  return (
    <React.Fragment>
      <Router>
        <BaseRouter />
      </Router>
    </React.Fragment>
  );
}

export default App;
