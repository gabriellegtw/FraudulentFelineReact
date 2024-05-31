import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Phone.css'; // For styling

function Phone() {
    const [enteredNumbers, setEnteredNumbers] = useState('');

    const handleNumberPress = (number) => {
        // Append the pressed number to the entered numbers
        setEnteredNumbers(prevEnteredNumbers => prevEnteredNumbers + number);

        // Check if the entered numbers match the secret code
        if (enteredNumbers + number === '87654321') {
        // Show the popup or perform any action you want
        alert('I am lawyer');
        } 

        if (enteredNumbers + number === '98765432') {
            // Show the popup or perform any action you want
            alert('I am bank');
            } 
    };

    const handleClear = () => {
        // Clear the entered numbers
        setEnteredNumbers('');
    };

  return (
    <div className="home-container1">
      <div className = "container">
      <img src="https://c1.staticflickr.com/3/2888/34137719352_0a55d1a413_o.png" class="sticky-tape left"></img>
        <div className ="instructions">
            <h3>Note to self:</h3>
            <h3>To call lawyer, press "87654321"</h3>
            <h3>To call bank, press "98765432"</h3>
        </div>
            <div class="leftPanel">
        <div class="numbers">
            <div onClick={() => handleNumberPress('1')}>1</div>
            <div onClick={() => handleNumberPress('2')}>2</div>
            <div onClick={() => handleNumberPress('3')}>3</div>
        </div>
        <div class="numbers">
            <div onClick={() => handleNumberPress('4')}>4</div>
            <div onClick={() => handleNumberPress('5')}>5</div>
            <div onClick={() => handleNumberPress('6')}>6</div>
        </div>
        <div class="numbers">
            <div onClick={() => handleNumberPress('7')}>7</div>
            <div onClick={() => handleNumberPress('8')}>8</div>
            <div onClick={() => handleNumberPress('9')}>9</div>
        </div>
        <div class="numbers">
            <div onClick={() => handleClear()}>Clear</div>
            <div>0</div>
            <div><Link to = "/game">Exit</Link></div> 
        </div>
        </div>
      </div>
    </div>
  );
}

export default Phone;