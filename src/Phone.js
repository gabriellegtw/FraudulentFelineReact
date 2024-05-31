import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Phone.css'; // For styling
import Modal from './Modal'; // Import the Modal component

function Phone() {
    const [enteredNumbers, setEnteredNumbers] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleNumberPress = (number) => {
        setEnteredNumbers(prevEnteredNumbers => prevEnteredNumbers + number);

        const newNumbers = enteredNumbers + number;

        if (newNumbers === '87654321') {
            setModalMessage('Hi, this is your lawyer. Please note that the SMS Sir Meow received is highly likely to be a phishing attempt.\nScammers often use messages like these to trick recipients into clicking on malicious links, which can lead to identity theft or financial loss.\nWe recommend Sir Meow to check with BOP on whether the transaction had actually taken place.');
            setShowModal(true);
        } else if (newNumbers === '98765432') {
            setModalMessage('Hi, this is BOP. No, there has not been any transaction of S$369 from Sir Meow\'s account on 15 December.');
            setShowModal(true);
        }
    };

    const handleClear = () => {
        setEnteredNumbers('');
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setEnteredNumbers('');
    };

    return (
        <div className="home-container1">
            {showModal && <Modal message={modalMessage} onClose={handleCloseModal} />}
            <div className="container">
                <img src="https://c1.staticflickr.com/3/2888/34137719352_0a55d1a413_o.png" className="sticky-tape left" alt="Sticky tape"/>
                <div className="instructions">
                    <h3>Note to self:</h3>
                    <h3>To call lawyer, press "87654321"</h3>
                    <h3>To call bank, press "98765432"</h3>
                </div>
                <div className="leftPanel">
                    <div className="numbers">
                        <div onClick={() => handleNumberPress('1')}>1</div>
                        <div onClick={() => handleNumberPress('2')}>2</div>
                        <div onClick={() => handleNumberPress('3')}>3</div>
                    </div>
                    <div className="numbers">
                        <div onClick={() => handleNumberPress('4')}>4</div>
                        <div onClick={() => handleNumberPress('5')}>5</div>
                        <div onClick={() => handleNumberPress('6')}>6</div>
                    </div>
                    <div className="numbers">
                        <div onClick={() => handleNumberPress('7')}>7</div>
                        <div onClick={() => handleNumberPress('8')}>8</div>
                        <div onClick={() => handleNumberPress('9')}>9</div>
                    </div>
                    <div className="numbers">
                        <div onClick={() => handleClear()}>Clear</div>
                        <div onClick={() => handleNumberPress('0')}>0</div>
                        <div><Link to="/game">Exit</Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Phone;
