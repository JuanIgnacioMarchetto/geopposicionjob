import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LookingForJob from './components/LookingForJob';
import LookingForEmployee from './components/LookingForEmployee';
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          
          <Link to="/looking-for-job" className="button">
            Looking For Job
          </Link>
<br></br>
          <Link to="/looking-for-employee" className="button">
            Looking For Employee
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
