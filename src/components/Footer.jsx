import { Link } from "react-router-dom";
import { navLinks } from "./landing-page/Navbar";
import { version } from "../../package.json";
import SocialMedia from "./SocialMedia";
import { PiMapPin } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline, MdLocalPhone } from "react-icons/md";
import { VscSend } from "react-icons/vsc";
import { Input } from "@/components/ui/input";
import { TypographyH3, TypographyMuted, Small } from "@/custom/Typography";
import { useState } from "react";

export const Quicklinks = [
    {
        id: 1,
        quickName: "Privacy Policy",
        href: "/privacyPolicy",
    },
    {
        id: 2,
        quickName: "Terms & Services",
        href: "/terms-and-conditions",
    },
    {
        id: 3,
        quickName: "Credit",
        href: "",
    },
    {
        id: 4,
        quickName: "FAQ",
        href: "",
    },
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
        contactLink: "mailto:ucservices.rajesh@gmail.com",
        contactName: "ucservices.rajesh@gmail.com"
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
            window.location.href = `mailto:ucservices.rajesh@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            setEmail('');
        } else {
            alert("Please enter a valid email.");
        }
    };

    return (
        <div className='bg-accent p-6'>
            <div className="flex flex-col text-center justify-center items-center border-b-2 pb-4 mb-4">
                <img src="/logo.png" alt="spacesWala logo" className="w-54" />
                <Small>
                    We Deliver the Real Estate | Architect | Commercial Estate
                </Small>
            </div>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:px-6 gap-6'>
                <div className="flex flex-col gap-4">
                    <TypographyH3 className="opacity-75">
                        Keep Updated
                    </TypographyH3>
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
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="flex flex-col gap-1 sm:ml-10">
                        <TypographyH3 className="opacity-75">
                            Links
                        </TypographyH3>

                        {
                            navLinks?.map(item => (
                                <a href={item.path} key={item.name}>
                                    <Small className="underline opacity-60 underline-offset-4 capitalize">
                                        {item.name}
                                    </Small>
                                </a>
                            ))
                        }
                    </div>
                    <div className="flex flex-col gap-2">
                        <TypographyH3 className="opacity-75">
                            Company
                        </TypographyH3>

                        {
                            Quicklinks?.map(quick => (
                                <Link to={quick.href} key={quick.id}>
                                    <Small className="underline opacity-60 underline-offset-4 capitalize">
                                        {quick.quickName}
                                    </Small>
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <div className="grid gap-3">
                    <TypographyH3 className="opacity-75">
                        Office Location
                    </TypographyH3>

                    {
                        contactDetails?.map(contact => (
                            <Link key={contact?.contactName} to={contact.contactLink} target="_blank" className="flex gap-4 items-center underline opacity-60 underline-offset-4">
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
