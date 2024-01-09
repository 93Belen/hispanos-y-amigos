export default function Event(){
    return (
        <div className=' bg-slate-600 border-black border-2 rounded-lg h-fit pb-4 md:max-w-[900px] md:self-end'>
            <div className='flex flex-col md:flex-row bg-slate-300 p-7 gap-10 md:gap-20 md:p-11 md:pb-14'>
            <div className='grid grid-cols-2 md:grid-cols-[40%_60%] gap-4 grid-rows-2 md:grid-rows-[40%_60%] md:w-[35%]'>
                <div className='border-r-4 p-2 text-center border-x-slate-500 md:row-span-2 h-[70%] w-[70%]'>
                    <h3 className='font-bold'>25</h3>
                    <span className='font-bold'>JAN</span>
                </div>
                <h3 className='font-bold'>Next Meeting</h3>
                <p className='col-span-2 md:col-span-1 md:col-start-2 z-0 relative top-[-25px]'>
                Join us for our monthly meeting on Thursday, 
                January 25th, at Kolaches And Coffee at 6:00pm!

                </p>
            </div>
            <div className='flex flex-col gap-4 md:gap-11'>
                <div className='flex gap-2'>
                <div>
                    <svg width="17" height="25" viewBox="0 0 17 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="8.5" cy="7.8125" rx="8.5" ry="7.8125" fill="#757575"/>
                    <path d="M7.72725 25C11.0467 19.2032 12.9078 15.9531 16.2273 10.1562H0.772728C3.48864 15.9531 5.01134 19.2032 7.72725 25Z" fill="#757575"/>
                    </svg>
                </div>
                <p>
                7214 West 119th Street
                Overland Park, KS
                66213
                </p>
                </div>
                <div className='flex gap-2'>
                    <div>
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8.5" cy="8.5" r="7.5" stroke="#757575" stroke-width="2"/>
                    <line x1="8.65997" y1="4.07999" x2="8.65997" y2="8.83999" stroke="#757575"/>
                    <line x1="12.92" y1="9.34" x2="8.15998" y2="9.34" stroke="#757575"/>
                    </svg>
                    </div>
                    <p>
                    6:00pm - 7:00pm
                    </p>
                </div>
            </div>
            </div>
        </div>
    )
}