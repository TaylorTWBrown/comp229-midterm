// src/App.js
import React from 'react';
import './App.css'; // Import component-specific styles if needed
import Form from './Form'; // Import your Form component

function App() {
  return (
    <div className="App">
      <header>
        <h1>Comp229 Midterm</h1>
      </header>
      <main>
        <Form /> {/* Render your Form component here */}
      </main>
    </div>
  );
}

export default App;
