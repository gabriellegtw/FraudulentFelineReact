import React from 'react';
import { Link } from 'react-router-dom';
import './Winlosepage.css'; // For styling

function Winpage() {
    return (
        <div className='winlose-container'>
            <h1 className='winlosetitle'>Congratulations! You have correctly identified that it is a scam</h1>
            <button>Continue</button>
        </div>
    )
}

export default Winpage;