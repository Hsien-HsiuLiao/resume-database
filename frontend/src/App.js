import React from 'react';
import { CandidateView } from './components/CandidateView.js';
import { ManagerView } from './components/ManagerView.js';

import './App.css';

function App() {
  return (
    <div className="App">
      Register as a Hiring manager or job seeker
      Hiring manager fields: account address, name, company
      job seeker fields: name
      
      <ManagerView />
      <CandidateView />

    </div>
  );
}

export default App;
