import React from 'react';
import logo from './V R.svg';
import './App.css';
import Footer from "./Footer";
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">

      <navbar>
        <Navbar />
      </navbar>

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
