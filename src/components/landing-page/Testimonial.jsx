import React, { useState, useEffect } from "react";
import { Small, TypographyMuted } from "@/custom/Typography";
import Headline from "@/custom/Headline";
import { FaStar, FaRegStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Ravi Sharma",
    city: "Hyderabad",
    message: "SpacesWala helped me find my dream 3BHK apartment with ease. Highly recommended!",
    image: "/assets/testimonial/user-4.avif",
    rating: 5,
  },
  {
    name: "Anjali Mehta",
    city: "Pune",
    message: "Professional and transparent service. The team is knowledgeable and supportive.",
    image: "/assets/testimonial/user-5.avif",
    rating: 4,
  },
  {
    name: "Vikram Desai",
    city: "Mumbai",
    message: "I moved into my new home last month. The entire process was smooth, thanks to SpacesWala.",
    image: "/assets/testimonial/user-3.avif",
    rating: 4,
  },
  {
    name: "Priya Kapoor",
    city: "Kolkata",
    message: "As a first-time buyer, I was nervous. But their expert advice made it simple.",
    image: "/assets/testimonial/user-2.avif",
    rating: 5,
  },
  {
    name: "Aditya Rao",
    city: "Bangalore",
    message: "Top-notch listings, excellent support. I'm very satisfied with the service.",
    image: "/assets/testimonial/user-1.avif",
    rating: 5,
  },
  {
    name: "Neha Gupta",
    city: "Delhi",
    message: "I was amazed by how quickly I found a home through them!",
    image: "/assets/testimonial/user-6.avif",
    rating: 4,
  },
  {
    name: "Rohan Verma",
    city: "Ahmedabad",
    message: "Very courteous and professional service throughout.",
    image: "/assets/testimonial/user-9.avif",
    rating: 3,
  },
  {
    name: "Shruti Agarwal",
    city: "Jaipur",
    message: "I loved their collection of properties and quick response.",
    image: "/assets/testimonial/user-7.avif",
    rating: 4,
  },
  {
    name: "Kunal Singh",
    city: "Lucknow",
    message: "Great experience with great people.",
    image: "/assets/testimonial/user-10.avif",
    rating: 5,
  },
  {
    name: "Divya Nair",
    city: "Chennai",
    message: "They made my first home-buying experience very pleasant.",
    image: "/assets/testimonial/user-8.avif",
    rating: 4,
  },
];

export default function Testimonial() {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      setItemsPerPage(width < 640 ? 1 : 3);
    };
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => {
        const nextIndex = prev + itemsPerPage;
        return nextIndex >= testimonials.length ? 0 : nextIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [itemsPerPage]);

  const currentTestimonials = testimonials.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <>
      <div className="text-center mb-8">
        <Headline smallHeadline="Testimonial" headline="What Our Clients Say" />
      </div>

      <div className="relative flex items-center justify-between">
        <AnimatePresence mode="wait">
          <motion.div
            key={startIndex}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className={`grid gap-6 mx-auto w-full ${itemsPerPage === 1 ? "grid-cols-1" : "grid-cols-3"
              }`}
          >
            {currentTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="border rounded-xl p-6 transition-transform duration-500 hover:scale-105 cursor-pointer ease-in-out bg-white dark:bg-gray-900"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <Small>{testimonial.name}</Small>
                    <TypographyMuted className="text-xs">
                      {testimonial.city}
                    </TypographyMuted>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, starIndex) =>
                        starIndex < testimonial.rating ? (
                          <FaStar
                            key={starIndex}
                            className="text-yellow-400 mr-1"
                            size={14}
                          />
                        ) : (
                          <FaRegStar
                            key={starIndex}
                            className="text-gray-300 mr-1"
                            size={14}
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
                <blockquote className="mt-4 italic text-sm text-gray-700 dark:text-gray-300">
                  “{testimonial.message}”
                </blockquote>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({
          length: Math.ceil(testimonials.length / itemsPerPage),
        }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setStartIndex(idx * itemsPerPage)}
            className={`w-3 h-3 rounded-full transition-colors ${startIndex / itemsPerPage === idx
                ? "bg-blue-600"
                : "bg-gray-300"
              }`}
          ></button>
        ))}
      </div>
    </>
  );
}
