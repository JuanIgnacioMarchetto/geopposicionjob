import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LookingForJob from './components/LookingForJob';
import LookingForEmployee from './components/LookingForEmployee';

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

          <Routes>
            <Route path="/looking-for-job" element={<LookingForJob />} />
            <Route path="/looking-for-employee" element={<LookingForEmployee />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
