import { FaRegHeart } from "react-icons/fa6";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Small, TypographyH3, TypographyMuted } from "../../custom/Typography";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export const properties = [
    {
        title: "Hivision Heights",
        bhk: "2, 3, 4 BHK Apartment",
        location: "Kompally, Hyderabad",
        price: "₹ 79.23 L - 1.4 Cr",
        rera: "RERA | HIRA",
        img: "/assets/projects/img-1.jpg"
    },
    {
        title: "Siddha Suburbia",
        bhk: "1, 2, 3 BHK Apartment",
        location: "Baruipur, Kolkata South",
        price: "₹ 44.69 - 69.42 L",
        rera: "RERA | HIRA",
        img: "/assets/projects/img-2.jpg"
    },
    {
        title: "Rishi Ventoso Phase 2",
        bhk: "2, 3 BHK Apartment",
        location: "Madhyamgram, Kolkata",
        price: "₹ 48.81 - 80.19 L",
        rera: "RERA | HIRA",
        img: "/assets/projects/img-3.jpg"
    },
    {
        title: "The V",
        bhk: "3, 4 BHK Apartment",
        location: "New Town, Kolkata",
        price: "₹ 2.5 - 5 Cr",
        rera: "RERA",
        img: "/assets/projects/img-4.jpg"
    },
    {
        title: "Ultima Crest",
        bhk: "3 BHK Apartment",
        location: "Waghodia Road, Vadodara",
        price: "₹ 57 L",
        rera: "RERA",
        img: "/assets/projects/img-5.jpg"
    },
    {
        title: "Jains Fairmount Sri Ram Garden 2",
        bhk: "3, 4 BHK Apartment",
        location: "Kompally, Hyderabad",
        price: "₹ 1.29 - 1.88 Cr",
        rera: "RERA",
        img: "/assets/projects/img-6.png"
    },
    {
        title: "VTP Bellissimo",
        bhk: "1, 2, 3 BHK Apartment",
        location: "Hinjewadi, Pune",
        price: "₹ 69.19 L - 2.18 Cr",
        rera: "RERA",
        img: "/assets/projects/img-7.jpg"
    },
    {
        title: "AcreRise Aura",
        bhk: "2, 3 BHK Apartment",
        location: "Trisulia, Cuttack",
        price: "₹ 52.8 - 73.02 L",
        rera: "RERA",
        img: "/assets/projects/img-8.jpg"
    },
    {
        title: "Uttarayan Prakriti",
        bhk: "2, 3 BHK Apartment",
        location: "Na Ali, Jorhat",
        price: "₹ 46.51 - 60.12 L",
        rera: "RERA",
        img: "/assets/projects/img-9.jpg"
    },
    {
        title: "JIVA Panda Gatikrushna Green",
        bhk: "3 BHK Apartment",
        location: "Ranga Bazar, Bhubaneswar",
        price: "₹ 98.12 L - 1.07 Cr",
        rera: "RERA | HIRA",
        img: "/assets/projects/img-10.png"
    },
    {
        title: "Tattvam",
        bhk: "2, 3, 4, 5 BHK Apartment",
        location: "Manicktala, Kolkata North",
        price: "₹ 97 L - 2.88 Cr",
        rera: "RERA",
        img: "/assets/projects/img-11.jpg"
    },
    {
        title: "Ajit Oro Atlantis",
        bhk: "2, 3 BHK Apartment",
        location: "Jankipuram, Lucknow",
        price: "₹ 62.03 - 85.13 L",
        rera: "RERA",
        img: "/assets/projects/img-12.jpg"
    },
    {
        title: "GK Raj Casa Grande",
        bhk: "3, 4 BHK Apartment",
        location: "Yapral, Secunderabad",
        price: "₹ 1.36 - 1.83 Cr",
        rera: "RERA",
        img: "/assets/projects/img-13.jpg"
    },
    {
        title: "Radha Madhav Vrindavan",
        bhk: "1, 2, 3, 4, 6 BHK Apartment",
        location: "Jamtha, Nagpur",
        price: "₹ 19.43 - 84 L",
        rera: "RERA",
        img: "/assets/projects/img-14.jpg"
    },
    {
        title: "Anand Avyam",
        bhk: "3, 4 BHK Apartment",
        location: "Thaltej, Ahmedabad",
        price: "₹ 1.5 - 2.75 Cr",
        rera: "RERA",
        img: "/assets/projects/img-15.jpg"
    },
    {
        title: "Srijan Heights",
        bhk: "3, 4, 5 BHK Apartment",
        location: "Dobo, Jamshedpur",
        price: "₹ 1.25 - 3.27 Cr",
        rera: "RERA | HIRA",
        img: "/assets/projects/img-16.jpg"
    },
    {
        title: "DTC Capital City",
        bhk: "2, 3, 4 BHK Apartment",
        location: "Rajarhat, Kolkata",
        price: "₹ 51 L - 1.07 Cr",
        rera: "RERA",
        img: "/assets/projects/img-17.jpg"
    },
    {
        title: "Svadha Mackennas",
        bhk: "2, 3 BHK Apartment",
        location: "Kollur, Hyderabad",
        price: "₹ 83.69 L - 1.57 Cr",
        rera: "RERA",
        img: "/assets/projects/img-18.jpg"
    },
    {
        title: "Aanandam",
        bhk: "2, 3 BHK Apartment",
        location: "Borkhera, Kota",
        price: "₹ 35 - 58.91 L",
        rera: "RERA",
        img: "/assets/projects/img-2.jpg"
    },
    {
        title: "Kamaxi Avenue",
        bhk: "3, 4 BHK Apartment",
        location: "Waghodia Road, Vadodara",
        price: "₹ 49 - 61 L",
        rera: "RERA",
        img: "/assets/projects/img-1.jpg"
    }
];

export default function Projects() {
    const controls = useAnimation();
    const scrollRef = useRef < HTMLDivElement > (null);
    // Duplicate cards for looping
    const extendedProperties = [...properties, ...properties];

    useEffect(() => {
        controls.start({
            x: "-50%",
            transition: {
                duration: 50,
                ease: "linear",
                repeat: Infinity,
            },
        });
    }, [controls]);

    return (
        <div className="my-10 flex flex-col justify-center">
            <TypographyH3>Projects in High Demand</TypographyH3>
            <TypographyMuted>The most explored projects in India</TypographyMuted>

            <div
                className="overflow-hidden mt-6 group relative"
                onMouseEnter={() => controls.stop()}
                onMouseLeave={() =>
                    controls.start({
                        x: "-50%",
                        transition: {
                            duration: 50,
                            ease: "linear",
                            repeat: Infinity,
                        },
                    })
                }
            >
                <ScrollArea className="w-full">
                    <motion.div
                        className="flex gap-6 w-max py-4"
                        animate={controls}
                        ref={scrollRef}
                        initial={{ x: 0 }}
                    >
                        {extendedProperties.map((property, index) => (
                            <div key={index} className="min-w-64">
                                <div className="w-64 h-38 cursor-pointer relative">
                                    <img
                                        src={property.img}
                                        loading="lazy"
                                        className="w-full h-full hover:scale-105 transition-all duration-500 rounded-md object-cover"
                                        alt={property.title}
                                    />
                                    <label className="text-[10px] font-semibold text-white px-2 bg-[#239c94] absolute top-4">
                                        {property.rera}
                                    </label>
                                    <span className="absolute top-4 right-2">
                                        <FaRegHeart size={20} color="white" />
                                    </span>
                                </div>
                                <div className="grid gap-2 mt-4">
                                    <Small className="font-semibold">{property.title}</Small>
                                    <TypographyMuted className="text-xs font-semibold text-wrap">
                                        {property.bhk}, {property.location}
                                    </TypographyMuted>
                                    <Small>{property.price}</Small>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </ScrollArea>
            </div>

            <div className="flex justify-end mt-2">
                <button className="border border-[#239c94] hover:border-none hover:bg-[#239c94] hover:text-white duration-200 px-3 py-2 rounded-md cursor-pointer text-xs font-semibold">
                    See More Projects
                </button>
            </div>
        </div>
    );
}