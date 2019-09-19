import React from 'react';
import './App.css';

import Footer from './Footer';
import CardList from './CardList';

function App() {
  return (
    <div className="App">
      <main>
        <div className='container'>
          <CardList />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
