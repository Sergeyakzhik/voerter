import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

const Footer = ({ activeTypes, activePrefixes, onTypeClick, onPrefixClick }) => {
    const [panelOpened, open] = useState(false);

    return (
        <footer>
            <div className={`opener ${panelOpened ? 'opened' : ''}`} onClick={() => open(!panelOpened)}>
                <FontAwesomeIcon className={`opener-icon ${panelOpened ? 'opened' : ''}`} icon={faChevronUp} />
            </div>
            <div className='types-panel'>
                <div className={`type-toggler ${activeTypes.indexOf(2) !== -1 ? 'enabled' : ''}`} onClick={() => onTypeClick(2)}>
                    <p>T</p>
                </div>
                <div className={`type-toggler ${activeTypes.indexOf(1) !== -1 ? 'enabled' : ''}`} onClick={() => onTypeClick(1)}>
                    <p>U</p>
                </div>
                <div className={`type-toggler ${activeTypes.indexOf(3) !== -1 ? 'enabled' : ''}`} onClick={() => onTypeClick(3)}>
                    <p>TU</p>
                </div>
            </div>
            <div className={`prefix-panel ${panelOpened ? 'opened' : ''}`}>
                <div className={`prefix-toggler ${activePrefixes.indexOf('durch') !== -1 ? 'enabled' : ''}`} onClick={() => onPrefixClick('durch')}>
                    <p>durch</p>
                </div>
                <div className={`prefix-toggler ${activePrefixes.indexOf('über') !== -1 ? 'enabled' : ''}`} onClick={() => onPrefixClick('über')}>
                    <p>über</p>
                </div>
                <div className={`prefix-toggler ${activePrefixes.indexOf('um') !== -1 ? 'enabled' : ''}`} onClick={() => onPrefixClick('um')}>
                    <p>um</p>
                </div>
            </div>
        </footer>
    )
};

export default Footer;