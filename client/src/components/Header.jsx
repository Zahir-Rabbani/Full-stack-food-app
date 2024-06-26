import { getAuth } from 'firebase/auth';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Logo from "../assets/img/logo.png";
import {motion} from "framer-motion";
import { isActiveStyles, isNotActiveStyles } from '../utils/styles';
import { buttonClick, slideTop } from '../animations';
import { MdLogout, MdShoppingCart } from 'react-icons/md';
import { setUserNull } from '../context/actions/userActions';
import Avatar from "../assets/img/avatar.png";
import { app } from '../config/firebase.config';
const Header = () => {
    const user = useSelector((state) => state.user);
    const [isMenu, setIsMenu] = useState(false);
    const firebaseAuth = getAuth(app); 
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const signOut =() =>{
        firebaseAuth.signOut().then(()=>{
           dispatch(setUserNull());
           navigate("/login", {replace: true}); 
        })
        .catch((err)=> console.log(err));
    };
  return <header className='fixed backdrop-blur-md z-50 inset-x-0 top-0 flex items-center justify-between px-12 md:px-20 py-6'>
    <NavLink to={"/"} className="flex items-center justify-center gap-4">
        <img src={Logo} className="w-16" alt=''/>
    </NavLink>
    <nav className="flex items-center justify-center gap-8">
        <ul className="hidden md:flex items-center justify-center gap-16">
            <NavLink className={({isActive})=> isActive ? isActiveStyles : isNotActiveStyles} to={"/"}>Home</NavLink>
            <NavLink className={({isActive})=> isActive ? isActiveStyles : isNotActiveStyles} to={"/menu"}>Menu</NavLink>
            <NavLink className={({isActive})=> isActive ? isActiveStyles : isNotActiveStyles} to={"/services"}>Services</NavLink>
            <NavLink className={({isActive})=> isActive ? isActiveStyles : isNotActiveStyles} to={"/about"}>About Us</NavLink>
            <NavLink className={({isActive})=> isActive ? isActiveStyles : isNotActiveStyles} to={"/contact"}>Contact</NavLink>
        </ul>
        <motion.div {...buttonClick} className="relative cursor-pointer">
            <MdShoppingCart className='text-2xl text-textColor hover:text-red-700'/>
            <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center absolute -top-4 -right-0">
                <p className='text-primary text-base font-semibold'>2</p>
            </div>
        </motion.div>

        {user ? (
        <>
            <div className="relative cursor-pointer" onMouseEnter={()=> setIsMenu(true)}>
                <div className='w-12 h-12 rounded-full shadow-md cursor-pointer overflow-hidden flex items-center justify-center'>
                    <motion.img src={user?.picture ? user?.picture : Avatar} whileHover={{scale:1.15}} referrerPolicy="no-referrer" alt=''  className='w-full h-full object-cover items-center justify-center'/>
                </div>
                {isMenu && (
                    <motion.div {...slideTop} onMouseLeave={()=> setIsMenu(false)} className='px-6 py-4 w-48 bg-lightOverlay backdrop-blur-md rounded-md shadow-md absolute top-12 right-0 flex flex-col gap-4'>
                    <Link className='hover:text-red-500 text-xl text-textColor' to={"/dashboard/home"}> Dashboard
                    </Link>
                    <Link className='hover:text-red-500 text-xl text-textColor' to={"/profile"}> My Profile
                    </Link>
                    <Link className='hover:text-red-500 text-xl text-textColor' to={"/user-orders"}> Orders
                    </Link>
                    <hr/>
                    <motion.div {...buttonClick} onClick={signOut} className="group flex items-center justify-center px-3 py-2 rounded-md shadow-md bg-gray-100 hover:bg-gray-200 gap-3">
                      <MdLogout className='text-2xl text-textColor group-hover:text-headingColor'/>
                      <p className='text-textColor text-xl group-hover:text-headingColor'>Sign Out</p>
                    </motion.div>
                </motion.div>
                )}                
            </div>
        </>
        ):(
        <>
            <NavLink to={"/login"}>
                <motion.button {...buttonClick} className="px-4 py-2 rounded-full shadow-md bg-lightOverlay border border-red-400 cursor-pointer">
                    Login
                </motion.button>
            </NavLink>
        </>
        )}
    </nav>
  </header>
}

export default Header