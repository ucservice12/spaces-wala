
export default function NavigateSloter({ img, headline }) {
    return (
        <div className='bg-green-50 rounded-md p-8 my-8 flex justify-center items-center flex-col gap-6'>
            <img src={img} alt="terms" className='w-16' />
            <h3 className="scroll-m-20 mb-6 text-2xl font-semibold tracking-tight">
                {headline}
            </h3>
        </div>
    )
}
