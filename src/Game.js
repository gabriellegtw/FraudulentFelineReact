import { useState } from 'react';
import cat from "./images/Cat.png";
import caseFileImage from "./images/file.png";
import mic from "./images/mic.png"; 
import checklist from "./images/checklist.png"; 

function Game() {
  const initialCaseFileContent = "Message says “This is BOP (Bank of Pussy). There was a withdrawal of S$369 with your BOP account on 15 December at 20:31.\nIf unauthorised, visit https://bankofpussyhelpline.securesg.site to stop the process.”";
  const [speaking, setSpeaking] = useState("");
  const [showCaseFile, setShowCaseFile] = useState(false);
  const [messageVisible, setMessageVisible] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [caseFileContent, setCaseFileContent] = useState(initialCaseFileContent);
  const [showChecklist, setShowChecklist] = useState(false);
  const [items, setItems] = useState([
      {id: 1, label: "Asked customer for more information"},
      {id: 2, label: "Highlighted suspicious details in case file"},
      {id: 3, label: "Called the bank for more details"},
      {id: 4, label: "Called the lawyer for legal advice"},
      {id: 5, label: "Called the police after confirming it is a scam"},
  ]);

  const handleMicrophoneClick = () => {
    let catSpeak;
    let newCaseFileContent = caseFileContent; 

    if (clickCount === 0) {
      catSpeak = "I received an SMS today from BOP (Bank of Pussy) saying that there have been unauthorized attempts to access my bank account. There is also a link in the SMS to stop the attempt. Should I click the link?";
    } else if (clickCount === 1) {
      catSpeak = "The message was sent from an unknown number.";
      newCaseFileContent += "\nThe message was sent from an unknown number.";
    } else {
      catSpeak = "I have no other details to share."
    }
    setSpeaking(catSpeak);
    setMessageVisible(true);
    setClickCount(prevCount => prevCount + 1);
    setCaseFileContent(newCaseFileContent);
  };

  const handleContinueClick = () => {
    setMessageVisible(false);
    setSpeaking("");
  };

  const toggleItem = (index) => {
    const newItems = [...items];
    newItems[index].completed = !newItems[index].completed;
    setItems(newItems);
  };

  const handleBackClick = () => {
    setShowChecklist(false);
  };

  const escapeRegExp = (string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  };

  const handleHighlightClick = () => {
    const selection = window.getSelection();
    const selectedText = selection.toString();
    if (selectedText) {
      const highlightedText = `<mark>${selectedText}</mark>`;
      const newContent = caseFileContent.replace(selectedText, highlightedText);
      setCaseFileContent(newContent);
    }
  };

  const handleRemoveHighlightClick = () => {
    const newContent = caseFileContent.replace(/<mark>(.*?)<\/mark>/g, '$1');
    setCaseFileContent(newContent);
  };

  return (
    <div className="game-container" style={{ position: 'relative' }}>
      {showCaseFile && (
        <div className="overlay">
          <div className="white-paper">
            <pre dangerouslySetInnerHTML={{ __html: caseFileContent }}></pre>
            <button onClick={handleHighlightClick}>Highlight</button>
            <button onClick={handleRemoveHighlightClick}>Remove all highlights</button>
            <button onClick={() => setShowCaseFile(false)}>Close</button>
          </div>
        </div>
      )}
      <div id="cat-speech">
        <img alt="cat" src={cat} width="400" height="300" />
        {messageVisible && (
          <>
            <p>{speaking}</p>
            <button onClick={handleContinueClick}>Continue</button>
          </>
        )}
      </div>
      <button onClick={handleMicrophoneClick}>
        <img alt="mic" src={mic} width="50" height="50" />
      </button>
      <button onClick={() => setShowChecklist(true)}>
        <img alt="checklist" src={checklist} width="50" height="50" />
      </button>
      {showChecklist && (
          <div className="overlay">
            <div className="white-paper">
              <div>
                <p>Checklist</p>
                <ul>
                  {items.map((item, index) => (
                    <li key={index}>
                      <label>
                        <input 
                          type="checkbox" checked={item.completed} onChange={() => toggleItem(index)}
                        />
                      {item.label}
                      </label>
                    </li>
                  ))}
                </ul>
                <button onClick={handleBackClick}>Back</button>
              </div>
            </div>
          </div>
      )}
      <button>phone</button>
      <button onClick={() => setShowCaseFile(true)}>
        <img alt="case file" src={caseFileImage} width="50" height="50" />
      </button>
    </div>
  );
}

export default Game;

