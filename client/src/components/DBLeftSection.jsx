import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo from "../assets/img/logo.png";
import { isActiveStyles, isNotActiveStyles } from '../utils/styles';
const DBLeftSection = () => {
  return <div className='h-full py-12 flex flex-col bg-lightOverlay backdrop-blur-md
  shadow-md min-w-210 w-300 gap-3'>
    <NavLink to={"/"} className="flex items-center justify-start px-6 gap-4">
        <img src={Logo} className="w-16" alt=''/>
    </NavLink>
    <hr/>

     <ul className='flex flex-col gap-4'>
        <NavLink className={({isActive})=> isActive ? `${isActiveStyles} px-4 py-2 border-l-8 border-green-500` : isNotActiveStyles} to={"/dashboard/home"}>Dashboard</NavLink>
            <NavLink className={({isActive})=> isActive ? `${isActiveStyles} px-4 py-2 border-l-8 border-green-500` : isNotActiveStyles} to={"/dashboard/orders"}>Orders</NavLink>
            <NavLink className={({isActive})=> isActive ? `${isActiveStyles} px-4 py-2 border-l-8 border-green-500` : isNotActiveStyles} to={"/dashboard/items"}>Items</NavLink>
            <NavLink className={({isActive})=> isActive ? `${isActiveStyles} px-4 py-2 border-l-8 border-green-500` : isNotActiveStyles} to={"/dashboard/newItem"}>Add New Items</NavLink>
            <NavLink className={({isActive})=> isActive ? `${isActiveStyles} px-4 py-2 border-l-8 border-green-500` : isNotActiveStyles} to={"/dashboard/users"}>Users</NavLink>
    </ul>
    <div className='w-full items-center justify-center flex h-255 mt-auto px-2'>
        <div className='w-full h-full rounded-md bg-orange-500 flex items-center justify-center flex-col gap-3 px-3'>
            <div className='w-12 h-12 borde bg-white rounded-full flex items-center justify-center'>
                <p className='text-2xl font-bold text-red-500'>?</p>
            </div>
            <p className='text-xl text-black font-semibold'>Help Center</p>
            <p className='text-base text-black text-center'>
                Having trouble in Good Food. Please contact us for more questions
            </p>
            <p className='px-4 py-2 rounded-full bg-primary text-red-700 cursor-pointer'>Get in touch</p>
        </div>
    </div>
  </div>
}

export default DBLeftSection