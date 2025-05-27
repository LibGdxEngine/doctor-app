// components/FAQ.js
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

// Sample FAQ data - replace with your actual questions and answers
const faqData = [
  {
    question: "Was ist ein Assistenzdienst?",
    answer: "Ein Assistenzdienst wie Infinity Plus in Bochum bietet Menschen mit Behinderung umfassende Unterstützung im Alltag. Unsere Dienstleistungen umfassen persönliche Assistenz, Mobilitätshilfen, Unterstützung bei Arbeit und Bildung sowie hauswirtschaftliche Unterstützung, um ein selbstbestimmtes Leben zu ermöglichen."
  },
  {
    question: "Wie hilft Infinity Plus bei der persönlichen Assistenz?",
    answer: "Unsere Assistenzkräfte unterstützen Sie bei alltäglichen Aufgaben wie Ankleiden, Waschen, Essen, Toilettengang und Mobilität. Zudem helfen wir bei der Medikamenteneinnahme und therapeutischen Übungen, damit Sie ein selbstbestimmtes Leben führen können."
  },
  {
    question: "Welche Mobilitätshilfen bietet Infinity Plus an?",
    answer: "Wir bieten Zugang zu Rollstühlen, Gehhilfen und speziell angepassten Fahrzeugen. Unsere Assistenzkräfte unterstützen Sie bei der Fortbewegung und der Nutzung öffentlicher Verkehrsmittel, um Ihre Selbstständigkeit zu fördern."
  },
  {
    question: "Wie unterstützt Infinity Plus bei Arbeit und Bildung?",
    answer: "Unsere Assistenzkräfte helfen Ihnen bei der Anfertigung von Notizen, physischen Anpassungen und begleiten Sie zur Schule oder Universität. Am Arbeitsplatz unterstützen wir Sie bei allen Aktivitäten, um eine reibungslose Arbeitsausführung zu gewährleisten."
  },
  {
    question: "Welche hauswirtschaftlichen Unterstützungen bietet Infinity Plus?",
    answer: "Wir helfen Ihnen bei Hausarbeiten, Einkäufen und der Zubereitung von Mahlzeiten. Unsere Assistenzkräfte sorgen dafür, dass Ihre Wohnung sauber bleibt und Sie regelmäßig gesunde Mahlzeiten erhalten."
  },
  {
    question: "Was ist Eingliederungshilfe und wie unterstützt Infinity Plus hierbei?",
    answer: "Eingliederungshilfe zielt darauf ab, Menschen mit Behinderung die Teilhabe am gesellschaftlichen Leben zu ermöglichen. Infinity Plus hilft Ihnen, die notwendigen Anträge zu stellen und die beste Unterstützung zu erhalten."
  },
  {
    question: "Wie wähle ich die richtigen Assistenten aus?",
    answer: "Wir stellen sicher, dass die Zusammenstellung des Teams Ihren Bedürfnissen entspricht. Dabei legen wir großen Wert auf die Sympathie zwischen Assistenznehmer*innen und Assistenzkräfte, um eine angenehme Zusammenarbeit zu gewährleisten."
  },
  {
    question: "Welche Qualifikationen haben die Assistenten bei Infinity Plus?",
    answer: "Unsere Assistenzkräfte sind qualifizierte Fachkräfte, die durch ihre Empathie, Professionalität und Zuverlässigkeit überzeugen. Sie sind bestens geschult, um Ihnen die notwendige Unterstützung zu bieten."
  },
  {
    question: "Kann ich meine eigenen Assistenten*in mitbringen?",
    answer: "Ja, Sie können auch Assistenzkräfte aus Ihrem Bekanntenkreis wählen. Wir unterstützen Sie dabei, ein Team zusammenzustellen, das Ihren individuellen Bedürfnissen entspricht."
  },
  {
    question: "Wie flexibel sind die Assistenzleistungen von Infinity Plus?",
    answer: "Wir bieten flexible Einsatzmöglichkeiten, die sich nach Ihren individuellen Wünschen und Anforderungen richten. Unsere Assistenzkräfte sind darauf vorbereitet, sich an wechselnde Bedürfnisse anzupassen."
  },
  {
    question: "Wie organisiert Infinity Plus die Assistenzleistungen?",
    answer: "Wir übernehmen die gesamte Koordination und Verwaltung Ihrer Assistenzleistungen. Von der Erstellung von Dienstplänen bis hin zur Bürokratie – wir kümmern uns um alles, damit Sie sich auf Ihr selbstbestimmtes Leben konzentrieren können."
  },
  {
    question: "Welche Kosten sind mit den Assistenzleistungen verbunden?",
    answer: "Die Kosten für Assistenzleistungen variieren je nach Art und Umfang der Unterstützung. Wir beraten Sie ausführlich über die Finanzierungsmöglichkeiten, einschließlich des persönlichen Budgets und der Sachleistungen."
  },
  {
    question: "Wie kann ich Infinity Plus kontaktieren?",
    answer: "Sie können uns telefonisch, per E-Mail oder über unser Kontaktformular auf der Website erreichen. Wir stehen Ihnen gerne für eine persönliche Beratung zur Verfügung."
  },
  {
    question: "Wie schnell kann ich Unterstützung von Infinity Plus erhalten?",
    answer: "Nach der Kontaktaufnahme und einer ausführlichen Beratung erstellen wir schnellstmöglich einen individuellen Unterstützungsplan, damit Sie die notwendige Assistenz erhalten."
  },
  {
    question: "Bietet Infinity Plus auch kurzfristige Unterstützung an?",
    answer: "Ja, wir bieten auch kurzfristige Unterstützung an. Unsere flexiblen Assistenten stehen bereit, um Ihnen in Notfällen oder bei kurzfristigen Bedürfnissen zu helfen."
  },
  {
    question: "Wie wird die Qualität der Assistenzleistungen bei Infinity Plus sichergestellt?",
    answer: "Durch kontinuierliche Weiterbildung und regelmäßige Teammeetings stellen wir sicher, dass unsere Assistenzkräfte stets auf dem neuesten Stand sind und Ihnen die bestmögliche Unterstützung bieten."
  },
  {
    question: "Kann ich die Assistenzleistungen von Infinity Plus testen?",
    answer: "Ja, wir bieten Ihnen die Möglichkeit, unsere Dienstleistungen in einem unverbindlichen Erstgespräch kennenzulernen. So können Sie sich von der Qualität unserer Assistenz überzeugen."
  },
  {
    question: "Unterstützt Infinity Plus auch bei Freizeitaktivitäten?",
    answer: "Ja, unsere Assistenzkräfte begleiten Sie bei Veranstaltungen, Ausflügen, Hobbys oder Reisen. Wir möchten, dass Sie Ihre Freizeit aktiv und selbstbestimmt gestalten können."
  },
  {
    question: "Wie kann ich sicher sein, dass meine Daten bei Infinity Plus geschützt sind?",
    answer: "Wir legen großen Wert auf den Schutz Ihrer persönlichen Daten und halten uns strikt an die Datenschutzbestimmungen. Ihre Daten werden vertraulich behandelt und nur für die Erbringung der Assistenzleistungen verwendet."
  },
];

const FAQItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="w-full border-b bg-orange-400/20  rounded-xl last:border-b-0">
      <button
        className="w-full flex justify-between items-center text-left py-5 mt-4 px-6 focus:outline-none focus-visible:ring focus-visible:ring-orange-400 focus-visible:ring-opacity-75 transition-colors hover:bg-orange-400/20 hover:text-white rounded-lg"
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
          <h2 className="mx-8 md:mx-72 text-5xl font-semibold text-gray-900 ">
            Hilfreiche Antworten auf Ihre Fragen zu Infinity Plus
          </h2>
          {/* <p className="mt-4 text-lg text-gray-600">
           Hilfreiche Antworten auf Ihre Fragen zu Infinity Plus
            </p> */}
        </div>

        <div className="max-w-5xl mx-auto mt-8 space-y-1  rounded-xl  p-2 sm:p-4 md:mt-12">
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
