import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LookingForJob from './LookingForJob';
import LookingForEmployee from './LookingForEmployee';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/looking-for-job">
            <button>Looking For Job</button>
          </Link>
          <Link to="/looking-for-employee">
            <button>Looking For Employee</button>
          </Link>

          <Route path="/looking-for-job" component={LookingForJob} />
          <Route path="/looking-for-employee" component={LookingForEmployee} />
        </header>
      </div>
    </Router>
  );
}

export default App;
