import { FaHandshake, FaEye } from "react-icons/fa";
import { GrFormNextLink } from "react-icons/gr";
import Headline from "@/custom/Headline";
import { TypographyH3, TypographyMuted } from "../../custom/Typography";

export const visionPoints = [
    "To become India’s most trusted and innovative real estate platform.",
    "To connect families with homes that match their lifestyle and dreams.",
    "To create sustainable and future-ready housing communities across cities.",
    "To simplify real estate investment with modern technology and transparency.",
    "To empower first-time buyers and investors with education and tools.",
    "To promote environment-friendly developments that enhance urban living.",
    "To build not just homes — but trust, comfort, and lifelong value."
];

export const commitmentPoints = [
    "We are committed to offering the most reliable and secure property buying experience.",
    "Our listings feature verified apartments that meet every legal and safety standard.",
    "Customer satisfaction is our priority — from site visits to final handover.",
    "We promise fair pricing, with no hidden charges or last-minute surprises.",
    "Our team provides expert assistance for legal, financial, and property guidance.",
    "We ensure timely project delivery and transparent communication at every stage.",
    "We value long-term relationships and provide post-purchase support for all clients."
];

export default function ValuesSection() {
    return (
        <div className="my-16" id="commitment">
            <div className="text-center">
                <Headline smallHeadline="Commitment & Vision" headline="Why Choose Us" />
            </div>

            <div className="grid  grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-2 mt-6">
                {/* Commitment */}
                <div>
                    <div className="flex items-center space-x-4 mb-4">
                        <FaHandshake className="text-blue-600 text-3xl" />
                        <TypographyH3 className="">
                            Our Commitment
                        </TypographyH3>
                    </div>
                    <div className="sm:space-y-4 space-y-2">
                        {commitmentPoints.map((point, index) => (
                            <TypographyMuted key={index} className="flex items-center gap-2">
                                <GrFormNextLink size={18} />
                                {point}
                            </TypographyMuted>
                        ))}
                    </div>
                </div>

                {/* Vision */}
                <div>
                    <div className="flex items-center space-x-4 mb-4">
                        <FaEye className="text-green-600 text-3xl" />
                        <TypographyH3 className="">
                            Our Vision
                        </TypographyH3>
                    </div>
                    <div className="sm:space-y-4 space-y-2">
                        {visionPoints.map((point, index) => (
                            <TypographyMuted key={index} className="flex items-center gap-2">
                                <GrFormNextLink size={18} />
                                {point}
                            </TypographyMuted>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
