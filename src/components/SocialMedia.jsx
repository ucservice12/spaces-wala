import { CgFacebook } from "react-icons/cg";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const socialIcon = [
    {
        name: "facebook",
        icon: <CgFacebook size={24} />,
        link: "abcs"
    },
    {
        name: "instagram",
        icon: <FaInstagram size={24} />,
        link: "abcs"
    },
    {
        name: "twitter",
        icon: <FaTwitter size={24} />,
        link: "abcs"
    },
    {
        name: "youtube",
        icon: <FaYoutube size={24} />,
        link: "abcs"
    },
]

export default function SocialMedia() {
    return (
        <div className="flex items-center sm:gap-6 gap-3">
            {
                socialIcon?.map((social) => (
                    <div key={social.name} className="bg-[#E8505B] text-white w-8 h-8 p-2 rounded-full flex justify-center items-center cursor-pointer hover:scale-125">
                        {social.icon}
                    </div>
                ))
            }
        </div>
    )
}
