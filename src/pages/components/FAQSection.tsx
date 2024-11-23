import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What is DevFest Ogbomoso?',
    answer: 'DevFest Ogbomoso is a community-led developer conference focused on community building and learning about Google\'s technologies.'
  },
  {
    question: 'When and where is it happening?',
    answer: 'DevFest Ogbomoso 2024 will take place on November 15-16, 2024, at the Landmark Event Center, Ogbomoso.'
  },
  {
    question: 'Who can attend?',
    answer: 'DevFest is open to anyone interested in technology, from students to professional developers, designers, and tech enthusiasts.'
  },
  {
    question: 'What should I bring?',
    answer: 'Bring your laptop, charger, and an open mind ready to learn and connect with fellow developers!'
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 text-black">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 text-black bg-transparent border border-gray-200 rounded-full text-sm mb-4">
            FAQ
          </span>
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers. If you don't find what you're looking for,
            feel free to reach out to our team.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 bg-white rounded-xl text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 flex-shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-white border-t">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}