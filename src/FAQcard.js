import React, { useState } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);
  const item = (
    <li className="FAQlist__item">
      <h3 className={isOpen ? 'open ' : ''}>{props.question}</h3>
      <button className="FAQlist__item__btn" onClick={() => setIsOpen(!isOpen)}>
        <span className="sr-only">Show the answer</span>
        {isOpen ? (
          <span className="FAQlist__item__btn-open"></span>
        ) : (
          <span className="FAQlist__item__btn-close"></span>
        )}
      </button>
      {isOpen && <p>{props.answer}</p>}
    </li>
  );
  return item;
}
function FAQcard() {
  const list = [];
  answerQuestionList.forEach((listItem, key) =>
    list.push(<FAQitems question={listItem.q} answer={listItem.a} />)
  );
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
{
  /*
  
   <FAQitems
          question="how many team members an I invite"
          answer="  You can invite up to 2 additional users on the Free plan. There is no limit on 
  team members for the Premium plan."
        />
        <FAQitems
          question="What is the maximum file upload size?"
          answer="No more than 2GB. All files in your account must fit your allotted storage space."
        />
        <FAQitems
          question="How do I reset my password?"
          answer="Click “Forgot password” from the login page or “Change password” from your profile page.
  A reset link will be emailed to you."
        />
        <FAQitems
          question="Can I cancel my subscription?"
          answer="Yes! Send us a message and we’ll process your request no questions asked."
        />
        <FAQitems
          question="Do you provide additional support?"
          answer="Chat and email support is available 24/7. Phone lines are open during normal business hours."
        /> */
}
