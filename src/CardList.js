import React from 'react';

import Card from './Card';

const CardList = ({ cards }) => {    
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