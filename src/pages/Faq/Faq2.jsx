import Navigation from "../../components/Navigation/Navigation.jsx";
import "../Faq/Faq.scss";
import React, { useState } from "react";

function Faq2() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };
  return (
    <div className="wrapper">
      <Navigation />
      <h4>Visit The Shop</h4>
      <div className="accordion">
        {data.map((item, i) => (
          <div className="item" key={item.id}>
            <div className="title" onClick={() => toggle(i)}>
              <p>{item.question}</p>
              <span>{selected === i ? "-" : "+"}</span>
            </div>

            {selected === i && <div className="content">{item.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    id: 4,
    question: "Where are you located?",
    answer:
      "Burger Drops is located at 116 Atlantic Ave in Liberty Village, Toronto, ON.",
  },
  {
    id: 5,
    question: "Do you have seating for dine in?",
    answer:
      "Currently, we have limited seating available available for dine-in guests on a first-come, first-serve basis. Guests are also welcome to enjoy their burgers on our patio weather permitting.As always, please be respectful of our restaurant and dispose of garbage accordingly.",
  },
  {
    id: 6,
    question: "What are your hours of operation?",
    answer:
      "Currently, we have permitting.As always, please be respectful of our restaurant and dispose of garbage accordingly.",
  },
];

export default Faq2;
