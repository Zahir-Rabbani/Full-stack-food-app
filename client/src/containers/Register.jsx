import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion';
import { MdEmail, MdEnhancedEncryption, MdPersonAdd, MdLogin, MdPerson} from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { buttonClick, fadeInOut } from '../animations';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider} from 'firebase/auth';
import {app} from "../config/firebase.config";
import { validateUserJWTToken } from '../api';

const Register = () => {
    const [fields, setFields] = useState(false);
    const [alertStatus, setAlertStatus] = useState('danger');
    const [msg, setMsg] = useState(null);
    const [email, setEmail] = useState("");
    const [fullname, setFullname] = useState("");
    const [password, setPassowrd] = useState("");
    const [passwordConform, setPassowrdConform] = useState("");
    const firebaseAuth = getAuth(app);
    const navigate = useNavigate();
    const signUpWithEmailPassword = async () =>{
        if(email ==="" || password ==="" || passwordConform ===""){
            ///alert error
        }else{
            if(password === passwordConform){
                setEmail("");
                setFullname("");
                setPassowrd("");
                setPassowrdConform("");
                await createUserWithEmailAndPassword(firebaseAuth, email, password).then(userCred =>{
                    firebaseAuth.onAuthStateChanged((cred) => {
                        if(cred){
                            cred.getIdToken().then((token)=>{
                                validateUserJWTToken(token).then((data)=>{
                                    //dispatch(setUserDetails(data));
                                  
                                });
                                navigate("/", {replace : true});
                            }); 
                        }
                    });
                });
            }else{
                /// alert error
            }
        }
    }
  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
        
        <div className='w-[90%] md:w-[25%] border border-gray-500 rounded-lg p-4 flex flex-col items-center justify-center gap-4'>
       
        <p className='w-full p-2 flex flex-col items-center gap-2 font-semibold text-lg text-textColor'>Sign Up</p>
            
            {fields &&(
                <motion.p initial={{opacity : 0}}
                animate={{opacity : 1}}
                exit={{opacity : 0}} className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${alertStatus === 'danger' ? 'bg-red-400 text-red-800' :'bg-emerald-400 text-emerald-800'}`}>
                {msg}
                </motion.p>
            )
            }

            <div className='w-full p-2 border-b border-gray-300 flex items-center gap-2'>
                <MdPerson className='text-xl text-gray-700' />
                <input type = 'text' required value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                placeholder='Full Name.'
                className='w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-300 text-textColor'/>
            </div>
            <div className='w-full p-2 border-b border-gray-300 flex items-center gap-2'>
                <MdEmail className='text-xl text-gray-700' />
                <input type = 'text' required value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Your email.'
                className='w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-300 text-textColor'/>
            </div>
            <div className='w-full p-2 border-b border-gray-300 flex items-center gap-2'>
                <MdEnhancedEncryption className='text-xl text-gray-700' />
                <input type = 'password' required value={password}
                onChange={(e) => setPassowrd(e.target.value)}
                placeholder='Your password.'
                className='w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-300 text-textColor'/>
            </div>

            <div className='w-full p-2 border-b border-gray-300 flex items-center gap-2'>
                <MdEnhancedEncryption className='text-xl text-gray-700' />
                <input type = 'password' required value={passwordConform}
                onChange={(e) => setPassowrdConform(e.target.value)}
                placeholder='Conform password.'
                className='w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-300 text-textColor'/>
            </div>

            <div className='flex items-center gap-3'>
         
                    <motion.button {...buttonClick} type='button' className='ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-6 py-2 rounded-lg text-lg text-white font-light'>
                        <p className='w-full flex items-center gap-2 font-light text-lg text-white' onClick={signUpWithEmailPassword}><MdPersonAdd className='text-xl'/>Sign up</p>
                    </motion.button>
            
            </div>

            <div className='flex items-center gap-3'>
                <Link to={'/login'}>
                    <motion.button {...buttonClick} type='button' className='ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-blue-400 px-6 py-2 rounded-lg text-lg text-white font-light'>
                        <p className='w-full flex items-center gap-2 font-light text-lg text-white'><MdLogin className='text-xl'/>Login</p>
                    </motion.button>
                </Link>
            </div>
            
        </div>
    </div>
  )
}

export default Register