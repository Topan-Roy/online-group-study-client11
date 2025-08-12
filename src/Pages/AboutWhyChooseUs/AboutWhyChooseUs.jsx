import React, { useState } from "react";

const faqs = [
  {
    question: "How do I join a study group?",
    answer: "Just register and select a group to join.",
  },
  {
    question: "Can I submit assignments late?",
    answer: "Late submissions depend on group rules.",
  },
  {
    question: "Is there a mobile app?",
    answer: "Currently only web app is available.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-16 mt-5 bg-white dark:bg-gray-900 max-w-7xl mx-auto px-4 rounded-md shadow-md">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
        Frequently Asked Questions
      </h2>
      {faqs.map(({ question, answer }, i) => (
        <div
          key={i}
          className="mb-4 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm"
        >
          <button
            onClick={() => toggle(i)}
            className="w-full px-4 py-3 text-left font-semibold bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex justify-between items-center focus:outline-none text-gray-900 dark:text-gray-100"
            aria-expanded={openIndex === i}
            aria-controls={`faq-panel-${i}`}
            id={`faq-header-${i}`}
          >
            {question}
            <span className="text-2xl font-bold select-none">
              {openIndex === i ? "−" : "+"}
            </span>
          </button>
          {openIndex === i && (
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-header-${i}`}
              className="px-4 py-3 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 rounded-b-md"
            >
              {answer}
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default FAQ;
