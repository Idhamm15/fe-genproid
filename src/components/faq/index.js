import React, { useState } from 'react';

const faqData = [
  {
    question: 'Apa itu Genpro Tegal',
    answer:
      '',
  },
  {
    question: 'Untuk apa Website ini dibuat?',
    answer:
      '',    
  },
  {
    question: 'Apakah website ini hanya terdapat produk UMKM?',
    answer:
      '',    
  },
  {
    question: 'Apakah saya bisa membuka toko di sini?',
    answer:
      '',    
  },
];

const Faq = () => {
  const [isOpen, setIsOpen] = useState(Array(faqData.length).fill(false));

  const toggleQuestion = (index) => {
    setIsOpen((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div>
      <div className="mx-auto flex max-w-screen-sm flex-col border-t">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b">
            <div
              className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600"
              onClick={() => toggleQuestion(index)}
            >
              <span className="font-semibold transition duration-100 md:text-lg">
                {faq.question}
              </span>

              <span className="text-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 transform ${isOpen[index] && 'rotate-180'}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </div>

            <p className={`mb-4 ${!isOpen[index] && 'hidden'} text-gray-500`}>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;

