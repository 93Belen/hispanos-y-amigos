import Event from "../components/Event";
import Header from "../components/Header";
import Sign from "../components/Sign";
import { motion } from "framer-motion";

export default function Events(){
    return (
        <div className='app p-6 md:px-20 md:py-10'>
             <motion.div
       initial={{ y: '-100%' }}
       animate={{ 
         y: -50
         }}
       transition={{delay: 7, type: 'spring', stiffness: 10, damping: 5}}
       className='absolute top-0 left-[60vw]'>
      <Sign/>
      </motion.div>
            <Header/>
            <div className='flex flex-col gap-6 py-8 md:max-w-[800px] md:pt-36'>
                <Event/>
            </div>
        </div>
    )
}