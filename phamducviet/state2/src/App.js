import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import List from './Main/List/List';
import Siderbar from './Main/Siderbar';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header />
      </header>
      <main>
        <Siderbar></Siderbar>
        <List></List>

      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
