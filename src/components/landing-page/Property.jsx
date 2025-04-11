"use client"

import Headline from "@/custom/Headline";
import { TypographyH4, TypographyH3, TypographyH5, TypographyH2, TypographyMuted, TypographyP, Small } from "@/custom/Typography";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GrFormNextLink } from "react-icons/gr";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export const bhkPropertyData = [
  { id: 1, title: "1 RK/1 BHK", propertiesAvailable: "43,000+ Properties" },
  { id: 2, title: "2 BHK", propertiesAvailable: "128,000+ Properties" },
  { id: 3, title: "3 BHK", propertiesAvailable: "146,000+ Properties" },
  { id: 4, title: "4 BHK", propertiesAvailable: "59,000+ Properties" },
  { id: 5, title: "4+ BHK", propertiesAvailable: "23,000+ Properties" },
];

export const nextYearPropertyData = [
  { id: 1, title: "Ready to move", color: "#fde2cf", propertiesAvailable: "451,000+ Properties", img: "/assets/building-1.webp" },
  { id: 2, title: "Possession in 2025", color: "#c2ede5", propertiesAvailable: "35,000+ Properties", img: "/assets/building-2.webp" },
  { id: 3, title: "Possession in 2026", color: "#fcefe3", propertiesAvailable: "14,000+ Properties", img: "/assets/building-2.webp" },
  { id: 4, title: "Possession in 2027", color: "#dee7f0", propertiesAvailable: "10,000+ Properties", img: "/assets/building-2.webp" },
  { id: 5, title: "Possession in 2028", color: "#ebf4db", propertiesAvailable: "7,300+ Properties", img: "/assets/building-2.webp" },
  { id: 6, title: "Possession in 2029", color: "#f0dbf5", propertiesAvailable: "3,400+ Properties", img: "/assets/building-2.webp" },
  { id: 7, title: "Possession after 2029", color: "#f9dada", propertiesAvailable: "2,600+ Properties", img: "/assets/building-2.webp" },
];

{/* BHK Section */ }
const BHKSection = () => {
  return (
    <div className="grid gap-2 mt-12 bg-[#f2d4b8] sm:w-6xl rounded-md p-6">
      <div className="flex items-center gap-6">
        <img src="/assets/home-wila.png" className="w-12" alt="" />
        <div>
          <TypographyH4>BHK choice in mind?</TypographyH4>
          <TypographyMuted>Browse by no. of bedrooms in the house</TypographyMuted>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 relative -bottom-10 sm:mt-6">
        {bhkPropertyData.map(({ id, title, propertiesAvailable }) => (
          <Card className="p-6 grid gap-4 hover:scale-105 transition-all cursor-pointer" key={id}>
            <img src="/assets/home-wila.png" loading="lazy" className="w-8" alt="" />
            <div className="grid gap-2">
              <TypographyH5>{title}</TypographyH5>
              <TypographyMuted>{propertiesAvailable}</TypographyMuted>
            </div>
          </Card>
        ))}
      </div>
    </div>

  )
}

{/* Advertiser Type Section */ }
const AdvertiserSection = () => {
  return (
    <div id="property" className="grid gap-2 md:grid-cols-2 grid-cols-1 mt-12 bg-[#ebf4db] sm:w-6xl rounded-md mx-auto p-6 sm:px-12 relative">
      <div className="flex flex-col gap-4">
        <img src="/assets/building-3.webp" loading="lazy" alt="building-3" className="w-16" />
        <div className="grid gap-2">
          <TypographyH4>Properties posted by</TypographyH4>
          <TypographyP className="text-sm dark:text-primary-foreground">Choose type of advertiser</TypographyP>
          <TypographyMuted>
            Discover properties posted by dealers, owners, and builders.
            Choose the type of advertiser that suits your needs best.
            From over 300,000 dealer listings to owner-posted homes and builder projects.
            Browse and find your ideal property from verified sources.
          </TypographyMuted>
        </div>
      </div>
      <Card className="p-6">
        <div>
          <TypographyH4 className="capitalize dark:text-white">Choose type of advertiser</TypographyH4>
          <Small className="opacity-45">Browse your choice of listing</Small>
        </div>

        {["Dealer", "Owner", "Builder"].map((type, idx) => (
          <div className="flex justify-between items-center cursor-pointer mt-4" key={idx}>
            <div>
              <TypographyP className="font-semibold">{type}</TypographyP>
              <TypographyMuted>
                {type === "Dealer"
                  ? "306,000+ Properties"
                  : type === "Owner"
                    ? "217,000+ Properties"
                    : "4,900+ Properties"}
              </TypographyMuted>
            </div>
            <GrFormNextLink size={26} />
          </div>
        ))}
      </Card>
    </div>
  )
}

{/* Possession Year Scrolling Section */ }
const PossessionSection = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: "-50%",
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls]);

  return (
    <div className="mt-12">
      <div>
        <TypographyH3>Move in now, next year or later</TypographyH3>
        <TypographyMuted>Projects based on your preferred possession date</TypographyMuted>
      </div>

      <div
        className="overflow-hidden relative mt-4 py-8 pb-8"
        onMouseEnter={() => controls.stop()}
        onMouseLeave={() =>
          controls.start({
            x: "-50%",
            transition: {
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            },
          })
        }
      >
        <motion.div
          animate={controls}
          initial={{ x: 0 }}
          className="flex w-max space-x-6"
        >
          {[...nextYearPropertyData, ...nextYearPropertyData].map((property, index) => (
            <div
              key={`${property.id}-${index}`}
              style={{ backgroundColor: property.color }}
              className="relative h-[300px] w-[230px] shrink-0 rounded-md p-4 cursor-pointer hover:scale-105 transition-transform"
            >
              <div className="mt-6 grid gap-2 p-2">
                <TypographyH3 className="opacity-75 text-wrap dark:text-primary-foreground">
                  {property.title}
                </TypographyH3>
                <TypographyMuted>{property.propertiesAvailable}</TypographyMuted>
              </div>
              <div>
                <img
                  src={property.img}
                  alt={property.title}
                  loading="lazy"
                  className="w-62 absolute bottom-0 right-0"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

{/* Sell or Rent Section */ }
const SellORRentSection = () => {
  return (
    <>
      <div className="bg-[#fcefe3] dark:text-primary-foreground sm:p-8 p-6 mt-16 rounded-md grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col sm:gap-4 gap-2 sm:px-4">
          <TypographyP className='text-muted-foreground font-semibold'>
            SELL OR RENT YOUR PROPERTY
          </TypographyP>
          <TypographyH2>
            Register to post your<br /> property for
            <span className="text-base ml-4 bg-green-700 rounded text-white px-2 py-1">
              FREE
            </span>
          </TypographyH2>
          <TypographyP className="opacity-80">
            Post your residential / commercial property
          </TypographyP>
          <div className="grid grid-cols-3 gap-6 mt-4">
            <div>
              <TypographyH2>
                10L+
              </TypographyH2>
              <TypographyMuted>
                Property Listings
              </TypographyMuted>
            </div>
            <div>
              <TypographyH2>
                45L+
              </TypographyH2>
              <TypographyMuted>
                Monthly Searches
              </TypographyMuted>
            </div>
            <div>
              <TypographyH2>
                2L+
              </TypographyH2>
              <TypographyMuted>
                Owners advertise monthly
              </TypographyMuted>
            </div>
          </div>
          <Button className="bg-blue-500 hover:bg-blue-400 text-white cursor-pointer w-fit font-semibold">
            Post Your Property for Free
          </Button>
          <Small className="text-xs">
            Or post via Whatsapp, send a “hi” to +91 9270033002
          </Small>
        </div>
        <div className="sm:px-4">
          <img src="/assets/sell-rent.jpg" alt="rent-sell" className="rounded-sm" />
        </div>
      </div>
    </>
  )
}

export default function Property() {
  return (
    <>
      <div className="text-center">
        <Headline smallHeadline="Property" headline="Featured Properties" />
      </div>

      {/* BHK Section */}
      <BHKSection />

      {/* Advertiser Type Section */}
      <AdvertiserSection />

      {/* Possession Year Scrolling Section */}
      <PossessionSection />

      {/* Sell or Rent Section */}
      <SellORRentSection />
    </>
  );
}
