import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.css';
import FAQcard from './FAQcard';
function App() {
  return (
    <React.StrictMode>
      <main className="main">
        <FAQcard />
      </main>
    </React.StrictMode>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
