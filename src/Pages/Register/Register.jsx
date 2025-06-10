import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { FaEye,FaEyeSlash  } from "react-icons/fa";

import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';


const Register = () => {
  const {createUser, setUser}=use(AuthContext);
  const [showpassword,setShowPassword]=useState(false);
  const[errorMessage,setErrorMessage]=useState('');
  const navigate= useNavigate();
    const handleRegister=(e)=>{
        e.preventDefault();
        const form =e.target;
        const name =form.name.value;
        const photo =form.photo.value;
        const email =form.email.value;
        const password =form.password.value;
          console.log(name,photo,email,password);
             // password vaildate
        const passwordRegExp =/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/
        if(passwordRegExp.test(password)===false){
            setErrorMessage(' Must be more than 6 characters, including At least one number, At least one lowercase letter,At least one uppercase letter')
            return;
        }
          createUser(email,password)
          .then((result) => {
            const user = result.user;
            setUser(user)
                 Swal.fire({
                title: "Register successful!",
                icon: "success",
                draggable: true
                })
                  navigate("/")
            
        .catch((error) => {
          console.log(error)
          setUser(user)
        });
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
          });
    }
    return (
        <div className=" flex justify-center  items-center ">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
           <h2 className='bg-gray-200 font-semibold mt-5 text-3xl text-center'>Register your account</h2>
     <div className="card-body bg-gray-100 dark:bg-gray-100 dark:text-gray-800">
       <form onSubmit={handleRegister}  className="fieldset">
        {/* name */}
       <label className="label">Your name</label>
       <input type="text" name='name' className="input text-black bg-gray-200" placeholder="Your name" required/>
     
        {/* photo url */}
       <label className="label">Photo URL</label>
       <input type="text" name='photo' className="input text-black bg-gray-200" placeholder="photo URL"required />
        {/* email */}
         <label className="label">Email</label>
         <input type="email" name='email' className="input text-black bg-gray-200" placeholder="Email"required />
         {/* password */}
         <label className="label bg-gray-200">Password</label>
         <input 
               type={showpassword ? 'text':'password'}
                name='password'
                 className="input text-black bg-gray-200" 
                 placeholder="Password" required/>

               <button 
               onClick={()=>{setShowPassword(!showpassword)}}
               className='btn btn-xs p-3 absolute top-80 right-10 '>
               {
                showpassword ?<FaEyeSlash />: <FaEye />
               }
               </button>
               {
                errorMessage &&<p className='text-red-500'>{errorMessage}</p>
              }
         <button type="submit" className="btn btn-neutral mt-4">Register</button>
         <p className='font-bold text-center pt-5'>Already Have An Account ? <Link className='text-secondary' to='/auth/login'>Login</Link></p>
       </form>
     </div >
   </div>
      </div>
    );
};

export default Register;