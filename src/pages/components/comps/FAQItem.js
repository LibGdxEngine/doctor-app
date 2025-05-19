// components/FAQ.js
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

// Sample FAQ data - replace with your actual questions and answers
const faqData = [
  {
    question: "Was macht einen Assistent/in bei Seiler Assistenz aus?",
    answer: "Ein Assistent/in bei Seiler Assistenz zeichnet sich durch Professionalität, Engagement und ein hohes Maß an Organisationstalent aus. Wir legen Wert auf proaktives Handeln und exzellente Kommunikationsfähigkeiten."
  },
  {
    question: "Welche Qualifikationen benötige ich, um Assistent/in bei Seiler Assistenz zu werden?",
    answer: "Wir suchen Kandidaten mit einer abgeschlossenen kaufmännischen Ausbildung oder einem vergleichbaren Studium. Berufserfahrung im Assistenzbereich ist von Vorteil, aber auch motivierte Quereinsteiger sind willkommen. Wichtig sind sehr gute Deutschkenntnisse in Wort und Schrift sowie ein sicherer Umgang mit MS Office."
  },
  {
    question: "Wie bewerbe ich mich für eine Stelle als Assistent/in?",
    answer: "Sie können sich direkt über unsere Karriereseite online bewerben. Bitte fügen Sie Ihren Lebenslauf, ein Anschreiben und relevante Zeugnisse bei. Wir freuen uns auf Ihre Bewerbung!"
  },
  {
    question: "Welche Aufgaben übernimmt einen Assistent/in bei Seiler Assistenz?",
    answer: "Die Aufgaben sind vielfältig und umfassen unter anderem Terminmanagement, Korrespondenz, Reiseplanung, vorbereitende Buchhaltung und die Unterstützung des Teams in administrativen und organisatorischen Belangen."
  },
  {
    question: "Wie flexibel sind die Arbeitszeiten bei Seiler Assistenz?",
    answer: "Wir bieten flexible Arbeitszeitmodelle an, die eine gute Work-Life-Balance ermöglichen. Je nach Position und Absprache sind sowohl Vollzeit- als auch Teilzeitmodelle möglich."
  }
];

const FAQItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="w-full border-b border-gray-200 last:border-b-0">
      <button
        className="w-full flex justify-between items-center text-left py-5 px-6 focus:outline-none focus-visible:ring focus-visible:ring-orange-400 focus-visible:ring-opacity-75 transition-colors hover:bg-orange-400/20 hover:text-white rounded-md"
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.question.replace(/\s+/g, '-')}`}
      >
        <span className="text-lg font-medium text-gray-800 hover:text-orange-50/1">{item.question}</span>
        {isOpen ? <Minus className="h-6 w-6 text-orange-500 transform transition-transform duration-300" /> : <Plus className="h-6 w-6 text-orange-500 transform transition-transform duration-300" />}
      </button>
      <div
        id={`faq-answer-${item.question.replace(/\s+/g, '-')}`}
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 pb-5 pt-2 text-gray-600">
          {item.answer}
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null); // State to keep track of the currently open FAQ item

  // Function to toggle the FAQ item
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // If the clicked item is already open, close it. Otherwise, open it.
  };

  return (
    <section className="w-full py-12 bg-white sm:py-16 lg:py-20">
      <div className="w-full container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full  mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Hilfreiche Antworten auf Ihre Fragen zu Seiler Assistenz
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Hier finden Sie Antworten auf häufig gestellte Fragen. Wenn Ihre Frage nicht dabei ist, kontaktieren Sie uns gerne.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mt-8 space-y-1 bg-orange-400/30 rounded-xl shadow-lg p-2 sm:p-4 md:mt-12">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
