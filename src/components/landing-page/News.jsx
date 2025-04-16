import Headline from "@/custom/Headline";
import { BsPatchCheck } from "react-icons/bs";
import { MdLocalOffer } from "react-icons/md";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { TypographyH4, TypographyMuted, TypographyH5, Small, TypographyP } from "@/custom/Typography";
import { useEffect, useState } from "react";

export const NewlyPropertyData = [
    {
        title: "NEW ARRIVAL",
        name: "Assotech World Avenue 07",
        location: "Hanspal, Bhubaneswar",
        priceRange: "₹ 1.54 - 2.04 Cr",
        propertyType: "3 BHK Apartment",
        priceIncrease: "7.3% price increase in last 3 months in Hanspal, Bhubaneswar",
        offer: "Get preferred options @zero brokerage",
        rera: true,
        img: '/assets/projects/img-1.jpg'
    },
    {
        title: "NEW LAUNCH",
        name: "Sarang by Sumadhura Phase 1",
        location: "Doddabanahalli, Near KR Puram, Bangalore",
        priceRange: "₹ 1.73 - 2.75 Cr",
        propertyType: "3, 4 BHK Apartment",
        priceIncrease: "7.6% price increase in last 3 months in Doddabanahalli, Near KR Puram, Bangalore",
        offer: "Get preferred options @zero brokerage",
        rera: true,
        img: '/assets/projects/img-16.jpg'
    },
    {
        title: "NEW ARRIVAL",
        name: "Euphoria Residency",
        location: "Koramangala, Bangalore",
        priceRange: "₹ 80 L - 1.1 Cr",
        propertyType: "2 BHK Apartment",
        priceIncrease: "5.1% price increase in last 3 months in Koramangala, Bangalore",
        offer: "Get preferred options @zero brokerage",
        rera: true,
        img: '/assets/projects/img-3.jpg'
    },
    {
        title: "NEW LAUNCH",
        name: "The Heights",
        location: "Whitefield, Bangalore",
        priceRange: "₹ 1.2 - 1.8 Cr",
        propertyType: "3 BHK Apartment",
        priceIncrease: "6.8% price increase in last 3 months in Whitefield, Bangalore",
        offer: "Get preferred options @zero brokerage",
        rera: true,
        img: '/assets/projects/img-4.jpg'
    },
    {
        title: "NEW ARRIVAL",
        name: "Pristine Towers",
        location: "Madhapur, Hyderabad",
        priceRange: "₹ 1.6 - 2.2 Cr",
        propertyType: "4 BHK Apartment",
        priceIncrease: "8.2% price increase in last 3 months in Madhapur, Hyderabad",
        offer: "Get preferred options @zero brokerage",
        rera: true,
        img: '/assets/projects/img-5.jpg'
    },
    {
        title: "NEW LAUNCH",
        name: "Palm Residency",
        location: "Whitefield, Bangalore",
        priceRange: "₹ 1.5 - 2.1 Cr",
        propertyType: "3 BHK Apartment",
        priceIncrease: "6.5% price increase in last 3 months in Whitefield, Bangalore",
        offer: "Get preferred options @zero brokerage",
        rera: true,
        img: '/assets/projects/img-6.png'
    },
    {
        title: "NEW ARRIVAL",
        name: "Apex Towers",
        location: "Banjara Hills, Hyderabad",
        priceRange: "₹ 2.0 - 2.6 Cr",
        propertyType: "3, 4 BHK Apartment",
        priceIncrease: "7.0% price increase in last 3 months in Banjara Hills, Hyderabad",
        offer: "Get preferred options @zero brokerage",
        rera: true,
        img: '/assets/projects/img-7.jpg'
    },
    {
        title: "NEW LAUNCH",
        name: "Greenwood Heights",
        location: "Sarjapur, Bangalore",
        priceRange: "₹ 1.4 - 2.0 Cr",
        propertyType: "3 BHK Apartment",
        priceIncrease: "6.9% price increase in last 3 months in Sarjapur, Bangalore",
        offer: "Get preferred options @zero brokerage",
        rera: true,
        img: '/assets/projects/img-8.jpg'
    },
    {
        title: "NEW ARRIVAL",
        name: "Blue Sky Residency",
        location: "Madhapur, Hyderabad",
        priceRange: "₹ 1.0 - 1.5 Cr",
        propertyType: "2 BHK Apartment",
        priceIncrease: "4.8% price increase in last 3 months in Madhapur, Hyderabad",
        offer: "Get preferred options @zero brokerage",
        rera: true,
        img: '/assets/projects/img-9.jpg'
    },
    {
        title: "NEW LAUNCH",
        name: "Urban View",
        location: "Jubilee Hills, Hyderabad",
        priceRange: "₹ 2.2 - 2.8 Cr",
        propertyType: "3 BHK Apartment",
        priceIncrease: "6.2% price increase in last 3 months in Jubilee Hills, Hyderabad",
        offer: "Get preferred options @zero brokerage",
        rera: true,
        img: '/assets/projects/img-10.png'
    },
    {
        title: "NEW ARRIVAL",
        name: "Serenity Heights",
        location: "Vijayanagar, Bangalore",
        priceRange: "₹ 1.0 - 1.5 Cr",
        propertyType: "2 BHK Apartment",
        priceIncrease: "5.3% price increase in last 3 months in Vijayanagar, Bangalore",
        offer: "Get preferred options @zero brokerage",
        rera: true,
        img: '/assets/projects/img-11.jpg'
    },
    {
        title: "NEW LAUNCH",
        name: "Royal Enclave",
        location: "Bellandur, Bangalore",
        priceRange: "₹ 1.9 - 2.4 Cr",
        propertyType: "3 BHK Apartment",
        priceIncrease: "6.7% price increase in last 3 months in Bellandur, Bangalore",
        offer: "Get preferred options @zero brokerage",
        rera: true,
        img: '/assets/projects/img-12.jpg'
    },
    {
        title: "NEW ARRIVAL",
        name: "Hill View Residency",
        location: "Lavelle Road, Bangalore",
        priceRange: "₹ 1.3 - 1.8 Cr",
        propertyType: "3 BHK Apartment",
        priceIncrease: "5.9% price increase in last 3 months in Lavelle Road, Bangalore",
        offer: "Get preferred options @zero brokerage",
        rera: true,
        img: '/assets/projects/img-13.jpg'
    },
    {
        title: "NEW LAUNCH",
        name: "Sunrise Towers",
        location: "Indiranagar, Bangalore",
        priceRange: "₹ 1.7 - 2.3 Cr",
        propertyType: "3 BHK Apartment",
        priceIncrease: "7.2% price increase in last 3 months in Indiranagar, Bangalore",
        offer: "Get preferred options @zero brokerage",
        rera: true,
        img: '/assets/projects/img-14.jpg'
    },
    {
        title: "NEW ARRIVAL",
        name: "Elite Enclave",
        location: "Dwaraka Nagar, Hyderabad",
        priceRange: "₹ 1.8 - 2.5 Cr",
        propertyType: "3 BHK Apartment",
        priceIncrease: "6.4% price increase in last 3 months in Dwaraka Nagar, Hyderabad",
        offer: "Get preferred options @zero brokerage",
        rera: true,
        img: '/assets/projects/img-15.jpg'
    },
    {
        title: "NEW LAUNCH",
        name: "Vista Grande",
        location: "Hebbal, Bangalore",
        priceRange: "₹ 1.9 - 2.6 Cr",
        propertyType: "3, 4 BHK Apartment",
        priceIncrease: "6.1% price increase in last 3 months in Hebbal, Bangalore",
        offer: "Get preferred options @zero brokerage",
        rera: true,
        img: '/assets/projects/img-16.jpg'
    },
    {
        title: "NEW ARRIVAL",
        name: "Golden Sands Residency",
        location: "Gachibowli, Hyderabad",
        priceRange: "₹ 2.1 - 2.7 Cr",
        propertyType: "4 BHK Apartment",
        priceIncrease: "7.1% price increase in last 3 months in Gachibowli, Hyderabad",
        offer: "Get preferred options @zero brokerage",
        rera: true,
        img: '/assets/projects/img-17.jpg'
    },
    {
        title: "NEW LAUNCH",
        name: "Riverfront Towers",
        location: "Koramangala, Bangalore",
        priceRange: "₹ 1.8 - 2.4 Cr",
        propertyType: "3, 4 BHK Apartment",
        priceIncrease: "5.7% price increase in last 3 months in Koramangala, Bangalore",
        offer: "Get preferred options @zero brokerage",
        rera: true,
        img: '/assets/projects/img-18.jpg'
    },
    {
        title: "NEW ARRIVAL",
        name: "Palm Oasis",
        location: "Electronic City, Bangalore",
        priceRange: "₹ 1.6 - 2.2 Cr",
        propertyType: "2, 3 BHK Apartment",
        priceIncrease: "6.3% price increase in last 3 months in Electronic City, Bangalore",
        offer: "Get preferred options @zero brokerage",
        rera: true,
        img: '/assets/projects/img-1.jpg'
    },
    {
        title: "NEW LAUNCH",
        name: "Luxury Heights",
        location: "Hitech City, Hyderabad",
        priceRange: "₹ 1.2 - 1.9 Cr",
        propertyType: "3 BHK Apartment",
        priceIncrease: "5.4% price increase in last 3 months in Hitech City, Hyderabad",
        offer: "Get preferred options @zero brokerage",
        rera: true,
        img: '/assets/projects/img-4.jpg'
    }
];

export default function News() {

    const [textIndex, setTextIndex] = useState(0); // To switch between the two texts
    const texts = [
        "Bigger home in the same budget",
        "Preferred units at zero brokerage"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex(prevIndex => (prevIndex + 1) % texts.length);
        }, 3000); // Change text every 3 seconds

        return () => clearInterval(interval); // Cleanup the interval when the component is unmounted
    }, []);

    return (
        <>
            <div className="text-center" id="our-news">
                <Headline smallHeadline="News" headline="Newly Launched Projects" />
            </div>

            <div className="bg-[#ebf4db] sm:p-8 p-6 rounded-md">
                <div className="flex gap-2">
                    <img loading="lazy" src="/assets/news.png" alt="news-photo" className="h-12" />
                    <div className="flex-1">
                        <TypographyH4 className="dark:text-primary-foreground">
                            Newly Launched Projects
                        </TypographyH4>
                        {/* Animated Text */}
                        <motion.div
                            key={textIndex} // Key to force re-render
                            initial={{ x: 100 }}
                            animate={{ x: 0 }}
                            exit={{ x: 100 }}
                            transition={{ type: "tween", duration: 0.5 }}
                        >
                            <TypographyMuted className="font-semibold text-sm mt-1">
                                {texts[textIndex]}
                            </TypographyMuted>
                        </motion.div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                    {
                        NewlyPropertyData?.slice(0, 6)?.map((property) => (
                            <Card key={property?.name} className="rounded-sm grid gap-2 p-4 cursor-pointer hover:scale-105 transition-all">
                                <div className="flex gap-4">
                                    <div className="relative">
                                        <img
                                            loading="lazy"
                                            src={property?.img}
                                            alt={property?.name}
                                            className="w-30 h-18 rounded-full bg-center"
                                        />
                                        {property?.rera && (
                                            <span className="absolute bottom-0 left-0 mb-1 ml-1 flex items-center gap-1 text-[10px] bg-blue-400 text-white px-2 py-1 rounded-md">
                                                <BsPatchCheck size={14} /> RERA
                                            </span>
                                        )}
                                    </div>
                                    <div className="grid gap-1">
                                        <TypographyH5 className="line-clamp-1">
                                            {property?.name}
                                        </TypographyH5>
                                        <TypographyMuted className="line-clamp-1">
                                            {property?.location}
                                        </TypographyMuted>
                                        <div className="flex items-center gap-1">
                                            <Small className="text-xs font-semibold">
                                                {property?.priceRange},
                                            </Small>
                                            <TypographyMuted className="text-xs">
                                                {property?.propertyType}
                                            </TypographyMuted>
                                        </div>
                                        <TypographyP className="text-xs font-semibold opacity-70 line-clamp-1">
                                            {property?.priceIncrease}
                                        </TypographyP>
                                    </div>
                                </div>
                                <div className="border-t-2 border-dashed mt-1 pt-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <MdLocalOffer size={16} color="blue" />
                                            <TypographyP className="text-xs font-semibold opacity-60">
                                                {property?.offer}
                                            </TypographyP>
                                        </div>
                                        <Button size="sm" className="bg-blue-500 hover:bg-blue-400 font-semibold text-xs rounded cursor-pointer">
                                            View Number
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        ))
                    }
                </div>

                <div className="flex justify-end mt-6">
                    <Button className="bg-orange-500 hover:bg-orange-400 dark:text-white font-semibold text-xs rounded cursor-pointer">
                        View All Newly Launch Projects
                    </Button>
                </div>
            </div>
        </>
    )
}
