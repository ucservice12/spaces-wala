import { Link } from "react-router-dom";
import { navLinks } from "./Navbar";
import { version } from "../../../package.json"
import SocialMedia from "../SocialMedia";
import { PiMapPin } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline, MdLocalPhone } from "react-icons/md";
import { VscSend } from "react-icons/vsc";
import { Input } from "@/components/ui/input"
import {
    TypographyH3,
    TypographyMuted,
    Small
} from "@/custom/Typography";

export const Quicklinks = [
    {
        id: 1,
        quickName: "Privacy Policy",
        link: "",
    },
    {
        id: 2,
        quickName: "Terms & Services",
        link: "",
    },
    {
        id: 3,
        quickName: "Credit",
        link: "",
    },
    {
        id: 4,
        quickName: "FAQ",
        link: "",
    },
]

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
        contactLink: "mailto:example@email.com",
        contactName: "example@email.com"
    },
    {
        id: 4,
        icon: <FaWhatsapp size={20} />,
        contactLink: "https://wa.me/+919270033002",
        contactName: "+919270033002 (WhatsApp)"
    }
];

export default function Footer() {

    return (
        <div className='bg-accent p-6 mt-6'>
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
                            <Input type="email" className="col-span-10" placeholder="Send your Email" />
                            <div className="bg-[#E8505B] w-8 h-8 text-primary-foreground flex justify-center items-center rounded-sm">
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
                            Quick Links
                        </TypographyH3>

                        {
                            Quicklinks?.map(quick => (
                                <Link to={quick.link} key={quick.id}>
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
                            <Link key={contact?.contactName} to={contact.contactLink} target="_blank" className="flex gap-4 items-center underline opacity-60 underline-offset-4 capitalize">
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
    )
}
