import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Venkata Srihari",
      location: "Hyderabad",
      profession: "Software Engineer",
      rating: 4.7,
      text: "I didn't expect that moment, I'm so happy to say that I'm a lucky person. It is a very nice app to pay rent, maintenance, office charges, etc., securely.",
      avatar: "VS"
    },
    {
      name: "Medchal Devendhar",
      location: "Nizamabad",
      profession: "Medical Representative",
      rating: 4.7,
      text: "I'm very happy I won the jackpot ₹9,999. It is real. At first, I couldn't believe it, but I got the amount in my bank. It's safe and useful.",
      avatar: "MD"
    },
    {
      name: "Hariharan",
      location: "Tiruppur",
      profession: "Travels",
      rating: 4.7,
      text: "It is real. It's a good app, this SpacesWala app helped me so many times. I like to use this app, I love it.",
      avatar: "H"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-black-400 text-white"> {/* Changed background to black and text to white */}
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by millions. Join them today!
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold">4.7</span>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl">
            <motion.div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <motion.div 
                    className="bg-gray-900 border border-white-200 rounded-xl p-8 text-center" // Adjusted background and border for dark theme
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="relative mb-6">
                      <Quote className="w-12 h-12 text-primary/30 mx-auto mb-4" />
                      <p className="text-lg leading-relaxed text-gray-300 italic"> {/* Adjusted text color for dark theme */}
                        "{testimonial.text}"
                      </p>
                    </div>

                    <div className="flex items-center justify-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {testimonial.avatar}
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold text-lg text-white">{testimonial.name}</h4> {/* Ensured text is white */}
                        <p className="text-gray-300 text-sm"> {/* Adjusted text color for dark theme */}
                          {testimonial.location} | {testimonial.profession}
                        </p>
                        <div className="flex items-center gap-1 mt-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          ))}
                          <span className="text-sm text-gray-300 ml-1"> {/* Adjusted text color for dark theme */}
                            {testimonial.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-gray-700/30 hover:bg-gray-700/50' // Adjusted dot colors for dark theme
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;