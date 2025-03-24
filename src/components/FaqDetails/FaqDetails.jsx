import Navigation from "../Navigation/Navigation.jsx";
import React, { useState } from "react";
import "./FaqDetails.scss";

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
    question: "Do you offer vegetarian or vegan options?",
    answer:
      "Absolutely! We offer a variety of delicious vegetarian and vegan tacos, including options like grilled veggies, plant-based proteins, and fresh toppings. Just let us know your preferences when placing your order, and we’ll make sure your meal hits the spot!",
  },
  {
    id: 2,
    question: "Can I customize my tacos?",
    answer:
      "Absolutely! Our tacos are fully customizable. Choose your protein, toppings, sauces, and sides to create the perfect taco just the way you like it. Whether you're into spicy or mild, we’ve got options for everyone!",
  },
  {
    id: 3,
    question: "Are your tacos gluten-free?",
    answer:
      "We offer gluten-free taco options, including corn tortillas and several gluten-free fillings. Just let us know if you have any dietary restrictions or preferences when ordering, and we’ll make sure your tacos are tailored to your needs!",
  },
];

export default Faq;
