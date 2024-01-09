import { Link } from "react-router-dom"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header(){
    const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((state) => !state);
  };

    return (
    <div className='w-full'>
        <div className='md:hidden w-full flex flex-col'>
            <div className='self-end'>
            <AnimatePresence>
                    <motion.svg
                    layout
                    onClick={toggleOpen}
                    animate={{
                    rotate: open ? 45 : 0,
                    origin: '50% 50%'
                    }}
                    transition={{ duration: 0.5}}
                    width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.rect 
                        animate={{
                        }}
                        transition={{duration: 0}}
                        width="38" height="38" fill="#F9F8F8"/>
                        <motion.rect
                        animate={{
                        opacity: open ? 0 : 1
                        }}
                        x="7" y="7" width="10" height="10" fill="black"/>
                        <motion.rect 
                        animate={{
                        rotate: open ? 180 : 0,
                        origin: '50% 50%'
                        }}
                        transition={{ duration: 0.7}}
                        x="21" y="7" width="10" height="10" fill="black"/>
                        <motion.rect 
                        animate={{
                        rotate: open ? 180 : 0,
                        origin: '50% 50%'
                        }}
                        transition={{ duration: 0.7}}
                        x="7" y="20" width="10" height="10" fill="black"/>
                        <motion.rect 
                        animate={{
                        opacity: open ? 0 : 1
                        }}
                        x="21" y="20" width="10" height="10" fill="black"/>
                        </motion.svg>
                    </AnimatePresence>
            </div>
            <AnimatePresence>
            {open && (
             <motion.div
             initial={{ x: '-100%' }}
             animate={{ x: -25 }}
             exit={{ x: '-100%' }}
             transition={{duration: 0.5}}
            className='flex fixed top-0 flex-col justify-between w-[50vw] h-full bg-slate-400 text-center'>
            <div></div>
             <Link to='/'>Home</Link>
             <Link to='/about'>About</Link>
             <Link to='/events'>Events</Link>
             <div></div>
            </motion.div>
            )}
           </AnimatePresence>
        </div>
       <div className='md:flex gap-6 w-screen justify-around hidden'>
           <Link to='/'>Home</Link>
           <Link to='/about'>About</Link>
           <Link to='/events'>Events</Link>
       </div>
    </div>
    )
}