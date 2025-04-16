import React, { useState, useEffect, useRef } from "react";
import { Small, TypographyMuted, TypographyH4 } from "@/custom/Typography";
import Headline from "@/custom/Headline";
import { Card } from '@/components/ui/card'
import { FaStar, FaRegStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { IoStar, IoStarOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

// Testimonials data
export const testimonials = [
  {
    name: "Ravi Sharma",
    city: "Hyderabad",
    designation: "Home Buyer – IT Professional",
    message:
      "SpacesWala helped me find my dream 3BHK apartment with zero hassle. Their team was always available and answered all my questions with clarity. The property listings were genuine and well-curated. I especially appreciated the transparency in pricing. Highly recommended for anyone serious about real estate!",
    image: "/assets/testimonial/user-4.avif",
    rating: 5,
  },
  {
    name: "Anjali Mehta",
    city: "Pune",
    designation: "Investor – Real Estate Enthusiast",
    message:
      "Professional and transparent service from start to finish. I’ve worked with several portals, but SpacesWala stands out for its attention to detail. Their support team helped me shortlist rental properties that fit my investment goals. Every step was seamless, from virtual tours to documentation.",
    image: "/assets/testimonial/user-5.avif",
    rating: 4,
  },
  {
    name: "Vikram Desai",
    city: "Mumbai",
    designation: "Tenant – Marketing Consultant",
    message:
      "I moved into my new rental apartment last month through SpacesWala. The listings were accurate, and I found exactly what I was looking for. Their team was quick to respond and scheduled visits efficiently. It’s rare to find a platform that balances speed and professionalism so well.",
    image: "/assets/testimonial/user-3.avif",
    rating: 4,
  },
  {
    name: "Priya Kapoor",
    city: "Kolkata",
    designation: "First-time Buyer – Finance Analyst",
    message:
      "As a first-time buyer, I was overwhelmed with the process. SpacesWala's expert advisors guided me through every stage. They explained the loan process, legal documentation, and even helped with interior references. I couldn’t have asked for a better property partner.",
    image: "/assets/testimonial/user-2.avif",
    rating: 5,
  },
  {
    name: "Aditya Rao",
    city: "Bangalore",
    designation: "Property Owner – Tech Entrepreneur",
    message:
      "Top-notch property listings and excellent backend support. I listed my villa with SpacesWala and received quality leads within a few days. Their interface is intuitive, and the onboarding was smooth. If you're a serious seller or buyer, this is the platform to trust.",
    image: "/assets/testimonial/user-1.avif",
    rating: 5,
  },
  {
    name: "Neha Gupta",
    city: "Delhi",
    designation: "Relocator – HR Manager",
    message:
      "I was amazed by how quickly I found a spacious 2BHK apartment. The photos matched reality, and their consultants gave great insights into localities. I appreciated how they helped me avoid overpriced listings. Truly a one-stop solution for property hunters.",
    image: "/assets/testimonial/user-6.avif",
    rating: 4,
  },
  {
    name: "Rohan Verma",
    city: "Ahmedabad",
    designation: "Landlord – Business Owner",
    message:
      "Very courteous and professional service from the team. I listed my rental flat and was pleasantly surprised by the prompt tenant inquiries. They even helped me draft a clean rental agreement. Highly recommend SpacesWala for property owners.",
    image: "/assets/testimonial/user-9.avif",
    rating: 3,
  },
  {
    name: "Shruti Agarwal",
    city: "Jaipur",
    designation: "Property Seeker – Freelance Designer",
    message:
      "I loved their curated collection of well-verified properties. I was looking for a home with specific design elements, and their filter options were very helpful. The team even scheduled video walkthroughs for shortlisted flats. Very responsive and genuine.",
    image: "/assets/testimonial/user-7.avif",
    rating: 4,
  },
  {
    name: "Kunal Singh",
    city: "Lucknow",
    designation: "Commercial Buyer – Retail Manager",
    message:
      "Great experience from initial inquiry to final registration. I was buying a commercial shop space, and SpacesWala's team made it a breeze. They connected me with legal help and ensured no hidden charges. Very trustworthy real estate platform.",
    image: "/assets/testimonial/user-10.avif",
    rating: 5,
  },
  {
    name: "Divya Nair",
    city: "Chennai",
    designation: "Home Buyer – Educator",
    message:
      "They made my first home-buying experience very pleasant. From site visits to handling documentation, everything was taken care of. I especially liked how honest they were about pros and cons of each locality. It felt like dealing with a friend, not just a company.",
    image: "/assets/testimonial/user-8.avif",
    rating: 4,
  },
];

export default function Testimonial() {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const Navigate = useNavigate();

  const ratingText = ["Poor", "Fair", "Average", "Good", "Excellent"];

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
      if (!isHovered) {
        setStartIndex((prev) => {
          const next = prev + itemsPerPage;
          return next >= testimonials.length ? 0 : next;
        });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [itemsPerPage, isHovered]);

  const currentTestimonials = testimonials.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <>
      <div className="text-center mb-8">
        <Headline
          smallHeadline="Testimonial"
          headline="What Our Clients Say"
        />
      </div>

      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        ref={containerRef}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={startIndex}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className={`grid gap-6 transition-all duration-500 ease-in-out ${itemsPerPage === 1 ? "grid-cols-1" : "grid-cols-3"
              }`}
          >
            {currentTestimonials.map((testimonial, index) => (
              <Card
                onClick={() => Navigate('/testimonials', {
                  state: { scrollToIndex: startIndex + index }
                })}
                key={index}
                className="my-10 cursor-pointer p-6 transition-transform duration-500 hover:scale-105"
              >
                <div className="flex items-center gap-4">
                  <img
                    loading="lazy"
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <Small>{testimonial.name}</Small>
                    <TypographyMuted className="text-xs">
                      {testimonial?.designation}, {testimonial.city}
                    </TypographyMuted>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) =>
                        i < testimonial.rating ? (
                          <FaStar
                            key={i}
                            className="text-yellow-400 mr-1"
                            size={14}
                          />
                        ) : (
                          <FaRegStar
                            key={i}
                            className="text-gray-300 mr-1"
                            size={14}
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
                <blockquote className="mt-4 italic text-xs leading-5 line-clamp-3">
                  “{testimonial.message}”
                </blockquote>
              </Card>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({
          length: Math.ceil(testimonials.length / itemsPerPage),
        }).map((_, i) => (
          <button
            key={i}
            onClick={() => setStartIndex(i * itemsPerPage)}
            className={`w-3 h-3 rounded-full transition-colors ${startIndex / itemsPerPage === i
              ? "bg-blue-600"
              : "bg-gray-300"
              }`}
          ></button>
        ))}
      </div>

      {/* Rating Section */}
      <div className="bg-[#fde2cf] rounded-md max-w-2xl mx-auto p-6 my-8 relative h-[200px] grid grid-cols-2 gap-4">
        <div>
          <img
            src="/assets/ReviewAvatar.png"
            alt="avatar"
            className="w-42 absolute bottom-0 left-0 sm:left-8"
          />
        </div>
        <div className="grid gap-4 items-center">
          <TypographyH4 className="dark:text-primary-foreground sm:text-xl text-xs">
            How would you rate your locality / society?
          </TypographyH4>
          <div className="flex items-center space-x-1 sm:space-x-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                onMouseEnter={() => setHoverRating(i)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => {
                  setRating(i);
                  Navigate('/feedback');
                }}
                className="relative flex flex-col items-center cursor-pointer"
              >
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {hoverRating >= i || rating >= i ? (
                    <IoStar size={24} className="text-yellow-500" />
                  ) : (
                    <IoStarOutline size={24} className="text-yellow-500" />
                  )}
                </motion.div>
                {hoverRating === i && (
                  <motion.p
                    className="text-xs font-bold text-center mt-4 text-black"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {ratingText[i - 1]}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
