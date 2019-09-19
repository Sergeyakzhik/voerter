import React, { useState } from 'react';

const Footer = ({ data }) => {
    const [activePrefixes, togglePrefix] = useState([]);
    const [activeTypes, toggleType] = useState([]);

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

    return (
        <footer>
            <div className='type-toggler' onClick={() => handleTypeClick('T')}>
                <p>T</p>
            </div>
            <div className='type-toggler' onClick={() => handleTypeClick('U')}>
                <p>U</p>
            </div>
            <div className='type-toggler' onClick={() => handleTypeClick('TU')}>
                <p>TU</p>
            </div>
        </footer>
    )
};

export default Footer;