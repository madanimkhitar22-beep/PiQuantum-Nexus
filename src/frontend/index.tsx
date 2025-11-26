// Frontend Entry Point
import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => (
  <div>
    <h1>PiQuantum-Nexus</h1>
    <p>Quantum-secure decentralized intelligence layer for the Pi Network</p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);

export default App;
