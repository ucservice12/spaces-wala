import { TypographyH4, TypographyMuted, Small } from '@/custom/Typography'
import { FaWhatsapp } from 'react-icons/fa';
import { MdLocalPhone, MdOutlineMailOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';

export const GetInTouchData = [
    {
        id: 1,
        icon: <MdLocalPhone size={16} />,
        contactLink: "tel:+919270033002",
        contactName: "+919270033002",
        title: "toll free"
    },
    {
        id: 2,
        icon: <MdOutlineMailOutline size={16} />,
        contactLink: "mailto:info@spaceswala.com",
        contactName: "info@spaceswala.com",
        title: "Sales & General Enquire"
    },
    {
        id: 3,
        icon: <FaWhatsapp size={16} />,
        contactLink: "https://wa.me/+919270033002",
        contactName: "WhatApps",
        title: "Get information about spaceswala"
    }
];

export default function GetInTouch() {
    return (
        <>
            <div className='flex flex-col justify-center items-center text-center gap-1'>
                <img src="/assets/getintouch.png" alt="get in touch" />
                <TypographyH4>
                    Get in touch
                </TypographyH4>
                <TypographyMuted className="w-64 text-xs">
                    Connect with us through email, phone or fax, or at following branch office office address:
                </TypographyMuted>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-6 mt-10 max-w-3xl mx-auto border-2 rounded-md'>
                {
                    GetInTouchData?.map((item) => (
                        <div className='flex gap-2'>
                            {item?.icon}
                            <Link to={item?.contactLink} key={item?.id} className='grid gap-2'>
                                <Small className="text-blue-700 font-semibold">
                                    {item?.contactName}
                                </Small>
                                <TypographyMuted className="text-xs opacity-85 p-0 m-0 capitalize">
                                    {`(${item?.title})`}
                                </TypographyMuted>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
