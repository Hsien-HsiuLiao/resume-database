import React from 'react';
import { CandidateView } from './components/CandidateView.js';
import { ManagerView } from './components/ManagerView.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <ManagerView />
      <CandidateView />

    </div>
  );
}

export default App;
