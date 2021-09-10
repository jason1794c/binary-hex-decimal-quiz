import './App.css';
import BinaryAndDecimal from './BinaryAndDecimal/BinaryAndDecimal';
import BinaryAndHex from './BinaryAndHex/BinaryAndHex';
import HexAndDecimal from './HexAndDecimal/HexAndDecimal';

function App() {
  const resetQuiz = () => {
    window.location.reload(false);
  }

  return (
      <div
          className="App"
          style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
          }}
      >
          <header>
              <h1>Decimal/Binary/Hexadecimal Quiz</h1>
          </header>
          <div>
              <p>
                  Take this quiz to test yourself on conversion between decimal,
                  binary, and hexadecimal representations.
              </p>
              <p>Type your answer in the blank and click on "Check Answer".</p>
              <p>
                  Stumped? Click on "Give Up". To test yourself again, click on
                  the "New Quiz" button.
              </p>
          </div>
          <BinaryAndDecimal />
          <BinaryAndHex />
          <HexAndDecimal />
          <button
              style={{
                  width: "10%",
                  marginTop: "20px",
                  color: "#cc3334",
              }}
              onClick={resetQuiz}
          >
              <strong>Reset Quiz</strong>
          </button>
      </div>
  );
}

export default App;
