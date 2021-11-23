import React, { useState } from 'react';
import { Arrow } from './icons.js';
import { nanoid } from 'nanoid';
import reactDOM from 'react-dom';
import { answerQuestionList } from './data.js';

// List Item
function FAQitems(props) {
  const item = (
    <li
      className={`FAQlist__item ${props.isOpen ? 'open' : ''}`}
      onClick={props.onClick}
    >
      <h3 className={`FAQlist__item__question ${props.isOpen ? ' open ' : ''}`}>
        {props.question}
      </h3>
      <button className="FAQlist__item__btn" onClick={props.onClick}>
        <span className="sr-only">Show the answer</span>
        <Arrow isOpen={props.isOpen} />
      </button>
      {props.isOpen ? (
        <p className="FAQlist__item__answer">{props.answer}</p>
      ) : (
        ''
      )}
    </li>
  );
  return item;
}

// Card
function FAQcard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const list = answerQuestionList.map((item, index) => {
    let isOpen = index === activeIndex ? true : false;
    const id = nanoid();
    return (
      <FAQitems
        question={item.q}
        answer={item.a}
        isOpen={isOpen}
        key={id}
        onClick={() => {
          setActiveIndex(index);
        }}
      />
    );
  });
  return (
    <div className="faq">
      <div className="faq__image" aria-label="true"></div>
      <h2 className="faq__heading">faq</h2>
      <ul className="FAQlist" role="list">
        {list}
      </ul>
    </div>
  );
}
export default FAQcard;
