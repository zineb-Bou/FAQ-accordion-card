import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.css';
import FAQcard from './FAQcard';

function App() {
  return (
    <>
      <main>
        <h1 className="sr-only"> FAQ accordion card</h1>
        <FAQcard />
      </main>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
