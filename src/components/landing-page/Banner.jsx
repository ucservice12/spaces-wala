import { FaPhoneAlt } from "react-icons/fa";
import { Small } from '@/custom/Typography'
import SocialMedia from "../SocialMedia";

export default function Banner() {
    return (
        <div id="home" className="flex justify-between items-center px-4 sm:px-14 w-full h-14 dark:bg-black bg-orange-300">
            <div className="flex items-center gap-1">
                <FaPhoneAlt />
                <Small>
                    +91 9270033002
                </Small>
            </div>
            <SocialMedia />
        </div>
    )
}
