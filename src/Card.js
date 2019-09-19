import React, { useState } from 'react';

const colorByType = {
    1: '#10ff00',
    2: '#00a1ff',
    3: '#ff3b00'
};

const Card = ({ data }) => {
    const [isTurned, turn] = useState(false);

    return (
        <div className='card' style={isTurned ? { border: `5px solid ${colorByType[data.type]}` } : null} onClick={() => turn(!isTurned)}>
            {!isTurned ? (
                <h2>{data.name}</h2>
            ) : (
                <>
                    {Object.keys(data.meanings).map(key => (
                        data.meanings[key].map((item, ind) => (
                            <p className='meaning' key={'meaning ' + ind}>
                                {item}
                            </p>
                        ))
                    ))}
                </>
            )}
        </div>
    )
};

export default Card;