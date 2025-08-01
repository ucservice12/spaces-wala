import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How secure is SpacesWala for rent payments?",
      answer: "SpacesWala ensures 100% secure rent payments, with transactions powered by Razorpay. All transactions are secure and encrypted, and the platform does not store any confidential information. An instant message is sent to the owner upon payment, and the rent is transferred within one day, ensuring a safe and seamless experience."
    },
    {
      question: "What details are required to pay rent via a credit card?",
      answer: "To pay rent via credit card, you need to provide rent amount, landlord's name, landlord's bank account details, landlord's phone number, PAN (optional), credit card details."
    },
    {
      question: "How long does it take to transfer rent to the landlord?",
      answer: "The rent amount is transferred within 24 hours after successful payment."
    },
    {
      question: "Can I pay rent through SpacesWala if my landlord is not registered?",
      answer: "Yes, you can pay rent even if your landlord is not registered on SpacesWala. You only need to enter their bank account details to complete the payment."
    },
    {
      question: "How do I earn rewards or cashback when paying rent?",
      answer: "By paying rent with a credit card on SpacesWala, you can earn reward points from your bank, cashback offers, airmiles, and exclusive deals from partnered brands. Credit Card rewards vary bank to bank. You can contact your bank to understand exactly how much you can expect when you spend your money online."
    },
    {
      question: "Are there any charges for using SpacesWala to pay rent?",
      answer: "Yes, a nominal convenience fee is applicable for rent payments. The final payment page will reflect the amount transferred along with the applicable charges."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-900 text-white"> {/* Changed background from bg-black to bg-gray-900 */}
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="w-full bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-8 text-left hover:bg-gray-800/80 transition-all duration-300 group" // These are already good for a dark theme
                onClick={() => toggleFAQ(index)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold pr-4 text-white group-hover:text-primary transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-primary" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors duration-300" /> 
                    )}
                  </motion.div>
                </div>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-gray-700/30 mt-4"> {/* Border color is good for dark theme */}
                        <p className="text-gray-300 leading-relaxed"> {/* Text color is good for dark theme */}
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;