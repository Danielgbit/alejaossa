import React from "react";

const FaqCard = () => {
  return (
    <div
      key={index}
      className="border-b border-gray-300 pb-4 cursor-pointer"
      onClick={() => toggleFAQ(index)}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-dark-01">{faq.question}</h3>
        <span className="text-primary font-bold">
          {openIndex === index ? "-" : "+"}
        </span>
      </div>

      {openIndex === index && (
        <p className="mt-4 text-sm text-gray-600">{faq.answer}</p>
      )}
    </div>
  );
};

export default FaqCard;
