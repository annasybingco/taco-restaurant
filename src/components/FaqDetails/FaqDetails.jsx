import Navigation from "../Navigation/Navigation.jsx";
import "./FaqDetails.scss";
import React, { useState } from "react";

function Faq() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };
  return (
    <div className="faq">
      <Navigation />
      <h1>FAQ</h1>
      <div className="faq__questions">
        <h4>Ordering</h4>
        <div className="faq__accordion">
          {data.map((item, i) => (
            <div className="faq__item" key={item.id}>
              <div className="faq__title" onClick={() => toggle(i)}>
                <p>{item.question}</p>
                <span>{selected === i ? "-" : "+"}</span>
              </div>

              {selected === i && <div>{item.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    id: 1,
    question: "How can I place an order?",
    answer:
      "To place an order, you have many options. Drop by the shop to order in-person during our regular hours, order ahead for pick-up on Ritual, our app or for delivery on Uber Eats and Doordash.",
  },
  {
    id: 2,
    question: "Can I order over the phone?",
    answer:
      "Phone orders are not possible at this time as we cannot process a transaction for your order via text or phone.",
  },
  {
    id: 3,
    question: "Do you offer catering?",
    answer:
      "Yes! Burger Drops specializes in both on-site private catering and large group orders for your office or next celebration.",
  },
];

export default Faq;
