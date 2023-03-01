import React from 'react';
import {motion} from "framer-motion";
import Delivery from "../assets/img/delivery.png";
import RightBg from "../assets/img/right-bg.png";
import { buttonClick, slideTop } from '../animations';
const Home = () => {
  return <motion.div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
    <div className='flex flex-col items-start justify-start gap-6'>
        <div className='px-4 py-1 flex items-center justify-center gap-2 bg-green-600 rounded-full'>
        <p className='text-lg font-semibold text-white'>Free Delivery</p>
        <div className='w-10 h-10 flex items-center justify-center rounded-full bg-primary shadow-md'>
        <img src={Delivery} alt="" className='w-full h-full object-contain'/>
        </div>
        </div>
        <p className='text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor'>The Fastest Delivery in <span className='text-orange-600 text-[3rem] lg:text-[5rem]'>Hazara Town</span></p>
        <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            <button {...slideTop} type='button' 
            className='bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100'>Order Now</button>
    </div>
    <div className='py-2 flex-1 flex items-center justify-end relative'>
      <img src={RightBg} className="absolute top-0 right-0 md:right-12 w-full h-420 md:w-auto md:h-650" />
    </div>
  </motion.div>
}

export default Home