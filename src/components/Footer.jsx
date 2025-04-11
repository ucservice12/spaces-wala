import { Link } from "react-router-dom";
import { version } from "../../package.json";
import SocialMedia from "./SocialMedia";
import { PiMapPin } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline, MdLocalPhone } from "react-icons/md";
import { VscSend } from "react-icons/vsc";
import { Input } from "@/components/ui/input";
import { TypographyH4, TypographyMuted, Small } from "@/custom/Typography";
import { useState } from "react";

export const links = [
    { name: "Mobile Apps", href: "/mobile-apps" },
    { name: "Our Services", href: "/services" },
    { name: "Price Trends", href: "/price-trends" },
    { name: "Post your Property", href: "/post-property" },
    { name: "Real Estate Investments", href: "/investments" },
    { name: "Builders in India", href: "/builders" },
    { name: "Area Converter", href: "/area-converter" },
    { name: "Articles", href: "/articles" },
    { name: "Rent Receipt", href: "/rent-receipt" },
    { name: "Customer Service", href: "/customer-service" },
    { name: "Sitemap", href: "/sitemap" },
];

export const CompanyLinks = [
    { name: "About us", href: "/about" },
    { name: "Contact us", href: "/contact" },
    { name: "Careers with us", href: "/careers" },
    { name: "Terms & Conditions", href: "/terms-and-conditions" },
    { name: "Request Info", href: "/request-info" },
    { name: "Feedback", href: "/feedback" },
    { name: "Report a problem", href: "/report-problem" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Summons/Notices", href: "/summons-notices" },
    { name: "Grievances", href: "/grievances" },
    { name: "Safety Guide", href: "/safety-guide" },
];

export const contactDetails = [
    {
        id: 1,
        icon: <PiMapPin size={20} />,
        contactLink: "https://goo.gl/maps/Office No. 02&15, Above HDFC Bank, Zero Boys Nehrunagar, Pimpri Chichwad, Pune 411018.",
        contactName: "Office No. 02&15, Above HDFC Bank, Zero Boys Nehrunagar, Pimpri Chichwad, Pune 411018."
    },
    {
        id: 2,
        icon: <MdLocalPhone size={20} />,
        contactLink: "tel:+919270033002",
        contactName: "+919270033002"
    },
    {
        id: 3,
        icon: <MdOutlineMailOutline size={20} />,
        contactLink: "mailto:info@spaceswala.com",
        contactName: "info@spaceswala.com"
    },
    {
        id: 4,
        icon: <FaWhatsapp size={20} />,
        contactLink: "https://wa.me/+919270033002",
        contactName: "+919270033002 (WhatsApp)"
    }
];

export default function Footer() {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSendEmail = () => {
        if (email) {
            // Define the subject and the body message
            const subject = "New Email from Spaceswala";
            const body = `A user has subscribed with this email: ${email}\n\nSpaceswala Real Estate Services\n\nIf you have any questions, feel free to contact us!`;

            // Open the default email client with pre-filled fields
            window.location.href = `mailto:info@spaceswala.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            setEmail('');
        } else {
            alert("Please enter a valid email.");
        }
    };

    return (
        <div className='bg-black border-t-2 shadow-3xl text-white p-6'>
            <div className="flex flex-col text-center justify-center items-center mb-4">
                <img src="/logo.png" alt="spacesWala logo" className="w-54" />
                <Small>
                    We Deliver the Real Estate | Architect | Commercial Estate
                </Small>
            </div>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:px-6 gap-4 sm:gap-8'>
                <div className="flex flex-col gap-4">
                    <TypographyH4 className="opacity-75">
                        Keep Updated
                    </TypographyH4>
                    <div className="flex flex-col gap-4">
                        <TypographyMuted>
                            Real Estate | Lease | Rent Commercial Estate | Financing
                            Mumbai | Navi Mumbai | Thane | Pune | Pimpri Chichwad
                        </TypographyMuted>
                        <div className="grid grid-cols-12 gap-3 items-center">
                            <Input
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                className="col-span-10"
                                placeholder="Send your Email"
                            />
                            <div
                                className="bg-[#E8505B] w-8 h-8 text-primary-foreground flex justify-center items-center rounded-sm cursor-pointer"
                                onClick={handleSendEmail}
                            >
                                <VscSend size={22} />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 sm:gap-4 sm:mt-8">
                            <img src="/assets/Play-store.png" alt="" className="w-32 sm:w-42 cursor-pointer" />
                            <img src="/assets/ios-store.png" alt="" className="w-32 sm:w-42 cursor-pointer" />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="flex flex-col gap-6 sm:ml-10">
                        <TypographyH4 className="opacity-75">
                            SpacesWala
                        </TypographyH4>

                        <div className="grid gap-2">
                            {
                                links?.map(item => (
                                    <a href={item.path} key={item.name}>
                                        <Link className="opacity-60 text-sm capitalize cursor-pointer">
                                            {item.name}
                                        </Link>
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <TypographyH4 className="opacity-75">
                            Company
                        </TypographyH4>

                        <div className="grid gap-2">
                            {
                                CompanyLinks?.map(quick => (
                                    <Link to={quick.href} key={quick.name}>
                                        <Small className="text-sm opacity-60 capitalize">
                                            {quick.name}
                                        </Small>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <TypographyH4 className="opacity-75">
                        Office Location
                    </TypographyH4>

                    <div className="grid gap-4">
                        {
                            contactDetails?.map(contact => (
                                <Link key={contact?.contactName} to={contact.contactLink} target="_blank" className="flex gap-4 items-center opacity-60">
                                    <Small>
                                        {contact?.icon}
                                    </Small>
                                    <Small className="leading-normal text-wrap">
                                        {contact?.contactName}
                                    </Small>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center border-t-2 w-full sm:px-6 pt-4 mt-4">
                <Small className="leading-normal opacity-90 text-xs">
                    Copyright Umbarkar Technology(India) Pvt Ltd.© Spaceswala.com{new Date().getFullYear()}, (Version : {version})
                </Small>
                <div className="sm:flex hidden">
                    <SocialMedia />
                </div>
            </div>
        </div>
    );
}
