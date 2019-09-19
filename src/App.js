import React, { useState } from 'react';
import './App.css';

import Footer from './Footer';
import CardList from './CardList';

import cards from './cardsList';

const App = () => {
  const [activeTypes, toggleType] = useState([]);
  const [activePrefixes, togglePrefix] = useState([]);

  const handleTypeClick = type => {
    const ind = activeTypes.indexOf(type);
    const result = [ ...activeTypes ];

    if (ind !== -1) {
        result.splice(ind, ind + 1);
        toggleType(result);
    } else {
        toggleType([ ...result, type ]);
    }
  };

  const handlePrefixClick = prefix => {
    const ind = activePrefixes.indexOf(prefix);
    const result = [ ...activePrefixes ];

    if (ind !== -1) {
        result.splice(ind, ind + 1);
        togglePrefix(result);
    } else {
      togglePrefix([ ...result, prefix ]);
    }
  };

  const filterByType = array => {
    let result = [];

    if (activeTypes.length === 0 || activeTypes.length === 3) {
      return array;
    }

    activeTypes.forEach(type => {
      result = result.concat(array.filter(item => item.type === type));
    });

    return result;
  };

  const filterByPrefix = array => {
    let result = [];

    if (activePrefixes.length === 0 || activePrefixes.length === 3) {
      return array;
    }

    activePrefixes.forEach(prefix => {
      result = result.concat(array.filter(item => item.prefix === prefix));
    });

    return result;
  };

  const getCurrentCards = () => {
    if((activeTypes.length === 0 || activeTypes.length === 3) && 
      (activePrefixes.length === 0 || activePrefixes.length === 3)) {
      return cards;
    }

    return filterByPrefix(filterByType(cards));
  };

  return (
    <div className="App">
      <main>
        <div className='container'>
          <CardList cards={getCurrentCards()} />
        </div>
      </main>
      <Footer 
        activeTypes={activeTypes} 
        activePrefixes={activePrefixes} 
        onTypeClick={handleTypeClick} 
        onPrefixClick={handlePrefixClick}
      />
    </div>
  );
}

export default App;
