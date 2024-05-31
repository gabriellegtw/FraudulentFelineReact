import React from 'react';
import { Link } from 'react-router-dom';
import './Winlosepage.css'; // For styling

function Losepage() {
    return (
        <div className='winlose-container'>
            <h1 className='winlosetitle'>Oh no! You did not manage to identify the scam</h1>
            <button>Restart</button>
        </div>
    )
}

export default Losepage;