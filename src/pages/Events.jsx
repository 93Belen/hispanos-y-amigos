import Event from "../components/Event";
import Header from "../components/Header";

export default function Events(){
    return (
        <div className='app p-6 md:px-20 md:py-10'>
            <Header/>
            <div className='flex flex-col gap-6 py-8 md:max-w-[800px] md:pt-36'>
                <Event/>
            </div>
        </div>
    )
}