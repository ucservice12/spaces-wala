import { Button } from '@/components/ui/button';
import { IoSearch, IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

export default function Navbar2() {
    const navigate = useNavigate();

    return (
        <div className='top-0 fixed left-0 z-50 w-full bg-[#083e9cdd] backdrop-blur-xl p-1 px-4'>
            <div className='max-w-7xl mx-auto flex justify-between items-center'>
                <div className='flex items-center gap-1'>
                    <IoArrowBackSharp size={24} color='white' className='sm:hidden flex' onClick={() => navigate(-1)} />
                    <img src="/logo.png" alt="logo" className='w-22' />
                </div>
                <div className='bg-white w-[550px] p-2 px-4 rounded-md  hidden sm:flex'>
                    <input type="text" className='flex-1 focus:outline-none px-2 border-r-2 mr-3' />
                    <IoSearch size={22} className='cursor-pointer' />
                </div>
                <Button className="bg-white font-semibold cursor-pointer flex justify-center gap-1 text-black hover:bg-white">
                    Post Property <span className='bg-green-500 rounded-sm text-[10px] text-white p-1'>FREE</span>
                </Button>
            </div>

        </div>
    )
}
