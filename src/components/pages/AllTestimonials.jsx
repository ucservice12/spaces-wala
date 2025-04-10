// components/Testimonials.tsx
"use client";

const testimonials = [
    {
        name: "Padma",
        location: "Owner Tellapur, Telangana",
        avatar: "/assets/testimonial/user-10.avif",
        feedback: `We posted our 2.5 bhk on rent in 3,4 rental estate platforms. To my surprise all of them are down with so many glitches and unfriendly user interface and deeply commercial. It was not the case earlier.
                    Among all of them 99acres is much better. Website allows us edit the flat description and more amenities. Less promotional calls. Whatever few calls received from prospective tenants are from 99acres.`,
    },
    {
        name: "Anupam Jain",
        location: "Owner DLF Phase 2, Gurugram",
        avatar: "/assets/testimonial/user-1.avif",
        feedback: `99 acre worked well for us, will give future property to them for post.Anupam Jain`,
    },
];

export default function AllTestimonials() {
    return (
        <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-5xl mx-auto space-y-10">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg p-6 shadow border relative"
                    >
                        <div className="absolute top-4 left-4 text-yellow-400 text-3xl">
                            <span className="text-4xl">“</span>
                        </div>
                        <div className="pl-10 pt-2 flex items-center gap-4">
                            <img
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                width={40}
                                height={40}
                                className="rounded-full border"
                            />
                            <div>
                                <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                                <p className="text-sm text-gray-500">{testimonial.location}</p>
                            </div>
                        </div>
                        <p className="mt-4 pl-10 whitespace-pre-line text-gray-700">
                            {testimonial.feedback}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
