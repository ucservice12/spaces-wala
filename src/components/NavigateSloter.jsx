import { useLocation, useNavigate } from 'react-router-dom';
import { Small } from '../custom/Typography';
import { MdNavigateNext } from "react-icons/md";

export default function NavigateSloter({ img, headline }) {
    const location = useLocation();
    const Navigate = useNavigate();
    return (
        <>
            <Small className="flex items-center gap-1">
                <span className='cursor-pointer' onClick={() => Navigate('/')}>Home</span>
                <MdNavigateNext size={18} />
                <span className='cursor-pointer capitalize'>
                    {location?.pathname.replace('/', '').replaceAll('-', ' ') || 'Home'}
                </span>
            </Small>
            <div className='bg-green-50 rounded-md p-6 my-8 flex justify-center items-center flex-col gap-6'>
                <img src={img} alt="terms" className='w-10' />
                <h3 className="scroll-m-20 mb-6 text-2xl font-semibold tracking-tight">
                    {headline}
                </h3>
            </div>
        </>
    )
}
