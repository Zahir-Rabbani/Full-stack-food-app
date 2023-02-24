import React, { useState } from 'react'
import Logo from "../assets/img/logo.png";
import {motion} from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';
import {MdEmail, MdEnhancedEncryption, MdLogin, MdPersonAdd} from "react-icons/md";
import { buttonClick, fadeInOut } from '../animations';
const Login = () => {
    const [fields, setFields] = useState(false);
    const [alertStatus, setAlertStatus] = useState('danger');
    const [msg, setMsg] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassowrd] = useState("");

    const loginWithGoogle = async() =>{}
    const handleFBSignIn =() =>{}
    const signInWithEmailPass = async ()=>{}
  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
    <div className='w-[75%] md:w-[25%] border border-gray-500 rounded-lg p-4 flex flex-col items-center justify-center gap-4'>
    <p className='w-full p-2 flex flex-col items-center gap-2 font-semibold text-lg text-textColor'><img src={Logo} className="w-16" alt=''/></p>
    <p className='w-full p-2 flex flex-col items-center gap-2 font-semibold text-lg text-textColor'>Sign in</p>
        <div className='gap-8 flex items-center'>
            <button className='gap-3' type='button' onClick={loginWithGoogle}>
                <span>
                    <SocialIcon network="google" title='Sign in with google+' />
                </span>
            </button>
        
            <button className='gap-3' type='button' onClick={handleFBSignIn}>
                <span>
                    <SocialIcon network="facebook"  title='Sign in with facebook'/>
                </span>
            </button>
        </div>
        {fields &&(
            <motion.p initial={{opacity : 0}}
            animate={{opacity : 1}}
            exit={{opacity : 0}} className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${alertStatus === 'danger' ? 'bg-red-400 text-red-800' :'bg-emerald-400 text-emerald-800'}`}>
            {msg}
            </motion.p>
        )
        }
          <p className='w-full p-2 flex flex-col items-center gap-2 font-semibold text-base text-textColor'>OR</p>
        <div className='w-full p-2 border-b border-gray-300 flex items-center gap-2'>
            <MdEmail className='text-xl text-gray-700' />
            <input type = 'text' required value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='your email.'
            className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-300 text-textColor"/>
        </div>
        <div className='w-full p-2 border-b border-gray-300 flex items-center gap-2'>
            <MdEnhancedEncryption className='text-xl text-gray-700' />
            <input type = 'password' required value={password}
            onChange={(e) => setPassowrd(e.target.value)}
            placeholder='your password.'
            className='w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-300 text-textColor'/>
        </div>

        <div className='flex items-center gap-3'>
            <motion.button {...buttonClick} onClick={signInWithEmailPass} type='button' className='ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-blue-400 px-6 py-2 rounded-lg text-lg text-white font-light'>
                <p className='w-full flex items-center gap-2 font-light text-lg text-white'><MdLogin className='text-xl'/>Login</p>
            </motion.button>
            
        </div>
        <hr></hr>
        <div className='flex items-center gap-3'>
            <p className='font-light text-gray-600'>Don't have an account</p>
        </div>
        <div className='flex items-center gap-3'>
            <Link to={'/register'}>
                <motion.button {...buttonClick} type='button' className='ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-6 py-2 rounded-lg text-lg text-white font-light'>
                    <p className='w-full flex items-center gap-2 font-light text-lg text-white'><MdPersonAdd className='text-xl'/>Sign up new Account</p>
                </motion.button>
            </Link>
        </div>
        
    </div>
    </div>
  )
}

export default Login