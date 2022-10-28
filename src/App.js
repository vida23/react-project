import React from 'react';
import logo from './V R.svg';
import './App.css';
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Welcome to my website
        </p>

      </header>
      <footer>
        <Footer />
      </footer>
      
    </div>
  );
}

export default App;
