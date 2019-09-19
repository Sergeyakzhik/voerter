import React from 'react';

import Card from './Card';

import cards from './cardsList';

const CardList = () => {
    
    return (
        <div className='card-list'>
            {cards.map(item => (
                <Card
                    data={item}
                />
            ))}
        </div>
    );
};

export default CardList;