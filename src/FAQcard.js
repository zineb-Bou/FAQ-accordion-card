import React, { useState } from 'react';
import { Arrow } from './icons.js';
import reactDOM from 'react-dom';

const answerQuestionList = [
  {
    q: 'How many team members can I invite?',
    a: '  You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.',
  },

  {
    q: ' What is the maximum file upload size?',
    a: 'No more than 2GB. All files in your account must fit your allotted storage space.',
  },

  {
    q: ' How do I reset my password?',
    a: ' Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.',
  },

  {
    q: ' Can I cancel my subscription?',
    a: ' Yes! Send us a message and we’ll process your request no questions asked.',
  },

  {
    q: 'Do you provide additional support?',
    a: 'Chat and email support is available 24/7. Phone lines are open during normal business hours.',
  },
];
function FAQitems(props) {
  const item = (
    <li
      className={`FAQlist__item ${props.isOpen ? 'open' : ''}`}
      onClick={props.onClick}
    >
      <h3 className={props.isOpen ? 'open ' : ''}>{props.question}</h3>
      <button className="FAQlist__item__btn" onClick={props.onClick}>
        <span className="sr-only">Show the answer</span>
        <Arrow isOpen={props.isOpen} />
      </button>
      {props.isOpen ? <p>{props.answer}</p> : ''}
    </li>
  );
  return item;
}
function FAQcard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const list = answerQuestionList.map((item, index) => {
    let isOpen = index === activeIndex ? true : false;
    return (
      <FAQitems
        question={item.q}
        answer={item.a}
        isOpen={isOpen}
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
