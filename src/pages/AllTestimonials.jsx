import { Small, TypographyMuted, Paragraph } from "@/custom/Typography";
import { CgQuote } from 'react-icons/cg';
import NavigateSloter from "@/components/NavigateSloter";
import { testimonials } from '@/components/landing-page/Testimonial';
import { Card } from '@/components/ui/card'
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function AllTestimonials() {
    const location = useLocation();
    const scrollToIndex = location.state?.scrollToIndex;
    const cardRefs = useRef([]);

    useEffect(() => {
        if (
            typeof scrollToIndex === "number" &&
            cardRefs.current[scrollToIndex]
        ) {
            cardRefs.current[scrollToIndex].scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }
    }, [scrollToIndex]);

    return (
        <div className="max-w-4xl my-24 mx-auto px-6">
            <NavigateSloter img='/assets/testimonial.png' headline='Testimonial' />
            <div className="grid gap-8">
                {testimonials.map((testimonial, idx) => (
                    <Card ref={(el) => (cardRefs.current[idx] = el)} key={idx} className="relative sm:p-6 p-4 border hover:scale-105 transition-all cursor-pointer rounded-lg">
                        <div className="absolute -top-4 left-4 bg-secondary rounded-full p-1 shadow">
                            <CgQuote className="text-yellow-500 w-6 h-6" />
                        </div>

                        <div className="flex items-center gap-4">
                            <img
                                src={testimonial?.image}
                                alt={testimonial?.name}
                                className="w-10 h-10 rounded-full object-cover border"
                                onError={(e) => {
                                    e.target.src = `https://ui-avatars.com/api/?name=${testimonial?.name}&background=random`;
                                }}
                            />
                            <div>
                                <Small>
                                    {testimonial?.name}
                                </Small>
                                <TypographyMuted className="text-xs">
                                    {testimonial?.designation}, {testimonial?.city}
                                </TypographyMuted>
                            </div>
                        </div>

                        {/* Message */}
                        <p className="leading-7 text-xs">
                            {testimonial?.message}
                        </p>
                    </Card>
                ))}
            </div>
        </div>
    )
}
